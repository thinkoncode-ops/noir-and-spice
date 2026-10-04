"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { aboutCopy, stats } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const current = value * p;
      setDisplay(
        decimals > 0 ? current.toFixed(decimals) : String(Math.floor(current))
      );
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value, decimals]);

  return (
    <span ref={ref} className="font-serif text-4xl text-gold md:text-5xl">
      {display}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section className="border-y border-cream/5 bg-surface py-24 md:py-32" id="about">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading title={aboutCopy.title} />
        <div className="max-w-3xl space-y-4 text-muted">
          {aboutCopy.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-cream/5 bg-card p-8 text-center md:text-left"
            >
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.label.includes("Rating") ? 1 : 0}
              />
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
