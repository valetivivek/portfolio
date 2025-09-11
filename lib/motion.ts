import { Variants } from "framer-motion";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: prefersReducedMotion()
      ? { duration: 0 }
      : { duration: 0.45, delay: i * 0.06, ease: "easeOut" },
  }),
};

export const staggerChildren: Variants = {
  hidden: {},
  show: prefersReducedMotion()
    ? { transition: { staggerChildren: 0, delayChildren: 0 } }
    : { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const slideIn = (direction: "up" | "down" | "left" | "right" = "up", distance = 16): Variants => {
  const axis = direction === "up" || direction === "down" ? "y" : "x";
  const from = (direction === "up" || direction === "left") ? distance : -distance;
  return {
    hidden: { opacity: 0, [axis]: from },
    show: {
      opacity: 1,
      [axis]: 0,
      transition: prefersReducedMotion() ? { duration: 0 } : { duration: 0.5, ease: "easeOut" },
    },
  } as Variants;
};

// For animating timeline connector lines
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  show: prefersReducedMotion()
    ? { pathLength: 1, opacity: 1, transition: { duration: 0 } }
    : { pathLength: 1, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const rise: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: prefersReducedMotion()
    ? { opacity: 1, y: 0, transition: { duration: 0 } }
    : { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


