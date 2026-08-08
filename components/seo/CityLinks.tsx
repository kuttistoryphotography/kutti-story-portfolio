import Link from "next/link";
import { cities, CityData } from "@/lib/cities";

type CityLinksProps = {
  currentCity?: CityData;
};

export default function CityLinks({ currentCity }: CityLinksProps) {
  const cityList = Object.values(cities).filter(
    (city) => city.slug !== currentCity?.slug
  );

  return (
    <section className="bg-[#F8F6F1] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Label */}
        <p className="text-[10px] uppercase tracking-[5px] text-[#8A9A7B]">
          Wedding Photography Across Tamil Nadu
        </p>

        {/* Heading */}
        <h2 className="mt-4 font-heading text-3xl font-light text-[#2F2F2F] md:text-5xl">
          Wedding Photography in Tamil Nadu
        </h2>

        {/* Description */}
        <p className="mx-auto mt-3 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
          Kutti Story Photography provides wedding photography, candid
          photography, cinematic wedding films, pre-wedding shoots, and
          wedding videography across Tamil Nadu.
        </p>

        {/* City Links */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {cityList.map((city) => (
            <Link
              key={city.slug}
              href={`/wedding-photography/${city.slug}`}
              className="w-35 rounded-full border border-[#849669] px-6 py-3 text-xs font-medium text-[#5F704E] transition-all duration-300 hover:bg-[#849669] hover:text-white"
            >
              Wedding Photographer in {city.city}
            </Link>
          ))}
        </div>
            <div className="h-5 bg-white-500"></div>
      </div>
    </section>
  );
}