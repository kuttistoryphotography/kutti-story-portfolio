"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export default function AboutPage() {
  const [about, setAbout] = useState({
    hero: {
      heading: "",
      subheading: "",
      paragraph: "",
      highlightWord: "",
      images: ["", "", "", ""],
      profileImage: "",
      profileName: "",
      profileRole: "",
    },

    story: {
      heading: "",
      paragraph: "",
      image: "",
      videoUrl: "",
    },

    team: [],

    timeline: [],
  });

  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) {
          setAbout(data.settings);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-28 bg-[#FAFAF8]">
      <div className="h-15 bg-white-500"></div>
        {/* Hero */}
        <div className="h-15 bg-white-500"></div>
        <section className="py-20">
          <div className="mx-auto max-w-[1600px] px-6">

            <p className="uppercase tracking-[5px] text-[#B79A5F] text-sm whitespace-pre-line">
              {about.hero.subheading || "About Us"}
            </p>

            <h1 className="mt-1 font-heading text-3xl lg:text-4xl text-[#3F5A4A] whitespace-pre-line">
              {about.hero.heading?.trim() ? (
                about.hero.heading
              ) : (
                <>
                  Every Love Story Deserves
                  <br />
                  To Be Remembered
                </>
              )}
            </h1>

            <p className="mt-8 max-w-6xl text-lg leading-9 text-[#666] whitespace-pre-line">
              {about.hero.paragraph ||
                `We don't simply take photographs.
                We preserve emotions, laughter, tears and timeless memories
                that become part of your family's legacy.`}
            </p>

          </div>
        </section>

        {/* Studio Story */}

        <section className="mx-auto max-w-[1600px] px-6 py-20">

          {/* Collage */}
          <div className="flex flex-col gap-6 lg:flex-row lg:h-[760px]">

            {/* Left Large */}
            <div className="lg:w-15/12 overflow-hidden rounded-[40px]">
              {about.hero.images[0] && (
                <img
                  src={about.hero.images[0]}
                  alt=""
                  className="w-full h-[350px] lg:h-full object-cover"
                />
              )}
            </div>

            {/* Right Column */}
            <div className="lg:w-5/12 flex flex-col gap-6">

              {/* Top Right */}
              <div className="flex-1 overflow-hidden rounded-[30px]">
                {about.hero.images[1] && (
                  <img
                    src={about.hero.images[1]}
                    alt=""
                    className="w-full h-[350px] lg:h-full object-cover"
                  />
                )}
              </div>

              {/* Bottom Right */}
              <div className="flex-1 overflow-hidden rounded-[30px]">
                {about.hero.images[2] && (
                  <img
                    src={about.hero.images[2]}
                    alt=""
                    className="w-full h-[250px] lg:h-full object-cover"
                  />
                )}
              </div>

            </div>

          </div>

          {/* Profile Card */}
          <div className="rounded-[42px] bg-white p-10 shadow-1xl">

            <div className="rounded-[42px] bg-white p-8 text-center shadow-xl">

              <div className="mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-[#FAFAF8]">

                <img
                  src={about.hero.profileImage}
                  alt=""
                  className="h-full w-full object-cover"
                />

              </div>

              <h3 className="mt-6 text-3xl font-semibold text-[#3F5A4A]">
                {about.hero.profileName || "Kutti Story"}
              </h3>

            </div>

          </div>

          {/* Wide Image */}
          <div className="mt-8 lg:mt-10 overflow-hidden rounded-[30px]">

            <img
              src={about.hero.images[3]}
              alt=""
              className="h-[300px] w-full object-cover md:h-[500px] lg:h-[700px]"
            />

          </div>

        </section>

        {/* Statistics */}

        <section className="pt-20 pb-24">

          <div className="mx-auto grid max-w-[1900px] gap-10 px-6 text-center md:grid-cols-4">

            <div>
              <h3 className="font-heading text-5xl text-[#7F977B]">500+</h3>
              <p className="mt-3 uppercase tracking-[4px] text-[#666]">
                Weddings
              </p>
            </div>

            <div>
              <h3 className="font-heading text-5xl text-[#7F977B]">8+</h3>
              <p className="mt-3 uppercase tracking-[4px] text-[#666]">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="font-heading text-5xl text-[#7F977B]">100%</h3>
              <p className="mt-3 uppercase tracking-[4px] text-[#666]">
                Passion
              </p>
            </div>

            <div>
              <h3 className="font-heading text-5xl text-[#7F977B]">∞</h3>
              <p className="mt-3 uppercase tracking-[4px] text-[#666]">
                Memories
              </p>
            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}