"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CloudinaryImage from "@/components/CloudinaryImage";
import Link from "next/link";
import Masonry from "react-masonry-css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CATEGORIES } from "@/lib/categories";
import { motion } from "framer-motion";

interface Story {
  _id: string;
  title: string;
  slug: string;
  coverImage: string;
  category: string;
  location: string;
  date: string;
  description: string;
  featured: boolean;
}

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function PortfolioPage() {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");
  const searchParams = useSearchParams();

  useEffect(() => {
    loadStories();
  }, []);

  useEffect(() => {
    const selectedCategory = searchParams.get("category");

    if (selectedCategory) {
      setCategory(selectedCategory);
    } else {
      setCategory("All");
    }
  }, [searchParams]);

  async function loadStories() {
    try {
      const res = await fetch("/api/stories", {
        cache: "no-store",
      });

      const data = await res.json();

      if (data.success) {
        setStories(data.stories);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const filteredStories =
    category === "All"
      ? stories
      : stories.filter((story) => story.category === category);

  const categories = [
    "All",
    ...new Set(stories.map((story) => story.category)),
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#FAFAF8] pt-32">

        {/* Hero */}
        <section className="px-6 py-20 text-center">

          <p className="uppercase tracking-[6px] text-sm text-[#B79A5F]">
            Our Collection
          </p>

          <h1 className="mt-4 font-heading text-5xl md:text-6xl font-light text-[#3F5A4A]">
            Every Love Story
            <br />
            Deserves A Timeless Frame
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6E6E6E]">
            Explore our curated collection of weddings, bridal portraits and
            cinematic moments captured with emotions, elegance and timeless beauty.
          </p>

        </section>

        {/* Category Filter */}
        <div className="mx-auto mb-32 max-w-7xl px-6">

        <div className="
          flex
          flex-wrap
          justify-center
          gap-5
        ">

          {categories.map((item) => (

            <button
              key={item}
              onClick={() => setCategory(item)}
             style={{
              backgroundColor: category === item ? "#7F977B" : "white",
              color: category === item ? "white" : "#3F5A4A",
              border: "1px solid #7F977B",
              padding: "10px 30px",
              borderRadius: "9999px",
              fontSize: "12px",
              letterSpacing: "1.5px",
              fontWeight: "600",
              textTransform: "uppercase",
              boxShadow: category === item
                ? "0 12px 25px rgba(127,151,123,0.45)"
                : "0 6px 15px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              if (category !== item) {
                e.currentTarget.style.backgroundColor = "#7F977B";
                e.currentTarget.style.color = "white";
              }
            }}

            onMouseLeave={(e) => {
              if (category !== item) {
                e.currentTarget.style.backgroundColor = "white";
                e.currentTarget.style.color = "#3F5A4A";
              }
            }}
            >
              {item}
            </button>

          ))}

         </div>
        </div>

        {/* Stories */}

        {loading ? (

          <div className="mx-auto mt-16 max-w-7xl px-6 pb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="animate-pulse overflow-hidden rounded-[28px] bg-white"
                >
                  <div className="h-[450px] bg-gray-200" />
                </div>
              ))}
            </div>
          </div>

        ) : (

        <div className="mx-auto mt-16 max-w-7xl px-6 pb-24">

           <div className="h-10 bg-white-500"></div> 
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >

              {filteredStories.map((story, index) => (

                <motion.div
                  key={story._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                  }}
                >

                  <Link
                    href={`/portfolio/${story.slug}`}
                    className="group block overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  >

                  <div
                    className={`relative overflow-hidden rounded-[28px] ${
                      index % 3 === 0
                        ? "h-[520px]"
                        : index % 3 === 1
                        ? "h-[420px]"
                        : "h-[620px]"
                    }`}
                  >

                  <CloudinaryImage
                    src={story.coverImage}
                    alt={story.title}
                    fill
                    optimizationWidth={1200}
                    sizes="(max-width:768px) 100vw,
                          (max-width:1200px) 50vw,
                          33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-xs uppercase tracking-[4px] text-white/80">
                          {story.category}
                        </p>

                        <h2 className="mt-2 text-2xl font-light text-white">
                          {story.title}
                        </h2>

                        <p className="mt-1 text-sm text-white/80">
                          {story.location}
                        </p>
                      </div>

                  </div>

                    </Link>

                  </motion.div>

              ))}

            </Masonry>
            </div>

          
        )}

      </main>

      <Footer />
    </>
  );
}