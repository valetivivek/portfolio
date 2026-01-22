import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const subject = searchParams.get('subject') || 'Portfolio Inquiry';
  const body = searchParams.get('body') || '';
  
  const email = process.env.CONTACT_TO_EMAIL || process.env.CONTACT_EMAIL || 'contact@example.com';
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;
  
  return NextResponse.redirect(mailtoUrl);
}