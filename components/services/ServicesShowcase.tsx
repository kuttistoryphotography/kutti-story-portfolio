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
    <section className="pt-40 pb-24 bg-white">
      <div className="h-10 bg-white-500"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="uppercase tracking-[4px] text-[#8A9A5B] mb-4">
              {subheading}
            </p>

            <h2 className="text-5xl md:text-6xl font-extralight leading-tight tracking-tight mb-8">
              {heading}
            </h2>

            <p className="text-lg leading-9 text-gray-500 font-light max-w-xl">
              {description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full h-[520px] rounded-[42px] overflow-hidden shadow-2xl">
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