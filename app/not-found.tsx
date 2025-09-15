import Link from "next/link";

export default function NotFound() {
  return (
    <main className="container-page min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-slate-900">404</h1>
          <h2 className="text-2xl font-semibold text-slate-700">Page Not Found</h2>
          <p className="text-slate-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Go Home
          </Link>
          <Link href="/contact" className="btn-ghost">
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}
