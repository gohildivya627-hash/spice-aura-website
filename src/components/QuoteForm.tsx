"use client";

import { useMemo, useState } from "react";

type Props = { defaultProduct?: string };

export default function QuoteForm({ defaultProduct }: Props) {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");
  const [message, setMessage] = useState<string>("");

  const initial = useMemo(() => ({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    products: defaultProduct ?? "",
    quantity: "",
    packaging: "",
    notes: "",
  }), [defaultProduct]);

  const [form, setForm] = useState(initial);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, type: "quote" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error ?? "Failed");
      setStatus("sent");
      setMessage("Thanks — we received your request. We’ll respond within 1 business day.");
      setForm(initial);
    } catch (err: any) {
      setStatus("error");
      setMessage(err?.message ?? "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="card card-pad space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Full Name" required value={form.name} onChange={v => setForm(s => ({...s, name: v}))} />
        <Field label="Company" value={form.company} onChange={v => setForm(s => ({...s, company: v}))} />
        <Field label="Email" type="email" required value={form.email} onChange={v => setForm(s => ({...s, email: v}))} />
        <Field label="Phone" value={form.phone} onChange={v => setForm(s => ({...s, phone: v}))} />
        <Field label="City/Country" value={form.location} onChange={v => setForm(s => ({...s, location: v}))} />
        <Field label="Product(s) Interested" value={form.products} onChange={v => setForm(s => ({...s, products: v}))} placeholder="e.g., Dehydrated Garlic Powder 80–100 mesh" />
        <Field label="Monthly Quantity (Estimate)" value={form.quantity} onChange={v => setForm(s => ({...s, quantity: v}))} placeholder="e.g., 500 kg / month" />
        <Field label="Packaging Preference" value={form.packaging} onChange={v => setForm(s => ({...s, packaging: v}))} placeholder="e.g., 25kg bag / 1kg pouch" />
      </div>

      <div>
        <label className="text-sm font-semibold">Message / Requirements</label>
        <textarea
          className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-aura-300"
          rows={5}
          value={form.notes}
          onChange={e => setForm(s => ({...s, notes: e.target.value}))}
          placeholder="Tell us grades, mesh size, target price, destination, samples, etc."
        />
      </div>

      {/* Honeypot */}
      <input className="hidden" tabIndex={-1} autoComplete="off" name="company_website" />

      <div className="flex items-center gap-3">
        <button className="btn btn-primary" disabled={status==="sending"} type="submit">
          {status==="sending" ? "Sending..." : "Request a Quote"}
        </button>
        <a className="btn btn-secondary no-underline" href="/catalog/Spice-Aura-Product-Catalog.pdf" download>
          Download Catalog (PDF)
        </a>
      </div>

      {message ? (
        <p className={`text-sm ${status==="error" ? "text-red-700" : "text-aura-800"}`}>{message}</p>
      ) : null}

      <p className="text-xs text-zinc-500">
        By submitting, you agree to our <a href="/privacy">Privacy Policy</a>.
      </p>
    </form>
  );
}

function Field({
  label, value, onChange, required, type="text", placeholder
}: { label: string; value: string; onChange: (v:string)=>void; required?: boolean; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-semibold">{label}{required ? " *" : ""}</label>
      <input
        className="mt-2 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-aura-300"
        value={value}
        type={type}
        required={required}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
