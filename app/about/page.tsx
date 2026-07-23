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

      <main className="pt-32 bg-[#FAFAF8]">

        {/* Hero */}
        <section className="py-20 text-center px-6">

          <p className="uppercase tracking-[8px] text-[#B79A5F] text-sm whitespace-pre-line">
            {about.hero.subheading || "About Us"}
          </p>

          <h1 className="mt-4 font-heading text-6xl text-[#3F5A4A] whitespace-pre-line">
            {about.hero.heading || (
              <>
                Every Love Story Deserves
                <br />
                To Be Remembered
              </>
            )}
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#666] whitespace-pre-line">
             {about.hero.paragraph ||
              `We don't simply take photographs.
          We preserve emotions, laughter, tears and timeless memories
          that become part of your family's legacy.`}
          </p>

        </section>

        {/* Studio Story */}

        <section className="mx-auto max-w-[1900px] px-6 pt-28 pb-16">

           

            <div className="grid grid-cols-3 grid-rows-2 gap-4 h-[620px]">

              {/* Large Image */}
              <div className="col-span-2 row-span-2 overflow-hidden rounded-[30px]">
                {about.hero.images[0] && (
                  <img
                    src={about.hero.images[0]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
              </div>

              {/* Top Right */}
              <div className="overflow-hidden rounded-[24px]">
                {about.hero.images[1] && (
                  <img
                    src={about.hero.images[1]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
              </div>

              {/* Bottom Right */}
              <div className="overflow-hidden rounded-[24px]">
                {about.hero.images[2] && (
                  <img
                    src={about.hero.images[2]}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                )}
              </div>

            </div>

            {/* Profile Card */}

            <div className="mt-12 flex justify-center">

              <div className="bg-white rounded-[30px] shadow-8xl p-8 w-[1040px] text-center">

                <div className="w-62 h-42 mx-auto square-full overflow-hidden border-4 border-[#FAFAF8] shadow-lg">

                  {about.hero.profileImage && (
                    <img
                      src={about.hero.profileImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}

                </div>

                <h3 className="mt-6 text-3xl font-semibold text-[#3F5A4A]">
                  {about.hero.profileName || "Kutti Story"}
                </h3>

                <p className="mt-2 text-zinc-500 tracking-wide">
                  {about.hero.profileRole || "Lead Photographer"}
                </p>

              </div>

            </div>

            {/* Large Featured Image */}
            {about.hero.images[3] && (
              <div className="mt-20 mb-20">
                <Container>
                  <div className="w-full h-[500px] overflow-hidden rounded-[30px] shadow-3xl">
                    <img
                      src={about.hero.images[3]}
                      alt="Featured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Container>
              </div>
            )}

          
          <div className="mt-40 max-w-4xl mx-auto text-center">

            <h2 className="font-heading text-5xl text-[#3F5A4A]">
              {about.story.heading || "Our Story"}
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#666] whitespace-pre-line">
              {about.story.paragraph ||
                `Kutti Story Photography was founded with one dream—
            capturing genuine emotions in the most beautiful way.

            Every wedding is unique. Every smile has meaning.
            Every glance tells a story.
            Our mission is to preserve these memories with elegance
            and cinematic artistry.

            Years later, when you look back at your photographs,
            we want you to relive every feeling exactly as it happened.`}
            </p>

          </div>
          

        </section>

        {/* Statistics */}

        <section className="py-24">

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