import ExperienceTimeline from "@/components/ExperienceTimeline";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "My professional experience as a Graduate Research Assistant at University of Florida and Software Development roles at Vignan University.",
  openGraph: {
    title: "Experience | Vishnu Vivek",
    description: "My professional experience as a Graduate Research Assistant at University of Florida and Software Development roles at Vignan University.",
  },
};

const experience = [
  {
    role: "Graduate Research Assistant",
    company: "University of Florida",
    dates: "Aug 2025 – Present",
    highlights: [
      "Built dashboards and ML pipelines for fairness in gambling‑related AI models",
      "Generated 5,000+ synthetic records reducing validation runtime by 30%",
      "Benchmarked fairness, transparency, robustness across vendors",
      "Collaborated on scalable evaluation framework with faculty and peers",
    ],
  },
  {
    role: "Software Development Program Apprentice",
    company: "Vignan University",
    dates: "Jan 2024 – May 2024",
    highlights: [
      "Built academic portal reducing workflows by 40% for 200+ users",
      "Automated records with PHP/MySQL backend, cutting data entry time 60%",
      "Designed dashboards serving 150+ active users",
    ],
  },
  {
    role: "Teaching Assistant",
    company: "Vignan University",
    dates: "Aug 2023 – May 2024",
    highlights: [
      "Supported DBMS and Web Development courses for 100+ students",
      "Introduced rubrics and feedback system across 6 sections",
      "Guided 20+ teams through end‑to‑end projects",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Experience</h1>
        <div className="mt-6">
          <ExperienceTimeline items={experience} />
        </div>
      </section>
    </main>
  );
}


