"use client";

export default function WhyKuttiStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Top Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%] gap-12 items-start">

          <h2 className="text-5xl font-light tracking-wide text-[#2F5DB2]">
            WHY KUTTI STORY?
          </h2>

          <p className="text-lg leading-9 text-[#4B4B4B]">
            Every wedding is unique, and so is every story we tell.
            We believe in capturing genuine emotions, timeless moments,
            and beautiful memories that you'll cherish forever.
          </p>

        </div>

        {/* Testimonial Card */}

        <div className="mt-16 rounded-sm bg-[#F3EEE4] p-12 lg:p-16">

          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">

            {/* Left */}

            <div>

              <div className="text-7xl text-[#6F6B63] leading-none">
                “
              </div>

              <h3
                className="mt-2 text-5xl lg:text-6xl leading-tight font-light text-[#6F6B63]"
                style={{ fontFamily: "serif" }}
              >
                A team that
                <br />
                exceeds
                <br />
                expectations
              </h3>

              <div className="text-7xl text-[#6F6B63] leading-none mt-2">
                ”
              </div>

            </div>

            {/* Right */}

            <div>

              <p className="text-lg leading-9 text-[#4B4B4B]">
                The real strength of Kutti Story is not just photography,
                but the people behind the camera. From the very first
                conversation until your final delivery, we work as a team
                dedicated to telling your story with authenticity,
                creativity, and care.

                <br />
                <br />

                Our goal is simple—make every couple feel relaxed,
                enjoy every moment, and receive memories they'll
                treasure for a lifetime.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}