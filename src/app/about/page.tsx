import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Agency",
  description:
    "We're a team of strategists, designers, and developers who help brands grow.",
};

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            About us
          </h1>
          <p className="text-2xl md:text-3xl text-paper/90 leading-snug">
            We're a team of strategists, designers, and developers who help
            brands grow.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6 border-b border-divider">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
            Our mission
          </h2>
          <div className="space-y-6 text-xl text-ink leading-relaxed">
            <p>
              We believe great work happens when strategy, design, and
              technology work together—not in silos. Our team brings together
              expertise across branding, product design, and development to
              build solutions that actually work for the people using them.
            </p>
            <p>
              We don't follow trends or chase buzzwords. We focus on clarity,
              craft, and solving real problems for real businesses. Whether
              you're launching a new product or rethinking an existing one, we
              approach every project with the same rigor and attention to
              detail.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 border-b border-divider">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            What drives us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-display font-bold text-accent mb-4">
                01
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Clarity over complexity
              </h3>
              <p className="text-lg text-muted-dark leading-relaxed">
                We strip away the unnecessary and focus on what matters. Clear
                thinking leads to clear design, and clear design leads to
                products people actually use.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-bold text-accent mb-4">
                02
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Craft at every level
              </h3>
              <p className="text-lg text-muted-dark leading-relaxed">
                Details matter. From the first wireframe to the final line of
                code, we sweat the small stuff because that's what separates
                good from great.
              </p>
            </div>

            <div>
              <div className="text-5xl font-display font-bold text-accent mb-4">
                03
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                Long-term partnerships
              </h3>
              <p className="text-lg text-muted-dark leading-relaxed">
                We're not looking for quick projects. We want to work with
                people who value quality, understand that great work takes time,
                and are in it for the long haul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Image Section */}
      <section className="py-24 px-6 border-b border-divider">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                A team that cares
              </h2>
              <p className="text-xl text-ink leading-relaxed mb-6">
                We're a small team by design. This keeps us lean, focused, and
                directly involved in every project. You won't be handed off to
                junior staff or outsourced teams—you work with us, start to
                finish.
              </p>
              <p className="text-xl text-ink leading-relaxed">
                Our backgrounds span agencies, startups, and in-house teams.
                We've launched products, rebranded companies, and built systems
                that scale. We know what works because we've done it before.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-muted to-muted-dark rounded">
              {/* TODO: Replace with actual team image */}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline (Optional - placeholder for future content) */}
      <section className="py-24 px-6 border-b border-divider">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">
            Our story
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0 text-xl font-bold text-accent">
                2020
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Agency founded
                </h3>
                <p className="text-lg text-muted-dark leading-relaxed">
                  Started with a simple mission: help brands cut through the
                  noise with strategy-led design and development.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0 text-xl font-bold text-accent">
                2022
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Expanded services
                </h3>
                <p className="text-lg text-muted-dark leading-relaxed">
                  Added full-stack development and ongoing product support to
                  our offering, moving beyond project-based work.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0 text-xl font-bold text-accent">
                2024
              </div>
              <div>
                <h3 className="text-xl font-display font-bold mb-2">
                  Refined focus
                </h3>
                <p className="text-lg text-muted-dark leading-relaxed">
                  Doubled down on working with companies that value quality over
                  speed, and craft over trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Let's work together
          </h2>
          <p className="text-xl text-paper/80 mb-12 max-w-2xl mx-auto">
            If you're building something that matters, we'd love to be part of
            it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-paper text-ink font-medium rounded hover:bg-accent hover:text-paper transition-colors"
            >
              Start a conversation
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 border-2 border-paper text-paper font-medium rounded hover:bg-paper hover:text-ink transition-colors"
            >
              View our work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
