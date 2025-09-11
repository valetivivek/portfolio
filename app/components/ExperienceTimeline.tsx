"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren, drawLine } from "@/lib/motion";

type Item = {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
};

export default function ExperienceTimeline({ items }: { items: Item[] }) {
  return (
    <motion.ol
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className="relative space-y-6 ps-6 print:space-y-3"
    >
      <motion.svg aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-6" viewBox="0 0 24 100" preserveAspectRatio="none">
        <motion.path d="M12 0 V 100" strokeWidth="2" stroke="#E2E8F0" fill="none" variants={drawLine} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} />
      </motion.svg>
      {items.map((item, idx) => (
        <motion.li key={idx} variants={fadeUp} custom={idx} className="relative">
          <span className="absolute -start-1 top-1 block h-2 w-2 rounded-full bg-primary-600"></span>
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-subtle print:shadow-none">
            <h3 className="text-base font-semibold text-slate-900">
              {item.role} <span className="text-slate-500">· {item.company}</span>
            </h3>
            <p className="mt-1 text-sm text-slate-600">{item.dates}</p>
            <ul className="mt-3 list-inside list-disc text-sm text-slate-700 print:text-[12px]">
              {item.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}


