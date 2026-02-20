import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container-pad py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">About Spice Aura Foods</h1>
      <p className="mt-4 text-zinc-700 max-w-3xl">
        Spice Aura Foods focuses on supplying premium dehydrated ingredients and spices with consistent specifications and dependable quality.
        We serve buyers who value clean flavour, stable supply, and responsive service.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {[
          ["Quality & consistency", "We prioritize consistent cuts, mesh sizes, and clean handling so your end product performs reliably."],
          ["Clear specifications", "You’ll get straightforward specs and options for flakes, chopped, minced, granules, and powders."],
          ["Customer-first support", "Quick quotes, practical guidance, and clear communication from inquiry to delivery."],
        ].map(([t,d]) => (
          <div key={t} className="card card-pad">
            <div className="font-extrabold">{t}</div>
            <p className="mt-2 text-sm text-zinc-600">{d}</p>
          </div>
        ))}
      </div>

      <section className="mt-10 card card-pad">
        <h2 className="text-xl font-extrabold">Who we serve</h2>
        <ul className="mt-3 text-sm text-zinc-700 list-disc pl-5 space-y-1">
          <li>Importers and distributors</li>
          <li>Wholesalers and retailers</li>
          <li>Food manufacturers</li>
          <li>Restaurants and catering businesses</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/products" className="btn btn-secondary no-underline">Browse Products</Link>
          <Link href="/quote" className="btn btn-primary no-underline">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}
