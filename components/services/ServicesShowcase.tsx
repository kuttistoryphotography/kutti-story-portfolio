"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import { motion } from "framer-motion";

interface Props {
  heading: string;
  subheading: string;
  description: string;
  image: string;
}

export default function ServicesShowcase({
  heading,
  subheading,
  description,
  image,
}: Props) {
  return (
    <section className="pt-16 md:pt-40 pb-16 md:pb-24 bg-white">
      <div className="h-10 bg-white-500"></div>
      <div className="mx-auto max-w-[1900px] px-4 sm:px-6">
        <div className="grid items-center gap-12 md:gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-[11px] sm:text-xs uppercase tracking-[2px] sm:tracking-[4px] text-[#8A9A5B]">
              {subheading}
            </p>

            <h2 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-extralight leading-tight tracking-tight">
              {heading}
            </h2>

            <p className="max-w-xl text-base sm:text-lg leading-7 sm:leading-8 md:leading-9 text-gray-500 font-light">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px] w-full overflow-hidden rounded-[28px] lg:rounded-[42px] shadow-2xl">
              {image ? (
                <CloudinaryImage
                  src={image}
                  alt={heading}
                  fill
                  optimizationWidth={1600}
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                ) : (
                <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">
                    Showcase Image
                </div>
                )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}