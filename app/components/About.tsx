"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";
import { ABOUT } from "@/content/about";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <motion.header variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <h2 className="mb-2 text-2xl font-semibold tracking-tight">About <span aria-hidden>✨</span></h2>
        <p className="text-sm text-slate-600">Who I am & what I build</p>
      </motion.header>
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
        <div className="rounded-2xl border bg-white p-6 md:p-8 md:max-w-none">
          <div className="text-justify leading-relaxed tracking-[0.005em] space-y-5 text-slate-700 max-w-none">
            {ABOUT.copy.split("\n\n").map((para, i) => (
              <p key={i}>{para}
                {i === 0 && (
                  <>
                    {" "}
                    <span className="font-semibold text-primary-700">React/Next.js</span>,
                    {" "}
                    <span className="font-semibold text-primary-700">UI components</span>,
                    {" "}
                    <span className="font-semibold text-primary-700">data dashboards</span>
                  </>
                )}
              </p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}


