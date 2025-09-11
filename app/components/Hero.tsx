"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-8 md:pt-10 pb-4 md:pb-6">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-3xl"
      >
        <motion.h1 variants={fadeUp}>Vishnu Vivek</motion.h1>
        <motion.p variants={fadeUp} className="mt-2 text-slate-700">
          Graduate CS Student at UF • Full-Stack Developer • Open to SDE Internships
        </motion.p>
        <motion.div variants={fadeUp} className="mt-3 flex items-center gap-2">
          <a href="https://github.com/valetivivek" aria-label="GitHub" title="GitHub" target="_blank" rel="noopener noreferrer me" className="p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200">
            <Github className="h-4 w-4" aria-hidden />
          </a>
          <a href="https://www.linkedin.com/in/valetivishnuvivek/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer me" className="p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200">
            <Linkedin className="h-4 w-4" aria-hidden />
          </a>
          <a href="mailto:vivekvaleti7053@gmail.com?subject=Portfolio%20Inquiry" aria-label="Email" title="Email" className="p-2 rounded hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200" rel="me">
            <Mail className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}


