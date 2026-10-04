import { Suspense } from "react";
import { MenuSection } from "@/components/MenuSection";

export const metadata = {
  title: "Menu — Mr. Sandwich Devigarh",
};

function MenuContent() {
  return (
    <div className="pt-28">
      <MenuSection />
    </div>
  );
}

export default function MenuPage() {
  return (
    <Suspense fallback={<div className="pt-28 text-center text-muted">Loading menu…</div>}>
      <MenuContent />
    </Suspense>
  );
}
