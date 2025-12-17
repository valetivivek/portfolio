import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <nav aria-label="Footer" className="container-page text-sm text-muted">
        <div className="grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-4">
          <section>
            <p className="font-semibold font-heading text-text">Vishnu Vivek</p>
            <p className="mt-2 max-w-xs text-muted">Software Engineer focused on building reliable, user‑centric web applications.</p>
          </section>
          <section>
            <p className="font-medium font-heading text-text">Navigation</p>
            <ul role="list" className="mt-2 space-y-2">
              <li><Link className="hover:underline hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 rounded" href="/">Home</Link></li>
              <li><Link className="hover:underline hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 rounded" href="/projects">Projects</Link></li>
              <li><Link className="hover:underline hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 rounded" href="/experience">Experience</Link></li>
              <li><Link className="hover:underline hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 rounded" href="/contact">Contact</Link></li>
            </ul>
          </section>
          <section>
            <p className="font-medium font-heading text-text">Contact</p>
            <ul role="list" className="mt-1 flex gap-1.5">
              <li>
                <a href="mailto:vivekvaleti7053@gmail.com" aria-label="Email" title="Email" className="p-2 rounded hover:bg-bg hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-200" rel="me">
                  <Mail className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                <a href="https://github.com/valetivivek" aria-label="GitHub" title="GitHub" target="_blank" rel="me noopener noreferrer" className="p-2 rounded hover:bg-bg hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-200">
                  <Github className="h-4 w-4" aria-hidden />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/valetivishnuvivek/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="me noopener noreferrer" className="p-2 rounded hover:bg-bg hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 transition duration-200">
                  <Linkedin className="h-4 w-4" aria-hidden />
                </a>
              </li>
            </ul>
          </section>
          <section className="self-end md:text-right">
            <p className="text-xs text-muted">&copy; {new Date().getFullYear()} Vishnu Vivek.</p>
            <p className="text-xs text-muted">Built with Next.js, TypeScript, Tailwind.</p>
            <p className="text-xs text-muted mt-1">
              <Link href="/privacy" className="hover:underline hover:text-text focus:outline-none focus:ring-2 focus:ring-primary-500 rounded">
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </nav>
    </footer>
  );
}


