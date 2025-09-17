"use client";
import Link from "next/link";
import { useState, useTransition } from "react";

export default function ContactClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("idle");
    startTransition(async () => {
      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message, website: "" }),
        });
        const json = await res.json();
        if (json.ok) {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    });
  };

  return (
    <main className="container-page">
        <section className="py-12 md:py-16">
          <h1>Contact</h1>
          <p className="mt-3 max-w-2xl text-slate-700 dark:text-slate-300">I'm open to full‑time SDE and full‑stack roles. Feel free to reach out.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link className="btn-primary" href="mailto:vivekvaleti7053@gmail.com?subject=Full-time%20SDE%20Opportunity" aria-label="Email me">
              Email Me
            </Link>
            <Link className="btn-ghost" href="https://www.linkedin.com/in/valetivishnuvivek/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
              LinkedIn
            </Link>
            <Link className="btn-ghost" href="https://github.com/valetivivek" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
              GitHub
            </Link>
          </div>

          <form onSubmit={onSubmit} className="mt-8 max-w-xl space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100" htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required minLength={2} maxLength={80} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500 dark:focus-visible:ring-offset-slate-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="johndoe@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500 dark:focus-visible:ring-offset-slate-900" />
            </div>
            <div className="hidden" aria-hidden>
              <label htmlFor="website">Website</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" className="invisible h-0 w-0" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-900 dark:text-slate-100" htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="I’d like to collaborate on…" value={message} onChange={(e) => setMessage(e.target.value)} required minLength={10} maxLength={5000} rows={6} className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder-slate-500 dark:focus-visible:ring-offset-slate-900" />
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" className="btn-primary" disabled={isPending}>{isPending ? "Sending..." : "Send message"}</button>
              <a className="btn-ghost" href={`mailto:vivekvaleti7053@gmail.com?subject=${encodeURIComponent("Full-time SDE Opportunity")}&body=${encodeURIComponent(message)}`}>Open email client</a>
            </div>
            {status === "success" && <p role="status" className="text-sm text-green-700">Message sent. Thank you!</p>}
            {status === "error" && <p role="alert" className="text-sm text-red-700">Something went wrong. Please try again or use the email button.</p>}
          </form>
        </section>
    </main>
  );
}
