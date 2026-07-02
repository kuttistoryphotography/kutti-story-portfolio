import Image from "next/image";
import { featuredImages } from "@/lib/gallery";

export default function FeaturedGallery() {
  return (
    <section className="bg-[#F8EFDA] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">

          {featuredImages.map((image, index) => (
            <div
              key={index}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl group"
            >
              <div
                className={`relative w-full ${
                  index % 3 === 0
                    ? "h-[620px]"
                    : index % 2 === 0
                    ? "h-[420px]"
                    : "h-[520px]"
                }`}
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}