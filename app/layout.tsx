import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: { default: "Vishnu Vivek", template: "%s | Vishnu Vivek" },
  description: "Minimal, professional portfolio of Vishnu Vivek. Front-end developer.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Vishnu Vivek",
    description: "Minimal, professional portfolio.",
    url: "https://example.com",
    siteName: "Vishnu Vivek",
    type: "website"
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-bg text-text">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


