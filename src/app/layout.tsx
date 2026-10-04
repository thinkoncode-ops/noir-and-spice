import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { AppProviders } from "@/context/AppProviders";
import { restaurant } from "@/data/restaurant";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NOIR & SPICE — Modern Indian Restaurant",
  description:
    "Experience modern Indian cuisine at NOIR & SPICE — an elevated restaurant where bold flavors meet contemporary culinary artistry.",
  openGraph: {
    title: "NOIR & SPICE — Modern Indian Restaurant",
    description:
      "Experience modern Indian cuisine at NOIR & SPICE — an elevated restaurant where bold flavors meet contemporary culinary artistry.",
    type: "website",
    locale: "en_IN",
    siteName: restaurant.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.name,
  description: restaurant.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address,
    addressLocality: "Chandigarh",
    addressCountry: "IN",
  },
  telephone: restaurant.phone,
  servesCuisine: "Modern Indian",
  openingHours: "Mo-Su 12:00-23:30",
  priceRange: "₹₹₹",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      data-theme="dark"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
      </body>
    </html>
  );
}
