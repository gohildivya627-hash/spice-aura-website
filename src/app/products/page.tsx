import Link from "next/link";
import { productCategories } from "@/components/ProductData";

export default function ProductsPage() {
  return (
    <div className="container-pad py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Products</h1>
      <p className="mt-3 text-zinc-600 max-w-3xl">
        Explore our dehydrated onion, garlic, and vegetable options. For packaging and pricing, request a quote.
      </p>

      <div className="mt-8 grid gap-6">
        {productCategories.map((cat) => (
          <section key={cat.title} className="card card-pad">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-xl font-extrabold">{cat.title}</h2>
                <p className="mt-2 text-sm text-zinc-600">{cat.description}</p>
              </div>
              <Link className="btn btn-primary no-underline" href={`/quote?product=${encodeURIComponent(cat.title)}`}>
                Request Quote
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {cat.items.map((it) => (
                <div key={it.name} className="rounded-2xl bg-sand-50 ring-1 ring-zinc-200 p-5">
                  <div className="font-bold">{it.name}</div>
                  <ul className="mt-2 text-sm text-zinc-700 list-disc pl-5">
                    {it.specs.map((s) => <li key={s}>{s}</li>)}
                  </ul>
                  <div className="mt-4 flex gap-3 flex-wrap">
                    <Link className="btn btn-secondary no-underline" href={`/quote?product=${encodeURIComponent(cat.title + " — " + it.name)}`}>
                      Quote this item
                    </Link>
                    <span className="text-xs text-zinc-500 self-center">Packaging available on request</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-10">
        <a className="btn btn-secondary no-underline" href="/catalog/Spice-Aura-Product-Catalog.pdf" download>
          Download Product Catalog (PDF)
        </a>
      </div>
    </div>
  );
}
