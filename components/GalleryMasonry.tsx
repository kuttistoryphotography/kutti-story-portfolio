"use client";

import CloudinaryImage from "@/components/CloudinaryImage";

interface GalleryPhoto {
  _id: string;
  image: string;
  title: string;
}

interface Props {
  photos: GalleryPhoto[];
}

export default function GalleryMasonry({ photos }: Props) {
  return (
    <div className="space-y-0">
      {Array.from({ length: Math.ceil(photos.length / 5) }).map(
        (_, blockIndex) => {
          const start = blockIndex * 5;
          const block = photos.slice(start, start + 5);

          return (
            <div
              key={blockIndex}
              className="grid grid-cols-2 gap-3"
            >
              {/* Image 1 */}
              {block[0] && (
                <ImageCard photo={block[0]} className="aspect-[3/5]" />
              )}

              {/* Image 2 */}
              {block[1] && (
                <ImageCard photo={block[1]} className="aspect-[3/5]" />
              )}

              {/* Image 3 Full Width */}
              {block[2] && (
                <div className="col-span-2">
                  <ImageCard
                    photo={block[2]}
                    className="aspect-[16/9]"
                  />
                </div>
              )}

              {/* Image 4 */}
              {block[3] && (
                <ImageCard photo={block[3]} className="aspect-[3/5]" />
              )}

              {/* Image 5 */}
              {block[4] && (
                <ImageCard photo={block[4]} className="aspect-[3/5]" />
              )}
              <div className="h-0 bg-white-500"></div>
            </div>
          );
        }
      )}
    </div>
  );
}

function ImageCard({
  photo,
  className,
}: {
  photo: GalleryPhoto;
  className: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm  ${className}`}
    >
      <CloudinaryImage
        src={photo.image}
        alt={photo.title}
        fill
        optimizationWidth={1200}
        loading="lazy"
        className="object-cover transition duration-700 hover:scale-105"
      />
    </div>
  );
}