"use client";

import Link from "next/link";

interface Service {
  _id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  isActive: boolean;
  price?: number;
  features?: string[];
}

interface Props {
  services: Service[];
  heading: string;
  subheading: string;
}

export default function ServicesCardGrid({
  services,
  heading,
  subheading,
}: Props) {
  return (
    <section className="mt-16 md:mt-32 py-16 md:py-24 bg-white">
      <div className="max-w-[1900px] mx-auto px-3">
        <div className="text-center mb-14">

          <p className="uppercase tracking-[4px] text-[#8A9A7B]">
            {subheading || "Our Collection"}
          </p>

          <h2 className="mt-4 text-5xl font-light">
            {heading || "Explore Our Services"}
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">

          {services
            .filter((service) => service.isActive)
            .map((service: any) => (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-[32px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative h-[260px] md:h-[220px] overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <p className="mt-2 text-gray-500 leading-7 line-clamp-1">
                    {service.shortDescription || service.description}
                  </p>

                </div>

                <div className="p-6">

                  <h3 className="text-xl md:text-3xl font-light tracking-tight text-[#2D2D2D]">
                    {service.title}
                  </h3>

                  <pre className="text-xs whitespace-pre-wrap bg-white p-2">
                    {JSON.stringify(service.shortDescription)}
                  </pre>

                  {service.price && (
                    <p className="mt-8 font-medium text-[#8A9A7B]">
                      Starting from ₹{service.price}
                    </p>
                  )}

                </div>
              </Link>
            ))}

        </div>

      </div>
      <div className="h-10 bg-white-500"></div>
    </section>
  );
}