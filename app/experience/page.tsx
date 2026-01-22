import ExperienceTimeline from "@/components/ExperienceTimeline";
import { EXPERIENCE } from "@/content/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience including Machine Learning Engineering at ReplyQuick LLC and Graduate Research at University of Florida.",
  openGraph: {
    title: "Experience | Vishnu Vivek",
    description: "Professional experience including Machine Learning Engineering at ReplyQuick LLC and Graduate Research at University of Florida.",
  },
};

export default function ExperiencePage() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Experience</h1>
        <div className="mt-6 max-w-3xl mx-auto">
          <ExperienceTimeline items={EXPERIENCE} />
        </div>
      </section>
    </main>
  );
}


