import { restaurant } from "@/data/restaurant";

export function whatsAppOrderUrl(message?: string) {
  const text = message ?? "Hi Mr. Sandwich, I would like to order: ";
  return `https://wa.me/${restaurant.phoneTel}?text=${encodeURIComponent(text)}`;
}
