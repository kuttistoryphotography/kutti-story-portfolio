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
    default: 3,
    1024: 2,
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

const visibleCards = cards
  .filter((card) => card.visible)
  .sort((a, b) => a.order - b.order);

 return (
  <section className="bg-white py-24">
    <div className="mx-auto max-w-[1900px] px-6">

      {/* Section Title */}
      <div className="mb-16 text-center">

        <p className="uppercase tracking-[6px] text-[#B79A5F] text-sm">
          OUR PORTFOLIO
        </p>

        <h2 className="mt-4 font-heading text-5xl font-light text-[#3F5A4A]">
          Where Every Frame Tells a Story
          <br />
          Deserves A Timeless Frame
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-gray-500 text-base leading-relaxed">
          Explore our curated collection of weddings, pre-weddings, portraits, and cinematic moments, captured with timeless elegance and heartfelt storytelling.
        </p>

      </div>

      
      {/* Grid */}
      <div className="h-8"></div>

      {/* ================= MOBILE ================= */}

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {visibleCards
          .map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Link href={card.link || "#"} className="group block">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <CloudinaryImage
                    src={card.image}
                    alt={card.title}
                    fill
                    optimizationWidth={500}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
      </div>

      {/* ================= DESKTOP ================= */}

      <div className="hidden md:block">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {visibleCards
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
                  className="group block overflow-hidden rounded-[24px]"
                >
                  <div
                    className={`relative overflow-hidden rounded-[24px] ${
                      index % 3 === 0
                        ? "h-[520px]"
                        : index % 3 === 1
                        ? "h-[420px]"
                        : "h-[620px]"
                    }`}
                  >
                    <CloudinaryImage
                      src={card.image}
                      alt={card.title}
                      fill
                      optimizationWidth={800}
                      className="object-cover object-[50%_20%] transition duration-700 group-hover:scale-105"
                    />

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

    </div>
  </section>
);
}