import Image from "next/image";
import Link from "next/link";
import { CityData } from "@/lib/cities";
import { getCityServices } from "@/lib/cityServices";

type Props = {
  city: CityData;
};

export default function Services({ city }: Props) {
  const services = getCityServices(city);
  return (
    <section className="bg-white py-16 md:py-20">

      <div className="mx-auto max-w-7xl px-6">

        {/* ================= DESKTOP / TABLET HEADING ================= */}
        <div className="mb-12 text-center md:mb-16">

          <span className="text-[10px] uppercase tracking-[5px] text-[#8A9A7B]">
            Services
          </span>

          <h2 className="mt-3 font-heading text-3xl md:text-5xl">
            Wedding Photography Services in {city.city}
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-gray-600 md:text-lg">
            Premium photography and cinematic wedding films crafted with
            storytelling and elegance.
          </p>

        </div>


        {/* ========================================================= */}
        {/* MOBILE — 2 COLUMN IMAGE GRID                             */}
        {/* ========================================================= */}

        <div className="mx-auto grid max-w-[210px] grid-cols-2 gap-2 md:hidden">

          {services.map((service) => (

            <Link
              key={service.title}
              href="/portfolio"
              className="group relative aspect-square overflow-hidden rounded-[16px]"
            >

              <Image
                src={service.image}
                alt={`${service.title} in ${city.city} | Kutti Story Photography`}
                fill
                sizes="50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />

            </Link>

          ))}

        </div>


        {/* ========================================================= */}
        {/* MOBILE SECTION LABEL                                      */}
        {/* ========================================================= */}

        <div className="mt-5 text-center md:hidden">

          <span className="text-[11px] tracking-[6px] text-[#7F977B]">
            LOVE LETTERS
          </span>

        </div>


        {/* ========================================================= */}
        {/* DESKTOP — SERVICE CARDS                                   */}
        {/* ========================================================= */}

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service) => (

            <Link
              key={service.title}
              href="/portfolio"
              className="group block overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={service.image}
                  alt={`${service.title} in ${city.city} | Kutti Story Photography`}
                  fill
                  sizes="(max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

              </div>


              {/* Content */}
              <div className="p-6">

                <span className="text-[10px] uppercase tracking-[4px] text-[#8A9A7B]">
                  Wedding Service
                </span>

                <h3 className="mt-2 text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {service.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}