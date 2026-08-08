import { CityData } from "@/lib/cities";

type Props = {
  city: CityData;
};

const features = [
  {
    title: "Candid Storytelling",
    description:
      "Natural emotions captured beautifully without interrupting your special moments.",
    icon: "📸",
  },
  {
    title: "Cinematic Wedding Films",
    description:
      "Luxury wedding films with emotional storytelling and cinematic editing.",
    icon: "🎥",
  },
  {
    title: "Premium Editing",
    description:
      "Elegant color grading, skin tones, and timeless editing style.",
    icon: "🎨",
  },
  {
    title: "Experienced Team",
    description:
      "Since 2018, we have captured hundreds of weddings across Tamil Nadu.",
    icon: "❤️",
  },
];

export default function WhyChoose({ city }: Props) {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[6px] text-[#7F977B] text-sm">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-5xl font-heading">
            Why Couples Choose Kutti Story Photography
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            We don't just take photos—we preserve emotions, traditions,
            and unforgettable memories for couples across {city.city}.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 p-8 transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}