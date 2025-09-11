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

- Push to GitHub and import into Vercel. No extra config needed.
- Optionally set `NEXT_PUBLIC_SITE_URL` for accurate sitemap URLs.


