"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
    "Go", "PostgreSQL", "Docker", "Python", "Java", "Redis", "AWS",
    "Node.js", "Git", "Linux"
];

export default function TechTicker() {
    return (
        <div className="w-full overflow-hidden bg-slate-50 dark:bg-slate-900/50 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="flex select-none gap-8">
                <motion.div
                    className="flex min-w-full shrink-0 gap-8 items-center justify-around"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {TECH_STACK.map((tech, index) => (
                        <span key={index} className="text-lg font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {tech}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex min-w-full shrink-0 gap-8 items-center justify-around"
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {TECH_STACK.map((tech, index) => (
                        <span key={`duplicate-${index}`} className="text-lg font-semibold text-slate-500 dark:text-slate-400 whitespace-nowrap">
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
