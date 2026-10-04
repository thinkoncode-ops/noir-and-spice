"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { formatINR } from "@/lib/utils";
import { whatsAppOrderUrl } from "@/lib/order";

export default function OrderPage() {
  const { lines, subtotal, tax, total } = useCart();
  const { showToast } = useToast();

  const checkout = () => {
    if (lines.length === 0) return;
    const summary = lines
      .map(
        ({ item, quantity }) =>
          `${quantity}× ${item.name} (${formatINR(item.price * quantity)})`
      )
      .join("\n");
    const message = `Hi Mr. Sandwich, I'd like to order:\n\n${summary}\n\nEstimated total: ${formatINR(total)} (incl. tax ${formatINR(tax)})`;
    window.open(whatsAppOrderUrl(message), "_blank", "noopener,noreferrer");
    showToast("Opening WhatsApp with your order…");
  };

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-32 pt-28 md:px-6">
      <h1 className="font-serif text-4xl text-cream">Your Order</h1>
      {lines.length === 0 ? (
        <div className="mt-12 rounded-3xl border border-cream/10 bg-card p-12 text-center">
          <p className="text-muted">No items yet.</p>
          <Link
            href="/menu"
            className="mt-6 inline-block rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <ul className="space-y-4 lg:col-span-2">
            {lines.map(({ item, quantity }) => (
              <li
                key={item.id}
                className="flex gap-4 rounded-2xl border border-cream/5 bg-card p-4"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <p className="font-medium text-cream">{item.name}</p>
                  <p className="text-sm text-muted">Qty {quantity}</p>
                  <p className="text-gold">{formatINR(item.price * quantity)}</p>
                </div>
              </li>
            ))}
          </ul>
          <aside className="rounded-3xl border border-cream/10 bg-card p-6">
            <p className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>{formatINR(subtotal)}</span>
            </p>
            <p className="mt-2 flex justify-between text-sm">
              <span>Tax</span>
              <span>{formatINR(tax)}</span>
            </p>
            <p className="mt-4 flex justify-between border-t border-cream/10 pt-4 text-lg font-medium text-cream">
              <span>Total</span>
              <span className="text-gold">{formatINR(total)}</span>
            </p>
            <button
              type="button"
              onClick={checkout}
              className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-semibold text-ink"
            >
              Proceed to Checkout
            </button>
          </aside>
        </div>
      )}
    </div>
  );
}
