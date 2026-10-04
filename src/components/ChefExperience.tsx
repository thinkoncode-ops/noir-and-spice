"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=900&q=80"
            alt="Chef plating a signature dish"
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
            Chef&apos;s Experience
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            A TABLE WORTH REMEMBERING
          </h2>
          <p className="mt-6 text-base text-muted md:text-lg">
            From the first flame to the final dessert, every plate is designed to
            create a moment worth remembering.
          </p>
          <Link
            href="/about"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gold"
          >
            Discover Our Story
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
