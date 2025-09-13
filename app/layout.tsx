import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vishnu Vivek - Full-Stack Developer", template: "%s | Vishnu Vivek" },
  description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies. Open to SDE internships and opportunities.",
  keywords: ["Vishnu Vivek", "Full-Stack Developer", "React", "Next.js", "Go", "TypeScript", "Portfolio", "SDE Internship", "University of Florida"],
  authors: [{ name: "Vishnu Vivek Valeti" }],
  creator: "Vishnu Vivek Valeti",
  metadataBase: new URL("https://vishnuvivek.dev"),
  openGraph: {
    title: "Vishnu Vivek - Full-Stack Developer",
    description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies.",
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
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishnu Vivek - Full-Stack Developer",
    description: "Graduate CS student at University of Florida specializing in full-stack development with React/Next.js, Go, and modern web technologies.",
    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
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
        </div>
      </body>
    </html>
  );
}


