"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play } from "lucide-react";
import { optimizeCloudinaryImage } from "@/lib/cloudinary-image";

export default function FilmsPage() {
  const [selectedVideo, setSelectedVideo] = useState("");

  const [filmsData, setFilmsData] = useState({
    hero: {
      heading: "",
      subheading: "",
      paragraph: "",
    },

    featuredFilm: {
      title: "",
      category: "",
      thumbnail: "",
      videoUrl: "",
    },

    recentFilms: [],
  });

  useEffect(() => {
    fetch("/api/films")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) {
          setFilmsData(data.settings);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  function getEmbedUrl(url: string) {
    if (!url) return "";

    // youtu.be
    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    // youtube watch
    if (url.includes("youtube.com/watch")) {
      const id = new URL(url).searchParams.get("v");
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    // youtube embed
    if (url.includes("/embed/")) {
      return url;
    }

    return url;
  }

  return (
    <>
      <Navbar />

      <main className="pt-32 min-h-screen bg-[#FAFAF8]">

        {/* Hero Section */}
        <section className="py-20 px-6 text-center">

          <p className="uppercase tracking-[8px] text-[#B79A5F] text-sm whitespace-pre-line">
            {filmsData.hero.subheading || "Kutti Story Photography"}
          </p>

          <h1 className="mt-4 font-heading text-6xl text-[#3F5A4A] whitespace-pre-line">
            {filmsData.hero.heading || "Wedding Films"}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#666] whitespace-pre-line">
            {filmsData.hero.paragraph ||
              `Every wedding is a beautiful story. Our cinematic films preserve
          every smile, every tear, every promise, and every unforgettable
          moment exactly as it happened.`}
          </p>

        </section>

        {/* Featured Film */}

        <section className="mx-auto max-w-[1900px] px-5 md:px-8">

          <h2 className="mb-8 font-heading text-3xl md:text-5xl font-light text-[#2D2D2D]">
            Featured Film
          </h2>

          <div className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,.16)]">

            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">

              <Image
                src={
                  filmsData.featuredFilm.thumbnail
                    ? optimizeCloudinaryImage(filmsData.featuredFilm.thumbnail, 1600)
                    : "/placeholder.jpg"
                }
                alt={filmsData.featuredFilm.title || "Featured Film"}
                fill
                priority
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/15 transition duration-500 group-hover:bg-black/35 flex items-center justify-center">

                <button
                  onClick={() => setSelectedVideo(filmsData.featuredFilm.videoUrl)}
                  className="
                  flex
                  h-16
                  w-16
                  md:h-20
                  md:w-20
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  bg-white/15
                  backdrop-blur-lg
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:bg-white/25
                  "
                >
                  <Play className="ml-1 h-7 w-7 fill-white text-white" />
                </button>
                  
              </div>

            </div>

            <div className="px-8 py-6 md:px-10 md:py-8">
            
              <p className="mt-1 uppercase tracking-[5px] text-[11px] font-medium text-[#B79A5F]">
                {filmsData.featuredFilm.category || "Featured Film"}
              </p>

              <h3 className="mt-4 font-heading text-[28px] md:text-3xl text-[#2D2D2D] leading-tight">
                {filmsData.featuredFilm.title || "Wedding Film"}
              </h3>

            </div>

          </div>

        </section>

        {/* Recent Films */}

        <section className="mx-auto mt-16 md:mt-24 max-w-[1900px] px-5 md:px-8 pb-20 md:pb-24">

          <div className="h-10 bg-white-500"></div>

          <h2 className="mb-8 font-heading text-3xl md:text-5xl font-light text-[#2D2D2D]">
            Recent Films
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {filmsData.recentFilms.map((film: any, index: number) => (

              <div
                key={index}
                className="group overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(0,0,0,.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(0,0,0,.16)]"
              >

                <div className="relative aspect-[16/10] md:aspect-video overflow-hidden">

                  <Image
                    src={
                      film.thumbnail
                        ? optimizeCloudinaryImage(film.thumbnail, 800)
                        : "/placeholder.jpg"
                    }
                    alt={film.title || "Film"}
                    fill
                    unoptimized
                    loading="lazy"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/25">

                    <button
                      onClick={() => setSelectedVideo(film.videoUrl)}
                      className="
                        flex
                        h-16
                        w-16
                        md:h-20
                        md:w-20
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/30
                        bg-white/15
                        backdrop-blur-lg
                        shadow-[0_10px_35px_rgba(0,0,0,.35)]
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:bg-white/25
                        "
                    >
                      <Play className="w-7 h-7 fill-white text-white" />
                    </button>

                  </div>

                </div>

                <div className="px-8 md:px-10 py-7">

                  <p className="uppercase tracking-[6px] text-[11px] text-[#B79A5F] font-medium">
                    {film.category || "Wedding"}
                  </p>

                  <h3 className="mt-4 font-heading text-[26px] md:text-[32px] font-light leading-tight text-[#2D2D2D]">
                    {film.title || "Untitled Film"}
                  </h3>

                </div>

              </div>

            ))}

          </div>
           <div className="h-10 bg-white-500"></div>
        </section>

        {selectedVideo && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6"
            onClick={() => setSelectedVideo("")}
          >
          <div
            className="relative w-full max-w-5xl animate-[fadeIn_.25s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() => setSelectedVideo("")}
              className="absolute -top-12 right-0 text-4xl text-white hover:text-gray-300"
            >
              ✕
            </button>

            <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-2xl">
              <iframe
                src={getEmbedUrl(selectedVideo)}
                className="h-full w-full"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
      </main>
      <Footer />
    </>
  );
}