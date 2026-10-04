"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, ShoppingBag, Sun, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { restaurant } from "@/data/restaurant";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "./ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { itemCount, setOpen: setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 md:px-6">
        <nav
          className={cn(
            "mx-auto flex max-w-[1400px] items-center justify-between rounded-full border px-4 py-3 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] md:px-6",
            scrolled
              ? "border-cream/10 bg-ink/75 shadow-lg backdrop-blur-xl"
              : "border-transparent bg-transparent"
          )}
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className="font-serif text-lg tracking-[0.15em] text-cream md:text-xl"
          >
            {restaurant.name}
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/80 transition hover:border-gold/40 hover:text-gold"
              aria-label="Toggle light and dark mode"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream/80 transition hover:border-gold/40 hover:text-gold"
              aria-label={`Open cart, ${itemCount} items`}
            >
              <ShoppingBag className="h-4 w-4" />
              {itemCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[10px] font-bold text-ink">
                  {itemCount}
                </span>
              )}
            </button>
            <Button
              href="/reservations"
              variant="primary"
              className="hidden !py-2.5 !px-5 text-xs md:inline-flex"
            >
              Reserve a Table
            </Button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/10 text-cream lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/90 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex items-center justify-between p-6">
              <span className="font-serif text-lg text-cream">{restaurant.name}</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-cream"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-6 px-8 pt-8">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-4xl text-cream"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-4"
              >
                <Link
                  href="/reservations"
                  onClick={() => setOpen(false)}
                  className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
                >
                  Reserve a Table
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
