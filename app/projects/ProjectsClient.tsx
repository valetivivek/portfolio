"use client";

import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/content/projects";

export default function ProjectsClient() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Projects</h1>
        <p className="mt-2 text-slate-700">A collection of my work across different technologies and domains.</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}
