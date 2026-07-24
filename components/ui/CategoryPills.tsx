"use client";

interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryPills({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="mb-12">

      {/* Mobile */}
      <div className="relative md:hidden">

        {/* Left Fade */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-white to-transparent" />

        {/* Right Fade */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-white to-transparent" />

        <div
          className="
            flex
            flex-nowrap
            items-center
            gap-3
            overflow-x-auto
            whitespace-nowrap
            px-4
            pb-2
            scrollbar-hide
            scroll-smooth
          "
        >
          {categories.map((category) => {
            const active = selected === category;

            return (
              <button
                key={category}
                onClick={() => onSelect(category)}
                className={`
                  !inline-flex
                  !items-center
                  !justify-center
                  !flex-shrink-0
                  !rounded-full
                  !border
                  !border-[#7F977B]
                  !px-6
                  !h-11
                  !whitespace-nowrap
                  !text-[11px]
                  !font-semibold
                  !uppercase
                  !tracking-[2px]
                  transition-all
                  duration-300
                  ${
                    active
                      ? "!bg-[#7F977B] !text-white shadow-lg"
                      : "!bg-white !text-[#3F5A4A]"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-5">

        {categories.map((category) => {
          const active = selected === category;

          return (
            <button
              key={category}
              onClick={() => onSelect(category)}
              className={`
                rounded-full
                border
                px-8
                py-3
                text-xs
                uppercase
                tracking-[2px]
                transition-all
                duration-300
                ${
                  active
                    ? "bg-[#7F977B] text-white border-[#7F977B] shadow-lg"
                    : "bg-white text-[#3F5A4A] border-[#7F977B]"
                }
              `}
            >
              {category}
            </button>
          );
        })}

      </div>

    </div>
  );
}