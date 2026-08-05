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
  console.log("Selected Category:", selectedCategory);

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
              rounded-[24px]
              border
              border-[#ECE8E1]
              bg-white
              shadow-sm
              transition-all
              duration-300
              hover:shadow-md
            "
          >
            <button
              onClick={() =>
                setOpenId(isOpen ? null : faq._id)
              }
              className="flex w-full items-center justify-between gap-4 px-5 md:px-8 py-5 md:py-6 text-left"
            >
              <h2
                className="
                    flex-1
                    font-heading
                    text-[15px]
                    sm:text-[18px]
                    md:text-[28px]
                    lg:text-[34px]
                    font-light
                    leading-[1.5]
                    tracking-normal
                    text-[#2F2F2F]
                    pr-3
              ">
                {faq.question}
              </h2>

              <ChevronDown
                className={`w-5 h-5 md:w-6 md:h-6 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="border-t border-[#ECECEC] px-5 md:px-8 py-5 md:py-6">
                <p className="text-[15px] md:text-[17px] leading-7 text-gray-600">
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