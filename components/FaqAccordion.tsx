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
            className="w-full rounded-2xl border border-gray-300 px-6 py-4 text-lg outline-none transition focus:border-[#8A9A7B]"
        />
        </div>

         <div className="h-10 bg-white-500"></div>

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

    <div className="space-y-4">
      <div className="h-10 bg-white-500"></div>
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
            className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
          >
            <button
              onClick={() =>
                setOpenId(isOpen ? null : faq._id)
              }
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <h2 className="text-lg font-medium text-[#3F5A4A]">
                {faq.question}
              </h2>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                size={22}
              />
            </button>

            {isOpen && (
              <div className="border-t border-gray-200 px-6 py-5">
                <p className="leading-8 text-gray-600">
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