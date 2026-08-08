import Image from "next/image";
import Link from "next/link";
import { CityData } from "@/lib/cities";
import { getCityHero } from "@/lib/cityHero";

type HeroProps = {
  city: CityData;
};

export default function Hero({ city }: HeroProps) {
  const hero = getCityHero(city);

  return (
    <section className="relative overflow-hidden bg-black text-white">
<div className="h-30 bg-white-500"></div>
      {/* Background Image */}
      <Image
        src={hero.backgroundImage}
        alt={hero.title}
        fill
        priority
        className="object-cover object-[75%_center]"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 md:bg-black/65" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-start justify-center px-6 pt-20 pb-6 md:pt-24 md:pb-8">

        <div className="w-full max-w-3xl text-center">

          {/* Heading */}
          <h1 className="font-heading text-5xl font-light leading-tight text-white md:text-6xl">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm uppercase tracking-[6px] text-[#D8B46A]">
            {hero.subtitle}
          </p>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-7 flex justify-center gap-4">

            <Link
              href="/portfolio"
              className="inline-flex h-14 w-40 items-center justify-center rounded-full border border-white/70 px-8 font-semibold text-[#8A9A5B] transition-all duration-300 hover:border-[#849669] hover:bg-[#849669] hover:text-white hover:shadow-[0_0_12px_rgba(132,150,105,0.8),0_0_35px_rgba(132,150,105,0.45)]"
            >
              View Portfolio
            </Link>

            <Link
              href="https://www.kuttistoryphotography.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-40 items-center justify-center rounded-full border border-white/70 px-8 font-semibold text-[#8A9A5B] transition-all duration-300 hover:border-[#849669] hover:bg-[#849669] hover:text-white hover:shadow-[0_0_12px_rgba(132,150,105,0.8),0_0_35px_rgba(132,150,105,0.45)]"
            >
              Contact Us
            </Link>

          </div>
            <div className="h-5 bg-white-500"></div>
          {/* Highlights */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 gap-h-1 text-white">

            {hero.stats.map((stat, index) => (
              <div
                key={stat.title}
                className="flex items-center gap-2"
              >
                <span className="text-lg">
                  {stat.icon}
                </span>

                <span className="text-sm font-medium md:text-base">
                  {stat.title}
                </span>

                {index !== hero.stats.length - 1 && (
                  <span className="ml-2 text-white/40">
                    •
                  </span>
                )}

              </div>
            ))}

          </div>
          <div className="h-5 bg-white-500"></div>
        </div>

      </div>

    </section>
  );
}