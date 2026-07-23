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
    <section className="mt-32 py-24 bg-white">
      <div className="max-w-[1900px] mx-auto px-6">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[4px] text-[#8A9A7B]">
            {subheading || "Our Collection"}
          </p>

          <h2 className="mt-4 text-5xl font-light">
            {heading || "Explore Our Services"}
          </h2>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services
            .filter((service) => service.isActive)
            .map((service: any) => (
              <Link
                key={service._id}
                href={`/services/${service.slug}`}
                className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="relative h-[500px] overflow-hidden">
                  <img
                    src={service.coverImage}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">

                  <h3 className="text-3xl font-extralight tracking-tight text-black">
                    {service.title}
                  </h3>

                  <p className="mt-5 text-lg leading-8 text-gray-500 font-light line-clamp-3">
                    {service.shortDescription || service.description}
                  </p>

                  {service.price && (
                    <p className="mt-6 font-medium text-[#8A9A7B]">
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