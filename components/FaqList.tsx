"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Faq {
  _id: string;
  question: string;
  answer: string;
}

interface Props {
  faqs: Faq[];
}

export default function FaqList({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="mt-16">
        {faqs.map((faq) => {
        const isOpen = openId === faq._id;

        return (
            <div
            key={faq._id}
            className="border-b border-[#E7E7E7]"
            >
            <button
                onClick={() =>
                setOpenId(isOpen ? null : faq._id)
                }
                className="flex w-full items-center justify-between py-8 text-left transition hover:text-[#8A9A7B]"
            >
                <h3 className="text-2xl md:text-3xl font-light text-[#3F5A4A]">
                {faq.question}
                </h3>

                <ChevronDown
                size={28}
                className={`transition-all duration-300 ${
                    isOpen ? "rotate-180 text-[#8A9A7B]" : ""
                }`}
                />
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ${
                isOpen
                    ? "max-h-96 pb-8 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
            >
                <p className="max-w-4xl text-lg leading-8 text-[#6E6E6E]">
                {faq.answer}
                </p>
            </div>
            </div>
        );
        })}
    </div>
    );
}