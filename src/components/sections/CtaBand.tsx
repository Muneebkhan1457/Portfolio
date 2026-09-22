import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="py-24 px-6 bg-ink text-paper">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
          Ready to start?
        </h2>
        <p className="text-xl text-paper/80 mb-12 max-w-2xl mx-auto">
          Let's talk about your project and see if we're a good fit.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-paper text-ink font-medium rounded hover:bg-accent hover:text-paper transition-colors"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 border-2 border-paper text-paper font-medium rounded hover:bg-paper hover:text-ink transition-colors"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
