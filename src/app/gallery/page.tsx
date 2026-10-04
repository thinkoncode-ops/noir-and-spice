import { Gallery } from "@/components/Gallery";

export const metadata = {
  title: "Gallery — NOIR & SPICE",
};

export default function GalleryPage() {
  return (
    <div className="pt-28">
      <Gallery full />
    </div>
  );
}
