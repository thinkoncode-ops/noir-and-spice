import Link from "next/link";
import { restaurant } from "@/data/restaurant";

export function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-surface pb-24 pt-16 md:pb-8">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-4 md:grid-cols-4 md:px-6">
        <div>
          <p className="font-serif text-lg tracking-widest text-cream">
            {restaurant.name}
          </p>
          <p className="mt-2 text-sm text-muted">{restaurant.tagline}</p>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            {["/", "/menu", "/about", "/gallery"].map((href) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold">
                  {href === "/" ? "Home" : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Visit</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li>{restaurant.address}</li>
            <li>{restaurant.hours}</li>
            <li>{restaurant.phone}</li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gold">Follow</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/70">
            <li><a href="#" className="hover:text-gold">Instagram</a></li>
            <li><a href="#" className="hover:text-gold">Facebook</a></li>
            <li><a href="#" className="hover:text-gold">YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-[1400px] flex-col items-center justify-between gap-4 border-t border-cream/5 px-4 pt-8 text-xs text-muted md:flex-row md:px-6">
        <p>© 2026 {restaurant.name}. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-cream">Privacy Policy</Link>
          <Link href="#" className="hover:text-cream">Terms</Link>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-[1400px] px-4 text-center text-[10px] text-muted/60 md:px-6">
        Built with BrainDaemon · Daemon Core
      </p>
    </footer>
  );
}
