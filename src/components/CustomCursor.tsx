"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 400, damping: 35 });
  const springY = useSpring(y, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [data-cursor='expand'], input, textarea, select"
      );
      const image = target.closest("[data-cursor-label]");
      setExpanded(!!interactive);
      if (image) {
        setLabel(image.getAttribute("data-cursor-label"));
      } else {
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", onOver);
    };
  }, [x, y]);

  if (!visible) return null;

  const size = expanded || label ? 72 : 12;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden items-center justify-center rounded-full border border-gold/40 bg-ink/20 text-[10px] uppercase tracking-widest text-cream backdrop-blur-sm md:flex"
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ width: size, height: size }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
    >
      {label && <span>{label}</span>}
    </motion.div>
  );
}
