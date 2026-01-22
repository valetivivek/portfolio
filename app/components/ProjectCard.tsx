"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, Book, Compass, MessageSquare, Bot, Smartphone } from "lucide-react";
import type { Project } from "@/content/projects";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

const iconMap: Record<string, IconComponent> = {
  Book,
  Compass,
  MessageSquare,
  Bot,
  Smartphone
};

export default function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const Icon = project.icon ? iconMap[project.icon] : null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`card group overflow-hidden ${compact ? "p-4" : "p-6"} h-full flex flex-col`}
    >
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <h3 className="font-heading text-xl font-bold text-text group-hover:text-primary-500 transition-colors flex items-center gap-2">
              {Icon && <Icon className="h-6 w-6 text-text" aria-hidden />}
              <span>{project.title}</span>
            </h3>
            <p className="mt-2 text-muted leading-relaxed">{project.summary}</p>
          </div>
        </div>

        <div className="mb-6">
          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="tag">{tag}</li>
            ))}
          </ul>
        </div>

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


