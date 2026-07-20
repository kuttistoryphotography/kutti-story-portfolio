"use client";

import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
  _id: string;
  name: string;
  location: string;
  review: string;
  image: string;
  rating: number;
}

export default function TestimonialsSlider() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTestimonials(data.testimonials);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <section className="bg-[#F7F3EB] py-28 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[6px] text-[#7A8450]">
            Love Letters
          </p>

          <h2 className="mt-5 text-5xl font-light text-[#2C2A28]">
            What Our Couples Say
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          loop={testimonials.length >= 2}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="rounded-3xl bg-white p-12 text-center shadow-sm">

                <div className="text-3xl text-[#8B7355]">
                  {"★".repeat(item.rating || 5)}
                </div>

                <p className="mt-8 text-xl italic leading-9 text-gray-700">
                  "{item.review}"
                </p>

                <h3 className="mt-10 text-2xl text-[#3D3D3D]">
                  {item.name}
                </h3>

                <p className="mt-2 text-sm uppercase tracking-[4px] text-[#7A8450]">
                  {item.location}
                </p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}