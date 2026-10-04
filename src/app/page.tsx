import { About } from "@/components/About";
import { Chef } from "@/components/Chef";
import { ChefExperience } from "@/components/ChefExperience";
import { ExperienceBento } from "@/components/ExperienceBento";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Instagram } from "@/components/Instagram";
import { Location } from "@/components/Location";
import { MenuSection } from "@/components/MenuSection";
import { Newsletter } from "@/components/Newsletter";
import { PopularDishes } from "@/components/PopularDishes";
import { ReservationBar } from "@/components/ReservationBar";
import { ReservationForm } from "@/components/ReservationForm";
import { Testimonials } from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ReservationBar />
      <PopularDishes />
      <MenuSection preview limit={6} />
      <ChefExperience />
      <About />
      <Chef />
      <ExperienceBento />
      <Gallery />
      <Testimonials />
      <ReservationForm />
      <Location />
      <Instagram />
      <Newsletter />
    </>
  );
}
