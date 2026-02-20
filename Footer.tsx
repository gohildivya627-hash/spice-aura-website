import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-pad py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-extrabold text-lg">Spice Aura Foods</div>
          <p className="mt-2 text-sm text-zinc-600">
            Premium spices and dehydrated ingredients for consistent flavour, quality, and supply.
          </p>
        </div>
        <div>
          <div className="font-bold">Contact</div>
          <ul className="mt-2 text-sm text-zinc-700 space-y-1">
            <li><span className="text-zinc-500">Email:</span> <a className="no-underline hover:underline" href="mailto:info@spiceaurafoods.com">info@spiceaurafoods.com</a></li>
            <li><span className="text-zinc-500">Phone:</span> <a className="no-underline hover:underline" href="tel:+12899526201">+1 289 952 6201</a></li>
            <li><span className="text-zinc-500">Website:</span> <a className="no-underline hover:underline" href="https://www.spiceaurafoods.com">www.spiceaurafoods.com</a></li>
          </ul>
          <a
            className="btn btn-secondary no-underline mt-4"
            href="https://wa.me/12899526201"
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp
          </a>
        </div>
        <div>
          <div className="font-bold">Legal</div>
          <ul className="mt-2 text-sm text-zinc-700 space-y-1">
            <li><Link className="no-underline hover:underline" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="no-underline hover:underline" href="/terms">Terms of Use</Link></li>
          </ul>
          <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} Spice Aura Foods. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
