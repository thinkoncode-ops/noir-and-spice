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
  title: "Mr. Sandwich — Vegetarian Café Devigarh",
  description:
    "Pure vegetarian café in Devigarh, Patiala. Sandwiches, pizza, burgers, pasta, momos, shakes, flavour chai & more. Open 8 AM – 10 PM.",
  openGraph: {
    title: "Mr. Sandwich — Devigarh",
    description: restaurant.tagline,
    type: "website",
    locale: "en_IN",
    siteName: restaurant.shortName,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: restaurant.shortName,
  description: restaurant.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: restaurant.address,
    addressLocality: "Devigarh",
    addressRegion: "Punjab",
    postalCode: "147111",
    addressCountry: "IN",
  },
  telephone: restaurant.phone,
  email: restaurant.email,
  servesCuisine: "Vegetarian",
  openingHours: "Mo-Su 08:00-22:00",
  priceRange: "₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: restaurant.rating,
    reviewCount: restaurant.reviewCount,
  },
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
