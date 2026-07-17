"use client";

import CloudinaryImage from "@/components/CloudinaryImage";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Photo {
  _id: string;
  title: string;
  image: string;
  category: string;
}

interface Props {
  photos: Photo[];
  currentIndex: number;
  open: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  photos,
  currentIndex,
  open,
  onClose,
  onNext,
  onPrev,
}: Props) {
  if (!open) return null;

  const photo = photos[currentIndex];

  return (
    <div className="fixed inset-0 z-[9999] bg-black/95">

      <button
        onClick={onClose}
        className="absolute right-8 top-8 z-50 rounded-full bg-white/20 p-3 text-white backdrop-blur"
      >
        <X size={28} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur"
      >
        <ChevronLeft size={30} />
      </button>

      <button
        onClick={onNext}
        className="absolute right-8 top-1/2 z-50 -translate-y-1/2 rounded-full bg-white/20 p-3 text-white backdrop-blur"
      >
        <ChevronRight size={30} />
      </button>

      <div className="flex h-full flex-col items-center justify-center px-10">

        <div className="relative h-[80vh] w-full max-w-6xl">

          <CloudinaryImage
            src={photo.image}
            alt={photo.title}
            fill
            optimizationWidth={1600}
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <div className="mt-6 text-center text-white">

          <h2 className="text-3xl font-light">
            {photo.title}
          </h2>

          <p className="mt-2 text-gray-300">
            {photo.category}
          </p>

        </div>

      </div>

    </div>
  );
}