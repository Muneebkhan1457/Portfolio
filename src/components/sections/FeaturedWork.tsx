import Link from "next/link";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="text-5xl font-display font-bold text-ink mb-4">Featured work</h2>
            <p className="text-xl text-muted-dark max-w-2xl">
              Recent projects that moved the needle for our clients.
            </p>
          </div>
          <Link
            href="/work"
            className="hidden md:block text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            View all work →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group"
            >
              <div className="aspect-[4/3] bg-muted rounded mb-4 overflow-hidden">
                {/* TODO: Replace with real image using next/image */}
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-dark group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex items-start gap-2 mb-2">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs uppercase tracking-wide text-muted-dark">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-display font-bold text-ink mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-dark">{project.result}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden text-center">
          <Link
            href="/work"
            className="text-sm font-medium text-ink hover:text-accent transition-colors"
          >
            View all work →
          </Link>
        </div>
      </div>
    </section>
  );
}
