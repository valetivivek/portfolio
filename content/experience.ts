export type ExperienceItem = {
    role: string;
    company: string;
    dates: string;
    highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: "Machine Learning Engineer Intern",
        company: "ReplyQuick LLC",
        dates: "Dec 2025 – Mar 2026",
        highlights: [
            "Developed ML models & inference systems for ReplyQuick/DentalScan platforms",
            "Optimized dataset labeling & model evaluation workflows",
            "Integrated AI-driven image analysis into production backends",
        ],
    },
    {
        role: "Graduate Student Assistant",
        company: "University of Florida",
        dates: "Aug 2024 – Present",
        highlights: [
            "Dashboards & ML pipelines",
            "5k+ synthetic records (‑30% runtime)",
        ],
    },
    {
        role: "Software Development Program Apprentice",
        company: "Vignan University",
        dates: "Jan 2024 – May 2024",
        highlights: [
            "Academic portal (‑40% workflows)",
            "Dashboards for 150+ users",
        ],
    },
];
