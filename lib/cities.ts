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

      faq: [
        {
          question: "How much does wedding photography cost in Madurai?",
          answer:
            "Wedding photography pricing in Madurai depends on the number of functions, coverage hours, photography style, videography requirements, albums, and additional services. Contact Kutti Story Photography for a package based on your wedding requirements.",
        },
        {
          question: "Do you provide candid wedding photography in Madurai?",
          answer:
            "Yes. Kutti Story Photography provides candid wedding photography in Madurai, focusing on natural emotions, family interactions, wedding rituals, and memorable moments.",
        },
        {
          question: "Do you cover traditional Tamil weddings in Madurai?",
          answer:
            "Yes. We cover traditional Tamil weddings and capture important rituals, family moments, bridal details, groom portraits, ceremonies, and candid emotions.",
        },
        {
          question: "Do you provide wedding videography in Madurai?",
          answer:
            "Yes. We offer cinematic wedding videography and wedding films along with photography coverage.",
        },
      ],

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

    faq: [
      {
        question: "Do you provide wedding photography in Chennai?",
        answer:
          "Yes. Kutti Story Photography provides wedding photography and videography services in Chennai for traditional weddings, engagements, receptions, and other wedding celebrations.",
      },
      {
        question: "Do you offer candid wedding photography in Chennai?",
        answer:
          "Yes. Our candid wedding photography focuses on genuine emotions, family moments, celebrations, rituals, and natural interactions.",
      },
      {
        question: "Do you provide cinematic wedding films in Chennai?",
        answer:
          "Yes. We provide cinematic wedding films designed to tell your wedding story through carefully captured moments and professional editing.",
      },
      {
        question: "Can you cover multiple wedding functions in Chennai?",
        answer:
          "Yes. Coverage can be planned for multiple functions depending on your wedding schedule and photography and videography requirements.",
      },
    ],
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

      faq: [
        {
          question: "Do you provide wedding photography in Coimbatore?",
          answer:
            "Yes. Kutti Story Photography provides wedding photography and videography services in Coimbatore for weddings, engagements, receptions, and related celebrations.",
        },
        {
          question: "Do you offer candid wedding photography in Coimbatore?",
          answer:
            "Yes. We capture natural emotions, family interactions, rituals, celebrations, and genuine wedding moments through candid photography.",
        },
        {
          question: "Do you provide pre-wedding photography in Coimbatore?",
          answer:
            "Yes. We provide creative pre-wedding photography sessions that can be planned around your preferred style and location.",
        },
      ],

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

    faq: [
      {
        question: "Do you provide wedding photography in Trichy?",
        answer:
          "Yes. Kutti Story Photography provides wedding photography and videography services in Trichy for traditional weddings, engagements, receptions, and other celebrations.",
      },
      {
        question: "Do you cover traditional Tamil weddings in Trichy?",
        answer:
          "Yes. We capture traditional Tamil wedding rituals, family moments, ceremonies, portraits, and candid emotions.",
      },
      {
        question: "Do you offer cinematic wedding films in Trichy?",
        answer:
          "Yes. Cinematic wedding films are available along with photography and videography coverage.",
      },
    ],

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

    faq: [
      {
        question: "Do you provide wedding photography in Dindigul?",
        answer:
          "Yes. Kutti Story Photography provides wedding photography and videography services in Dindigul for weddings, engagements, receptions, and other celebrations.",
      },
      {
        question: "Do you offer candid wedding photography in Dindigul?",
        answer:
          "Yes. Our candid photography captures natural emotions and important moments without interrupting the celebration.",
      },
      {
        question: "Do you cover traditional Tamil weddings in Dindigul?",
        answer:
          "Yes. We cover traditional Tamil wedding ceremonies and capture important rituals, family interactions, portraits, and candid moments.",
      },
    ],

  },
};