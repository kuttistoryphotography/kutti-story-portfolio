"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function FeaturedFilms() {
  const [settings, setSettings] = useState({
    smallTitle: "Cinematic Stories",
    heading: "Featured Films",
    description:
      "Some moments deserve more than photographs. Experience our wedding films crafted with emotion, elegance and timeless storytelling.",
    buttonText: "View All Films",
    buttonLink: "/films",

    cards: [
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image",
        videoUrl: "",
      },
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image",
        videoUrl: "",
      },
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image",
        videoUrl: "",
      },
    ],
  });

  const [selectedVideo, setSelectedVideo] = useState("");

  useEffect(() => {
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((data) => {
        console.log("Featured Films Data:", data.settings?.featuredFilms);

        if (data.settings?.featuredFilms) {
          setSettings(data.settings.featuredFilms);
        }
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
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


  console.log("Cards:", settings.cards);

  const getEmbedUrl = (url: string) => {
    if (!url) return "";

    if (url.includes("youtu.be/")) {
      const id = url.split("youtu.be/")[1].split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    if (url.includes("watch?v=")) {
      const id = url.split("watch?v=")[1].split("&")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    return url;
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto w-full max-w-[1700px] px-8 xl:px-12">

        {/* Section Heading */}
        <div className="mb-16 text-center">

          <p className="uppercase tracking-[8px] text-[#7A8450] text-sm">
            {settings.smallTitle}
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-light text-[#3D3D3D]">
            {settings.heading}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            {settings.description}
          </p>

        </div>

        {/* Film Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">

          {settings.cards.map((film, index) => (

            <div
              key={index}
              onClick={() => setSelectedVideo(film.videoUrl)}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Thumbnail */}
              <div className="relative aspect-[4/5] overflow-hidden">

                {film.thumbnail ? (
                  <Image
                    src={film.thumbnail}
                    alt={film.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-500">
                    No Thumbnail
                  </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/25 transition duration-500 group-hover:bg-black/45" />

                {/* Duration */}
                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-[#3D3D3D]">
                  {film.duration}
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="
                      flex h-20 w-20 items-center justify-center
                      rounded-full
                      border border-white/40
                      bg-white/15
                      backdrop-blur-lg
                      shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                      transition-all duration-500
                      group-hover:scale-110
                      group-hover:bg-white/25
                      group-hover:shadow-[0_15px_50px_rgba(0,0,0,0.45)]
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="ml-1 h-8 w-8"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <p className="uppercase tracking-[4px] text-[#7A8450] text-xs">
                  {film.category}
                </p>

                <h3 className="mt-3 text-2xl font-light text-[#3D3D3D]">
                  {film.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

        {/* Button */}
        <div className="mt-16 text-center">

          <Link
            href={settings.buttonLink}
            className="inline-flex items-center rounded-full border border-[#7A8450] px-10 py-4 text-[#7A8450] transition-all duration-300 hover:bg-[#7A8450] hover:text-white"
          >
            {settings.buttonText} →
          </Link>

        </div>

      </div>

      {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 transition-all duration-300"          onClick={() => setSelectedVideo("")}
        >
          <div
            className="relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo("")}
              className="absolute -top-14 right-0 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20"
            >
              ✕
            </button>

            {/* Video */}
            <div className="aspect-video overflow-hidden rounded-3xl bg-black">
              <iframe
                src={getEmbedUrl(selectedVideo)}
                title="Featured Film"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
}