"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Flame, Leaf, Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { MenuItem } from "@/data/menu";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { formatINR } from "@/lib/utils";

interface DishModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export function DishModal({ item, onClose }: DishModalProps) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const { showToast } = useToast();

  const handleAdd = () => {
    if (!item) return;
    addItem(item, qty);
    showToast(`${item.name} added to your order`);
    onClose();
    setQty(1);
  };

  return (
    <AnimatePresence>
      {item && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] bg-ink/80 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close dish details"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="dish-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            className="fixed left-4 right-4 top-[8%] z-[90] mx-auto max-h-[85vh] max-w-lg overflow-y-auto rounded-3xl border border-cream/10 bg-card shadow-2xl md:left-1/2 md:right-auto md:w-full md:-translate-x-1/2"
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 512px"
              />
              <button
                type="button"
                onClick={onClose}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink/60 text-cream backdrop-blur"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 id="dish-modal-title" className="font-serif text-2xl text-cream">
                  {item.name}
                </h2>
                <p className="text-lg font-medium text-gold">{formatINR(item.price)}</p>
              </div>
              <p className="mt-3 text-sm text-muted">{item.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-cream/70">
                {item.vegetarian ? (
                  <span className="flex items-center gap-1 rounded-full border border-emerald-500/30 px-2 py-1">
                    <Leaf className="h-3 w-3 text-emerald-400" /> Vegetarian
                  </span>
                ) : (
                  <span className="rounded-full border border-cream/20 px-2 py-1">
                    Non-vegetarian
                  </span>
                )}
                {item.spicy && (
                  <span className="flex items-center gap-1 rounded-full border border-red-500/30 px-2 py-1">
                    <Flame className="h-3 w-3 text-orange-400" /> Spicy
                  </span>
                )}
                {item.calories && (
                  <span className="rounded-full border border-cream/20 px-2 py-1">
                    {item.calories} kcal
                  </span>
                )}
              </div>
              {item.ingredients && (
                <div className="mt-5">
                  <p className="text-[10px] uppercase tracking-widest text-gold">
                    Ingredients
                  </p>
                  <p className="mt-2 text-sm text-cream/80">
                    {item.ingredients.join(", ")}
                  </p>
                </div>
              )}
              {item.allergens && item.allergens.length > 0 && (
                <p className="mt-3 text-xs text-muted">
                  Allergens: {item.allergens.join(", ")}
                </p>
              )}
              <div className="mt-8 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 rounded-full border border-cream/10 px-3 py-2">
                  <button
                    type="button"
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="text-cream"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-6 text-center text-sm">{qty}</span>
                  <button
                    type="button"
                    onClick={() => setQty((q) => q + 1)}
                    className="text-cream"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="flex-1 rounded-full bg-gold py-3 text-sm font-semibold text-ink transition hover:bg-gold/90"
                >
                  Add to Order
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
