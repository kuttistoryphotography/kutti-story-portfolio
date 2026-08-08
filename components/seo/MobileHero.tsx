import Image from "next/image";
import Link from "next/link";
import { CityData } from "@/lib/cities";
import { getCityHero } from "@/lib/cityHero";

type Props = {
  city: CityData;
};

export default function MobileHero({ city }: Props) {
  const hero = getCityHero(city);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white md:hidden">

      {/* Background */}
      <Image
        src={hero.backgroundImage}
        alt={hero.title}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
        
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />
    
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/65 to-black/90" />
    
      {/* Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] items-center px-6 py-12">
        
        <div className="w-full text-center">
            <div className="h-30 bg-white-500"></div>
          {/* Title */}
          <h1 className="font-heading text-[34px] font-light leading-[1.08] tracking-tight">
            {hero.title}
          </h1>
            
          {/* Subtitle */}
          <p className="mx-auto mt-3 max-w-sm text-[11px] uppercase leading-5 tracking-[3px] text-[#D8B46A]">
            {hero.subtitle}
          </p>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-sm text-[16px] leading-8 text-white/90">
            {hero.description}
          </p>

          {/* Buttons */}
          <div className="mt-8 flex justify-center gap-3">

            <Link
              href="/portfolio"
              className="inline-flex w-28 h-12 items-center justify-center rounded-full border border-white/70 px-7 text-sm font-semibold"
            >
              View Portfolio
            </Link>

            <Link
              href="https://www.kuttistoryphotography.com/contact-us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-26 h-12 items-center justify-center rounded-full border border-white/70 px-7 text-sm font-semibold"
            >
              Contact Us
            </Link>

          </div>
        <div className="h-5 bg-white-500"></div>

          {/* Highlights — SINGLE LINE */}
          <div className="mt-7 overflow-hidden">

            <div className="flex min-w-max justify-center gap-3 text-sm">

              {hero.stats.map((stat, index) => (
                <div
                  key={stat.title}
                  className="flex items-center gap-2"
                >
                  <span>{stat.icon}</span>

                  <span className="font-medium">
                    {stat.title}
                  </span>

                  {index !== hero.stats.length - 1 && (
                    <span className="text-white/40">
                      •
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
        <div className="h-5 bg-white-500"></div>
    </section>
  );
}