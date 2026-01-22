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
        dates: "Dec 2025 – Present",
        highlights: [
            "Trained and fine-tuned supervised ML models in Python for scalable production systems",
            "Built reproducible cloud-based model training pipelines on AWS for experimentation",
            "Collaborated with engineering teams to integrate ML outputs into production workflows",
            "Supported dataset preparation, model evaluation, and performance optimization",
        ],
    },
    {
        role: "Graduate Student Assistant",
        company: "University of Florida",
        dates: "Aug 2025 – Dec 2025",
        highlights: [
            "Developed and deployed a React-based accreditation platform on Vercel for 10+ operators",
            "Implemented decision-analysis logic using ARAS with gatekeeper criteria",
            "Built dynamic UI components and reporting workflows reducing manual effort by 50%",
            "Collaborated with stakeholders to translate requirements into maintainable frontend logic",
        ],
    },
    {
        role: "Software Development Program Apprentice",
        company: "Vignan University",
        dates: "Jan 2024 – May 2024",
        highlights: [
            "Built full-stack academic portal with React, PHP, and MySQL for end-to-end workflows",
            "Automated core record management and validation logic eliminating redundant processes",
            "Designed secure, role-based dashboards for academic and administrative users",
            "Implemented backend integrations and database queries for data consistency",
        ],
    },
];
