"use client";

import { useEffect, useState } from "react";

interface Testimonial {
  _id: string;
  name: string;
  location: string;
  review: string;
  image: string;
  rating: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
      fetch("/api/testimonials")
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setTestimonials(data.testimonials);
          }
        })
        .catch((err) => console.error(err));
    }, []);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        <div className="text-center">
          <p className="uppercase tracking-[6px] text-[#7A8450] text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-5xl font-light text-[#3D3D3D]">
            Loved by Our Couples
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Every wedding is unique, and nothing makes us happier than hearing
            how our work becomes part of our clients' memories.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={item._id}
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-3xl text-[#7A8450]">
                {"★".repeat(item.rating || 5)}
              </div>

              <p className="mt-6 text-gray-700 leading-8 italic">
                "{item.review}"
              </p>

              <h3 className="mt-8 text-xl text-[#3D3D3D]">
                {item.name}
              </h3>

              <p className="mt-2 text-sm uppercase tracking-[3px] text-[#7A8450]">
                {item.location}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}