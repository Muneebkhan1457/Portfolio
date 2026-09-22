import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-5xl font-display font-bold text-ink mb-6">
            Built by a team that cares about the details
          </h2>
          <p className="text-lg text-muted-dark mb-6">
            We're a small studio that partners with ambitious brands to build things that last.
            No account managers, no handoffs—just direct collaboration with the people doing the work.
          </p>
          <p className="text-lg text-muted-dark mb-8">
            Every project gets the attention it deserves, from strategy through launch and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block px-6 py-3 border-2 border-ink text-ink font-medium rounded hover:bg-ink hover:text-paper transition-colors"
          >
            About us
          </Link>
        </div>

        <div className="aspect-square bg-muted rounded overflow-hidden">
          {/* TODO: Replace with real team image */}
          <div className="w-full h-full bg-gradient-to-br from-muted via-muted-dark/30 to-muted" />
        </div>
      </div>
    </section>
  );
}
