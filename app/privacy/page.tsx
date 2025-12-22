import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Vishnu Vivek's portfolio website.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <main className="container-page py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            <strong>Last updated:</strong> December 22, 2025
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Information I Collect
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This portfolio website is designed to showcase my work and skills. I collect minimal information:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
            <li>Contact information you voluntarily provide through the contact form</li>
            <li>Basic analytics data through Vercel Analytics (anonymized)</li>
            <li>Standard web server logs (IP addresses, browser type, pages visited)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            How I Use Your Information
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            I use the information collected to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
            <li>Respond to your inquiries and messages</li>
            <li>Improve website performance and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Third-Party Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            This website uses the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
            <li><strong>Vercel:</strong> Hosting and analytics (see their <a href="https://vercel.com/legal/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">privacy policy</a>)</li>
            <li><strong>Nodemailer:</strong> Email service for contact form submissions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Data Security
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            I implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Your Rights
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
            <li>Request access to your personal information</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt-out of communications</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Contact Me
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            If you have any questions about this Privacy Policy, please contact me at{" "}
            <a href="mailto:vivekvaleti7053@gmail.com" className="text-primary-600 hover:text-primary-700 underline">
              vivekvaleti7053@gmail.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </div>
      </div>
    </main>
  );
}
