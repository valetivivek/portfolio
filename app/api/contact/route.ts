import { NextResponse } from "next/server";

const nameRegex = /^.{2,80}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);
  
  if (!record) {
    rateLimit.set(ip, { count: 1, lastReset: now });
    return true;
  }
  
  if (now - record.lastReset > RATE_LIMIT_WINDOW) {
    record.count = 1;
    record.lastReset = now;
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }
  
  record.count++;
  return true;
}

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
  return true;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ ok: false, error: "Too many requests. Please try again later." }, { status: 429 });
    }

    const data = await req.json().catch(() => ({}));
    const { name, email, message, website } = data || {};

    if (website) return NextResponse.json({ ok: true }, { status: 200 });

    if (!nameRegex.test(String(name || ""))) return NextResponse.json({ ok: false, error: "Invalid name" }, { status: 400 });
    if (!emailRegex.test(String(email || ""))) return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    const msg = String(message || "");
    if (msg.length < 10 || msg.length > 5000) return NextResponse.json({ ok: false, error: "Invalid message length" }, { status: 400 });

    const hasResend = !!process.env.RESEND_API_KEY;
    const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_PORT && process.env.SMTP_USER && process.env.SMTP_PASS);
    if (!hasResend && !hasSmtp) {
      return NextResponse.json({ ok: false, error: "Email service not configured. Use the email button as fallback." }, { status: 503 });
    }

    await sendEmail(name, email, msg);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}


