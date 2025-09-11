"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="card p-5 transition-shadow hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
          <p className="mt-1 text-slate-700">{project.description}</p>
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
        {project.tech.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-3">
        <Link href={project.github} className="btn-ghost" target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
          GitHub
        </Link>
        {project.live && (
          <Link href={project.live} className="btn-primary" target="_blank" rel="noopener noreferrer" aria-label={`Live site for ${project.title}`}>
            Live
          </Link>
        )}
      </div>
    </motion.article>
  );
}


