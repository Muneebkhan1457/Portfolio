import Hero from "@/components/sections/Hero";
import TrustedByMarquee from "@/components/sections/TrustedByMarquee";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutTeaser from "@/components/sections/AboutTeaser";
import FaqAccordion from "@/components/sections/FaqAccordion";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedByMarquee />
      <ServicesGrid />
      <FeaturedWork />
      <AboutTeaser />
      <FaqAccordion />
      <CtaBand />
    </>
  );
}
