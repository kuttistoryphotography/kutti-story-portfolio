"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { heroImages } from "@/lib/gallery";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-[#f5f2ec] flex items-center justify-center py-10">
      <div className="w-full max-w-7xl px-6">
        <div className="relative h-[88vh] w-full overflow-hidden rounded-[32px] shadow-2xl">

          {/* Hero Images */}
          {heroImages.map((image, index) => (
            <Image
              key={image}
              src={image}
              alt="Kutti Story"
              fill
              priority={index === 0}
              className={`absolute inset-0 object-cover transition-all duration-[2500ms] ${
                current === index
                  ? "opacity-100 scale-105"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Hero Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">

              <h1 className="text-5xl md:text-7xl font-light tracking-[10px]">
                KUTTI STORY
              </h1>

              <p className="mt-6 text-xl md:text-2xl tracking-[5px] uppercase">
                Wedding & Lifestyle Photography
              </p>

              <button className="mt-10 rounded-full border border-white px-8 py-3 text-sm uppercase tracking-[3px] transition hover:bg-white hover:text-black">
                Explore Portfolio
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}