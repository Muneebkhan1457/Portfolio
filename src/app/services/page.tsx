import Link from "next/link";
import { services } from "@/data/services";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Agency",
  description:
    "End-to-end services for brands that want to grow without compromising on quality.",
};

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Services
          </h1>
          <p className="text-2xl md:text-3xl text-paper/90 leading-snug">
            End-to-end services for brands that want to grow without
            compromising on quality.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group p-8 border border-divider rounded hover:border-ink transition-colors"
              >
                {/* Number icon */}
                {service.icon && (
                  <div className="text-6xl font-display font-bold text-muted mb-4">
                    {service.icon}
                  </div>
                )}
                <h3 className="text-2xl font-display font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-dark mb-4">{service.outcome}</p>
                <span className="text-sm font-medium text-ink group-hover:text-accent transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Not sure where to start?
          </h2>
          <p className="text-xl text-muted-dark mb-12 max-w-2xl mx-auto">
            We can help you figure out what your project needs. Let's talk.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-ink text-paper font-medium rounded hover:bg-accent transition-colors"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
