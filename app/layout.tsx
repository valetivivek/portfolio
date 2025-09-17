import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vishnu Vivek - Full-Stack Developer", template: "%s | Vishnu Vivek" },
  description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies. Open to full-time SDE and full-stack opportunities.",
  keywords: ["Vishnu Vivek", "Full-Stack Developer", "React", "Next.js", "Go", "TypeScript", "Portfolio", "SDE Jobs", "Full-Stack Jobs", "University of Florida", "Software Engineer"],
  authors: [{ name: "Vishnu Vivek Valeti" }],
  creator: "Vishnu Vivek Valeti",
  publisher: "Vishnu Vivek Valeti",
  metadataBase: new URL("https://vishnuvivek.dev"),
  alternates: {
    canonical: "https://vishnuvivek.dev",
  },
  openGraph: {
    title: "Vishnu Vivek - Full-Stack Developer",
    description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies. Open to full-time SDE and full-stack opportunities.",
    url: "https://vishnuvivek.dev",
    siteName: "Vishnu Vivek Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vishnu Vivek - Full-Stack Developer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Vivek - Full-Stack Developer",
    description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies. Open to full-time SDE and full-stack opportunities.",
    images: ["/og-image.jpg"],
    creator: "@vishnuvivek",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#059669" },
    ],
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vishnu Vivek Valeti",
    "jobTitle": "Full-Stack Developer",
    "description": "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies.",
    "url": "https://vishnuvivek.dev",
    "image": "https://vishnuvivek.dev/og-image.jpg",
    "sameAs": [
      "https://github.com/valetivivek",
      "https://www.linkedin.com/in/valetivishnuvivek/"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "University of Florida",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Gainesville",
        "addressRegion": "FL",
        "addressCountry": "US"
      }
    },
    "knowsAbout": [
      "React", "Next.js", "TypeScript", "Go", "Python", "PostgreSQL", 
      "Docker", "AWS", "Full-Stack Development", "Software Engineering"
    ],
    "seeks": "Full-time SDE and Full-Stack opportunities"
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vishnu Vivek Portfolio",
    "url": "https://vishnuvivek.dev",
    "description": "Portfolio website of Vishnu Vivek Valeti, Full-Stack Developer and Graduate CS student at University of Florida.",
    "author": {
      "@type": "Person",
      "name": "Vishnu Vivek Valeti"
    },
    "publisher": {
      "@type": "Person",
      "name": "Vishnu Vivek Valeti"
    }
  };

  return (
    <html lang="en-US" className={inter.className}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg text-text">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}


