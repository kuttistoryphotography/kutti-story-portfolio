"use client";

import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

import { useEffect, useState } from "react";

export default function InstagramFeed() {
  const [instagram, setInstagram] = useState({
    title: "",
    username: "",
    buttonText: "",
    buttonUrl: "",
    images: [] as string[],
  });

  useEffect(() => {
    fetch("/api/homepage")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings?.instagram) {
          setInstagram(data.settings.instagram);
        }
      });
  }, []);

  return (
    <section className="bg-white pt-24 pb-48">
      <div className="mx-auto max-w-[1900px] px-3">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-[#7A8450] text-sm">
            {instagram.title}
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#3D3D3D]">
            {instagram.username}
          </h2>

        </div>

        <div className="mt-16 grid grid-cols-3 gap-3 md:grid-cols-3 lg:grid-cols-6">

          {instagram.images.map((image, index) =>
            image ? (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-2xl"
              >
                <Image
                  src={image}
                  alt={`Instagram ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />
              </div>
            ) : null
          )}

        </div>

        <div className="mt-4 text-center">

          <Link
            href={instagram.buttonUrl}
            target="_blank"
            className="inline-flex items-center gap-3 rounded-full bg-[#849669] px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6E7E57] hover:shadow-lg"
          >
            <FaInstagram size={19} />
            {instagram.buttonText}
          </Link>

        </div>

      </div>
    </section>
  );
}