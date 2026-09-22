import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Agency`,
    description: project.result,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find next project for footer link
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-medium text-muted-dark mb-4">
            {project.client} — {project.industry}
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-dark leading-snug max-w-3xl">
            {project.result}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-muted to-muted-dark rounded overflow-hidden">
            {/* TODO: Replace with actual Next Image when real project images exist */}
            <div className="w-full h-full" />
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="py-24 px-6 border-y border-divider">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-sm font-bold text-muted-dark mb-3 uppercase tracking-wide">
              Client
            </h3>
            <p className="text-lg text-ink">{project.client}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-muted-dark mb-3 uppercase tracking-wide">
              Industry
            </h3>
            <p className="text-lg text-ink">{project.industry}</p>
          </div>
          <div>
            <h3 className="text-sm font-bold text-muted-dark mb-3 uppercase tracking-wide">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm px-3 py-1 bg-muted text-ink rounded"
                >
                  {tag.replace(/-/g, " ")}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenge */}
      {project.challenge && (
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              The challenge
            </h2>
            <p className="text-xl text-ink leading-relaxed">
              {project.challenge}
            </p>
          </div>
        </section>
      )}

      {/* Approach */}
      {project.approach && (
        <section className="py-24 px-6 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Our approach
            </h2>
            <p className="text-xl text-ink leading-relaxed">
              {project.approach}
            </p>
          </div>
        </section>
      )}

      {/* Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <section className="py-24 px-6 border-y border-divider">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
              Results
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {project.metrics.map((metric, idx) => (
                <div key={idx}>
                  <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-3">
                    {metric.value}
                  </div>
                  <p className="text-lg text-muted-dark">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack */}
      {project.tech && project.tech.length > 0 && (
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
              Tech & services
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 border border-divider text-ink rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-6xl mx-auto">
          <div className="text-sm font-medium text-paper/60 mb-6">
            Next project
          </div>
          <Link
            href={`/work/${nextProject.slug}`}
            className="group flex flex-col md:flex-row gap-8 items-start md:items-center justify-between"
          >
            <div className="flex-1">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-lg text-paper/80">{nextProject.result}</p>
            </div>
            <div className="text-accent font-bold text-xl">→</div>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 border-t border-divider">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Have a project in mind?
          </h2>
          <p className="text-xl text-muted-dark mb-12 max-w-2xl mx-auto">
            We'd love to hear about it. Let's start a conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-ink text-paper font-medium rounded hover:bg-accent transition-colors"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 border-2 border-ink text-ink font-medium rounded hover:bg-ink hover:text-paper transition-colors"
            >
              View all work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
