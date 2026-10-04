import { About } from "@/components/About";
import { ChefExperience } from "@/components/ChefExperience";
import { ExperienceBento } from "@/components/ExperienceBento";
import { OffersSection } from "@/components/OffersSection";

export const metadata = {
  title: "About — Mr. Sandwich Devigarh",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <ChefExperience />
      <About />
      <OffersSection />
      <ExperienceBento />
    </div>
  );
}
