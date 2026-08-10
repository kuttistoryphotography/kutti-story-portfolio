"use client";

import { useEffect, useState } from "react";
import { useHomepage } from "@/context/HomepageContext";
import Image from "next/image";
import { CityData } from "@/lib/cities";

import Container from "@/components/Container";

import Link from "next/link";

type HeroSliderProps = {
  city?: CityData;
  pageType?: "home" | "city";
};

export default function HeroSlider({
  city,
  pageType = "home",
}: HeroSliderProps) {

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
  
  const homepageContext = useHomepage();
  const homepage = homepageContext?.homepage;

  useEffect(() => {
    if (!homepage?.hero && pageType === "home") return;

    const heroData = homepage.hero;

    setHero({
      heroSliderImages: heroData.heroSliderImages || [],
      heading: heroData.heading || "",
      subheading: heroData.subheading || "",
      paragraph: heroData.paragraph || "",
      primaryButtonText:
        heroData.primaryButtonText || "Explore Portfolio",
      primaryButtonLink:
      heroData.primaryButtonLink &&
      heroData.primaryButtonLink !== "#"
        ? heroData.primaryButtonLink
        : "/portfolio",
    });

    if (heroData.heroSliderImages?.length > 0) {
      const images = heroData.heroSliderImages
        .map((item: { image: string }) => item.image)
        .filter((image: string) => image && image.trim() !== "");

      setHeroImages((prev) =>
        JSON.stringify(prev) === JSON.stringify(images) ? prev : images
      );
    } else if (heroData.backgroundImage) {
      setHeroImages([heroData.backgroundImage]);
    }
  }, [homepage]);
  
  useEffect(() => {
    if (heroImages.length <= 1) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [heroImages]);


  if (heroImages.length === 0) {
    return (
      <section
        aria-label="Hero Banner"
        className="min-h-screen bg-[#f5f2ec] flex items-center py-10"
      >
        <Container className="max-w-[95vw] 2xl:max-w-[3200px]">
          <div className="relative h-[92vh] w-full overflow-hidden rounded-[40px] bg-gray-200 animate-pulse" />
        </Container>
      </section>
    );
  }
 
  return (
    <section
      aria-label="Hero Banner"
      className="min-h-screen bg-[#f5f2ec] flex items-center py-10"
    >
      <Container className="max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-18" />
        <div className="relative mx-auto h-[90vh] w-full overflow-hidden rounded-3xl md:rounded-[40px] shadow-[0_30px_80px_rgba(0,0,0,0.18)]">

          {/* Hero Images */}
          {heroImages.map((image: string, index: number) => (
          <Image
            key={`${index}-${image}`}
            src={image}
            alt={
              hero.heading
                ? `${hero.heading} | Best Wedding Photographer in Madurai`
                : "Best Wedding Photographer in Madurai | Kutti Story Photography"
            }
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={75}
            className={`absolute inset-0 object-cover transition-all duration-[2500ms] motion-reduce:transition-none ${
              current === index
                ? "opacity-100 scale-100 sm:scale-110"
                : "opacity-0 scale-100"
            }`}
          />
        ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 sm:px-6">

              <h1
                className="font-heading 
                text-3xl
                sm:text-4xl
                md:text-6xl
                xl:text-8xl 
                font-light tracking-[2px]
                sm:tracking-[4px]
                md:tracking-[8px] 
                text-white"
              >
              {hero.heading ||
                "Best Wedding Photographer in Madurai | Candid Wedding Photography"}              </h1>

              <div className="mx-auto mt-8 h-px w-24 bg-[#C6A96B]" />

              <p className="mt-8 text-xs sm:text-sm md:text-base uppercase tracking-[2px] sm:tracking-[4px] md:tracking-[8px] text-[#E8DDC7]">
                {hero.subheading}
              </p>

              <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-white/90 leading-relaxed">
                {hero.paragraph ||
                  "Kutti Story Photography is a leading wedding photography and videography studio in Madurai, specializing in candid wedding photography, cinematic wedding films, engagement photography, pre-wedding shoots, maternity photography, baby photography, and event coverage across Tamil Nadu."}
              </p>

              <Link
                aria-label="View Wedding Photography Portfolio"
                href={hero.primaryButtonLink || "/portfolio"}
                className="inline-flex h-12 w-64 items-center justify-center gap-3 rounded-full bg-[#849669] text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#6E7E57] hover:shadow-lg"
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