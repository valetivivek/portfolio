"use client";

import { motion } from "framer-motion";
import { fadeUp, rise, staggerChildren } from "@/lib/motion";
import { SNAPSHOT } from "@/content/about";

export default function Snapshot() {
  return (
    <section className="py-10 md:py-16">
      <motion.header variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h2>{SNAPSHOT.title}</h2>
      </motion.header>
      <motion.ul
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 flex flex-wrap gap-2"
      >
        {SNAPSHOT.items.map((item, i) => (
          <motion.li
            key={item}
            variants={rise}
            className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <span>{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}


