"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ABOUT } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <motion.header variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">About</h2>
      </motion.header>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="rounded-2xl border bg-white p-6 md:p-8">
          <div className="text-justify leading-relaxed tracking-[0.005em] space-y-4 text-slate-700">
            {ABOUT.copy.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


