# Vishnu Vivek Portfolio

A modern, high-performance portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases professional web development skills with a focus on security, accessibility, and user experience.

## Features

### Technical Excellence
- **Next.js 14** with App Router for optimal performance
- **TypeScript** for type safety and better development experience
- **Tailwind CSS** for utility-first styling with custom design system
- **Framer Motion** for smooth animations and micro-interactions

### Performance & Optimization
- **97+ Lighthouse scores** across all metrics
- **Image optimization** with Next.js Image component
- **Bundle optimization** with tree shaking and code splitting
- **CSS optimization** with critical CSS inlining

### Security Features
- **Comprehensive security headers** (CSP, HSTS, X-Frame-Options)
- **Rate limiting** on API endpoints (5 requests/minute)
- **Input validation** and sanitization
- **Honeypot protection** against bots
- **Email protection** via server-side endpoints

### Accessibility
- **WCAG 2.1 AA compliant** with semantic HTML
- **Screen reader support** with ARIA labels
- **Keyboard navigation** with focus management
- **Error boundaries** for better error handling
- **High contrast ratios** for readability

### SEO & Analytics
- **Comprehensive metadata** with Open Graph and Twitter Cards
- **Structured data** (JSON-LD) for Person and Website schemas
- **XML sitemap** and robots.txt
- **Optimized URLs** with proper canonical tags

## Project Structure

```
portfolio/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable UI components
│   ├── api/               # API routes
│   ├── [pages]/           # Route pages
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   └── page.tsx          # Homepage
├── content/               # Static data and content
├── lib/                   # Utility functions
├── public/                # Static assets
└── [config files]        # Project configuration
```

## Key Pages

- **Homepage**: Professional introduction with featured projects
- **Projects**: Filterable portfolio with detailed project information
- **Experience**: Professional timeline with detailed experience
- **Contact**: Secure contact form with validation
- **Resume**: Professional resume preview and download

## Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone repository
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Configure environment variables
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   CONTACT_TO_EMAIL=your-email@example.com
   # Optional: Configure email service
   RESEND_API_KEY=your-api-key
   ```

4. Start development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run analyze` - Analyze bundle size

## Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Export if needed: `npm run build && npm run export`
3. Deploy the `.next` folder to your hosting provider

## Environment Variables

### Required
- `NEXT_PUBLIC_SITE_URL` - Your production domain

### Optional (Email)
- `RESEND_API_KEY` - Resend API key
- `RESEND_TO` - Recipient email
- `RESEND_FROM` - Sender email

Or configure SMTP:
- `SMTP_HOST` - SMTP server
- `SMTP_PORT` - SMTP port
- `SMTP_USER` - SMTP username
- `SMTP_PASS` - SMTP password

## Security Considerations

This portfolio implements enterprise-grade security:
- **No client-side secrets** - All sensitive data server-side
- **Rate limiting** - Prevents API abuse
- **Input validation** - Comprehensive form validation
- **CSRF protection** - Built-in Next.js protections
- **Security headers** - Complete header configuration

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms
- **Bundle Size**: 87.1 kB (shared)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

This is a personal portfolio project. For suggestions or issues:
1. Open an issue with detailed description
2. Include browser/OS information
3. Provide screenshots for UI issues

## License

This project is proprietary and not open source.

## Contact

For professional inquiries:
- Portfolio: [vishnuvivek.dev](https://vishnuvivek.dev)
- Email: Through the contact form on the portfolio
- LinkedIn: [Vishnu Vivek Valeti](https://linkedin.com/in/valetivishnuvivek/)

---

Built with modern web technologies and best practices for optimal performance, security, and user experience.