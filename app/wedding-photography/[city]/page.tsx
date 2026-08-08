import { notFound } from "next/navigation";
import FAQ from "@/components/FAQ";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import Script from "next/script";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/seo/Hero";
import WhyKuttiStory from "@/components/WhyKuttiStory";
import Services from "@/components/sections/Services";
import { cities } from "@/lib/cities";
import FeaturedGallery from "@/components/FeaturedGallery";
import BookingCTA from "@/components/BookingCTA";
import MobileHero from "@/components/seo/MobileHero";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({
    city,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;

  const city = cities[citySlug];

  if (!city) {
    return {};
  }

  return {
    title: `${city.title} | Kutti Story Photography`,

    description: city.description,

    alternates: {
      canonical: city.canonical,
    },

    openGraph: {
      title: city.title,
      description: city.description,
      url: city.canonical,
      siteName: "Kutti Story Photography",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: city.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: city.title,
      description: city.description,
      images: ["/og-image.jpg"],
    },
  };
}

type Props = {
  params: Promise<{ city: string }>;
};

export default async function WeddingPhotographyPage({
  params,
}: Props) {

  const { city: citySlug } = await params;

  const city = cities[citySlug];

    if (!city) {
      notFound();
    }

    const schema = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",

    name: "Kutti Story Photography",

    url: city.canonical,

    image: "https://kuttistoryphotography.in/og-image.jpg",

    telephone: "+919342013600",

    description: city.description,

    address: {
      "@type": "PostalAddress",
      addressLocality: city.city,
      addressRegion: city.state,
      addressCountry: "IN",
    },

    areaServed: {
      "@type": "City",
      name: city.city,
    },

    priceRange: "₹₹",

    sameAs: [
      "https://www.instagram.com/kuttistory_photography",
      "https://www.facebook.com/share/17MKRZ2Pgi/",
    ],
  };

  return (
  <>
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />

    <Navbar />

    <div className="hidden md:block">
      <Hero city={city} />
    </div>

    <MobileHero city={city} />

    <WhyKuttiStory city={city} />

    <Services city={city} />

    <FeaturedGallery city={city} />

    <TestimonialsSlider />

    <FAQ city={city} />

    <BookingCTA city={city} />

    <Footer />
  </>
);
}