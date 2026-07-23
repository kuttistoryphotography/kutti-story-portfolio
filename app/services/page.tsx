"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

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
        <section className="relative min-h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">

            {hero.heroImage && (
              <>
                <img
                src={hero.heroImage}
                alt="Services Hero"
                className="absolute inset-0 h-full w-full object-cover"
              />

                <div className="absolute inset-0 bg-black/45" />
            </>
            )}

            {/* Heading */}
            <div className="relative z-10 mx-auto flex h-full max-w-5xl items-center justify-center px-4 sm:px-6 text-center">
             <div>

            {/* Small Label */}
            <div className="flex justify-center mb-8">
              <span className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md px-4 sm:px-6 py-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white">
                {hero.subheading || "Our Services"}
              </span>
            </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extralight leading-tight md:leading-[1.05] tracking-tight text-white">
                {hero.heading || (
                    <>
                    Photography
                    <br />
                    Services
                    </>
                )}
              </h1>

             <p className="mt-10 max-w-3xl mx-auto text-xl leading-9 text-white/80 font-light">
                {hero.paragraph ||
                    "Every story deserves to be told beautifully. We're preparing a collection of thoughtfully crafted photography experiences designed to preserve your most meaningful moments."}
             </p>
              
            </div>
        </div>
        </section>

        <div className="mt-32">
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