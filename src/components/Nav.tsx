import Link from "next/link";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/quote", label: "Request a Quote" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-sand-50/80 backdrop-blur border-b border-zinc-200">
      <div className="container-pad py-4 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="no-underline text-sm font-semibold text-zinc-800 hover:text-zinc-950">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Link href="/quote" className="btn btn-primary no-underline">Quote</Link>
        </div>
      </div>
    </header>
  );
}
