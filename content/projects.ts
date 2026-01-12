
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
    image: "/projects/comite.jpg",
    featured: true,
  },
  {
    id: "jobscoop",
    title: "JobScoop",
    icon: "Compass",
    summary: "Full-stack job search platform with advanced filtering, secure authentication, and comprehensive dashboards. Built with Go backend and React frontend for optimal performance and scalability.",
    tags: ["Go", "React", "PostgreSQL", "Redis", "Docker", "Cypress"],
    github: "https://github.com/crazyotakuu/JobScoop",
    image: "/projects/jobscoop.jpg",
    featured: true,
  },
  {
    id: "reddit-forum",
    title: "Discussion Forum",
    icon: "MessageSquare",
    summary: "A scalable Reddit-style discussion forum with concurrency safety, REST APIs, and robust backend architecture. Handles high-traffic scenarios with efficient database design.",
    tags: ["Go", "PostgreSQL", "REST", "Concurrency"],
    github: "https://github.com/valetivivek/redditclone",
    image: "/projects/discussion-forum.jpg",
    featured: true,
  },
  {
    id: "rule-bot",
    title: "Rule Based Chatbot",
    icon: "Bot",
    summary: "Interactive chatbot with real-time communication capabilities. Features intelligent response handling, WebSocket integration, and containerized deployment for easy scaling.",
    tags: ["React", "Flask", "WebSockets", "Docker", "Python"],
    github: "https://github.com/valetivivek/rulebot",
    image: "/projects/rule-bot.jpg",
    featured: true,
  },
];


