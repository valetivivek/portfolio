export type Project = {
  id: string;
  title: string;
  emoji?: string;
  summary: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "comite",
    title: "Comite",
    emoji: "📚",
    summary: "Sleek manga and manhua reading platform with mobile-first design and smooth animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/valetivivek/Comite",
    featured: true,
  },
  {
    id: "jobscoop",
    title: "JobScoop",
    emoji: "🧭",
    summary: "Job search platform with filters, secure auth, and dashboards.",
    tags: ["Go", "React", "PostgreSQL", "Redis", "Docker", "Cypress"],
    github: "https://github.com/crazyotakuu/JobScoop",
    featured: true,
  },
  {
    id: "reddit-forum",
    title: "Discussion Forum",
    emoji: "💬",
    summary: "Scalable forum with concurrency safety and REST APIs.",
    tags: ["Go", "PostgreSQL", "REST"],
    github: "https://github.com/valetivivek/redditclone",
    featured: true,
  },
  {
    id: "rule-bot",
    title: "Rule Based Chatbot",
    emoji: "🤖",
    summary: "Interactive chatbot with real-time communication.",
    tags: ["React", "Flask", "WebSockets", "Docker"],
    github: "https://github.com/valetivivek/rulebot",
    featured: true,
  },
];


