import EducationCard from "@/components/EducationCard";
import { EDUCATION } from "@/content/education";
import { GraduationCap } from "lucide-react";

export default function EducationSection() {
    return (
        <section id="education" className="section-wrap" aria-labelledby="education-heading">
            <div className="section-header">
                <h2 id="education-heading" className="section-title">
                    <a href="#education" className="hover:text-primary-500 transition-colors flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-text" aria-hidden="true" />
                        <span className="font-heading font-bold text-text">Education</span>
                    </a>
                </h2>
            </div>
            <div className="section-grid section-grid-md-2">
                {EDUCATION.map((edu, index) => (
                    <EducationCard key={index} index={index} edu={edu} />
                ))}
            </div>
        </section>
    );
}
