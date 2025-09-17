"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Initialize theme (default light regardless of system preference)
  useEffect(() => {
    const stored = typeof window !== "undefined" ? (localStorage.getItem("theme") as "light" | "dark" | null) : null;
    const initial = stored ?? "light";
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    try { localStorage.setItem("theme", next); } catch {}
  };

  useEffect(() => {
    // Close mobile menu when route changes
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-slate-900/90 dark:border-slate-700 ${scrolled ? "shadow-lg" : ""}`}>
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Main">
        <Link 
          href="/" 
          className="text-xl font-bold text-slate-900 hover:text-primary-700 transition-colors dark:text-slate-100 dark:hover:text-emerald-200"
        >
          Vishnu Vivek
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-2">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary-700 bg-primary-50 dark:text-emerald-200 dark:bg-slate-800" 
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  target={l.href === "/resume" ? "_blank" : undefined}
                  rel={l.href === "/resume" ? "noopener noreferrer" : undefined}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="ml-2 p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur dark:bg-slate-900/95 dark:border-slate-700">
          <ul className="container-page py-4 space-y-2">
            {links.map((l) => {
              const isActive = pathname === l.href;
              return (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? "text-primary-700 bg-primary-50 dark:text-emerald-200 dark:bg-slate-800" 
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-200 dark:hover:text-white dark:hover:bg-slate-800"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    target={l.href === "/resume" ? "_blank" : undefined}
                    rel={l.href === "/resume" ? "noopener noreferrer" : undefined}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}


