import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "UI Component Library",
    description: "A small, accessible React component set with headless patterns and Tailwind.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/valetivivek/ui-library",
    live: "https://ui-library.example.com"
  },
  {
    title: "Portfolio Website",
    description: "This site. Built with Next.js App Router, motion, and clean UI.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    github: "https://github.com/valetivivek/portfolio"
  },
  {
    title: "API Dashboard",
    description: "Minimal dashboard to visualize API latency and error rates.",
    tech: ["Next.js", "Chart.js", "SWR"],
    github: "https://github.com/valetivivek/api-dashboard",
    live: "https://api-dashboard.example.com"
  }
];

export default function ProjectsPage() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Projects</h1>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>
    </main>
  );
}


