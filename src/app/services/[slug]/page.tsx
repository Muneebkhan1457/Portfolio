import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} — Agency`,
    description: service.outcome,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Filter related projects by service tag
  const relatedProjects = projects.filter((p) =>
    p.tags.includes(slug)
  );

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-medium text-paper/60 mb-4">
            Service {service.icon ? `— ${service.icon}` : ""}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-2xl md:text-3xl text-paper/90 leading-snug">
            {service.outcome}
          </p>
        </div>
      </section>

      {/* Description */}
      {service.description && (
        <section className="py-24 px-6 border-b border-divider">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl text-ink leading-relaxed">
              {service.description}
            </p>
          </div>
        </section>
      )}

      {/* What's Included */}
      {service.included && service.included.length > 0 && (
        <section className="py-24 px-6 border-b border-divider">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              What's included
            </h2>
            <ul className="grid md:grid-cols-2 gap-6">
              {service.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <span className="text-accent font-bold text-xl mt-1">—</span>
                  <span className="text-lg text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && service.process.length > 0 && (
        <section className="py-24 px-6 border-b border-divider">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              How we work
            </h2>
            <div className="space-y-12">
              {service.process.map((step, idx) => (
                <div key={idx} className="flex gap-8">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-3">
                      {step.step}
                    </h3>
                    <p className="text-lg text-muted-dark leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Work */}
      {relatedProjects.length > 0 && (
        <section className="py-24 px-6 border-b border-divider">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Related work
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group"
                >
                  <div className="aspect-video bg-muted mb-4 overflow-hidden rounded">
                    {/* TODO: Replace with actual Next Image when images exist */}
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted-dark" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-dark mb-3">{project.result}</p>
                  <div className="text-sm text-accent font-medium">
                    View case study →
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-paper/80 mb-12 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-paper text-ink font-medium rounded hover:bg-accent hover:text-paper transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-paper text-paper font-medium rounded hover:bg-paper hover:text-ink transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
