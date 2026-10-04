import Link from "next/link";
import { restaurant } from "@/data/restaurant";
import { whatsAppOrderUrl } from "@/lib/order";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-surface pb-24 pt-16 md:pb-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-serif text-lg tracking-widest text-cream">
            {restaurant.shortName}
          </p>
          <p className="mt-2 text-sm text-muted">{restaurant.tagline}</p>
          <p className="mt-2 text-xs text-gold">100% Pure Vegetarian</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {[
              ["/", "Home"],
              ["/menu", "Menu"],
              ["/about", "About"],
              ["/gallery", "Gallery"],
              ["/offers", "Offers"],
              ["/contact", "Contact"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{restaurant.address}</li>
            <li>{restaurant.hours}</li>
            <li>
              <a href={`tel:${restaurant.phoneTel}`} className="hover:text-gold">
                {restaurant.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${restaurant.email}`} className="hover:text-gold">
                {restaurant.email}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Order</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>
              <a href={whatsAppOrderUrl()} className="hover:text-gold">
                WhatsApp Order
              </a>
            </li>
            <li>
              <Link href="/order" className="hover:text-gold">View Cart</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-cream/5 px-4 pt-8 text-xs text-muted md:flex-row md:px-6">
        <p>© 2026 {restaurant.shortName}. All rights reserved.</p>
      </div>
      <p className="mx-auto mt-6 max-w-[1400px] px-4 text-center text-[10px] text-muted/60 md:px-6">
        Built with BrainDaemon · Daemon Core
      </p>
    </footer>
  );
}
