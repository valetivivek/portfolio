import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Projects</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}


