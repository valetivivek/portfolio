"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ABOUT } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-6 md:py-8">
      <motion.header variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight group">
          <a href="#about" className="hover:text-primary-600 transition-colors">
            About <span aria-hidden>✨</span>
          </a>
        </h2>
        <p className="text-sm text-slate-600">Who I am & what I build</p>
      </motion.header>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="rounded-2xl border bg-white p-6 md:p-8 md:max-w-none">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-700">
              {ABOUT.copy}
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {ABOUT.highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="text-lg flex-shrink-0">{highlight.split(' ')[0]}</span>
                  <span className="text-sm text-slate-700">{highlight.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


