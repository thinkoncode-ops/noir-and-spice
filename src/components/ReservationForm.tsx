"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

export function ReservationForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (form: FormData) => {
    const next: Record<string, string> = {};
    if (!form.get("name")?.toString().trim()) next.name = "Name is required";
    if (!form.get("phone")?.toString().trim()) next.phone = "Phone is required";
    const email = form.get("email")?.toString().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = "Valid email is required";
    }
    if (!form.get("date")) next.date = "Date is required";
    if (!form.get("time")) next.time = "Time is required";
    return next;
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const next = validate(form);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl border border-gold/30 bg-card p-12 text-center"
      >
        <p className="font-serif text-2xl text-cream">Thank you</p>
        <p className="mt-4 text-muted">
          Your reservation request has been received. We will confirm shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <section className={compact ? "" : "py-24 md:py-32"} id="reservations">
      <div className={compact ? "" : "mx-auto max-w-[1400px] px-4 md:px-6"}>
        {!compact && (
          <SectionHeading title="YOUR TABLE IS WAITING" align="center" />
        )}
        <div className="grid gap-12 lg:grid-cols-2">
          <form
            onSubmit={onSubmit}
            className="space-y-4 rounded-3xl border border-cream/10 bg-card p-6 md:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" error={errors.name} />
              <Field label="Phone" name="phone" type="tel" error={errors.phone} />
            </div>
            <Field label="Email" name="email" type="email" error={errors.email} />
            <div className="grid gap-4 sm:grid-cols-3">
              <Field label="Date" name="date" type="date" error={errors.date} />
              <Field label="Time" name="time" type="time" error={errors.time} />
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-muted">Guests</span>
                <select
                  name="guests"
                  className="rounded-xl border border-cream/10 bg-ink/40 px-4 py-3 text-cream outline-none focus:border-gold/50"
                  defaultValue="2"
                >
                  {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm">
              <span className="text-muted">Special Request</span>
              <textarea
                name="request"
                rows={3}
                className="rounded-xl border border-cream/10 bg-ink/40 px-4 py-3 text-cream outline-none focus:border-gold/50"
                placeholder="Allergies, celebrations, seating preferences..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-gold py-3.5 text-sm font-semibold tracking-wide text-ink transition hover:bg-gold/90"
            >
              Reserve My Table
            </button>
          </form>
          <aside className="space-y-8 text-cream/80">
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-gold">
                Opening Hours
              </h3>
              <p className="mt-2">{restaurant.hours}</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-gold">
                Address
              </h3>
              <p className="mt-2">{restaurant.address}</p>
            </div>
            <div>
              <h3 className="text-[10px] uppercase tracking-widest text-gold">
                Phone
              </h3>
              <a href={`tel:${restaurant.phone.replace(/\s/g, "")}`} className="mt-2 block hover:text-gold">
                {restaurant.phone}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span className="text-muted">{label}</span>
      <input
        name={name}
        type={type}
        className="rounded-xl border border-cream/10 bg-ink/40 px-4 py-3 text-cream outline-none focus:border-gold/50"
      />
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}
