"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatINR } from "@/lib/utils";

export function CartDrawer() {
  const {
    isOpen,
    setOpen,
    lines,
    updateQuantity,
    removeItem,
    subtotal,
    tax,
    total,
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-label="Close cart"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed bottom-0 right-0 top-0 z-[75] flex w-full max-w-md flex-col border-l border-cream/10 bg-card md:bottom-auto md:max-h-screen md:rounded-l-3xl"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-cream/10 p-5">
              <h2 className="flex items-center gap-2 font-serif text-xl text-cream">
                <ShoppingBag className="h-5 w-5 text-gold" /> Your Order
              </h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-cream/70 hover:text-cream"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {lines.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center text-muted">
                  <ShoppingBag className="mb-4 h-12 w-12 opacity-40" />
                  <p>Your cart is empty.</p>
                  <Link
                    href="/menu"
                    onClick={() => setOpen(false)}
                    className="mt-4 text-sm text-gold hover:underline"
                  >
                    Browse the menu
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {lines.map(({ item, quantity }) => (
                    <li
                      key={item.id}
                      className="flex gap-3 rounded-2xl border border-cream/5 bg-ink/40 p-3"
                    >
                      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-cream">
                          {item.name}
                        </p>
                        <p className="text-xs text-gold">{formatINR(item.price)}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, quantity - 1)}
                            className="rounded-full border border-cream/10 p-1"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-xs">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, quantity + 1)}
                            className="rounded-full border border-cream/10 p-1"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-xs text-muted hover:text-cream"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <div className="border-t border-cream/10 p-5">
                <div className="space-y-2 text-sm text-cream/80">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatINR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax (5%)</span>
                    <span>{formatINR(tax)}</span>
                  </div>
                  <div className="flex justify-between border-t border-cream/10 pt-2 text-base font-medium text-cream">
                    <span>Total</span>
                    <span className="text-gold">{formatINR(total)}</span>
                  </div>
                </div>
                <Link
                  href="/order"
                  onClick={() => setOpen(false)}
                  className="mt-4 flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-sm font-semibold text-ink"
                >
                  Proceed to Checkout
                </Link>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
