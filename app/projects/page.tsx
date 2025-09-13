import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of full-stack projects built with React, Next.js, Go, and modern web technologies. Filter by technology to find specific projects.",
  openGraph: {
    title: "Projects | Vishnu Vivek",
    description: "Explore my portfolio of full-stack projects built with React, Next.js, Go, and modern web technologies.",
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}


