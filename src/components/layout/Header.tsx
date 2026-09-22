"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper border-b border-divider" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className={`text-xl font-display font-semibold transition-colors ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          Agency
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/about"
            className={`text-sm hover:text-accent transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-sm hover:text-accent transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            Services
          </Link>
          <Link
            href="/work"
            className={`text-sm hover:text-accent transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`text-sm hover:text-accent transition-colors ${
              scrolled ? "text-ink" : "text-paper"
            }`}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className={`px-4 py-2 text-sm font-medium rounded transition-colors ${
            scrolled
              ? "bg-ink text-paper hover:bg-accent"
              : "bg-paper text-ink hover:bg-accent hover:text-paper"
          }`}
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
