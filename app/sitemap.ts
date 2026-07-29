import { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import Portfolio from "@/models/Portfolio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kuttistoryphotography.in";

  await connectDB();

  // Fetch only published portfolio items
  const portfolios = await Portfolio.find(
    { published: true },
    "slug updatedAt"
  ).lean();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/films`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const portfolioPages: MetadataRoute.Sitemap = portfolios.map((item: any) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: item.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticPages, ...portfolioPages];
}