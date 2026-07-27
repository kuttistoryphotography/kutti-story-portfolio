"use client";

import CloudinaryImage from "@/components/CloudinaryImage";

interface Props {
  images: string[];
  title: string;
}

export default function LuxuryEditorialGallery({
  images,
  title,
}: Props) {
  return (
    <div className="mx-auto max-w-7xl px-3 md:px-6 ">

      {Array.from({
        length: Math.ceil(images.length / 5),
      }).map((_, block) => {

        const start = block * 5;
        const bottomImages = images.slice(start + 3, start + 5);

        return (

            <div key={block} className="grid gap-3 md:gap-8">

            {/* Row 1 */}

            <div className="grid grid-cols-2 gap-3 md:gap-8">

              {images
                .slice(start, start + 2)
                .map((image: string, index: number) => (

                  <div
                    key={start + index}
                    className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg md:rounded-xl"
                  >

                    <CloudinaryImage
                      src={image}
                      alt={`${title} ${start + index + 1}`}
                      fill
                      optimizationWidth={1400}
                      className="object-cover transition duration-700 hover:scale-105"
                    />

                  </div>

                ))}

            </div>

            {/* Wide */}

            {images[start + 2] && (

              <div className="w-full">
                <div className="relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-lg md:rounded-xl">
                    <CloudinaryImage
                    src={images[start + 2]}
                    alt={`${title} ${start + 3}`}
                    fill
                    optimizationWidth={1800}
                    className="object-cover transition duration-700 hover:scale-105"
                    />
                </div>
                </div>

            )}

            {/* Bottom */}

            {bottomImages.length === 1 ? (
            <div className="flex justify-center">
                <div className="relative w-full md:w-[48%] h-[260px] sm:h-[340px] md:h-[760px] overflow-hidden rounded-lg md:rounded-xl">
                <CloudinaryImage
                    src={bottomImages[0]}
                    alt={`${title} ${start + 4}`}
                    fill
                    optimizationWidth={1400}
                    className="object-cover transition duration-700 hover:scale-105"
                />
                </div>
            </div>
            ) : bottomImages.length === 2 ? (
            <div className="grid grid-cols-2 gap-3 md:gap-8">
                {bottomImages.map((image, index) => (
                <div
                    key={start + index + 3}
                    className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-lg md:rounded-xl"
                >
                    <CloudinaryImage
                    src={image}
                    alt={`${title} ${start + index + 4}`}
                    fill
                    optimizationWidth={1400}
                    className="object-cover transition duration-700 hover:scale-105"
                    />
                </div>
                ))}
            </div>
            ) : null}
            <div className="h-3 md:h-8"></div>
          </div>

        );

      })}

    </div>
  );
}