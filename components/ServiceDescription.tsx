"use client";

import { useState } from "react";


interface Props {
  description: string;
  clampLines?: number;
  showReadMore?: boolean;
  className?: string;
}

export default function ServiceDescription({
  description,
  clampLines = 5,
  showReadMore = true,
  className = "text-gray-600",
}: Props) {
  const [expanded, setExpanded] = useState(false);

  // Show the button only for longer descriptions
  const showButton = showReadMore && description.trim().length > 350;

  return (
    <div className="mt-8">

      {/* Mobile */}
      <div className="block md:hidden">

        <div className="relative">

          <p
            className={`whitespace-pre-line text-lg leading-8 ${className} ${
            expanded
                ? ""
                : clampLines === 3
                ? "line-clamp-3"
                : clampLines === 4
                ? "line-clamp-4"
                : clampLines === 6
                ? "line-clamp-6"
                : "line-clamp-5"
            }`}
          >
            {description}
          </p>

          {!expanded && showButton && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent" />
          )}

        </div>

        {showButton && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#B79A5F] px-5 py-2 text-sm font-medium text-[#B79A5F] transition-all duration-300 hover:bg-[#B79A5F] hover:text-white"
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
        )}

      </div>

      {/* Desktop */}
      <div className="hidden md:block">
        <p className={`whitespace-pre-line text-lg leading-8 ${className}`}>
          {description}
        </p>
      </div>

    </div>
  );
}