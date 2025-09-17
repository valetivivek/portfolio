"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

type Edu = {
  degree: string;
  school: string;
  location: string;
  dates: string;
  gpa?: string;
  coursework?: string[];
};

export default function EducationCard({ edu, index = 0 }: { edu: Edu; index?: number }) {
  return (
    <motion.article variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="card p-5 dark:border-slate-700">
      <h3 className="text-lg font-semibold text-slate-900">{edu.degree}</h3>
      <p className="text-slate-700 dark:text-slate-300">{edu.school} · {edu.location}</p>
      <p className="text-sm text-slate-600 mt-1 dark:text-slate-400">{edu.dates}{edu.gpa ? ` · GPA ${edu.gpa}` : ""}</p>
      {edu.coursework && edu.coursework.length > 0 && (
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300"><span className="font-medium">Coursework:</span> {edu.coursework.join(", ")}</p>
      )}
    </motion.article>
  );
}


