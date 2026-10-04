"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { experiences } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

export function ExperienceBento() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Menu highlights"
          title="EXPLORE THE MENU"
          align="center"
        />
        <div className="grid auto-rows-[200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <motion.article
              key={exp.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className={`group relative overflow-hidden rounded-3xl border border-cream/5 ${
                i === 0 ? "sm:row-span-2" : ""
              }`}
            >
              <Link href={`/menu?cat=${encodeURIComponent(exp.menuCat)}`} className="block h-full min-h-[200px]">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-xl text-cream">{exp.title}</h3>
                  <p className="mt-1 text-sm text-cream/70 opacity-0 transition group-hover:opacity-100">
                    {exp.description}
                  </p>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
