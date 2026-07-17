"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import Masonry from "react-masonry-css";
import { optimizeCloudinaryImage } from "@/lib/cloudinary-image";

interface GalleryPhoto {
  _id: string;
  image: string;
  title: string;
}

interface Props {
  photos: GalleryPhoto[];
}

const breakpointColumnsObj = {
  default: 3,
  1024: 2,
  640: 1,
};

export default function GalleryMasonry({ photos }: Props) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {photos.map((photo) => (
        <div
         key={photo._id}
         className="group mb-6 overflow-hidden rounded-[28px]"
        >
        <CloudinaryImage
          src={photo.image}
          alt={photo.title}
          width={700}
          height={900}
          optimizationWidth={1000}
          loading="lazy"
          className="h-auto w-full rounded-[28px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        </div>
      ))}
    </Masonry>
  );
}