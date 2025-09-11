"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerChildren } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="pt-10 md:pt-14 pb-8 md:pb-10">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <motion.h1 variants={fadeUp}>Vishnu Vivek</motion.h1>
        <motion.p variants={fadeUp} className="mt-3">
          I craft clean, accessible interfaces with a focus on performance and UX.
        </motion.p>
      </motion.div>
    </section>
  );
}


