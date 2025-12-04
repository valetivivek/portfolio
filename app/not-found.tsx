"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Star, Moon } from "lucide-react";

export default function NotFound() {
  return (
    <main className="container-page min-h-[70vh] flex flex-col items-center justify-center overflow-hidden relative">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0.1, scale: 0.5 }}
            animate={{
              opacity: [0.1, 0.5, 0.1],
              scale: [0.5, 1, 0.5],
              x: Math.random() * 100 - 50,
              y: Math.random() * 100 - 50,
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute text-slate-300 dark:text-slate-700"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            <Star className="h-4 w-4" />
          </motion.div>
        ))}
      </div>

      <div className="text-center space-y-8 relative z-10">
        <div className="relative h-40 w-40 mx-auto">
          {/* Moon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center text-slate-200 dark:text-slate-800"
          >
            <Moon className="h-32 w-32 opacity-20" />
          </motion.div>

          {/* Rocket */}
          <motion.div
            initial={{ y: 0, rotate: 45 }}
            animate={{
              y: [-10, 10, -10],
              rotate: [42, 48, 42]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative z-10 text-primary-600 dark:text-primary-400"
          >
            <Rocket className="h-24 w-24" />
          </motion.div>
        </div>

        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold text-slate-900 dark:text-slate-100"
          >
            404
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-2xl font-semibold text-slate-700 dark:text-slate-300"
          >
            Lost in Space?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 max-w-md mx-auto"
          >
            The page you&apos;re looking for seems to have drifted away into the cosmos.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/" className="btn-primary">
            Return to Earth
          </Link>
          <Link href="/contact" className="btn-ghost">
            Report Missing Page
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
