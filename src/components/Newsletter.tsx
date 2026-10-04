"use client";

import { useState } from "react";
import { useToast } from "@/context/ToastContext";
import { SectionHeading } from "./ui/SectionHeading";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { showToast } = useToast();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    showToast("Welcome — you're on the guest list.");
    setEmail("");
  };

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-xl px-4 text-center md:px-6">
        <SectionHeading
          title="A SEAT AT THE TABLE"
          subtitle="Get first access to new menus, chef experiences and special events."
          align="center"
        />
        <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 rounded-full border border-cream/10 bg-card px-5 py-3 text-sm text-cream outline-none focus:border-gold/50"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="rounded-full bg-gold px-8 py-3 text-sm font-semibold text-ink transition hover:bg-gold/90"
          >
            Join Us
          </button>
        </form>
        {error && <p className="mt-2 text-xs text-red-400">{error}</p>}
      </div>
    </section>
  );
}
