import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-op-bg" data-testid="faq-section">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <div className="mb-14">
          <div className="overline mb-5">Before You Book</div>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-ivory leading-tight">
            Questions, <span className="font-italic-accent text-gold">answered.</span>
          </h2>
        </div>
        <hr className="hairline mb-8" />

        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-b border-[rgba(201,162,39,0.2)]"
              data-testid={`faq-item-${i}`}
            >
              <AccordionTrigger
                className="text-left font-serif text-lg md:text-xl text-ivory hover:text-gold hover:no-underline py-6"
              >
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-ivory/70 text-sm md:text-base pb-6 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
