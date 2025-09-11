## Portfolio (Next.js 14 + TypeScript + Tailwind + Framer Motion)

Minimal, recruiter-friendly portfolio. Deployed best on Vercel.

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build and start:
   ```bash
   npm run build && npm start
   ```

### Customize

- Update project data in `app/projects/page.tsx`.
- Replace contact links in `app/contact/page.tsx`.
- Resume: place a file at `public/resume/resume.pdf` to enable preview and download at `/resume`.

### Contact email API (optional)

Set these environment variables (in Vercel Project Settings or `.env.local`) to enable sending via Resend:

```
RESEND_API_KEY=...
CONTACT_FROM_EMAIL=sender@yourdomain.com
CONTACT_TO_EMAIL=vivekvaleti7053@gmail.com
```

Without envs, the API will no-op and the form will show success; users can also use the "Open email client" fallback.

### Deployment

- Push to GitHub and import into Vercel. A `vercel.json` is provided.
- Set `NEXT_PUBLIC_SITE_URL` for accurate sitemap URLs.

### Deploy to Vercel (Dashboard)

1. Push this repo to GitHub.
2. On Vercel, "Add New Project" → import this repo.
3. Framework Preset: Next.js (auto).
4. Set Environment Variables for Preview and Production:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.com`
   - `RESEND_API_KEY=...` (or SMTP vars below)
   - `CONTACT_TO=vivekvaleti7053@gmail.com`
   - `CONTACT_FROM=portfolio@your-domain.dev`
   - Optional SMTP: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
5. Click Deploy. Attach a custom domain if desired.

### Deploy via CLI (Windows PowerShell)

Prereqs: `npm i -g vercel`

```powershell
# Login and link
vercel login
vercel link --confirm

# Set env vars (Preview)
vercel env add NEXT_PUBLIC_SITE_URL preview
vercel env add RESEND_API_KEY preview
vercel env add CONTACT_TO preview
vercel env add CONTACT_FROM preview
# Optional SMTP
# vercel env add SMTP_HOST preview
# vercel env add SMTP_PORT preview
# vercel env add SMTP_USER preview
# vercel env add SMTP_PASS preview

# Set env vars (Production)
vercel env add NEXT_PUBLIC_SITE_URL production
vercel env add RESEND_API_KEY production
vercel env add CONTACT_TO production
vercel env add CONTACT_FROM production
# Optional SMTP
# vercel env add SMTP_HOST production
# vercel env add SMTP_PORT production
# vercel env add SMTP_USER production
# vercel env add SMTP_PASS production

# First deploy (creates a Preview URL)
vercel --prod=false --confirm

# Promote to production
vercel --prod --confirm
```

### Production Readiness

- Node runtime: `>=18` specified in `package.json`.
- `vercel.json` adds security headers and routes `/resume`.
- `next.config.mjs` enables `optimizeCss` and modern image formats.
- `/resume` previews `public/resume/resume.pdf` and offers download; shows guidance if missing.
- Contact API at `app/api/contact/route.ts` uses Resend or SMTP.
  - If not configured, returns a friendly 503 and UI has mailto fallback.

### Env Vars

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=...
CONTACT_TO=vivekvaleti7053@gmail.com
CONTACT_FROM=portfolio@your-domain.dev
# SMTP (optional if not using Resend)
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```


