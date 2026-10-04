import { About } from "@/components/About";
import { Chef } from "@/components/Chef";
import { ChefExperience } from "@/components/ChefExperience";
import { ExperienceBento } from "@/components/ExperienceBento";

export const metadata = {
  title: "About — NOIR & SPICE",
};

export default function AboutPage() {
  return (
    <div className="pt-28">
      <ChefExperience />
      <About />
      <Chef />
      <ExperienceBento />
    </div>
  );
}
