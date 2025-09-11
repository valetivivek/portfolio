import { NextResponse } from "next/server";

const nameRegex = /^.{2,80}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // basic RFC 5322-ish

async function sendEmail(name: string, email: string, message: string) {
  const useResend = !!process.env.RESEND_API_KEY;
  if (useResend) {
    const apiKey = process.env.RESEND_API_KEY!;
    const to = process.env.CONTACT_TO_EMAIL || process.env.RESEND_TO || "";
    const from = process.env.CONTACT_FROM_EMAIL || process.env.RESEND_FROM || "";
    if (!to || !from) throw new Error("Missing CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL env vars");
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ to, from, subject: `Portfolio contact from ${name}`, text: `From: ${name} <${email}>\n\n${message}` }),
    });
    if (!resp.ok) throw new Error("Resend API error");
    return true;
  }
  // SMTP fallback via Nodemailer
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : undefined;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (host && port && user && pass) {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({ host, port, auth: { user, pass } });
    const to = process.env.CONTACT_TO || process.env.CONTACT_TO_EMAIL || "";
    const from = process.env.CONTACT_FROM || process.env.CONTACT_FROM_EMAIL || user;
    if (!to || !from) throw new Error("Missing CONTACT_TO or CONTACT_FROM env vars");
    await transporter.sendMail({ to, from, subject: `Portfolio contact from ${name}`, text: `From: ${name} <${email}>\n\n${message}` });
    return true;
  }
  // Final fallback: no-op success
  return true;
}

export async function POST(req: Request) {
  try {
    const data = await req.json().catch(() => ({}));
    const { name, email, message, website } = data || {};

    // simple honeypot
    if (website) return NextResponse.json({ ok: true }, { status: 200 });

    if (!nameRegex.test(String(name || ""))) return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 });
    if (!emailRegex.test(String(email || ""))) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    const msg = String(message || "");
    if (msg.length < 10 || msg.length > 5000) return NextResponse.json({ ok: false, error: "Invalid message length" }, { status: 400 });

    await sendEmail(name, email, msg);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


