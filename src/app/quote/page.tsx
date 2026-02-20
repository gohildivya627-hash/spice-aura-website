import QuoteForm from "@/components/QuoteForm";

export default async function QuotePage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const sp = await searchParams;
  const product = sp?.product ? decodeURIComponent(sp.product) : undefined;

  return (
    <div className="container-pad py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Request a Quote</h1>
      <p className="mt-3 text-zinc-600 max-w-3xl">
        Share your requirements and we’ll respond within 1 business day.
      </p>
      <div className="mt-8">
        <QuoteForm defaultProduct={product} />
      </div>
    </div>
  );
}
