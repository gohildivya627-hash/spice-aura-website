import Link from "next/link";
import QuoteForm from "@/components/QuoteForm";
import { productCategories } from "@/components/ProductData";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sand-100 to-sand-50" />
        <div className="container-pad relative py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="badge">Premium spices & dehydrated ingredients</div>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight">
              Spice Aura Foods
            </h1>
            <p className="mt-4 text-lg text-zinc-700">
              Reliable supply of dehydrated onion, garlic, and vegetables in multiple cuts and mesh sizes.
              Built for consistency, flavour, and quality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary no-underline" href="/quote">Request a Quote</Link>
              <Link className="btn btn-secondary no-underline" href="/products">View Products</Link>
              <a className="btn btn-secondary no-underline" href="/catalog/Spice-Aura-Product-Catalog.pdf" download>
                Download Catalog (PDF)
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              { t: "Quality-first", d: "Clean processing and consistent specifications for dependable results." },
              { t: "Flexible formats", d: "Flakes, chopped, minced, granules, and powders across multiple sizes." },
              { t: "Buyer support", d: "Quick quotes, clear specs, and responsive communication." },
            ].map((x) => (
              <div key={x.t} className="card card-pad">
                <div className="font-bold">{x.t}</div>
                <div className="mt-2 text-sm text-zinc-600">{x.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad py-14">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Products</h2>
            <p className="mt-2 text-zinc-600">Browse by category and request a quote in one click.</p>
          </div>
          <Link href="/products" className="btn btn-secondary no-underline">Full Catalog</Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {productCategories.map((cat) => (
            <div key={cat.title} className="card card-pad">
              <div className="font-extrabold">{cat.title}</div>
              <p className="mt-2 text-sm text-zinc-600">{cat.description}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {cat.items.slice(0, 3).map((it) => (
                  <li key={it.name} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-aura-700/60" />
                    <span><span className="font-semibold">{it.name}</span> <span className="text-zinc-600">({it.specs.join(", ")})</span></span>
                  </li>
                ))}
              </ul>
              <Link className="btn btn-primary no-underline mt-6" href={`/quote?product=${encodeURIComponent(cat.title)}`}>
                Request Quote
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-zinc-200">
        <div className="container-pad py-14 grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Request a quote</h2>
            <p className="mt-3 text-zinc-600">
              Tell us what you need and we’ll reply within 1 business day with specs, pricing guidance, and next steps.
            </p>
            <div className="mt-6 grid gap-4">
              {[
                ["MOQ & samples", "Ask about sample availability and suggested MOQ."],
                ["Packaging", "Share preferred packaging (e.g., 1kg, 10kg, 25kg)."],
                ["Destination", "Let us know your city/country for shipping guidance."],
              ].map(([t,d]) => (
                <div key={t} className="card card-pad">
                  <div className="font-bold">{t}</div>
                  <div className="mt-1 text-sm text-zinc-600">{d}</div>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="container-pad py-14">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">FAQ</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["Do you offer samples?", "Yes — sample availability depends on item and destination. Submit a quote request and we’ll advise."],
            ["What packaging do you offer?", "Packaging options depend on product and order size. Tell us your preference and we’ll suggest the best fit."],
            ["What are typical lead times?", "Lead times vary by item and quantity. We’ll confirm an estimated timeline with your quote."],
            ["Can you supply specific mesh sizes?", "Yes — we offer multiple sizes for granules and powders. See the product catalog for details."],
            ["Do you ship across Canada?", "We can support shipping within Canada and export depending on requirements. Share your destination in the form."],
            ["Do you support private label?", "We can discuss private label / packaging needs depending on volumes and timelines."],
          ].map(([q,a]) => (
            <details key={q} className="card card-pad">
              <summary className="font-bold cursor-pointer">{q}</summary>
              <p className="mt-2 text-sm text-zinc-600">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
