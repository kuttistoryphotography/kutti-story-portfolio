"use client";

import { Rnd } from "react-rnd";
import CloudinaryImage from "@/components/CloudinaryImage";


interface HeroCardProps {
  image: string;
  defaultX: number;
  defaultY: number;
  width: number;
  height: number;
}

export default function HeroCard({
  image,
  defaultX,
  defaultY,
  width,
  height,
}: HeroCardProps) {
  return (
    <Rnd
      default={{
        x: defaultX,
        y: defaultY,
        width,
        height,
      }}
      bounds="parent"
      enableResizing={false}
      onDragStop={(e, d) => {
        console.log(image, "X:", d.x, "Y:", d.y);
      }}
    >
      <div className="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl border-8 border-white">
        <CloudinaryImage
          src={image}
          alt="Hero image"
          fill
          optimizationWidth={1200}
          className="object-cover"
        />
      </div>
    </Rnd>
  );
}