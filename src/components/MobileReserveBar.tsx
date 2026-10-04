"use client";

import Link from "next/link";

export function MobileReserveBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-cream/10 bg-ink/95 p-3 backdrop-blur-lg md:hidden">
      <Link
        href="/reservations"
        className="flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-sm font-semibold tracking-wide text-ink"
      >
        Reserve a Table
      </Link>
    </div>
  );
}
