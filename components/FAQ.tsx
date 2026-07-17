"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white pt-15 pb-15">
      <div className="mx-auto max-w-4xl px-3">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-[#7A8450] text-sm">
            Frequently Asked Questions
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-light text-[#3D3D3D]">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Here are some of the most common questions couples ask before
            booking with Kutti Story Photography.
          </p>

        </div>

        {/* FAQ Items */}
        <div className="mt-6 space-y-3">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300"
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >

                  <h3 className="text-xl font-medium text-[#3D3D3D]">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={24}
                  />

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">

                    <p className="px-4 pb-8 leading-8 text-gray-600">
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
  );
}