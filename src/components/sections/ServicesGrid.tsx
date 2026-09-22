import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl font-display font-bold text-ink mb-4">What we do</h2>
          <p className="text-xl text-muted-dark max-w-2xl">
            End-to-end services for brands that want to grow without compromising on quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 border border-divider rounded hover:border-ink transition-colors"
            >
              {/* Number icon instead of generic icon-in-circle */}
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
  );
}
