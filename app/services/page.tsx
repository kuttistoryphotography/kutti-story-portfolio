"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import CloudinaryImage from "@/components/CloudinaryImage";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ServicesShowcase from "@/components/services/ServicesShowcase";
import ServicesCardGrid from "@/components/services/ServicesCardGrid";

export default function ServicesPage() {

    const [hero, setHero] = useState({
        heading: "",
        subheading: "",
        paragraph: "",
        heroImage: "",
        heroImageType: "image",
        heroVideo: "",
        heroVideoType: "video",
    });

    const [showcase, setShowcase] = useState({
        heading: "",
        subheading: "",
        description: "",
        image: "",
        imageType: "image",
    });

    const [cardGrid, setCardGrid] = useState({
        heading: "",
        subheading: "",
    });

    const [services, setServices] = useState<any[]>([]);

    useEffect(() => {
        const fetchPageData = async () => {
            try {
            // Fetch Page Settings
            const res = await fetch("/api/services-page");
            const data = await res.json();

            if (data.settings?.hero) {
                setHero(data.settings.hero);
            }

            if (data.settings?.showcase) {
                setShowcase(data.settings.showcase);
            }
            if (data.settings?.cardGrid) {
                setCardGrid(data.settings.cardGrid);
            }

            // Fetch Services
            const serviceRes = await fetch("/api/services");
            const serviceData = await serviceRes.json();

            setServices(serviceData.services || []);

            } catch (error) {
            console.error("Failed to load Services page:", error);
            }
    };

    fetchPageData();
    }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-white pt-24 md:pt-40 pb-16 md:pb-24 overflow-hidden">
        <section className="relative py-24 md:h-[90vh] md:flex md:items-center md:justify-center overflow-hidden">

            {hero.heroImage && (
              <>
              <CloudinaryImage
                src={hero.heroImage}
                alt="Services Hero"
                fill
                optimizationWidth={1920}
                sizes="100vw"
                className="object-cover"
              />

                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/60" />
            </>
            )}

            {/* Heading */}
            <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-center px-4 sm:px-6 text-center">
             <div className="w-full max-w-4xl">

            {/* Small Label */}
            <div className="flex justify-center mb-5 md:mb-8">
              <span className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white">
                {hero.subheading || "Our Services"}
              </span>
            </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-light leading-[1.15] md:leading-[1.05] tracking-tight text-white">
                {hero.heading || (
                    <>
                    Photography
                    <br />
                    Services
                    </>
                )}
              </h1>

             <p className="mx-auto mt-4 md:mt-8 max-w-3xl px-2 text-base sm:text-lg md:text-xl leading-7 sm:leading-8 md:leading-9 text-white/80 font-light">
                {hero.paragraph ||
                    "Every story deserves to be told beautifully. We're preparing a collection of thoughtfully crafted photography experiences designed to preserve your most meaningful moments."}
             </p>
              
            </div>
        </div>
        </section>

        <div className="mt-16 md:mt-32">
        <ServicesShowcase
          heading={showcase.heading}
          subheading={showcase.subheading}
          description={showcase.description}
          image={showcase.image}
        />
        </div>

        <ServicesCardGrid
            services={services}
            heading={cardGrid.heading}
            subheading={cardGrid.subheading}
        />

        </main>

      <Footer />
    </>
  );
}