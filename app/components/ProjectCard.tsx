"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/content/projects";

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`card group overflow-hidden ${compact ? "p-4" : "p-6"} h-full flex flex-col`}
    >
      {/* Project Header (image removed) */}

      <div className="flex-1 flex flex-col">
        {/* Project Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
              {project.emoji ? <span aria-hidden className="mr-2">{project.emoji}</span> : null}
              <span>{project.title}</span>
              <span className="sr-only">{project.emoji ? ` ${project.emoji}` : ""}</span>
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{project.summary}</p>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-6">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>
        </div>

        {/* Project Links */}
        <div className="mt-auto flex items-center gap-3">
          {project.github && (
            <Link 
              href={project.github} 
              className="btn-ghost text-sm px-6 py-3" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`GitHub repository for ${project.title}`}
            >
              <Github className="h-4 w-4" />
              Code
            </Link>
          )}
          {project.live && (
            <Link 
              href={project.live} 
              className="btn-primary text-sm px-6 py-3" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={`Live site for ${project.title}`}
            >
              <ExternalLink className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}


