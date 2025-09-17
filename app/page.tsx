import Hero from "@/components/Hero";
import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import EducationCard from "@/components/EducationCard";
import About from "@/components/About";
import { PROJECTS } from "@/content/projects";
 

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />

      {/* Education */}
      <section id="education" className="section-wrap" aria-labelledby="education-heading">
        <div className="section-header">
          <h2 id="education-heading" className="section-title">
            <a href="#education" className="hover:text-primary-600 transition-colors">
              <span className="mr-2" aria-hidden="true">🎓</span>Education
            </a>
          </h2>
        </div>
        <div className="section-grid section-grid-md-2">
          <EducationCard
            index={0}
            edu={{
              degree: "M.S. in Computer Science",
              school: "University of Florida",
              location: "Gainesville, FL",
              dates: "Aug 2024 – May 2026",
              gpa: "3.86",
              coursework: [
                "Advanced Data Structures",
                "Distributed Systems",
                "Software Engineering",
                "NLP",
                "Analysis of Algorithms",
                "Internet Storage Systems",
                "Bioinformatics",
              ],
            }}
          />
          <EducationCard
            index={1}
            edu={{
              degree: "B.Tech. in Information Technology",
              school: "Vignan University",
              location: "Guntur, India",
              dates: "Oct 2020 – May 2024",
              gpa: "3.43",
              coursework: [
                "Data Structures",
                "Java",
                "Python",
                "Web Applications",
                "Database Management Systems",
                "IoT",
                "Computer Security",
                "Operating Systems",
              ],
            }}
          />
        </div>
        {/* Resume CTA removed to keep Education section focused */}
      </section>

      {/* Experience */}
      <section id="experience" className="section-wrap" aria-labelledby="experience-heading">
        <div className="section-header">
          <h2 id="experience-heading" className="section-title">
            <a href="#experience" className="hover:text-primary-600 transition-colors">
              <span className="mr-2" aria-hidden="true">💼</span>Experience
            </a>
          </h2>
          <Link className="btn-ghost" href="/experience">View all</Link>
        </div>
        <div className="section-grid">
          <ExperienceTimeline
            items={[
              { role: "Graduate Student Assistant", company: "University of Florida", dates: "Aug 2024 – Present", highlights: ["Dashboards & ML pipelines", "5k+ synthetic records (‑30% runtime)"] },
              { role: "Software Development Program Apprentice", company: "Vignan University", dates: "Jan 2024 – May 2024", highlights: ["Academic portal (‑40% workflows)", "Dashboards for 150+ users"] },
            ]}
          />
        </div>
      </section>

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

      <section className="section-wrap" aria-labelledby="cta-heading">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 id="cta-heading">Let's work together</h2>
            <p className="mt-1 text-slate-700">Reach out for full-time opportunities.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-primary" href="mailto:vivekvaleti7053@gmail.com?subject=Full-time%20SDE%20Opportunity">Email Me</a>
            <a className="btn-ghost" href="/resume" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}


