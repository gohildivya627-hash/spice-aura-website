import { NextResponse } from "next/server";
import { Resend } from "resend";

function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // basic validation
    const email = String(body.email || "").trim();
    const name = String(body.name || "").trim();
    const type = String(body.type || "contact").trim();

    // honeypot (common bot field)
    if (body.company_website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !isEmail(email)) {
      return NextResponse.json({ error: "Please provide a valid name and email." }, { status: 400 });
    }

    const to = process.env.LEADS_TO_EMAIL || "info@spiceaurafoods.com";
    const resendKey = process.env.RESEND_API_KEY;

    if (!resendKey) {
      // Site will still work, but won't send emails until configured.
      return NextResponse.json({
        ok: true,
        warning: "RESEND_API_KEY not set. Form accepted, but email sending is not configured yet."
      });
    }

    const resend = new Resend(resendKey);

    const subject = type === "quote"
      ? `New Quote Request — ${body.products || "Spice Aura"}`
      : `New Contact Message — ${body.subject || "Spice Aura Website"}`;

    const lines: string[] = [];
    const add = (k: string, v: any) => {
      const val = String(v ?? "").trim();
      if (val) lines.push(`<strong>${k}:</strong> ${escapeHtml(val)}`);
    };

    add("Type", type);
    add("Name", name);
    add("Company", body.company);
    add("Email", email);
    add("Phone", body.phone);
    add("Location", body.location);
    add("Products", body.products);
    add("Monthly Quantity", body.quantity);
    add("Packaging", body.packaging);
    add("Subject", body.subject);
    add("Message", body.notes);

    const html = `
      <div style="font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Arial; line-height:1.5">
        <h2 style="margin:0 0 12px 0;">Spice Aura — New Website Lead</h2>
        <div style="padding:12px 14px; border:1px solid #e4e4e7; border-radius:12px;">
          ${lines.map(l => `<div style="margin:6px 0;">${l}</div>`).join("")}
        </div>
      </div>
    `;

    // 1) send notification to you
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Spice Aura <onboarding@resend.dev>",
      to: [to],
      replyTo: email,
      subject,
      html,
    });

    // 2) auto-reply to customer
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Spice Aura <onboarding@resend.dev>",
      to: [email],
      subject: "Thanks for contacting Spice Aura",
      html: `
        <div style="font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Arial; line-height:1.6">
          <p>Hi ${escapeHtml(name)},</p>
          <p>Thanks for reaching out to <strong>Spice Aura Foods</strong>. We received your message and will respond within <strong>1 business day</strong>.</p>
          <p>If you have more details (target mesh size, quantity, destination), feel free to reply to this email.</p>
          <p>— Spice Aura Foods<br/>info@spiceaurafoods.com</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? "Server error" }, { status: 500 });
  }
}

function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
