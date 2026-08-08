import { CityData } from "./cities";

export function getCityFaq(city: CityData) {
  // Use city-specific FAQ content if available
  if (city.faq && city.faq.length > 0) {
    return city.faq;
  }

  // Default FAQ for cities without custom FAQ content
  return [
    {
      question: `Do you provide wedding photography in ${city.city}?`,
      answer: `Yes. Kutti Story Photography provides wedding photography, candid wedding photography, traditional wedding photography, cinematic wedding films, engagement photography, and pre-wedding photography in ${city.city}.`,
    },

    {
      question: `How much does wedding photography cost in ${city.city}?`,
      answer: `Wedding photography pricing in ${city.city} depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.`,
    },

    {
      question: `Do you provide candid wedding photography in ${city.city}?`,
      answer: `Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in ${city.city}.`,
    },

    {
      question: `Do you provide cinematic wedding videography in ${city.city}?`,
      answer: `Yes. Kutti Story Photography offers cinematic wedding films and professional wedding videography in ${city.city}, focusing on emotional storytelling and memorable moments.`,
    },

    {
      question: `Do you cover traditional Tamil weddings in ${city.city}?`,
      answer: `Yes. We cover traditional Tamil weddings in ${city.city}, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.`,
    },

    {
      question: `Do you offer pre-wedding photography in ${city.city}?`,
      answer: `Yes. We offer creative pre-wedding photography sessions in ${city.city} and nearby locations, planned according to your preferred style and concept.`,
    },

    {
      question: `How early should I book my wedding photographer?`,
      answer:
        "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
    },
  ];
}