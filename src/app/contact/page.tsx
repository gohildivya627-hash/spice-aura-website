"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState({ name:"", email:"", phone:"", subject:"", notes:"" });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "contact" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Failed");
      setStatus("sent");
      setMessage("Thanks — we received your message. We’ll respond within 1 business day.");
      setForm({ name:"", email:"", phone:"", subject:"", notes:"" });
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="container-pad py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h1>
      <p className="mt-3 text-zinc-600 max-w-3xl">
        Email: <a href="mailto:info@spiceaurafoods.com" className="font-semibold">info@spiceaurafoods.com</a> ·
        Phone: <a href="tel:+12899526201" className="font-semibold">+1 289 952 6201</a>
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="card card-pad space-y-4">
          <Field label="Full Name" required value={form.name} onChange={v => setForm(s => ({...s, name: v}))} />
          <Field label="Email" type="email" required value={form.email} onChange={v => setForm(s => ({...s, email: v}))} />
          <Field label="Phone" value={form.phone} onChange={v => setForm(s => ({...s, phone: v}))} />
          <Field label="Subject" value={form.subject} onChange={v => setForm(s => ({...s, subject: v}))} />
          <div>
            <label className="text-sm font-semibold">Message *</label>
            <textarea
              className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-aura-300"
              rows={6}
              required
              value={form.notes}
              onChange={e => setForm(s => ({...s, notes: e.target.value}))}
            />
          </div>

          <button className="btn btn-primary" disabled={status==="sending"} type="submit">
            {status==="sending" ? "Sending..." : "Send Message"}
          </button>

          {message ? (
            <p className={`text-sm ${status==="error" ? "text-red-700" : "text-aura-800"}`}>{message}</p>
          ) : null}

          <p className="text-xs text-zinc-500">
            By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
          </p>
        </form>

        <div className="card card-pad">
          <h2 className="text-xl font-extrabold">WhatsApp</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Prefer WhatsApp? Message us and include the product + quantity.
          </p>
          <a className="btn btn-secondary no-underline mt-4" href="https://wa.me/12899526201" target="_blank" rel="noreferrer">
            WhatsApp +1 289 952 6201
          </a>

          <h2 className="text-xl font-extrabold mt-8">Location</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Add your business address here when ready. (We didn’t add a placeholder address.)
          </p>

          <div className="mt-4 rounded-2xl bg-sand-50 ring-1 ring-zinc-200 p-5 text-sm text-zinc-600">
            Map placeholder
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({
  label, value, onChange, required, type="text",
}: { label: string; value: string; onChange: (v:string)=>void; required?: boolean; type?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}{required ? " *" : ""}</label>
      <input
        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-aura-300"
        value={value}
        type={type}
        required={required}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
