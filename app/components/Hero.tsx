"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-6 md:pt-8 lg:pt-10 pb-0 md:pb-0 mb-2 md:mb-2">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="container-page"
      >
        <motion.div variants={fadeUp} className="space-y-3 md:space-y-4">
          <div>
            <motion.h1
              variants={fadeUp}
              className="text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
            >
              Vishnu Vivek
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-2xl text-slate-700 dark:text-slate-300 font-medium"
            >
              SDE & Full-Stack Developer
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-2xl"
            >
              Graduate CS Student at University of Florida • Open to SDE and Full-Stack roles full time
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a
              href="/resume/resume.pdf"
              className="btn-primary text-lg px-6 py-3 font-semibold"
              download="Vishnu_Vivek_Resume.pdf"
            >
              Download Resume
            </a>
            <a
              href="mailto:vivekvaleti7053@gmail.com?subject=Full-time%20SDE%20Opportunity"
              className="px-6 py-3 rounded-md font-semibold text-lg bg-white text-emerald-600 border-2 border-emerald-600 hover:bg-emerald-600 hover:text-white hover:shadow-md transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">Connect with me:</span>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/valetivishnuvivek/"
                aria-label="LinkedIn profile"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer me"
                className="p-3 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-200 hover:scale-105"
              >
                <Linkedin className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="mailto:vivekvaleti7053@gmail.com?subject=Full-time%20SDE%20Opportunity"
                aria-label="Email me"
                title="Email"
                className="p-3 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-200 hover:scale-105"
                rel="me"
              >
                <Mail className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="https://github.com/valetivivek"
                aria-label="GitHub profile"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer me"
                className="p-3 rounded-lg hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all duration-200 hover:scale-105"
              >
                <Github className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


