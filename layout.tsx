import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spice Aura Foods | Premium Spices & Dehydrated Ingredients",
  description: "Spice Aura Foods supplies premium spices and dehydrated ingredients including onion and garlic in multiple cuts and mesh sizes.",
  metadataBase: new URL("https://www.spiceaurafoods.com"),
  openGraph: {
    title: "Spice Aura Foods",
    description: "Premium spices & dehydrated ingredients.",
    url: "https://www.spiceaurafoods.com",
    siteName: "Spice Aura Foods",
    locale: "en_CA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
