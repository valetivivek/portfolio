"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, staggerChildren } from "@/lib/motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 md:pt-16 pb-4 md:pb-6">
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl"
      >
        <motion.div variants={fadeUp} className="space-y-6">
          <div>
            <motion.h1 
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
            >
              Vishnu Vivek
            </motion.h1>
            <motion.p 
              variants={fadeUp}
              className="mt-4 text-xl md:text-2xl text-slate-600 font-medium"
            >
              SDE & Full-Stack Developer
            </motion.p>
            <motion.p 
              variants={fadeUp}
              className="mt-2 text-lg text-slate-500 max-w-2xl"
            >
              Graduate CS Student at University of Florida • Building scalable applications with React and Next.js • Open to full-time opportunities
            </motion.p>
          </div>
          
          <motion.div 
            variants={fadeUp} 
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <a 
              href="/resume" 
              className="btn-primary text-lg px-6 py-3 font-semibold" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a 
              href="mailto:vivekvaleti7053@gmail.com?subject=Full-time%20SDE%20Opportunity" 
              className="btn-ghost text-lg px-6 py-3 font-semibold"
            >
              Get In Touch
            </a>
          </motion.div>
          
          <motion.div 
            variants={fadeUp} 
            className="mt-8 flex items-center gap-4"
          >
            <span className="text-sm text-slate-500 font-medium">Connect with me:</span>
            <div className="flex items-center gap-3">
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
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}


