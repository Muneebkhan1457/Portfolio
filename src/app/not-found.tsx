import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Agency",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 bg-paper">
      <div className="max-w-2xl mx-auto text-center">
        <div className="text-8xl md:text-9xl font-display font-bold text-muted mb-6">
          404
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4">
          Page not found
        </h1>
        <p className="text-xl text-muted-dark mb-12 max-w-lg mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-ink text-paper font-medium rounded hover:bg-accent transition-colors"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-ink text-ink font-medium rounded hover:bg-ink hover:text-paper transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  );
}
