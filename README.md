# Vishnu Vivek Valeti — Portfolio

Minimal, professional portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Deployed on Vercel. Accessible, fast, and recruiter‑friendly.

[![License](https://img.shields.io/badge/license-MIT-informational.svg)](#license)
[![Demo](https://img.shields.io/badge/demo-Live-success.svg)](https://valetiportfolio.vercel.app/)
[![Tech Stack](https://img.shields.io/badge/stack-Next.js%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20FramerMotion-blueviolet.svg)](#tech-stack)

---

## ✨ Introduction

This is my personal portfolio website showcasing projects, experience, and contact information. It focuses on clarity, solid color design (no glassmorphism), subtle animations, and strong accessibility.

- Framework: Next.js 14 (App Router) + TypeScript
- Styling: Tailwind CSS, solid teal/olive palette
- Motion: Framer Motion (reduced motion respected)
- Deployment: Vercel (Preview + Production)
- A11y: Semantic HTML, focus-visible, alt text, keyboard-friendly nav

---

## 🗂 Project Structure

```bash
.
├─ app/
│  ├─ api/
│  │  └─ contact/route.ts        
│  ├─ contact/page.tsx           
│  ├─ experience/page.tsx        
│  ├─ projects/page.tsx          
│  ├─ resume/page.tsx            
│  ├─ components/
│  │  ├─ About.tsx               
│  │  ├─ EducationCard.tsx
│  │  ├─ ExperienceTimeline.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Hero.tsx
│  │  └─ ProjectCard.tsx         
│  ├─ layout.tsx                 
│  ├─ page.tsx                   
│  ├─ robots.txt                 
│  └─ sitemap.ts                 
├─ content/
│  ├─ about.ts                   
│  └─ projects.ts               
├─ lib/
│  └─ motion.ts                  
├─ public/
│  └─ resume/
│     ├─ resume.pdf              
│     └─ README.txt
├─ styles / config
│  ├─ app/globals.css            
│  ├─ tailwind.config.ts
│  └─ postcss.config.mjs
├─ next.config.mjs               
├─ vercel.json                   
├─ package.json
├─ tsconfig.json
└─ types/nodemailer.d.ts         
```

---

## 🧰 Tech Stack

- React + Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Vercel (hosting & CI/CD)
- Optional: Resend (email) or SMTP (Nodemailer)

---

## 🚀 Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
npm install

# Start dev server
npm run dev

# Build & run production locally
npm run build
npm start
```

---

## 📦 Usage

- Home, Projects, Experience, Contact, and Resume are ready out-of-the-box.
- Update your resume at `public/resume/resume.pdf` to enable preview at `/resume`.
- Update About copy in `content/about.ts`.
- Update projects in `content/projects.ts` (Home uses featured projects; Projects page shows all).

---

## ☁️ Deployment (Vercel)

Dashboard:
1. Push repo to GitHub.
2. Import project in Vercel (Next.js is auto-detected).
3. Add env vars for Preview & Production (see Configuration).
4. Deploy and set your custom domain.

CLI (Windows PowerShell):
```powershell
npm i -g vercel
vercel login
vercel link --confirm

# Preview envs
vercel env add NEXT_PUBLIC_SITE_URL preview
vercel env add CONTACT_TO preview
vercel env add CONTACT_FROM preview
# Optional: vercel env add RESEND_API_KEY preview
# Optional SMTP: vercel env add SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS preview

# Production envs
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add CONTACT_TO production
vercel env add CONTACT_FROM production
# Optional: vercel env add RESEND_API_KEY production
# Optional SMTP: vercel env add SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS production

# Deploy
vercel --prod=false --yes   # Preview
vercel --prod --confirm     # Production
```

Notes:
- `vercel.json` adds security headers (X-Frame-Options, X-Content-Type-Options).
- `next.config.mjs` enables optimizeCss and modern image formats.
- `package.json` engines set Node >= 18.

---

## 🧪 Features & Endpoints

- `/api/contact` (POST): Validates input and sends mail via Resend or SMTP when configured.
  - If no provider configured, returns `503` with guidance; UI shows a visible mailto fallback.
- `/resume`: Embeds `public/resume/resume.pdf` and provides a Download button. Shows a helpful empty state if missing.

---

## 📬 Contact

- Author: **Vishnu Vivek Valeti**
- Email: **vivekvaleti7053@gmail.com**
- LinkedIn: `https://www.linkedin.com/in/valetivishnuvivek/`
- GitHub: `https://github.com/valetivivek`

---