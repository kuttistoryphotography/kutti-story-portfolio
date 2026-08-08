import Image from "next/image";
import { CityData } from "@/lib/cities";

type Props = {
  city: CityData;
};

const gallery = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function Gallery({ city }: Props) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-[#7F977B] text-sm">
            Portfolio
          </span>

          <h2 className="mt-4 text-5xl font-heading">
            Wedding Gallery in {city.city}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
            Every wedding has a unique story. Here are a few timeless moments
            captured by Kutti Story Photography.
          </p>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {gallery.map((image) => (
            <div
              key={image}
              className="relative aspect-[4/5] overflow-hidden rounded-2xl group"
            >
              <Image
                src={image}
                alt={`Wedding Photography in ${city.city}`}
                fill
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition" />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}