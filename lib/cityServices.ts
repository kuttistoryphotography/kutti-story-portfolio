import { CityData } from "./cities";

export function getCityServices(city: CityData) {
  return [
    {
      title: "Wedding Photography",
      image: "/images/gallery1.JPG",
      description: `Timeless wedding photography in ${city.city} that beautifully captures every emotion, tradition, and unforgettable moment.`,
    },

    {
      title: "Baby Shower",
      image: "/images/gallery2.JPG",
      description: `Natural and emotional baby shower photography in ${city.city}, preserving precious family moments.`,
    },

    {
      title: "Cinematic Wedding Films",
      image: "/images/gallery3.JPG",
      description: `Luxury cinematic wedding films in ${city.city} that bring your wedding story to life through emotional storytelling.`,
    },

    {
      title: "Pre Wedding Shoot",
      image: "/images/gallery4.JPG",
      description: `Creative pre-wedding photography in ${city.city}, designed around beautiful locations, natural emotions, and your unique story.`,
    },

    {
      title: "Maternity",
      image: "/images/gallery5.JPG",
      description: `Elegant maternity photography in ${city.city}, creating timeless portraits that celebrate motherhood and family.`,
    },

    {
      title: "Baby Shoot",
      image: "/images/gallery6.jpg",
      description: `Beautiful baby photography in ${city.city}, capturing adorable expressions and precious memories.`,
    },
  ];
}