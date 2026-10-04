"use client";

import { motion } from "framer-motion";
import { Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { whatsAppOrderUrl } from "@/lib/order";

export function ReservationBar() {
  return (
    <section className="relative z-20 -mt-16 px-4 md:-mt-20 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-[1400px] rounded-3xl border border-cream/10 bg-card/95 p-6 shadow-2xl backdrop-blur-xl md:p-8"
      >
        <div className="grid gap-6 md:grid-cols-4 md:items-center">
          <div className="flex gap-3 text-sm text-cream/80">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Hours</p>
              <p>8:00 AM – 10:00 PM daily</p>
            </div>
          </div>
          <div className="flex gap-3 text-sm text-cream/80 md:col-span-2">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted">Location</p>
              <p>{restaurant.address}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <a
              href={`tel:${restaurant.phoneTel}`}
              className="flex items-center justify-center gap-2 rounded-full border border-cream/15 py-3 text-sm text-cream"
            >
              <Phone className="h-4 w-4 text-gold" />
              {restaurant.phone.replace("+91 ", "")}
            </a>
            <Link
              href={whatsAppOrderUrl()}
              className="flex items-center justify-center rounded-full bg-gold py-3 text-sm font-semibold text-ink"
            >
              Order Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
