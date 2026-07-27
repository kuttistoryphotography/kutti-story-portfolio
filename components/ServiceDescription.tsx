"use client";

import { useState } from "react";

interface Props {
  description: string;
}

export default function ServiceDescription({ description }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12">

      {/* Mobile */}
      <div className="block md:hidden">
        <p
          className={`text-lg leading-8 text-gray-600 ${
            expanded ? "" : "line-clamp-5"
          }`}
        >
          {description}
        </p>

        <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#8A9A7B] px-5 py-2 text-sm font-medium text-[#8A9A7B] transition-all duration-300 hover:bg-[#8A9A7B] hover:text-white"
            >
            {expanded ? "Read Less" : "Read More"}

            <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
                />
            </svg>
            </button>
      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <p className="text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>

    </div>
  );
}