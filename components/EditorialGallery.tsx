"use client";

import CloudinaryImage from "@/components/CloudinaryImage";

interface Photo {
  _id: string;
  image: string;
  title?: string;
}

interface Props {
  photos: Photo[];
}

const layouts = [
  "col-span-12 md:col-span-6 row-span-2",  // Left Portrait
  "col-span-12 md:col-span-6 row-span-2",  // Right Portrait
  "col-span-12 row-span-2",                // Full Width
  "col-span-12 md:col-span-6 row-span-2",  // Left Portrait
  "col-span-12 md:col-span-6 row-span-2",  // Right Portrait
  "col-span-12 row-span-2",                // Full Width
];

export default function EditorialGallery({ photos }: Props) {
  return (
    <div className="grid grid-cols-12 auto-rows-[180px] md:auto-rows-[260px] gap-5">

      {photos.map((photo, index) => (
        <div
          key={photo._id}
          className={`relative overflow-hidden rounded-lg ${
            layouts[index % layouts.length]
          }`}
        >
          <CloudinaryImage
            src={photo.image}
            alt={photo.title || ""}
            fill
            optimizationWidth={1600}
            className="object-cover transition duration-700 hover:scale-105"
          />
        </div>
      ))}

    </div>
  );
}