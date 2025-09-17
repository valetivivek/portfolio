"use client";

import { useState, useMemo } from "react";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/content/projects";

export default function ProjectsClient() {
  const [selectedTech, setSelectedTech] = useState<string>("all");
  
  // Get all unique tech stacks
  const allTechs = useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(project => {
      project.tags.forEach(tag => techs.add(tag));
    });
    return Array.from(techs).sort();
  }, []);

  // Filter projects based on selected tech
  const filteredProjects = useMemo(() => {
    if (selectedTech === "all") return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(selectedTech));
  }, [selectedTech]);

  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Projects</h1>
        <p className="mt-2 text-slate-700">A collection of my work across different technologies and domains.</p>
        
        {/* Filter by tech stack */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Filter by Technology</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTech("all")}
              className={`px-3 py-1 rounded-md text-sm transition-colors ${
                selectedTech === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(tech)}
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  selectedTech === tech
                    ? "bg-primary-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500">No projects found for the selected technology.</p>
          </div>
        )}
      </section>
    </main>
  );
}
