"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ABOUT } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="container-page py-16">
      <motion.header variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-2 group">
          <a href="#about" className="hover:text-primary-600 transition-colors">
            About
          </a>
        </h2>
        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Who I am & what I build</p>
      </motion.header>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="card p-6">
          <div className="leading-relaxed tracking-[0.005em] space-y-5 text-slate-700 dark:text-slate-300 max-w-none">
            {ABOUT.copy.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


