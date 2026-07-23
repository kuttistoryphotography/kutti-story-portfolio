import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { notFound } from "next/navigation";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

import type { Metadata } from "next";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  await connectDB();

  const service = await Service.findOne({
    slug,
    isActive: true,
  }).lean();

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://kuttistoryphotography.in";

  const canonical =
    service.canonicalUrl && service.canonicalUrl.startsWith("http")
      ? service.canonicalUrl
      : `${siteUrl}${service.canonicalUrl || `/services/${slug}`}`;

  return {
    title: service.seoTitle || service.title,

    description:
      service.metaDescription ||
      service.shortDescription ||
      service.description,

    keywords: [
      service.primaryKeyword,
      ...(service.secondaryKeywords || []),
    ].filter(Boolean),

    alternates: {
      canonical,
    },

    openGraph: {
      title:
        service.ogTitle ||
        service.seoTitle ||
        service.title,

      description:
        service.ogDescription ||
        service.metaDescription,

      url: canonical,

      images: service.ogImage
        ? [
            {
              url: service.ogImage,
            },
          ]
        : [],

      type: "website",
    },

    twitter: {
      card: "summary_large_image",

      title:
        service.twitterTitle ||
        service.ogTitle ||
        service.title,

      description:
        service.twitterDescription ||
        service.metaDescription,

      images: service.twitterImage
        ? [service.twitterImage]
        : [],
    },
  };
}

export default async function ServiceDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  await connectDB();

  const service = await Service.findOne({
    slug,
    isActive: true,
  }).lean();

  const whatsapp =
  process.env.NEXT_PUBLIC_WHATSAPP || "";

  if (!service) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://kuttistoryphotography.in";

  const serviceUrl =
    service.canonicalUrl?.startsWith("http")
      ? service.canonicalUrl
      : `${siteUrl}${service.canonicalUrl || `/services/${slug}`}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": service.schemaType || "Service",

    name: service.title,

    description:
      service.metaDescription ||
      service.description,

    image: service.coverImage,

    url: serviceUrl,

    provider: {
      "@type": "LocalBusiness",
      name: "Kutti Story Photography",
      url: siteUrl,
    },

    areaServed: {
      "@type": "City",
      name: service.city || "Madurai",
    },

    offers: {
      "@type": "Offer",
      price: service.price || "",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />

      <main className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-[1900px] mx-auto px-6">

            {service.coverImage && (
            <FadeIn>
                <div className="relative h-[600px] overflow-hidden rounded-3xl mb-12">

                <img
                    src={service.coverImage}
                    alt={service.title}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/40" />

                <div className="absolute inset-0 flex items-end p-10">
                    <h1 className="text-5xl md:text-7xl font-light text-white">
                    {service.title}
                    </h1>
                </div>

                </div>
            </FadeIn>
            )}

          
          {service.price && (
           <p className="mt-4 text-xl text-[#8A9A7B]">
               Starting from ₹{service.price}
           </p>
            )}

          <div className="mt-12 max-w-3xl">
            <p className="text-lg leading-8 text-gray-600">
                {service.description}
            </p>
          </div>

          {whatsapp && (
            <Link
                href={`https://wa.me/${whatsapp}?text=Hi, I am interested in ${service.title}`}
                target="_blank"
                className="inline-flex mt-8 rounded-full bg-[#8A9A7B] px-8 py-3 text-white font-medium hover:opacity-90 transition"
            >
                Book This Service
            </Link>
            )}

            {service.images?.length > 0 && (
            <FadeIn>
              <div className="mt-16">
                <h2 className="text-3xl font-light mb-8">
                Gallery
                </h2>

                <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {service.images.map((image: string, index: number) => (
                    <img
                    key={index}
                    src={image}
                    alt={`${service.title} ${index + 1}`}
                  className="w-full rounded-3xl object-cover break-inside-avoid mb-6 transition-transform duration-500 hover:scale-[1.03]"                    />
                ))}
                </div>
              </div>
            </FadeIn>
            )}

            {service.features?.length > 0 && (
            <FadeIn>
              <div className="mt-16">
                <h2 className="text-3xl font-light mb-8">
                Highlights
                </h2>

                <div className="flex flex-wrap gap-3">
                {service.features.map((feature: string, index: number) => (
                    <span
                    key={index}
                    className="rounded-full border border-[#D7DDCF] px-5 py-2 text-sm text-[#8A9A7B]"
                    >
                    {feature}
                    </span>
                ))}
                </div>
              </div>
            </FadeIn>
            )}

        </div>
      </main>

      <Footer />
    </>
  );
}