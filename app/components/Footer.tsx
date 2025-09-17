import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-surface dark:border-slate-700 dark:bg-slate-900">
      <nav aria-label="Footer" className="container-page text-sm text-slate-700 dark:text-slate-300">
        <div className="grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
          <section>
            <p className="font-semibold text-slate-900 dark:text-slate-100">Vishnu Vivek</p>
            <p className="mt-2 max-w-xs text-slate-600 dark:text-slate-400">Software Engineer focused on building reliable, user‑centric web applications.</p>
          </section>
          <section>
            <p className="font-medium text-slate-900 dark:text-slate-100">Navigation</p>
            <ul role="list" className="mt-2 space-y-2">
              <li><Link className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand.teal rounded" href="/">Home</Link></li>
              <li><Link className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand.teal rounded" href="/projects">Projects</Link></li>
              <li><Link className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand.teal rounded" href="/experience">Experience</Link></li>
              <li><Link className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand.teal rounded" href="/contact">Contact</Link></li>
            </ul>
          </section>
          <section>
            <p className="font-medium text-slate-900 dark:text-slate-100">Contact</p>
            <ul role="list" className="mt-1 flex gap-1.5">
              <li>
                <a href="mailto:vivekvaleti7053@gmail.com" aria-label="Email" title="Email" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200" rel="me">
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                <a href="https://github.com/valetivivek" aria-label="GitHub" title="GitHub" target="_blank" rel="me noopener noreferrer" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200">
                  <Github className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/valetivishnuvivek/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="me noopener noreferrer" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand.teal transition duration-200">
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </section>
          <section className="self-end md:text-right">
            <p className="text-xs text-slate-500 dark:text-slate-400">&copy; {new Date().getFullYear()} Vishnu Vivek.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Built with Next.js, TypeScript, Tailwind.</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              <Link href="/privacy" className="hover:underline focus:outline-none focus:ring-2 focus:ring-brand.teal rounded">
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </nav>
    </footer>
  );
}


