"use client";

import { useEffect, useState } from "react";
import { useHomepage } from "@/context/HomepageContext";
import Image from "next/image";

import Container from "@/components/Container";

import Link from "next/link";

export default function HeroSlider() {

  const [current, setCurrent] = useState(0);

  const [hero, setHero] = useState({
    heroSliderImages: [] as {
      image: string;
    }[],
    heading: "",
    subheading: "",
    paragraph: "",
    primaryButtonText: "",
    primaryButtonLink: "",
  });

  const [heroImages, setHeroImages] = useState<string[]>([]);
  const { homepage, loading } = useHomepage();

  useEffect(() => {
    if (!homepage?.hero) return;

    const heroData = homepage.hero;

    setHero({
      heroSliderImages: heroData.heroSliderImages || [],
      heading: heroData.heading || "",
      subheading: heroData.subheading || "",
      paragraph: heroData.paragraph || "",
      primaryButtonText:
        heroData.primaryButtonText || "Explore Portfolio",
      primaryButtonLink:
        heroData.primaryButtonLink || "#",
    });

    if (heroData.heroSliderImages?.length > 0) {
      const images = heroData.heroSliderImages
        .map((item: { image: string }) => item.image)
        .filter((image: string) => image && image.trim() !== "");

      setHeroImages(images);
    } else if (heroData.backgroundImage) {
      setHeroImages([heroData.backgroundImage]);
    }
  }, [homepage]);
  
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [heroImages]);


  if (heroImages.length === 0) {
    return (
      <section className="min-h-screen bg-[#f5f2ec] flex items-center py-10">
        <Container>
          <div className="relative h-[92vh] w-full overflow-hidden rounded-[40px] bg-gray-200 animate-pulse" />
        </Container>
      </section>
    );
  }

  console.log("Hero Images:", heroImages);
 
  return (
    <section className="min-h-screen bg-[#f5f2ec] flex items-center py-10">
      <Container>
        <div className="relative h-[92vh] w-full overflow-hidden rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

          {/* Hero Images */}
          {heroImages.map((image: string, index: number) => (
            <Image
              key={`${index}-${image}`}
              src={image}
              alt={`Hero ${index + 1}`}
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="100vw"
              unoptimized
              className={`absolute inset-0 object-cover transition-all duration-[2500ms] ${
                current === index
                  ? "opacity-100 scale-110"
                  : "opacity-0 scale-100"
              }`}
            />
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-6">

              <h1 className="font-heading text-6xl md:text-8xl font-light tracking-[8px] text-white">
                {hero.heading || "KUTTI STORY"}
              </h1>

              <div className="mx-auto mt-8 h-px w-24 bg-[#C6A96B]" />

              <p className="mt-8 text-sm md:text-base uppercase tracking-[8px] text-[#E8DDC7]">
                {hero.subheading}
              </p>

              <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
                {hero.paragraph}
              </p>

              <Link
                href={hero.primaryButtonLink || "/portfolio"}
                className="inline-block mt-12 rounded-full bg-[#8B7355] px-10 py-4 text-sm uppercase tracking-[5px] text-white shadow-lg transition-all duration-500 hover:bg-[#2C2A28] hover:scale-105"
              >
                {hero.primaryButtonText || "Explore Portfolio"} →
              </Link>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}