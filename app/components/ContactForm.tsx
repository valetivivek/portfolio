"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

export default function ContactForm() {
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
        <form onSubmit={onSubmit} className="max-w-xl space-y-4" noValidate>
            <div>
                <label className="block text-sm font-medium text-text" htmlFor="name">
                    Name <span className="text-primary-500" aria-label="required">*</span>
                </label>
                <input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength={2}
                    maxLength={80}
                    className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-text placeholder-muted shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow duration-200"
                    aria-describedby="name-error"
                />
                {name && name.length < 2 && (
                    <p id="name-error" className="mt-1 text-sm text-red-500" role="alert">
                        Name must be at least 2 characters long.
                    </p>
                )}
            </div>
            <div>
                <label className="block text-sm font-medium text-text" htmlFor="email">
                    Email <span className="text-primary-500" aria-label="required">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-text placeholder-muted shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow duration-200"
                    aria-describedby="email-error"
                />
                {email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
                    <p id="email-error" className="mt-1 text-sm text-red-500" role="alert">
                        Please enter a valid email address.
                    </p>
                )}
            </div>
            {/* Honeypot field */}
            <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" tabIndex={-1} autoComplete="off" className="invisible h-0 w-0" />
            </div>
            <div>
                <label className="block text-sm font-medium text-text" htmlFor="message">
                    Message <span className="text-primary-500" aria-label="required">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to collaborate on…"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    minLength={10}
                    maxLength={5000}
                    rows={6}
                    className="mt-1 w-full rounded-md border border-border bg-surface px-3 py-2 text-text placeholder-muted shadow-subtle focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-shadow duration-200"
                    aria-describedby="message-error message-help"
                />
                <p id="message-help" className="mt-1 text-sm text-muted">
                    Minimum 10 characters, maximum 5000 characters.
                </p>
                {message && message.length < 10 && (
                    <p id="message-error" className="mt-1 text-sm text-red-500" role="alert">
                        Message must be at least 10 characters long.
                    </p>
                )}
            </div>
            <div className="flex items-center gap-3">
                <button type="submit" className="btn-primary" disabled={isPending}>{isPending ? "Sending..." : "Send message"}</button>
                <a className="btn-ghost" href={`mailto:vivekvaleti7053@gmail.com?subject=${encodeURIComponent("Full-time SDE Opportunity")}&body=${encodeURIComponent(message)}`}>Open email client</a>
            </div>
            {status === "success" && <p role="status" className="text-sm text-green-500">Message sent. Thank you!</p>}
            {status === "error" && <p role="alert" className="text-sm text-red-500">Something went wrong. Please try again or use the email button.</p>}
        </form>
    );
}
