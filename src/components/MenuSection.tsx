"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Flame, Heart, Leaf, Search } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { menuCategories, menuItems, type MenuCategory, type MenuItem } from "@/data/menu";
import { useFavorites } from "@/context/FavoritesContext";
import { formatINR } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { DishModal } from "./DishModal";

const tabs = ["All", ...menuCategories] as const;

interface MenuSectionProps {
  preview?: boolean;
  limit?: number;
}

export function MenuSection({ preview = false, limit }: MenuSectionProps) {
  const [active, setActive] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();

  const filtered = useMemo(() => {
    let items = menuItems;
    if (active !== "All") {
      items = items.filter((i) => i.category === active);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q)
      );
    }
    if (limit) items = items.slice(0, limit);
    return items;
  }, [active, search, limit]);

  return (
    <section className="py-24 md:py-32" id="menu">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading
          eyebrow="Cuisine"
          title="OUR MENU"
          subtitle="Seasonal ingredients, bold spices, contemporary plates."
        />

        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-widest transition ${
                  active === tab
                    ? "bg-gold text-ink"
                    : "border border-cream/10 text-cream/70 hover:border-gold/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <label className="relative w-full md:max-w-xs">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              type="search"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-cream/10 bg-ink/40 py-2.5 pl-10 pr-4 text-sm text-cream outline-none focus:border-gold/50"
              aria-label="Search menu"
            />
          </label>
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.length === 0 ? (
              <p className="col-span-full py-12 text-center text-muted">
                No dishes match your search.
              </p>
            ) : (
              filtered.map((item) => (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="group overflow-hidden rounded-3xl border border-cream/5 bg-card"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      data-cursor-label="VIEW"
                    />
                    <button
                      type="button"
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink/50 backdrop-blur"
                      aria-label={
                        isFavorite(item.id) ? "Remove from favorites" : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          isFavorite(item.id)
                            ? "fill-gold text-gold"
                            : "text-cream"
                        }`}
                      />
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-lg text-cream">{item.name}</h3>
                      <span className="text-sm text-gold">{formatINR(item.price)}</span>
                    </div>
                    <p className="mt-2 line-clamp-2 text-sm text-muted">
                      {item.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-cream/60">
                      {item.vegetarian ? (
                        <Leaf className="h-3.5 w-3.5 text-emerald-400" />
                      ) : null}
                      {item.spicy ? (
                        <Flame className="h-3.5 w-3.5 text-orange-400" />
                      ) : null}
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(item)}
                      className="mt-4 w-full rounded-full border border-cream/15 py-2.5 text-xs uppercase tracking-widest text-cream transition hover:border-gold hover:text-gold"
                    >
                      View / Add
                    </button>
                  </div>
                </motion.article>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {preview && (
          <div className="mt-12 text-center">
            <Button href="/menu" variant="outline" showArrow>
              View Full Menu
            </Button>
          </div>
        )}
      </div>
      <DishModal item={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
