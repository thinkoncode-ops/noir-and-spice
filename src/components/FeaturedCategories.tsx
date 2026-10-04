"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { featuredCategories } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

export function FeaturedCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading
          title="WHAT'S YOUR CRAVING?"
          align="center"
        />
        <div className="flex gap-3 overflow-x-auto pb-2 md:flex-wrap md:justify-center md:overflow-visible">
          {featuredCategories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                href={cat.href}
                className="flex shrink-0 items-center gap-2 rounded-full border border-cream/10 bg-card px-5 py-3 text-sm text-cream transition hover:border-gold/40 hover:bg-gold/10"
              >
                <span aria-hidden>{cat.emoji}</span>
                {cat.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
