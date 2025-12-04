import Hero from "@/components/Hero";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import About from "@/components/About";
import { PROJECTS } from "@/content/projects";
import TechTicker from "@/components/TechTicker";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />

      <EducationSection />
      <ExperienceSection />

      {/* Featured Projects */}
      <section id="projects" className="section-wrap" aria-labelledby="projects-heading">
        <div className="section-header">
          <h2 id="projects-heading" className="section-title">
            <a href="#projects" className="hover:text-primary-600 transition-colors">
              Featured Projects
            </a>
          </h2>
          <Link className="btn-ghost" href="/projects">View all</Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.filter((p) => p.featured).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>


      <div className="-mb-16">
        <TechTicker />
      </div>
    </main>
  );
}
