"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { restaurant } from "@/data/restaurant";

export function ChefExperience() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-4 md:grid-cols-2 md:px-6">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-[4/5] overflow-hidden rounded-[2rem] md:aspect-square"
          data-cursor-label="EXPLORE"
        >
          <Image
            src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=900&q=80"
            alt="Vegetarian burgers and café food"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Devigarh, Patiala
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            YOUR LOCAL VEG CAFÉ
          </h2>
          <p className="mt-6 text-base text-muted md:text-lg">
            Homemade sauces, fresh ingredients, and city-style comfort food —
            from sandwich subs and paneer pizza to flavour chai and special cold
            coffee. Right behind Devigarh Bus Stand at Garg Super Market.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold"
          >
            Read our story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <p className="mt-6 text-sm text-cream/60">{restaurant.hours}</p>
        </motion.div>
      </div>
    </section>
  );
}
