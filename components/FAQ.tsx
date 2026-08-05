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
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-0">

        {/* Heading */}
        <div className="text-center">
          <div className="h-6 bg-white-500"></div>
          <p className="uppercase tracking-[4px] text-[#7A8450] text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="font-heading mt-2 text-[30px] sm:text-[38px] md:text-[56px] font-light leading-tight tracking-[-0.03em] text-[#2F2F2F]">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Here are some of the most common questions couples ask before
            booking with Kutti Story Photography.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mt-6 space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[24px] border border-[#ECE8E1] bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  className="flex w-full items-center justify-between gap-3 px-4 py-5 md:px-8 md:py-8 text-left"
                >

                  <h3
                    className="flex-1 font-heading text-[15px] sm:text-[19px] md:text-[28px] lg:text-[34px] font-light leading-[1.35] tracking-[-0.02em] text-[#2F2F2F] pr-4"
                  >
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 md:w-6 md:h-6 shrink-0 text-[#7A8450] transition-transform duration-500 ${
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

                    <p className="px-5 pb-6 md:px-8 md:pb-8 text-[15px] md:text-[17px] leading-7 text-gray-600">
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