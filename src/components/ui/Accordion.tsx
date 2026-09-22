"use client";

import { useState } from "react";

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-b border-divider pb-4">
          <button
            onClick={() => toggle(index)}
            className="w-full text-left flex items-center justify-between gap-4 py-2"
          >
            <span className="text-lg font-display font-semibold text-ink">
              {item.question}
            </span>
            <span className="text-2xl text-ink flex-shrink-0">
              {openIndex === index ? "−" : "+"}
            </span>
          </button>
          {openIndex === index && (
            <div className="pt-4 text-muted-dark leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
