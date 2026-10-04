"use client";

import { motion } from "framer-motion";
import { easePremium } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easePremium }}
      className={`mb-12 max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl leading-tight text-cream md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-muted md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
}
