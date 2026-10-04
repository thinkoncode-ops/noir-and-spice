"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  showArrow?: boolean;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-ink hover:bg-gold/90 border border-gold/50 shadow-[0_0_40px_-12px_rgba(201,162,39,0.5)]",
  outline:
    "border border-cream/20 text-cream hover:border-gold/50 hover:text-gold bg-transparent",
  ghost: "text-cream/80 hover:text-gold underline-offset-4 hover:underline",
};

export function Button({
  href,
  onClick,
  children,
  variant = "primary",
  className,
  type = "button",
  showArrow = false,
  ariaLabel,
}: ButtonProps) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]";

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 transition-transform duration-500 group-hover:translate-x-0.5 dark:bg-white/10"
        >
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cn(base, variants[variant], className)}
        aria-label={ariaLabel}
      >
        {content}
      </Link>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={cn(base, variants[variant], className)}
      aria-label={ariaLabel}
      whileHover={{ y: -2 }}
    >
      {content}
    </motion.button>
  );
}
