"use client";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function ContactClient() {
  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <h1>Contact</h1>
        <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">I&apos;m open to full‑time SDE and full‑stack roles. Feel free to reach out.</p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link className="btn-primary" href="mailto:vishnuvivek.valeti@gmail.com?subject=Full-time%20SDE%20Opportunity" aria-label="Email me">
            Email Me
          </Link>
          <Link className="btn-ghost" href="https://www.linkedin.com/in/valetivishnuvivek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
            LinkedIn
          </Link>
          <Link className="btn-ghost" href="https://github.com/valetivivek" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            GitHub
          </Link>
        </div>

        <ContactForm />
      </section>
    </main>
  );
}
