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
        className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {SNAPSHOT.items.map((item, i) => (
          <motion.li
            key={item}
            variants={rise}
            className="card p-4 transition-shadow hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-slate-800 text-sm">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}


