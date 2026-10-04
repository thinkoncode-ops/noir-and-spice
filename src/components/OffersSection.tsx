"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { offers } from "@/data/restaurant";
import { whatsAppOrderUrl } from "@/lib/order";
import { SectionHeading } from "./ui/SectionHeading";

export function OffersSection({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "pb-20" : "py-24 md:py-32"} id="offers">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        {!compact && (
          <SectionHeading
            eyebrow="Deals"
            title="TODAY'S PICKS"
            subtitle="Highlights from our menu board — order on WhatsApp for quick pickup."
          />
        )}
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer, i) => (
            <motion.article
              key={offer.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-3xl border border-gold/20 bg-card p-6 md:p-8"
            >
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                {offer.badge}
              </span>
              <h3 className="mt-4 font-serif text-2xl text-cream">{offer.title}</h3>
              <p className="mt-3 text-muted">{offer.description}</p>
              <Link
                href={whatsAppOrderUrl(`Hi, I'd like to order: ${offer.title}`)}
                className="mt-6 inline-flex text-sm font-medium text-gold hover:underline"
              >
                Order this on WhatsApp →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
