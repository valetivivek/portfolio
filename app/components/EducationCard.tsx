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
    <motion.article variants={fadeUp} custom={index} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="card p-6 border border-border bg-surface group">
      <h3 className="font-heading text-xl font-semibold text-text group-hover:text-primary-500 transition-colors duration-200">{edu.degree}</h3>
      <p className="text-muted">{edu.school} · {edu.location}</p>
      <p className="text-sm text-muted mt-1">{edu.dates}{edu.gpa ? ` · GPA ${edu.gpa}` : ""}</p>
      {edu.coursework && edu.coursework.length > 0 && (
        <p className="mt-2 text-sm text-text"><span className="font-medium text-muted">Coursework:</span> {edu.coursework.join(", ")}</p>
      )}
    </motion.article>
  );
}


