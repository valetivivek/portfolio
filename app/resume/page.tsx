import fs from "node:fs";
import path from "node:path";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download Vishnu Vivek's resume - Graduate CS student at University of Florida with experience in full-stack development, React, Next.js, and Go.",
  openGraph: {
    title: "Resume | Vishnu Vivek",
    description: "Download Vishnu Vivek's resume - Graduate CS student at University of Florida with experience in full-stack development.",
  },
};

function getResumePath() {
  const p = path.join(process.cwd(), "public", "resume", "resume.pdf");
  return fs.existsSync(p) ? p : null;
}

export default function ResumePage() {
  const resumePath = getResumePath();
  const hasResume = Boolean(resumePath);

  return (
    <main className="container-page">
      <section className="py-12 md:py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1>Resume</h1>
            <p className="mt-2 text-slate-700">Latest resume preview and download options.</p>
          </div>
          <div className="flex gap-3">
            <Link className="btn-primary" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">View in browser</Link>
            <a className="btn-ghost" href="/resume/resume.pdf" download>Download PDF</a>
          </div>
        </div>

        <div className="mt-8">
          {hasResume ? (
            <>
              <div className="md:hidden card p-6 text-center">
                <p className="text-slate-700 mb-4">PDF preview is hidden on mobile devices.</p>
                <a className="btn-primary w-full justify-center" href="/resume/resume.pdf" download>Download PDF to View</a>
              </div>
              <object data="/resume/resume.pdf" type="application/pdf" className="hidden md:block h-[75vh] w-full rounded-lg border border-slate-200">
                <p className="p-4 text-slate-700">Your browser can’t display the PDF. Use the buttons to view or download.</p>
              </object>
            </>
          ) : (
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-slate-900">Resume not found</h3>
              <p className="mt-2 text-slate-700">Place a file named <code>resume.pdf</code> into <code>/public/resume/</code> to enable preview and downloads.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}


