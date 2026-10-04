import { Location } from "@/components/Location";
import { Newsletter } from "@/components/Newsletter";
import { restaurant } from "@/data/restaurant";

export const metadata = {
  title: "Contact — NOIR & SPICE",
};

export default function ContactPage() {
  return (
    <div className="pt-28">
      <section className="mx-auto max-w-[1400px] px-4 pb-12 md:px-6">
        <h1 className="font-serif text-4xl text-cream md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-xl text-muted">
          Reach our reservations team at{" "}
          <a href={`mailto:${restaurant.email}`} className="text-gold hover:underline">
            {restaurant.email}
          </a>{" "}
          or call {restaurant.phone}.
        </p>
      </section>
      <Location />
      <Newsletter />
    </div>
  );
}
