"use client";

export default function WhyKuttiStory() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 md:px-8 lg:px-12 xl:px-16">

        {/* Top Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[32%_60%] gap-4 items-start">

          <h2 className="font-balery text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-normal text-[#2F5DB2]">
            Why Choose Kutti Story Photography?
          </h2>

          <p className="text-base sm:text-lg leading-8 sm:leading-9 text-[#4B4B4B]">
            At <strong>Kutti Story Photography</strong>, we specialize in
            <strong> wedding photography in Madurai</strong>, capturing authentic
            emotions and timeless moments with a creative, cinematic approach.
            From traditional Tamil weddings and candid wedding photography to
            engagement sessions, pre-wedding shoots, maternity photography,
            baby photography, and wedding films, we create images that tell
            your story beautifully.

            <br /><br />

            Based in Madurai, we proudly serve couples and families across
            Tamil Nadu, including Chennai, Coimbatore, Trichy, Dindigul,
            Theni, Sivakasi, Virudhunagar, Tirunelveli, and destination
            weddings throughout South India.
          </p>

        </div>

        {/* Testimonial Card */}

        <div className="mt-16 rounded-sm bg-[#F3EEE4] px-6 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[32%_60%] gap-1 items-center">

         {/* Left */}

            <div>

              <div className="text-7xl text-[#6F6B63] leading-none">
                “
              </div>

              <h3 className="font-balery mt-2 text-5xl lg:text-6xl leading-[1.05] text-[#6F6B63]">
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

              <p className="text-base sm:text-lg leading-8 sm:leading-9 text-[#4B4B4B]">
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