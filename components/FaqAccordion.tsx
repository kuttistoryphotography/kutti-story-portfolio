"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CategoryPills from "@/components/ui/CategoryPills";

interface Faq {
  _id: string;
  question: string;
  answer: string;
  category: string;
}

interface Props {
  faqs: Faq[];
}

export default function FaqAccordion({ faqs }: Props) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>

        {/* Search */}
        <div className="mb-8">
        <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
                        w-full
                        rounded-[28px]
                        border
                        border-[#E5E5E5]
                        bg-white
                        px-8
                        py-5
                        text-[17px]
                        font-light
                        text-[#3F5A4A]
                        placeholder:text-gray-400
                        outline-none
                        transition-all
                        duration-300
                        focus:border-[#7F977B]
                        focus:shadow-lg
                        "
        />
        </div>

         <div className="h-6"></div>

        <CategoryPills
            categories={[
                "All",
                "Wedding",
                "Engagement",
                "Maternity",
                "Birthday",
                "Couple Shoot",
                "General",
            ]}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
            />

    <div className="space-y-3 md:space-y-5">
      <div className="h-6"></div>
      {faqs
        .filter((faq) => {
        const keyword = search.toLowerCase();

        const matchesSearch =
            faq.question.toLowerCase().includes(keyword) ||
            faq.answer.toLowerCase().includes(keyword) ||
            faq.category.toLowerCase().includes(keyword);

        const matchesCategory =
            selectedCategory === "All" ||
            faq.category === selectedCategory;

        return matchesSearch && matchesCategory;
        })
        .map((faq) => {
        const isOpen = openId === faq._id;

        return (
          <div
            key={faq._id}
            className="
                      overflow-hidden
                      rounded-[26px]
                      border
                      border-[#E8E8E8]
                      bg-white
                      transition-all
                      duration-300
                      hover:shadow-xl
                      "
          >
            <button
              onClick={() =>
                setOpenId(isOpen ? null : faq._id)
              }
              className="flex w-full items-center justify-between px-6 md:px-8 py-5 md:py-6 text-left"
            >
              <h2 className="
                  font-heading
                  text-[20px]
                  md:text-[28px]
                  font-light
                  leading-[1.35]
                  tracking-[-0.02em]
                  text-[#2F2F2F]
                  pr-6
              ">
                {faq.question}
              </h2>

              <ChevronDown
                size={18}
                strokeWidth={1.5}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-[#ECECEC] px-6 md:px-8 py-5 md:py-6">
                <p className="text-[16px] leading-8 font-light text-[#666666]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
    <div className="h-10 bg-white-500"></div>
  </>
);
}