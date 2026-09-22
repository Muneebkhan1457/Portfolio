import Link from "next/link";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Agency",
  description:
    "Case studies and projects from our portfolio. See how we've helped brands grow.",
};

export default function WorkPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Our work
          </h1>
          <p className="text-2xl md:text-3xl text-paper/90 leading-snug">
            Case studies from recent projects. Real challenges, real results.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-muted to-muted-dark rounded overflow-hidden mb-6">
                  {/* TODO: Replace with actual Next Image when real project images exist */}
                  <div className="w-full h-full" />
                </div>

                {/* Project Info */}
                <div className="mb-3">
                  <span className="text-sm text-muted-dark">
                    {project.client} — {project.industry}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-lg text-muted-dark mb-4 leading-relaxed">
                  {project.result}
                </p>

                {/* Tags */}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to start your project?
          </h2>
          <p className="text-xl text-muted-dark mb-12 max-w-2xl mx-auto">
            Let's discuss what you're building and how we can help.
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
