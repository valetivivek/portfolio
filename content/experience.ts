export type ExperienceItem = {
    role: string;
    company: string;
    dates: string;
    highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
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
