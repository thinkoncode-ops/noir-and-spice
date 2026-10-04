"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { galleryImages } from "@/data/gallery";
import { SectionHeading } from "./ui/SectionHeading";

export function Gallery({ full = false }: { full?: boolean }) {
  const images = full ? galleryImages : galleryImages.slice(0, 6);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const go = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      setLightbox((lightbox + dir + images.length) % images.length);
    },
    [lightbox, images.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, go]);

  return (
    <section className="py-24 md:py-32" id="gallery">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <SectionHeading title="A GLIMPSE INSIDE" align="center" />
        <div className="columns-2 gap-4 md:columns-3 lg:gap-6">
          {images.map((img, i) => (
            <motion.button
              key={img.id}
              type="button"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`group relative mb-4 w-full overflow-hidden rounded-2xl break-inside-avoid ${
                img.tall ? "md:mb-6" : ""
              }`}
              onClick={() => setLightbox(i)}
              data-cursor-label="VIEW"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.tall ? 800 : 500}
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-ink/0 p-4 transition group-hover:bg-ink/50">
                <span className="text-sm text-cream opacity-0 transition group-hover:opacity-100">
                  {img.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
          >
            <button
              type="button"
              className="absolute right-4 top-4 text-cream md:right-8 md:top-8"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 p-3 text-cream"
              onClick={() => go(-1)}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-cream/20 p-3 text-cream md:right-8"
              onClick={() => go(1)}
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              key={images[lightbox].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
            >
              <Image
                src={images[lightbox].src}
                alt={images[lightbox].alt}
                width={1200}
                height={800}
                className="max-h-[85vh] w-auto object-contain"
              />
              <p className="absolute bottom-4 left-4 text-sm text-cream">
                {images[lightbox].label}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
