"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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
      className={`card group overflow-hidden ${compact ? "p-4" : "p-0"}`}
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary-50 to-accent-50 overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-6xl opacity-20">
              {project.emoji || "🚀"}
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className={`${compact ? "p-4" : "p-6"}`}>
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
        <div className="flex items-center gap-3">
          {project.github && (
            <Link 
              href={project.github} 
              className="btn-ghost text-sm px-4 py-2" 
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
              className="btn-primary text-sm px-4 py-2" 
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


