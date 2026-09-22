"use client";

import { Suspense, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import SceneFallback from "../three/SceneFallback";

const HeroScene = dynamic(() => import("../three/HeroScene"), { ssr: false });

export default function Hero() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* 3D Scene or Fallback - contained within section bounds */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {reducedMotion ? (
          <SceneFallback />
        ) : (
          <Suspense fallback={<SceneFallback />}>
            <HeroScene />
          </Suspense>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-display font-bold text-paper mb-6 leading-tight">
          Strategy, design,
          <br />
          and delivery
        </h1>
        <p className="text-xl md:text-2xl text-muted mb-12 max-w-2xl mx-auto">
          We build brands and digital products that earn attention and drive results.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="px-8 py-4 bg-ink text-paper font-medium rounded hover:bg-accent transition-colors"
          >
            Start a Project
          </Link>
          <Link
            href="/work"
            className="px-8 py-4 border-2 border-ink text-ink font-medium rounded hover:bg-ink hover:text-paper transition-colors"
          >
            View Work
          </Link>
        </div>
      </div>
    </section>
  );
}
