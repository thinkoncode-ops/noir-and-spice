"use client";

import { Camera as IgIcon } from "lucide-react";
import Image from "next/image";
import { instagramPosts } from "@/data/gallery";
import { restaurant } from "@/data/restaurant";
import { SectionHeading } from "./ui/SectionHeading";

export function Instagram() {
  return (
    <section className="border-t border-cream/5 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading title="FOLLOW THE FLAVOR" align="center" />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="#"
              className="group relative aspect-square overflow-hidden rounded-2xl"
              data-cursor-label="VIEW"
            >
              <Image
                src={post.src}
                alt={post.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 16vw"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/60 opacity-0 transition group-hover:opacity-100">
                <IgIcon className="h-6 w-6 text-cream" />
                <span className="text-xs text-cream">View Post</span>
              </div>
            </a>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-6 py-3 text-sm text-cream transition hover:border-gold hover:text-gold"
          >
            <IgIcon className="h-4 w-4" />
            {restaurant.instagram}
          </a>
        </div>
      </div>
    </section>
  );
}
