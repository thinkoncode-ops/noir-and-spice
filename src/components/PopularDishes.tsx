"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Leaf } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { signatureDishes } from "@/data/menu";
import type { MenuItem } from "@/data/menu";
import { formatINR } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";
import { DishModal } from "./DishModal";

export function PopularDishes() {
  const [selected, setSelected] = useState<MenuItem | null>(null);

  return (
    <section className="py-24 md:py-32" id="signatures">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Signatures"
          title="THE SIGNATURES"
          subtitle="Crafted with fire, patience and imagination."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {signatureDishes.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-cream/5 bg-card transition hover:border-gold/30"
              onClick={() => setSelected(dish)}
              data-cursor="expand"
            >
              <div
                className="relative aspect-[4/5] overflow-hidden"
                data-cursor-label="VIEW"
              >
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-serif text-xl text-cream">{dish.name}</h3>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/10 text-cream transition group-hover:border-gold group-hover:bg-gold group-hover:text-ink">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{dish.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gold">{formatINR(dish.price)}</span>
                  <span className="flex gap-2">
                    {dish.vegetarian && (
                      <Leaf className="h-4 w-4 text-emerald-400" aria-label="Vegetarian" />
                    )}
                    {dish.spicy && (
                      <Flame className="h-4 w-4 text-orange-400" aria-label="Spicy" />
                    )}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
      <DishModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
