import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-surface">
      <div className="container-page grid gap-8 py-10 sm:grid-cols-3 text-sm text-slate-700">
        <div>
          <p className="font-semibold text-slate-900">Vishnu Vivek</p>
          <p className="mt-2 max-w-xs">Minimal, professional front‑end portfolio. Built with Next.js.</p>
          <p className="mt-3 text-xs text-slate-500">&copy; {new Date().getFullYear()} Valeti V. All rights reserved.</p>
        </div>
        <nav aria-label="Quick links">
          <p className="font-medium text-slate-900">Quick Links</p>
          <ul className="mt-2 space-y-2">
            <li><Link className="hover:underline" href="/">Home</Link></li>
            <li><Link className="hover:underline" href="/projects">Projects</Link></li>
            <li><Link className="hover:underline" href="/experience">Experience</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            <li><Link className="hover:underline" href="/resume">Resume</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-medium text-slate-900">Contact</p>
          <ul className="mt-2 space-y-2">
            <li>
              <a className="hover:underline inline-flex items-center gap-2" href="mailto:vivekvaleti7053@gmail.com" aria-label="Email">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.236l7.386 6.4a1 1 0 0 0 1.228 0L20 8.236V18H4Z"/></svg>
                Email
              </a>
            </li>
            <li>
              <a className="hover:underline inline-flex items-center gap-2" href="https://github.com/valetivivek" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.162 19.49c.5.092.683-.217.683-.483 0-.237-.009-.866-.013-1.7-2.78.604-3.366-1.34-3.366-1.34-.454-1.156-1.11-1.464-1.11-1.464-.907-.62.069-.607.069-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.341 1.087 2.91.832.091-.647.35-1.087.636-1.338-2.22-.252-4.555-1.112-4.555-4.95 0-1.093.39-1.988 1.03-2.688-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.338 1.909-1.295 2.748-1.026 2.748-1.026.547 1.376.203 2.393.1 2.646.64.7 1.028 1.595 1.028 2.688 0 3.847-2.339 4.695-4.566 4.943.36.309.681.918.681 1.852 0 1.336-.012 2.414-.012 2.743 0 .268.18.58.688.481A10.002 10.002 0 0 0 12 2"/></svg>
                GitHub
              </a>
            </li>
            <li>
              <a className="hover:underline inline-flex items-center gap-2" href="https://www.linkedin.com/in/valetivishnuvivek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4"><path fill="currentColor" d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.83v2.18h.05c.53-1 1.83-2.18 3.77-2.18 4.03 0 4.78 2.65 4.78 6.1V24h-4v-6.84c0-1.63-.03-3.72-2.27-3.72-2.27 0-2.62 1.77-2.62 3.6V24h-4V8z"/></svg>
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mt-4 text-xs text-slate-500">Built with Next.js, TypeScript, Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}


