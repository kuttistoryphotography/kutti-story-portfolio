import { CityData } from "@/lib/cities";

type Props = {
  city: CityData;
};

export default function CitySEOSection({ city }: Props) {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-5 text-center md:px-8">

        <p className="text-[10px] uppercase tracking-[5px] text-[#8A9A7B]">
          Wedding Photography in {city.city}
        </p>

        <h2 className="mt-4 font-heading text-3xl font-light text-[#2F2F2F] md:text-5xl">
          Best Wedding Photography in {city.city}
        </h2>

        {city.seoIntro && (
          <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-gray-600 md:text-lg">
            {city.seoIntro}
          </p>
        )}

        {city.serviceIntro && (
          <p className="mx-auto mt-5 max-w-4xl text-base leading-8 text-gray-600 md:text-lg">
            {city.serviceIntro}
          </p>
        )}

      </div>
    </section>
  );
}