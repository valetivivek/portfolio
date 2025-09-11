"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className={`card transition-shadow hover:shadow-md ${compact ? "p-4" : "p-5"}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            {project.emoji ? <span aria-hidden className="mr-2">{project.emoji}</span> : null}
            <span>{project.title}</span>
            <span className="sr-only">{project.emoji ? ` ${project.emoji}` : ""}</span>
          </h3>
          <p className="mt-1 text-slate-700">{project.summary}</p>
        </div>
      </div>
      <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-600">
        {project.tags.map((t) => (
          <li key={t} className="tag">{t}</li>
        ))}
      </ul>
      <div className="mt-4 flex items-center gap-3">
        {project.github && (
          <Link href={project.github} className="btn-ghost" target="_blank" rel="noopener noreferrer" aria-label={`GitHub repository for ${project.title}`}>
          GitHub
          </Link>
        )}
        {project.live && (
          <Link href={project.live} className="btn-primary" target="_blank" rel="noopener noreferrer" aria-label={`Live site for ${project.title}`}>
            Live
          </Link>
        )}
      </div>
    </motion.article>
  );
}


