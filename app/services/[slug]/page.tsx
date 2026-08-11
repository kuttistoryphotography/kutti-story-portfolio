import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CloudinaryImage from "@/components/CloudinaryImage";

import { connectDB } from "@/lib/mongodb";
import Service from "@/models/Service";
import { notFound } from "next/navigation";

import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

import LuxuryEditorialGallery from "@/components/LuxuryEditorialGallery";

import type { Metadata } from "next";

import ServiceDescription from "@/components/ServiceDescription";

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
    "@type": "Service",

    "@id": `${serviceUrl}#service`,

    name: service.title,

    description:
      service.metaDescription ||
      service.description ||
      service.shortDescription,

    url: serviceUrl,

    image: service.coverImage
      ? [service.coverImage]
      : undefined,

    serviceType: service.title,

    provider: {
      "@type": "LocalBusiness",
      "@id": "https://kuttistoryphotography.in/#business",
      name: "Kutti Story Photography",
      url: siteUrl,
    },

    areaServed: {
      "@type": "City",
      name: service.city || "Madurai",
    },

    ...(service.price
      ? {
          offers: {
            "@type": "Offer",
            price: service.price,
            priceCurrency: "INR",
            url: serviceUrl,
            availability: "https://schema.org/InStock",
          },
        }
      : {}),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbLd),
      }}
    />

      <Navbar />

      <main className="min-h-screen bg-white pt-20 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-[1900px] mx-auto px-6">

            {service.coverImage && (
            <FadeIn>
                <div className="relative aspect-[4/5] md:aspect-[16/7] overflow-hidden rounded-3xl mb-12">

                <CloudinaryImage
                  src={service.coverImage}
                  alt={`${service.title} in ${service.city || "Madurai"} | Kutti Story Photography`}
                  fill
                  optimizationWidth={1800}
                  sizes="100vw"
                  className="object-cover"
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

          <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
            <ServiceDescription
              description={service.description}
            />
          </div>

          {whatsapp && (
            <div className="mt-10 flex justify-center">
              <Link
                href={`https://wa.me/${whatsapp}?text=Hi, I am interested in ${service.title}`}
                target="_blank"
                className="rounded-full bg-[#8A9A7B] px-8 py-3 text-white font-medium hover:opacity-90 transition"
              >
                Book This Service
              </Link>
            </div>
          )}

            {service.images?.length > 0 && (
            <FadeIn>
              <div className="mt-16 mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                <h2 className="mb-10 text-center text-3xl font-light">
                  Gallery
                </h2>

                <LuxuryEditorialGallery
                  images={(service.images as string[]) ?? []}
                  title={service.title}
                /> 

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