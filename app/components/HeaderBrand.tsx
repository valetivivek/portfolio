"use client";

import { useEffect, useState, useRef } from "react";

const FINAL_TEXT = "Vishnu Vivek";
const TEMP_TEXT = "Portfolio";

export default function HeaderBrand() {
  const [text, setText] = useState<string>(FINAL_TEXT);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setText(FINAL_TEXT);
      return;
    }

    let isMounted = true;
    let currentPhase = 0; // 0: type Portfolio, 1: pause, 2: erase, 3: type Vishnu Vivek, 4: pause, 5: erase

    const type = async (target: string, speed = 70) => {
      setIsTyping(true);
      for (let i = 0; i < target.length; i++) {
        if (!isMounted) return;
        setText(target.slice(0, i + 1));
        await new Promise((r) => setTimeout(r, speed));
      }
      setIsTyping(false);
    };

    const erase = async (target: string, speed = 40) => {
      setIsTyping(true);
      for (let i = target.length; i >= 0; i--) {
        if (!isMounted) return;
        setText((t) => t.slice(0, -1));
        await new Promise((r) => setTimeout(r, speed));
      }
      setIsTyping(false);
    };

    const runSequence = async () => {
      if (!isMounted) return;

      switch (currentPhase) {
        case 0: // Type Portfolio
          await type(TEMP_TEXT);
          currentPhase = 1;
          timeoutRef.current = setTimeout(runSequence, 1500);
          break;
        case 1: // Pause after Portfolio
          currentPhase = 2;
          timeoutRef.current = setTimeout(runSequence, 0);
          break;
        case 2: // Erase Portfolio
          await erase(TEMP_TEXT);
          currentPhase = 3;
          timeoutRef.current = setTimeout(runSequence, 0);
          break;
        case 3: // Type Vishnu Vivek
          await type(FINAL_TEXT);
          currentPhase = 4;
          timeoutRef.current = setTimeout(runSequence, 2000);
          break;
        case 4: // Pause after Vishnu Vivek
          currentPhase = 5;
          timeoutRef.current = setTimeout(runSequence, 0);
          break;
        case 5: // Erase Vishnu Vivek
          await erase(FINAL_TEXT);
          currentPhase = 0; // Loop back to start
          timeoutRef.current = setTimeout(runSequence, 0);
          break;
      }
    };

    // Start the sequence
    runSequence();

    return () => {
      isMounted = false;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <span
      aria-live="polite"
      role="status"
      className="inline-block min-w-[12ch] tabular-nums align-middle"
    >
      {text}
      {mounted && isTyping ? <span className="animate-pulse">|</span> : null}
    </span>
  );
}
