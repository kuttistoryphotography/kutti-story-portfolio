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

  console.log("Cards:", settings.cards);

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

            <Link
              key={index}
              href={film.videoUrl || "#"}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Thumbnail */}
              <div className="relative aspect-[4/5] overflow-hidden">

                <Image
                  src={film.thumbnail}
                  alt={film.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

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

            </Link>

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
    </section>
  );
}