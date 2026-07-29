"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    <section className="bg-white pt-15 pb-15">
      <div className="mx-auto max-w-4xl px-3">

        {/* Heading */}
        <div className="text-center">
          <div className="h-6 bg-white-500"></div>
          <p className="uppercase tracking-[4px] text-[#7A8450] text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="font-heading mt-2 text-[42px] md:text-[56px] font-light leading-tight tracking-[-0.03em] text-[#2F2F2F]">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Here are some of the most common questions couples ask before
            booking with Kutti Story Photography.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mt-3 space-y-3">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[32px] border border-[#E8E2D6] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full items-center justify-between px-8 py-8 text-left"
                >

                  <h3
                    className="font-heading text-[26px] md:text-[34px] lg:text-[38px] font-light leading-[1.25] tracking-[-0.03em] text-[#2F2F2F] transition-colors duration-300 group-hover:text-[#7A8450]"
                  >
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    strokeWidth={1.5}
                    className={`text-[#7A8450] transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />

                </button>

                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="px-8 pb-8 text-[17px] leading-8 font-body text-[#666666]">
                      {faq.answer}
                    </p>

                  </div>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  </>
);
}