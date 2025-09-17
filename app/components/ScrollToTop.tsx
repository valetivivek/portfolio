"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 rounded-full border-2 border-emerald-600 bg-white/80 backdrop-blur p-3 text-emerald-600 shadow-lg transition-all duration-200 hover:bg-emerald-600 hover:text-white focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 dark:bg-slate-900/80"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}


