import { About } from "@/components/About";
import { ChefExperience } from "@/components/ChefExperience";
import { ExperienceBento } from "@/components/ExperienceBento";
import { FeaturedCategories } from "@/components/FeaturedCategories";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Location } from "@/components/Location";
import { MenuSection } from "@/components/MenuSection";
import { Newsletter } from "@/components/Newsletter";
import { OffersSection } from "@/components/OffersSection";
import { PopularDishes } from "@/components/PopularDishes";
import { ReservationBar } from "@/components/ReservationBar";
import { Testimonials } from "@/components/Testimonials";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReservationBar />
      <FeaturedCategories />
      <PopularDishes />
      <Suspense fallback={null}>
        <MenuSection preview limit={6} />
      </Suspense>
      <OffersSection compact />
      <ChefExperience />
      <About />
      <ExperienceBento />
      <Gallery />
      <Testimonials />
      <Location />
      <Instagram />
      <Newsletter />
    </>
  );
}
