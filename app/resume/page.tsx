import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

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
          <h1>Resume</h1>
          <p className="mt-2 text-slate-700">Latest resume preview and download options.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              {hasResume ? (
                <object data="/resume/resume.pdf" type="application/pdf" className="h-[70vh] w-full rounded-lg border border-slate-200">
                  <p className="p-4 text-slate-700">Your browser can’t display the PDF. Use the buttons to view or download.</p>
                </object>
              ) : (
                <div className="card p-6">
                  <h3 className="text-lg font-semibold text-slate-900">Resume not found</h3>
                  <p className="mt-2 text-slate-700">Place a file named <code>resume.pdf</code> into <code>/public/resume/</code> to enable preview and downloads.</p>
                </div>
              )}
            </div>
            <aside className="space-y-3">
              <Link className="btn-primary w-full justify-center" href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer">View in browser</Link>
              <a className="btn-ghost w-full justify-center" href="/resume/resume.pdf" download>Download PDF</a>
              <p className="text-xs text-slate-500">Expected path: <code>/public/resume/resume.pdf</code></p>
            </aside>
          </div>
        </section>
      </main>
  );
}


