import Hero from "@/components/Hero";
import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import EducationCard from "@/components/EducationCard";
import About from "@/components/About";
import { PROJECTS } from "@/content/projects";
 

export default function HomePage() {
  return (
    <main className="container-page">
      <Hero />
      <About />

      {/* Education */}
      <section id="education" className="py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="group">
            <a href="#education" className="hover:text-primary-600 transition-colors">
              🎓 Education
            </a>
          </h2>
        </div>
        <div className="mt-4 grid gap-6 md:grid-cols-2">
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
        <div className="mt-4">
          <a className="btn-ghost" href="/resume" target="_blank" rel="noopener noreferrer">View Resume</a>
        </div>
      </section>

      {/* Experience preview */}
      <section id="experience" className="py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="group">
            <a href="#experience" className="hover:text-primary-600 transition-colors">
              💼 Experience
            </a>
          </h2>
          <Link className="btn-ghost" href="/experience">View all</Link>
        </div>
        <div className="mt-4">
          <ExperienceTimeline
            items={[
              { role: "Graduate Research Assistant", company: "University of Florida", dates: "Aug 2025 – Present", highlights: ["Dashboards & ML pipelines", "5k+ synthetic records (‑30% runtime)"] },
              { role: "Software Development Program Apprentice", company: "Vignan University", dates: "Jan 2024 – May 2024", highlights: ["Academic portal (‑40% workflows)", "Dashboards for 150+ users"] },
            ]}
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-12 md:py-16">
        <div className="flex items-center justify-between">
          <h2 className="group">
            <a href="#projects" className="hover:text-primary-600 transition-colors">
              Featured Projects
            </a>
          </h2>
          <Link className="btn-ghost" href="/projects">View all</Link>
        </div>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          {PROJECTS.filter((p) => p.featured).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="card p-4 rounded-xl border bg-white shadow-sm flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2>Let’s work together</h2>
            <p className="mt-1 text-slate-700">Reach out for roles or internships.</p>
          </div>
          <div className="flex gap-3">
            <a className="btn-primary" href="mailto:vivekvaleti7053@gmail.com?subject=SDE%20Internship%20Inquiry">Email Me</a>
            <a className="btn-ghost" href="/resume" target="_blank" rel="noopener noreferrer">View Resume</a>
          </div>
        </div>
      </section>
    </main>
  );
}


