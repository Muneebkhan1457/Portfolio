import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-divider py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold text-ink mb-3 inline-block">
              Agency
            </Link>
            <p className="text-muted-dark max-w-sm">
              Strategy, design, and development for brands that want to lead.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-ink mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/about" className="text-sm text-muted-dark hover:text-ink transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm text-muted-dark hover:text-ink transition-colors">
                Services
              </Link>
              <Link href="/work" className="text-sm text-muted-dark hover:text-ink transition-colors">
                Work
              </Link>
              <Link href="/contact" className="text-sm text-muted-dark hover:text-ink transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-display font-semibold text-ink mb-4">Connect</h3>
            <nav className="flex flex-col gap-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-dark hover:text-ink transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-dark hover:text-ink transition-colors">
                LinkedIn
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-dark hover:text-ink transition-colors">
                Instagram
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-dark hover:text-ink transition-colors">
                GitHub
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-divider text-center text-sm text-muted-dark">
          © {new Date().getFullYear()} Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
