export type Project = {
  id: string;
  title: string;
  icon?: string;
  summary: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    id: "hushhabbit",
    title: "HushHabbit",
    icon: "Smartphone",
    summary: "A modern, privacy-focused habit tracking app for Android. Built with Jetpack Compose and Material 3, featuring streak tracking, smart reminders, and offline-first architecture.",
    tags: ["Kotlin", "Jetpack Compose", "Room", "Hilt", "Android"],
    github: "https://github.com/valetivivek/hushhabbit",
    featured: true,
  },
  {
    id: "comite",
    title: "Comite",
    icon: "Book",
    summary: "A sleek manga and manhua reading platform built with modern web technologies. Features mobile-first design, smooth animations, and an intuitive user interface for an enhanced reading experience.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    github: "https://github.com/valetivivek/Comite",
    featured: true,
  },
  {
    id: "jobscoop",
    title: "JobScoop",
    icon: "Compass",
    summary: "Full-stack job search platform with responsive React frontend, protected routes, authentication flows, and subscription dashboards. Features job filtering, date-based search, and company-role trend visualizations with Chart.js.",
    tags: ["Go", "React", "PostgreSQL", "Redis", "Docker", "Cypress", "Jest"],
    github: "https://github.com/crazyotakuu/JobScoop",
    featured: true,
  },
  {
    id: "reddit-forum",
    title: "Reddit-Style Discussion Platform",
    icon: "MessageSquare",
    summary: "Concurrency-safe backend supporting users, subreddits, posts, nested comments, voting, and direct messaging. Uses mutexes, atomic counters, and sync.Map for thread-safe state management with RESTful APIs.",
    tags: ["Go", "PostgreSQL", "REST", "Concurrency"],
    github: "https://github.com/valetivivek/redditclone",
    featured: true,
  },
  {
    id: "rule-bot",
    title: "Rule-Based Chatbot",
    icon: "Bot",
    summary: "Full-stack rule-driven chatbot with React and Node.js using native WebSocket messaging. Features hot-reloadable rule evaluation with JSON schemas, checksums, and containerized deployment with Docker Compose.",
    tags: ["React", "TypeScript", "Node.js", "Express", "WebSockets", "Redis", "Docker"],
    github: "https://github.com/valetivivek/rulebot",
    featured: true,
  },
];
