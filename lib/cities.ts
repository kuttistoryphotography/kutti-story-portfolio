export type CityData = {
  slug: string;
  city: string;
  state: string;
  title: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  canonical: string;

  seoIntro?: string;
  serviceIntro?: string;
  localAreas?: string;

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
      "Candid wedding photography and cinematic wedding films for unforgettable celebrations in Madurai.",
    
    canonical: 
       "https://kuttistoryphotography.in/wedding-photography/madurai",

    seoIntro:
      "Kutti Story Photography is a Madurai-based wedding photography studio specializing in candid wedding photography, traditional Tamil wedding photography, cinematic wedding films, engagement photography, pre-wedding shoots, and wedding videography. We document weddings across Madurai, from intimate family celebrations to large traditional marriage functions.",

    serviceIntro:
      "Our Madurai wedding photography combines candid moments, traditional Tamil wedding rituals, natural couple portraits, bridal portraits, family celebrations, and cinematic storytelling. We focus on real emotions and meaningful details so every wedding gallery feels personal to the couple and their family.",
    
    localAreas:
  "We serve couples across Madurai and nearby areas, including Anna Nagar, KK Nagar, Tallakulam, Arapalayam, Thiruppalai, Villapuram, and surrounding wedding venues.",

      faq: [
        {
          question: "What wedding photography services do you offer in Madurai?",
          answer:
            "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Madurai.",
        },
        {
          question: "How much does wedding photography cost in Madurai?",
          answer:
            "Wedding photography pricing in Madurai depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
        },
        {
          question: "Do you provide candid wedding photography in Madurai?",
          answer:
            "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Madurai.",
        },
        {
          question: "Do you cover traditional Tamil weddings in Madurai?",
          answer:
            "Yes. We cover traditional Tamil weddings in Madurai, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
        },
        {
          question: "Do you offer cinematic wedding films in Madurai?",
          answer:
            "Yes. Our cinematic wedding films in Madurai focus on genuine emotions, important rituals, family moments, and the overall story of your wedding day.",
        },
        {
          question: "How early should I book a wedding photographer in Madurai?",
          answer:
            "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
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
        question: "What wedding photography services do you offer in Chennai?",
        answer:
          "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Chennai.",
      },
      {
        question: "How much does wedding photography cost in Chennai?",
        answer:
          "Wedding photography pricing in Chennai depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
      },
      {
        question: "Do you provide candid wedding photography in Chennai?",
        answer:
          "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Chennai.",
      },
      {
        question: "Do you cover traditional Tamil weddings in Chennai?",
        answer:
          "Yes. We cover traditional Tamil weddings in Chennai, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
      },
      {
        question: "Do you offer cinematic wedding films in Chennai?",
        answer:
          "Yes. Our cinematic wedding films in Chennai focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
      },
      {
        question: "How early should I book a wedding photographer in Chennai?",
        answer:
          "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
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
    question: "What wedding photography services do you offer in Coimbatore?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Coimbatore.",
  },
  {
    question: "How much does wedding photography cost in Coimbatore?",
    answer:
      "Wedding photography pricing in Coimbatore depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Coimbatore?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Coimbatore.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Coimbatore?",
    answer:
      "Yes. We cover traditional Tamil weddings in Coimbatore, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Coimbatore?",
    answer:
      "Yes. Our cinematic wedding films in Coimbatore focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Coimbatore?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
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
    question: "What wedding photography services do you offer in Trichy?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Trichy.",
  },
  {
    question: "How much does wedding photography cost in Trichy?",
    answer:
      "Wedding photography pricing in Trichy depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Trichy?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Trichy.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Trichy?",
    answer:
      "Yes. We cover traditional Tamil weddings in Trichy, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Trichy?",
    answer:
      "Yes. Our cinematic wedding films in Trichy focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Trichy?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
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
          question: "What wedding photography services do you offer in Dindigul?",
          answer:
            "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Dindigul.",
        },
        {
          question: "How much does wedding photography cost in Dindigul?",
          answer:
            "Wedding photography pricing in Dindigul depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
        },
        {
          question: "Do you provide candid wedding photography in Dindigul?",
          answer:
            "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Dindigul.",
        },
        {
          question: "Do you cover traditional Tamil weddings in Dindigul?",
          answer:
            "Yes. We cover traditional Tamil weddings in Dindigul, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
        },
        {
          question: "Do you offer cinematic wedding films in Dindigul?",
          answer:
            "Yes. Our cinematic wedding films in Dindigul focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
        },
        {
          question: "How early should I book a wedding photographer in Dindigul?",
          answer:
            "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
        },
      ], 
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Theni, capturing traditional Tamil weddings, candid emotions, engagement celebrations, pre-wedding moments, and beautiful family memories.",

    serviceIntro:
      "Our Theni wedding photography combines natural candid moments, elegant portraits, traditional wedding rituals, and cinematic storytelling to create a complete visual story of your celebration.",
    
    faq: [
      {
        question: "What wedding photography services do you offer in Theni?",
        answer:
          "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Theni.",
      },
      {
        question: "How much does wedding photography cost in Theni?",
        answer:
          "Wedding photography pricing in Theni depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
      },
      {
        question: "Do you provide candid wedding photography in Theni?",
        answer:
          "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Theni.",
      },
      {
        question: "Do you cover traditional Tamil weddings in Theni?",
        answer:
          "Yes. We cover traditional Tamil weddings in Theni, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
      },
      {
        question: "Do you offer cinematic wedding films in Theni?",
        answer:
          "Yes. Our cinematic wedding films in Theni focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
      },
      {
        question: "How early should I book a wedding photographer in Theni?",
        answer:
          "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
      },
    ], 
 
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

    seoIntro:
      "Kutti Story Photography offers wedding photography in Sivakasi, covering traditional Tamil weddings, candid wedding moments, engagement ceremonies, pre-wedding shoots, and cinematic wedding films.",

    serviceIntro:
      "Our Sivakasi wedding photography focuses on genuine emotions, family celebrations, cultural traditions, elegant portraits, and cinematic storytelling.",

    faq: [
  {
    question: "What wedding photography services do you offer in Sivakasi?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Sivakasi.",
  },
  {
    question: "How much does wedding photography cost in Sivakasi?",
    answer:
      "Wedding photography pricing in Sivakasi depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Sivakasi?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Sivakasi.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Sivakasi?",
    answer:
      "Yes. We cover traditional Tamil weddings in Sivakasi, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Sivakasi?",
    answer:
      "Yes. Our cinematic wedding films in Sivakasi focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Sivakasi?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Virudhunagar, capturing candid emotions, traditional Tamil wedding rituals, family celebrations, engagement moments, and memorable wedding portraits.",

    serviceIntro:
      "Our Virudhunagar wedding photography blends candid photography, traditional ceremony coverage, elegant portraits, and cinematic wedding storytelling.",

    faq: [
  {
    question: "What wedding photography services do you offer in Virudhunagar?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Virudhunagar.",
  },
  {
    question: "How much does wedding photography cost in Virudhunagar?",
    answer:
      "Wedding photography pricing in Virudhunagar depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Virudhunagar?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Virudhunagar.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Virudhunagar?",
    answer:
      "Yes. We cover traditional Tamil weddings in Virudhunagar, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Virudhunagar?",
    answer:
      "Yes. Our cinematic wedding films in Virudhunagar focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Virudhunagar?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography offers wedding photography in Tirunelveli, covering traditional Tamil weddings, candid wedding photography, engagement ceremonies, pre-wedding sessions, and cinematic wedding films.",

    serviceIntro:
      "Our Tirunelveli wedding photography focuses on authentic emotions, cultural traditions, family moments, bridal and groom portraits, and cinematic storytelling.",

    faq: [
  {
    question: "What wedding photography services do you offer in Tirunelveli?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Tirunelveli.",
  },
  {
    question: "How much does wedding photography cost in Tirunelveli?",
    answer:
      "Wedding photography pricing in Tirunelveli depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Tirunelveli?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Tirunelveli.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Tirunelveli?",
    answer:
      "Yes. We cover traditional Tamil weddings in Tirunelveli, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Tirunelveli?",
    answer:
      "Yes. Our cinematic wedding films in Tirunelveli focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Tirunelveli?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Pondicherry, combining candid photography, elegant portraits, traditional wedding coverage, engagement photography, pre-wedding shoots, and cinematic wedding films.",

    serviceIntro:
      "Our Pondicherry wedding photography is designed around natural emotions, beautiful portraits, intimate celebrations, and cinematic storytelling for couples looking for timeless wedding memories.",

    faq: [
  {
    question: "What wedding photography services do you offer in Pondicherry?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Pondicherry.",
  },
  {
    question: "How much does wedding photography cost in Pondicherry?",
    answer:
      "Wedding photography pricing in Pondicherry depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Pondicherry?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Pondicherry.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Pondicherry?",
    answer:
      "Yes. We cover traditional Tamil weddings in Pondicherry, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Pondicherry?",
    answer:
      "Yes. Our cinematic wedding films in Pondicherry focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Pondicherry?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Salem, capturing traditional Tamil wedding rituals, candid emotions, engagement celebrations, pre-wedding moments, and beautiful family memories.",

    serviceIntro:
      "Our Salem wedding photography combines candid moments, elegant portraits, traditional ceremony coverage, and cinematic storytelling to preserve every important part of your wedding day.",

    faq: [
  {
    question: "What wedding photography services do you offer in Salem?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Salem.",
  },
  {
    question: "How much does wedding photography cost in Salem?",
    answer:
      "Wedding photography pricing in Salem depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Salem?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Salem.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Salem?",
    answer:
      "Yes. We cover traditional Tamil weddings in Salem, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Salem?",
    answer:
      "Yes. Our cinematic wedding films in Salem focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Salem?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography offers wedding photography in Erode, covering candid wedding moments, traditional Tamil ceremonies, engagement photography, pre-wedding shoots, and cinematic wedding films.",

    serviceIntro:
      "Our Erode wedding photography focuses on genuine emotions, family celebrations, cultural traditions, elegant portraits, and cinematic storytelling.",
    
    faq: [
  {
    question: "What wedding photography services do you offer in Erode?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Erode.",
  },
  {
    question: "How much does wedding photography cost in Erode?",
    answer:
      "Wedding photography pricing in Erode depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Erode?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Erode.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Erode?",
    answer:
      "Yes. We cover traditional Tamil weddings in Erode, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Erode?",
    answer:
      "Yes. Our cinematic wedding films in Erode focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Erode?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Tiruppur, capturing candid emotions, traditional Tamil wedding rituals, engagement celebrations, pre-wedding sessions, and cinematic wedding stories.",

    serviceIntro:
      "Our Tiruppur wedding photography combines natural candid moments, traditional wedding coverage, elegant portraits, and cinematic storytelling.",

    faq: [
  {
    question: "What wedding photography services do you offer in Tiruppur?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Tiruppur.",
  },
  {
    question: "How much does wedding photography cost in Tiruppur?",
    answer:
      "Wedding photography pricing in Tiruppur depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Tiruppur?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Tiruppur.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Tiruppur?",
    answer:
      "Yes. We cover traditional Tamil weddings in Tiruppur, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Tiruppur?",
    answer:
      "Yes. Our cinematic wedding films in Tiruppur focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Tiruppur?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],
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

    seoIntro:
      "Kutti Story Photography offers wedding photography in Thanjavur, covering traditional Tamil weddings, candid wedding photography, engagement ceremonies, pre-wedding photography, and cinematic wedding films.",

    serviceIntro:
      "Our Thanjavur wedding photography focuses on cultural traditions, authentic emotions, family moments, elegant bridal and groom portraits, and timeless cinematic storytelling.",

    faq: [
  {
    question: "What wedding photography services do you offer in Thanjavur?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Thanjavur.",
  },
  {
    question: "How much does wedding photography cost in Thanjavur?",
    answer:
      "Wedding photography pricing in Thanjavur depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Thanjavur?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Thanjavur.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Thanjavur?",
    answer:
      "Yes. We cover traditional Tamil weddings in Thanjavur, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Thanjavur?",
    answer:
      "Yes. Our cinematic wedding films in Thanjavur focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Thanjavur?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],  
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

    seoIntro:
      "Kutti Story Photography provides wedding photography in Kanyakumari, capturing traditional Tamil wedding ceremonies, candid emotions, engagement celebrations, pre-wedding moments, and memorable family portraits.",

    serviceIntro:
      "Our Kanyakumari wedding photography combines natural emotions, traditional celebrations, elegant portraits, and cinematic storytelling to create timeless wedding memories.",

    faq: [
  {
    question: "What wedding photography services do you offer in Kanyakumari?",
    answer:
      "Kutti Story Photography offers traditional wedding photography, candid wedding photography, cinematic wedding films, engagement photography, pre-wedding photography, and wedding videography in Kanyakumari.",
  },
  {
    question: "How much does wedding photography cost in Kanyakumari?",
    answer:
      "Wedding photography pricing in Kanyakumari depends on the number of functions, coverage hours, photography and videography requirements, albums, and additional services. Contact Kutti Story Photography for a personalized quotation.",
  },
  {
    question: "Do you provide candid wedding photography in Kanyakumari?",
    answer:
      "Yes. We capture natural emotions, family interactions, wedding rituals, celebrations, and genuine moments through candid wedding photography in Kanyakumari.",
  },
  {
    question: "Do you cover traditional Tamil weddings in Kanyakumari?",
    answer:
      "Yes. We cover traditional Tamil weddings in Kanyakumari, including important rituals, family moments, bridal and groom portraits, ceremonies, and candid moments.",
  },
  {
    question: "Do you offer cinematic wedding films in Kanyakumari?",
    answer:
      "Yes. Our cinematic wedding films in Kanyakumari focus on genuine emotions, important rituals, family moments, and the complete story of your wedding day.",
  },
  {
    question: "How early should I book a wedding photographer in Kanyakumari?",
    answer:
      "We recommend booking your wedding photographer 3–6 months in advance whenever possible, especially for popular wedding dates.",
  },
],  
  },

};