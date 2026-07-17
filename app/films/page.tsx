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

        <section className="mx-auto max-w-7xl px-6">

          <h2 className="mb-8 font-heading text-4xl text-[#3F5A4A]">
            Featured Film
          </h2>

          <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">

            <div className="relative aspect-video">

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
                className="object-cover"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">

                <button
                  onClick={() => setSelectedVideo(filmsData.featuredFilm.videoUrl)}
                  className="flex h-24 w-24 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 transition duration-300 hover:scale-110"
                >
                  <Play className="w-10 h-10 fill-white text-white" />
                </button>
                  
              </div>

            </div>

            <div className="p-10">

              <p className="uppercase tracking-[5px] text-[#B79A5F] text-sm">
                {filmsData.featuredFilm.category || "Featured Film"}
              </p>

              <h3 className="mt-3 font-heading text-4xl text-[#3F5A4A]">
                {filmsData.featuredFilm.title || "Wedding Film"}
              </h3>

            </div>

          </div>

        </section>

        {/* Recent Films */}

        <section className="mx-auto mt-24 max-w-7xl px-6 pb-24">

          <h2 className="mb-10 font-heading text-4xl text-[#3F5A4A]">
            Recent Films
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {filmsData.recentFilms.map((film: any, index: number) => (

              <div
                key={index}
                className="group overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-video overflow-hidden">

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
                      className="flex h-16 w-16 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 transition duration-300 hover:scale-110"
                    >
                      <Play className="w-7 h-7 fill-white text-white" />
                    </button>

                  </div>

                </div>

                <div className="p-6">

                  <p className="uppercase tracking-[4px] text-xs text-[#B79A5F]">
                    {film.category || "Wedding"}
                  </p>

                  <h3 className="mt-3 font-heading text-2xl text-[#3F5A4A]">
                    {film.title || "Untitled Film"}
                  </h3>

                </div>

              </div>

            ))}

          </div>

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