"use client";

import { BackToTop } from "./BackToTop";
import { CartDrawer } from "./CartDrawer";
import { CustomCursor } from "./CustomCursor";
import { Footer } from "./Footer";
import { MobileReserveBar } from "./MobileReserveBar";
import { Navbar } from "./Navbar";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <BackToTop />
      <MobileReserveBar />
    </>
  );
}
