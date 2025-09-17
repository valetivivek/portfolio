"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerChildren, drawLine } from "@/lib/motion";
import { useState } from "react";

type Item = {
  role: string;
  company: string;
  dates: string;
  highlights: string[];
};

export default function ExperienceTimeline({ items }: { items: Item[] }) {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
        <motion.li 
          key={idx} 
          variants={fadeUp} 
          custom={idx} 
          className="relative group"
          onMouseEnter={() => setHoveredItem(idx)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <motion.span 
            className="absolute -start-1 top-1 block h-2 w-2 rounded-full bg-primary-600 z-10"
            animate={{
              scale: hoveredItem === idx ? 1.5 : 1,
              backgroundColor: hoveredItem === idx ? "#059669" : "#059669"
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.div 
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-subtle print:shadow-none cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-primary-200 hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-700"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h3 
              className="text-base font-semibold text-slate-900 group-hover:text-primary-700 transition-colors duration-200"
              animate={{
                color: hoveredItem === idx ? "#059669" : "#0f172a"
              }}
            >
              {item.role} <span className="text-slate-500 group-hover:text-slate-600 transition-colors duration-200">· {item.company}</span>
            </motion.h3>
            <p className="mt-1 text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-200">{item.dates}</p>
            <motion.ul 
              className="mt-3 list-inside list-disc text-sm text-slate-700 print:text-[12px] space-y-1"
              initial={{ opacity: 0.8 }}
              animate={{ opacity: hoveredItem === idx ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
            >
              {item.highlights.map((h, i) => (
                <motion.li 
                  key={i}
                  className="transition-all duration-200 hover:text-slate-900"
                  whileHover={{ x: 4 }}
                >
                  {h}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.li>
      ))}
    </motion.ol>
  );
}


