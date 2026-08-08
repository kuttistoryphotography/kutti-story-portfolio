import { MetadataRoute } from "next";
import { connectDB } from "@/lib/mongodb";
import Story from "@/models/Story";
import { cities } from "@/lib/cities";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kuttistoryphotography.in";

  await connectDB();

  const stories = await Story.find(
    {},
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

  const storyPages: MetadataRoute.Sitemap = stories.map((story: any) => ({
    url: `${baseUrl}/portfolio/${story.slug}`,
    lastModified: story.updatedAt || new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const cityPages: MetadataRoute.Sitemap = Object.values(cities).map(
    (city) => ({
      url: city.canonical,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  return [
    ...staticPages,
    ...cityPages,
    ...storyPages,
  ];
}