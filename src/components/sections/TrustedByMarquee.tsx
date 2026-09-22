"use client";

import { useEffect, useRef } from "react";

const logos = [
  "TechCorp",
  "FinanceHub",
  "RetailCo",
  "MediaGroup",
  "CloudTools",
  "StartupXYZ",
  "GlobalBrand",
  "InnovateLab",
];

export default function TrustedByMarquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (marquee.scrollWidth && scrollPos >= marquee.scrollWidth / 2) {
        scrollPos = 0;
      }
      marquee.style.transform = `translateX(-${scrollPos}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-16 border-y border-divider overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-wider text-muted-dark">Trusted by</p>
      </div>
      <div
        ref={marqueeRef}
        className="flex gap-16 whitespace-nowrap"
        style={{ width: "fit-content" }}
      >
        {/* Duplicate logos for infinite effect */}
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="text-2xl font-display font-semibold text-muted-dark">
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
