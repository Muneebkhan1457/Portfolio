import Accordion from "../ui/Accordion";
import { faqs } from "@/data/faq";

export default function FaqAccordion() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-display font-bold text-ink mb-12 text-center">
          Common questions
        </h2>
        <Accordion items={faqs} />
      </div>
    </section>
  );
}
