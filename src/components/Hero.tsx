"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { restaurant } from "@/data/restaurant";
import { easePremium } from "@/lib/motion";
import { whatsAppOrderUrl } from "@/lib/order";
import { Button } from "./ui/Button";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100dvh] items-end overflow-hidden pb-24 md:items-center md:pb-0"
      aria-label="Hero"
    >
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=1920&q=85"
          alt="Fresh sandwiches at Mr. Sandwich"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          data-cursor-label="EXPLORE"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-transparent to-transparent" />
      </motion.div>

      <motion.div
        style={{ y }}
        className="relative z-10 mx-auto w-full max-w-[1400px] px-4 md:px-6"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easePremium }}
          className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-gold"
        >
          100% Pure Vegetarian Café
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: easePremium }}
          className="max-w-3xl font-serif text-4xl leading-[1.08] text-cream md:text-6xl lg:text-7xl"
        >
          THE TASTE YOU&apos;VE BEEN CRAVING
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easePremium }}
          className="mt-4 text-lg text-gold/90 md:text-xl"
        >
          {restaurant.subtagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: easePremium }}
          className="mt-4 max-w-lg text-base text-cream/75 md:text-lg"
        >
          {restaurant.shortName} — Devigarh&apos;s favourite vegetarian café for
          sandwiches, pizza, burgers, momos, shakes &amp; flavour chai.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: easePremium }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button href="/menu" showArrow>Explore Menu</Button>
          <Button href={whatsAppOrderUrl()} variant="outline">
            Order on WhatsApp
          </Button>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 right-4 rounded-2xl border border-cream/10 bg-card/60 px-4 py-3 text-right backdrop-blur-md md:right-8">
        <p className="text-[10px] uppercase tracking-widest text-gold">Open Daily</p>
        <p className="text-sm text-cream">8:00 AM — 10:00 PM</p>
      </div>
    </section>
  );
}
