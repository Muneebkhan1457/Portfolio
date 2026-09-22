import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Agency",
  description:
    "Get in touch to discuss your project. We'll get back to you within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-24 px-6 bg-ink text-paper">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's talk
          </h1>
          <p className="text-2xl md:text-3xl text-paper/90 leading-snug">
            Have a project in mind? We'd love to hear about it.
          </p>
        </div>
      </section>

      {/* Contact Content - Two Column Layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold mb-8 text-ink">
                Get in touch
              </h2>
              <p className="text-lg text-muted-dark mb-12 leading-relaxed">
                Whether you're starting from scratch or looking to level up an
                existing product, we're here to help. Tell us about your
                project and we'll get back to you within 24 hours.
              </p>

              {/* Contact Details */}
              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-sm font-bold text-muted-dark mb-2 uppercase tracking-wide">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@agency.com"
                    className="text-lg text-ink hover:text-accent transition-colors"
                  >
                    hello@agency.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-muted-dark mb-2 uppercase tracking-wide">
                    Phone
                  </h3>
                  <a
                    href="tel:+1234567890"
                    className="text-lg text-ink hover:text-accent transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-muted-dark mb-2 uppercase tracking-wide">
                    Office
                  </h3>
                  <address className="text-lg text-ink not-italic">
                    123 Design Street
                    <br />
                    New York, NY 10001
                    <br />
                    United States
                  </address>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-bold text-muted-dark mb-4 uppercase tracking-wide">
                  Follow us
                </h3>
                <div className="flex gap-6">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-accent transition-colors"
                  >
                    Dribbble
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
