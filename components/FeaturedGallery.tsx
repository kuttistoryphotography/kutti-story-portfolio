"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import Link from "next/link";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";


  interface PortfolioCard {
    title: string;
    image: string;
    link: string;
    order: number;
    visible: boolean;
  }

  const breakpointColumnsObj = {
    default: 3, // Desktop
    1024: 2,    // Tablet
    640: 1,     // Mobile
  };

  export default function FeaturedGallery() {
  const [cards, setCards] = useState<PortfolioCard[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = [
    "All",
    "Wedding",
    "Bridal Portraits",
    "Outdoor",
    "Pre Wedding",
  ];

    useEffect(() => {
      fetch("/api/homepage")
        .then((res) => res.json())
        .then((data) => {
          setCards(data.settings?.portfolioCards || []);
        })
        .catch((err) => {
          console.error("Failed to load portfolio cards:", err);
        });
    }, []);

 return (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-7xl px-6">

      {/* Section Title */}
      <div className="mb-16 text-center">

        <p className="uppercase tracking-[6px] text-[#B79A5F] text-sm">
          Our Collection
        </p>

        <h2 className="mt-4 font-heading text-5xl font-light text-[#3F5A4A]">
          Every Love Story
          <br />
          Deserves A Timeless Frame
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-500 text-base leading-relaxed">
          Explore our curated collection of weddings, portraits and cinematic
          moments captured with emotions, elegance and timeless beauty.
        </p>

      </div>

      {/* Category Filter */}
      <div className="mb-14 flex flex-wrap justify-center gap-4">

        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              rounded-full px-6 py-3 text-sm tracking-wide transition-all duration-300
              ${
                activeCategory === category
                  ? "bg-[#B79A5F] text-white shadow-lg"
                  : "border border-[#B79A5F]/40 text-[#3F5A4A] hover:bg-[#B79A5F] hover:text-white"
              }
            `}
          >
            {category}
          </button>
        ))}

      </div>

      {/* Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >

        {cards
          .filter((card) => card.visible)
          .sort((a, b) => a.order - b.order)
          .map((card, index) => (

      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
        }}
      >
        <Link
          href={card.link || "#"}
          className="group block overflow-hidden rounded-[24px] transition-all duration-500 hover:-translate-y-1"
        >

            <div
              className={`relative overflow-hidden ${
                index % 3 === 0
                  ? "h-[520px]"
                  : index % 3 === 1
                  ? "h-[420px]"
                  : "h-[620px]"
              }`}
            >

              {card.image ? (
                <CloudinaryImage
                  src={card.image}
                  alt={card.title}
                  fill
                  optimizationWidth={800}
                  sizes="(max-width:768px) 100vw,
                        (max-width:1200px) 50vw,
                        33vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-2xl font-light text-white">
                  {card.title}
                </h3>
              </div>

            </div>

            </Link>
            </motion.div>
        ))}

      </Masonry>

    </div>
  </section>
);
}