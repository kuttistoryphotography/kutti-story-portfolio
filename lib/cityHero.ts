import { CityData } from "./cities";

const defaultHero = {
  subtitle:
    "Candid Wedding Photography • Cinematic Wedding Films • Wedding Videography",

  buttonText: "Book Your Wedding",

  buttonLink: "https://www.kuttistoryphotography.com/contact-us",

  backgroundImage: "/images/hero/hero-bg.jpg",

  heroImage: "/images/gallery1.JPG",
};

export function getCityHero(city: CityData) {
  return {
    ...defaultHero,

    title: `Best Wedding Photographer in ${city.city}`,

    description: `Kutti Story Photography offers premium wedding photography in ${city.city}, specializing in candid wedding photography, cinematic wedding films, engagement photography and luxury wedding storytelling.`,

    stats: [
      {
        icon: "📸",
        title: "Since 2018",
      },
      {
        icon: "💍",
        title: "250+ Weddings",
      },
      {
        icon: "🎥",
        title: "Cinematic Films",
      },
      {
        icon: "📍",
        title: `Serving ${city.city}`,
      },
    ],
  };
}