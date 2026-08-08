export type CityData = {
  slug: string;
  city: string;
  state: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  canonical: string;

  // City-specific SEO content
  seoIntro?: string;
  serviceIntro?: string;
  faq?: {
    question: string;
    answer: string;
  }[];
};

export const cities: Record<string, CityData> = {
  madurai: {
    slug: "madurai",
    city: "Madurai",
    state: "Tamil Nadu",

    title: "Best Wedding Photographer in Madurai",

    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Madurai.",

    heroTitle: "Best Wedding Photographer in Madurai",

    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",

    canonical:
      "https://kuttistoryphotography.in/wedding-photography/madurai",

      seoIntro:
        "Kutti Story Photography is a wedding photography studio serving Madurai and surrounding areas. We specialize in candid wedding photography, traditional Tamil wedding photography, cinematic wedding films, engagement photography, pre-wedding shoots, maternity photography, and baby photography.",

      serviceIntro:
        "From intimate engagement ceremonies to traditional Tamil weddings, our Madurai wedding photography team focuses on natural emotions, cultural details, elegant portraits, and cinematic storytelling.",


  },

  chennai: {
    slug: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",

    title: "Best Wedding Photographer in Chennai",

    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Chennai.",

    heroTitle: "Best Wedding Photographer in Chennai",

    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",

    canonical:
      "https://kuttistoryphotography.in/wedding-photography/chennai",

    seoIntro:
      "Kutti Story Photography provides wedding photography services in Chennai, covering candid weddings, traditional ceremonies, engagement events, pre-wedding shoots, cinematic wedding films, and wedding videography.",

    serviceIntro:
      "Our Chennai wedding photography approach combines candid moments, elegant portraits, traditional wedding coverage, and cinematic storytelling to create a complete visual story of your celebration.",

  },

  coimbatore: {
    slug: "coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",

    title: "Best Wedding Photographer in Coimbatore",

    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Coimbatore.",

    heroTitle: "Best Wedding Photographer in Coimbatore",

    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",

    canonical:
      "https://kuttistoryphotography.in/wedding-photography/coimbatore",

      seoIntro:
        "Kutti Story Photography offers wedding photography in Coimbatore, including candid wedding photography, traditional wedding coverage, engagement photography, pre-wedding shoots, cinematic wedding films, and wedding videography.",

      serviceIntro:
        "Our Coimbatore wedding photography combines natural candid moments with elegant portraits, traditional ceremony coverage, and cinematic storytelling.",

  },

  trichy: {
    slug: "trichy",
    city: "Trichy",
    state: "Tamil Nadu",

    title: "Best Wedding Photographer in Trichy",

    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Trichy.",

    heroTitle: "Best Wedding Photographer in Trichy",

    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",

    canonical:
      "https://kuttistoryphotography.in/wedding-photography/trichy",

    seoIntro:
      "Kutti Story Photography offers wedding photography and videography in Trichy, covering candid wedding photography, traditional Tamil weddings, engagement photography, pre-wedding shoots, and cinematic wedding films.",

    serviceIntro:
      "Our Trichy wedding photography focuses on authentic emotions, traditional wedding rituals, family celebrations, elegant portraits, and cinematic storytelling.",

  },

  dindigul: {
    slug: "dindigul",
    city: "Dindigul",
    state: "Tamil Nadu",

    title: "Best Wedding Photographer in Dindigul",

    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Dindigul.",

    heroTitle: "Best Wedding Photographer in Dindigul",

    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",

    canonical:
      "https://kuttistoryphotography.in/wedding-photography/dindigul",

    seoIntro:
      "Kutti Story Photography provides wedding photography in Dindigul, including candid wedding photography, traditional Tamil wedding coverage, engagement photography, pre-wedding photography, cinematic wedding films, and wedding videography.",

    serviceIntro:
      "Our Dindigul wedding photography focuses on genuine emotions, cultural traditions, family moments, beautiful portraits, and cinematic storytelling.",

  
  },

  theni: {
    slug: "theni",
    city: "Theni",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Theni",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Theni.",
    heroTitle: "Best Wedding Photographer in Theni",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/theni",
  },

  sivakasi: {
    slug: "sivakasi",
    city: "Sivakasi",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Sivakasi",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Sivakasi.",
    heroTitle: "Best Wedding Photographer in Sivakasi",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/sivakasi",
  },

  virudhunagar: {
    slug: "virudhunagar",
    city: "Virudhunagar",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Virudhunagar",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Virudhunagar.",
    heroTitle: "Best Wedding Photographer in Virudhunagar",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/virudhunagar",
  },

  tirunelveli: {
    slug: "tirunelveli",
    city: "Tirunelveli",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Tirunelveli",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Tirunelveli.",
    heroTitle: "Best Wedding Photographer in Tirunelveli",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/tirunelveli",
  },

  pondicherry: {
    slug: "pondicherry",
    city: "Pondicherry",
    state: "Puducherry",
    title: "Best Wedding Photographer in Pondicherry",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Pondicherry.",
    heroTitle: "Best Wedding Photographer in Pondicherry",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/pondicherry",
  },
  salem: {
    slug: "salem",
    city: "Salem",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Salem",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Salem.",
    heroTitle: "Best Wedding Photographer in Salem",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/salem",
  },

  erode: {
    slug: "erode",
    city: "Erode",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Erode",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Erode.",
    heroTitle: "Best Wedding Photographer in Erode",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/erode",
  },

  tiruppur: {
    slug: "tiruppur",
    city: "Tiruppur",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Tiruppur",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Tiruppur.",
    heroTitle: "Best Wedding Photographer in Tiruppur",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/tiruppur",
  },

  thanjavur: {
    slug: "thanjavur",
    city: "Thanjavur",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Thanjavur",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Thanjavur.",
    heroTitle: "Best Wedding Photographer in Thanjavur",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/thanjavur",
  },

  kanyakumari: {
    slug: "kanyakumari",
    city: "Kanyakumari",
    state: "Tamil Nadu",
    title: "Best Wedding Photographer in Kanyakumari",
    description:
      "Kutti Story Photography offers premium wedding photography, candid wedding photography, cinematic wedding films, pre-wedding photography, engagement photography, and wedding videography in Kanyakumari.",
    heroTitle: "Best Wedding Photographer in Kanyakumari",
    heroSubtitle:
      "Capturing timeless wedding stories with cinematic photography.",
    canonical:
      "https://kuttistoryphotography.in/wedding-photography/kanyakumari",
  },

};