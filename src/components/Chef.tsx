"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Share2 } from "lucide-react";

export function Chef() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 md:grid-cols-12 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative md:col-span-5"
        >
          <div className="rounded-[2rem] border border-cream/10 bg-card/50 p-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[calc(2rem-0.5rem)]">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef Arjun Mehra"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col justify-center md:col-span-7"
        >
          <p className="text-[10px] uppercase tracking-[0.25em] text-gold">
            Executive Chef
          </p>
          <h2 className="mt-3 font-serif text-4xl text-cream md:text-5xl">
            Chef Arjun Mehra
          </h2>
          <blockquote className="mt-6 border-l-2 border-gold/50 pl-6 font-serif text-xl italic text-cream/90 md:text-2xl">
            &ldquo;Great food doesn&apos;t need to shout. It simply needs to be
            remembered.&rdquo;
          </blockquote>
          <p className="mt-6 text-muted">
            Trained in Delhi and London, Chef Arjun blends tandoor technique with
            modern plating. His philosophy centers on fire, spice, and restraint —
            letting each ingredient speak with clarity.
          </p>
          <p className="mt-4 text-sm text-cream/70">
            15+ years · Michelin-trained kitchens · Founder of NOIR & SPICE
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 text-cream transition hover:border-gold hover:text-gold"
              aria-label="Instagram"
            >
              <Camera className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cream/10 text-cream transition hover:border-gold hover:text-gold"
              aria-label="LinkedIn"
            >
              <Share2 className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
