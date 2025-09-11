"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-12 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl"
      >
        <h1>Front‑End Developer</h1>
        <p className="mt-3">
          I craft clean, accessible interfaces with a focus on performance and UX.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <Link href="/projects" className="btn-primary">View Projects</Link>
          <Link href="/resume.pdf" className="btn-ghost" target="_blank" rel="noopener noreferrer">Resume</Link>
        </div>
      </motion.div>
    </section>
  );
}


