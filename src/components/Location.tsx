"use client";

import { MapPin } from "lucide-react";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

export function Location() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${restaurant.coordinates.lat},${restaurant.coordinates.lng}`;

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-2 md:px-6">
        <div>
          <SectionHeading title="VISIT US" />
          <div className="space-y-6 text-muted">
            <p className="flex gap-3 text-cream/80">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" />
              {restaurant.address}
            </p>
            <p>{restaurant.hours}</p>
            <p>
              <a href={`tel:${restaurant.phone}`} className="text-cream hover:text-gold">
                {restaurant.phone}
              </a>
            </p>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-gold/40 px-6 py-3 text-sm text-gold transition hover:bg-gold hover:text-ink"
            >
              Get Directions
            </a>
          </div>
        </div>
        <div
          className="relative min-h-[280px] overflow-hidden rounded-3xl border border-cream/10 bg-card"
          aria-label="Map placeholder"
        >
          <div
            className="absolute inset-0 bg-[linear-gradient(135deg,#171717_0%,#0a0a0a_50%,#1a1510_100%)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-gold" />
              <p className="mt-3 text-sm text-cream/70">Sector 17, Chandigarh</p>
              <p className="text-xs text-muted">Interactive map</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
