"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { restaurant } from "@/data/restaurant";

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
        <form
          className="grid gap-4 md:grid-cols-5 md:items-end"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
              <Calendar className="h-3.5 w-3.5 text-gold" /> Date
            </span>
            <input
              type="date"
              className="rounded-xl border border-cream/10 bg-ink/50 px-4 py-3 text-sm text-cream outline-none focus:border-gold/50"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
              <Clock className="h-3.5 w-3.5 text-gold" /> Time
            </span>
            <input
              type="time"
              className="rounded-xl border border-cream/10 bg-ink/50 px-4 py-3 text-sm text-cream outline-none focus:border-gold/50"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
              <Users className="h-3.5 w-3.5 text-gold" /> Guests
            </span>
            <select
              className="rounded-xl border border-cream/10 bg-ink/50 px-4 py-3 text-sm text-cream outline-none focus:border-gold/50"
              defaultValue="2"
            >
              {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "Guest" : "Guests"}
                </option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2 md:col-span-1">
            <span className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted">
              <MapPin className="h-3.5 w-3.5 text-gold" /> Location
            </span>
            <input
              readOnly
              value={restaurant.address}
              className="rounded-xl border border-cream/10 bg-ink/50 px-4 py-3 text-sm text-cream/80 outline-none"
            />
          </label>
          <Link
            href="/reservations"
            className="flex h-[46px] items-center justify-center rounded-full bg-gold text-sm font-semibold tracking-wide text-ink transition hover:bg-gold/90 md:h-auto md:py-3"
          >
            Check Availability
          </Link>
        </form>
      </motion.div>
    </section>
  );
}
