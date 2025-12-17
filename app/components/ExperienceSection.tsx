import Link from "next/link";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { EXPERIENCE } from "@/content/experience";
import { Building2 } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="section-wrap" aria-labelledby="experience-heading">
            <div className="section-header">
                <h2 id="experience-heading" className="section-title">
                    <a href="#experience" className="hover:text-primary-500 transition-colors flex items-center gap-2">
                        <Building2 className="h-6 w-6 text-text" aria-hidden="true" />
                        <span className="font-heading font-bold text-text">Experience</span>
                    </a>
                </h2>
                <Link className="btn-ghost" href="/experience">View all</Link>
            </div>
            <div className="section-grid">
                <ExperienceTimeline items={EXPERIENCE} />
            </div>
        </section>
    );
}
