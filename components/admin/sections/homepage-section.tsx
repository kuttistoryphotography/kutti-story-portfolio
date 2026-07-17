"use client";

import React, { useState, useEffect } from "react";
import { Save, Plus, Trash2, Loader2 } from "lucide-react";
import MediaField from "@/components/ui/MediaField";
import { MediaType } from "@/lib/media";

interface HeroData {
  heroSliderImages: {
  image: string;
  mediaType: MediaType;
  }[];

  backgroundMediaType: MediaType;

  heading: string;
  subheading: string;
  paragraph: string;

  badgeText: string;

  primaryButtonText: string;
  primaryButtonLink: string;

  secondaryButtonText: string;

  statsYears: string;
  statsStories: string;
  statsPassion: string;

  heroCardImage: string;
  heroCardMediaType: MediaType;

  awardText: string;
}

interface Slide {
  image1: string;
  image1MediaType: MediaType;

  image2: string;
  image2MediaType: MediaType;

  year: string;
}

interface StoryImage {
  src: string;
  mediaType: MediaType;
  alt: string;
}

interface HomeImageSlot {
  key: string;
  label: string;
  url: string;
  mediaType?: MediaType;
}

interface PortfolioCard {
  title: string;
  image: string;
  link: string;
  order: number;
  visible: boolean;
}

interface FeaturedFilmCard {
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  thumbnailMediaType: MediaType;
  videoUrl: string;
}

interface FeaturedFilmsData {
  heading: string;
  subheading: string;
  paragraph: string;
  buttonText: string;
  buttonLink: string;
  cards: FeaturedFilmCard[];
}

export default function HomepageSection() {

const [activeTab, setActiveTab] = useState<
  | "hero"
  | "portfolio"
  | "slides"
  | "stories"
  | "images"
  | "about"
  | "instagram"
  | "featuredFilms"
  | "logo"
>("hero");

  const [hero, setHero] = useState<HeroData>({
    heroSliderImages: [],
    backgroundMediaType: "image",

    heading: "",
    subheading: "",
    paragraph: "",

    badgeText: "",

    primaryButtonText: "",
    primaryButtonLink: "",

    secondaryButtonText: "",

    statsYears: "",
    statsStories: "",
    statsPassion: "",

    heroCardImage: "",
    heroCardMediaType: "image",

    awardText: "",
  });

  const [slides, setSlides] = useState<Slide[]>([]);
  const [storyImages, setStoryImages] = useState<StoryImage[]>([]);
  const [homeImages, setHomeImages] = useState<HomeImageSlot[]>([]);
  const [portfolioCards, setPortfolioCards] = useState<PortfolioCard[]>([]);
  const [featuredFilms, setFeaturedFilms] =
  useState<FeaturedFilmsData>({
    heading: "Featured Films",
    subheading: "Cinematic Stories",
    paragraph:
      "Some moments deserve more than photographs. Experience our wedding films crafted with emotion, elegance and timeless storytelling.",
    buttonText: "View All Films",
    buttonLink: "/films",

    cards: [
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image" as MediaType,
        videoUrl: "",
      },
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image" as MediaType,
        videoUrl: "",
      },
      {
        title: "",
        category: "",
        duration: "",
        thumbnail: "",
        thumbnailMediaType: "image" as MediaType,
        videoUrl: "",
      },
    ],
  });
  const [siteSettings, setSiteSettings] = useState({ logo: "", });
  const [instagram, setInstagram] = useState({
    title: "Follow Our Journey",
    username: "@kuttistoryphotography",
    buttonText: "Follow on Instagram",
    buttonUrl: "https://www.instagram.com/kuttistoryphotography/",
    images: [
      "",
      "",
      "",
      "",
      "",
      "",
    ],
  });
  const [aboutContent, setAboutContent] = useState({
  title: "About Kutti Story",
  heading: "We Make Only Authentic Visual Experiences",
  description:
    "Every frame we create is driven by emotion, story, and authenticity.",
  experienceBadge: "10+ Years Experience"
});

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/homepage")
      .then((r) => r.json())
      .then((data) => {
        if (data.settings) {
          if (data.settings.hero) {
            setHero({
            ...data.settings.hero,

            primaryButtonLink:
              data.settings.hero.primaryButtonLink || "",

            heroSliderImages:
              data.settings.hero.heroSliderImages || [],

            backgroundMediaType:
              data.settings.hero.backgroundMediaType || "image",

            heroCardMediaType:
              data.settings.hero.heroCardMediaType || "image",
          });
          }

          if (data.settings.showcaseSlides) {
            setSlides(
              data.settings.showcaseSlides.map((slide: any) => ({
                ...slide,
                image1MediaType: slide.image1MediaType || "image",
                image2MediaType: slide.image2MediaType || "image",
              }))
            );
          }

          if (data.settings.storyImages) {
            setStoryImages(
              data.settings.storyImages.map((img: any) => ({
                ...img,
                mediaType: img.mediaType || "image",
              }))
            );
          }
          if (data.settings.siteSettings) {
            setSiteSettings(data.settings.siteSettings);
          }

          if (data.settings.homeImages) {
            setHomeImages(
              data.settings.homeImages.map((img: any) => ({
                ...img,
                mediaType: img.mediaType || "image",
              }))
            );
          }
        }

        if (data.settings.portfolioCards) {
          setPortfolioCards(data.settings.portfolioCards);
        }

        if (data.settings.aboutContent) {
          setAboutContent(data.settings.aboutContent);
        }

        if (data.settings.instagram) {
          setInstagram({
            title: data.settings.instagram.title || "Follow Our Journey",
            username:
              data.settings.instagram.username || "@kuttistoryphotography",
            buttonText:
              data.settings.instagram.buttonText || "Follow on Instagram",
            buttonUrl: data.settings.instagram.buttonUrl || "",
            images:
              data.settings.instagram.images &&
              data.settings.instagram.images.length > 0
                ? data.settings.instagram.images
                : Array(6).fill(""),
          });
        }

        if (data.settings.featuredFilms) {
          setFeaturedFilms({
            heading: data.settings.featuredFilms.heading || "Featured Films",
            subheading:
              data.settings.featuredFilms.subheading || "Cinematic Stories",
            paragraph:
              data.settings.featuredFilms.paragraph ||
              "Some moments deserve more than photographs. Experience our wedding films crafted with emotion, elegance and timeless storytelling.",
            buttonText:
              data.settings.featuredFilms.buttonText || "View All Films",
            buttonLink:
              data.settings.featuredFilms.buttonLink || "/films",
            cards:
              data.settings.featuredFilms.cards?.length
                ? data.settings.featuredFilms.cards
                : [
                    {
                      title: "",
                      category: "",
                      duration: "",
                      thumbnail: "",
                      thumbnailMediaType: "image",
                      videoUrl: "",
                    },
                    {
                      title: "",
                      category: "",
                      duration: "",
                      thumbnail: "",
                      thumbnailMediaType: "image",
                      videoUrl: "",
                    },
                    {
                      title: "",
                      category: "",
                      duration: "",
                      thumbnail: "",
                      thumbnailMediaType: "image",
                      videoUrl: "",
                    },
                  ],
          });
        }

        setLoading(false);
            })
            .catch(() => setLoading(false));
        }, []);

  const save = async (section: string, data: unknown) => {
    setSaving(true);

    try {
      const response = await fetch("/api/homepage", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          section,
          data,
        }),
      });

      const result = await response.json();

      console.log("SAVE RESPONSE:", result);
      console.log("SECTION SENT:", section);
      console.log("DATA SENT:", data);

      if (response.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 2500);
      } else {
        alert(result.error || "Failed to save.");
      }
    } catch (err) {
      console.error(err);
      alert("Save failed.");
    }

    setSaving(false);
  };

  const TEXT_FIELDS: {
    key: keyof HeroData;
    label: string;
    multiline?: boolean;
  }[] = [
    { key: "heading", label: "Heading" },
    { key: "subheading", label: "Subheading" },
    { key: "paragraph", label: "Paragraph", multiline: true },
    { key: "badgeText", label: "Badge Text" },

    { key: "primaryButtonText", label: "Primary Button Text" },
    { key: "primaryButtonLink", label: "Primary Button Link (/portfolio)" },

    { key: "secondaryButtonText", label: "Secondary Button Text" },
    { key: "statsYears", label: "Stats: Years (e.g. 7+)" },
    { key: "statsStories", label: "Stats: Stories (e.g. 213+)" },
    { key: "statsPassion", label: "Stats: Passion (e.g. 100%)" },
    { key: "awardText", label: "Award Badge Text" },
  ];

  const tabs = [
    { id: "hero", label: "Hero Section" },
    { id: "portfolio", label: "Portfolio Cards" },
    { id: "slides", label: "Showcase Slides" },
    { id: "stories", label: "Stories Strip" },
    { id: "images", label: "Page Images" },
    { id: "about", label: "About Section" },
    { id: "instagram", label: "Instagram Feed" },
    { id: "featuredFilms", label: "Featured Films" },
    { id: "logo", label: "Website Logo" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">
          Homepage Settings
        </h2>

        {saved && (
          <span className="text-green-400 text-sm flex items-center gap-1.5">
            ✓ Saved successfully
          </span>
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id as any)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              activeTab === t.id
                ? "bg-amber-500 text-text-[#7A8F7B]"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* ── HERO ── */}
      {activeTab === "hero" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            Hero Section
          </h3>

          <div className="space-y-4">
  <div className="flex items-center justify-between">
    <label className="text-white font-medium">
      Background Images (Max 5)
    </label>

    {hero.heroSliderImages.length < 5 && (
      <button
        type="button"
        onClick={() =>
          setHero({
            ...hero,
            heroSliderImages: [
              ...hero.heroSliderImages,
              {
                image: "",
                mediaType: "image",
              },
            ],
          })
        }
        className="px-3 py-2 bg-amber-500 text-text-[#7A8F7B] rounded-lg text-sm font-medium"
      >
        + Add Image
      </button>
    )}
  </div>

  {hero.heroSliderImages.map((item, index) => (
    <div
      key={index}
      className="border border-zinc-700 rounded-xl p-4 space-y-3"
    >
      <MediaField
            label={`Background ${index + 1}`}
            url={item.image}
            mediaType={item.mediaType}
            onChange={(url, mediaType) => {
              const images = [...hero.heroSliderImages];

              images[index] = {
                image: url,
                mediaType,
              };

              setHero({
                ...hero,
                heroSliderImages: images,
              });
            }}
            allowedTypes={["image"]}
            context="homepage"
          />

          <button
            type="button"
            onClick={() => {
              const images = hero.heroSliderImages.filter(
                (_, i) => i !== index
              );

              setHero({
                ...hero,
                heroSliderImages: images,
              });
            }}
            className="px-3 py-2 bg-red-600 text-white rounded-lg text-sm"
          >
            Remove
          </button>
        </div>
      ))}
    </div>

          <MediaField
            label="Hero Card Image"
            url={hero.heroCardImage}
            mediaType={hero.heroCardMediaType || "image"}
            onChange={(url, mediaType) =>
              setHero({
                ...hero,
                heroCardImage: url,
                heroCardMediaType: mediaType,
              })
            }
            allowedTypes={["image", "video"]}
            context="homepage"
          />

          {/* Text fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TEXT_FIELDS.map(({ key, label, multiline }) => (
              <div
                key={key}
                className={multiline ? "md:col-span-2" : ""}
              >
                <label className="block text-zinc-400 text-sm mb-1.5">
                  {label}
                </label>

                {multiline ? (
                  <textarea
                    value={(hero as any)[key]}
                    onChange={(e) =>
                      setHero({
                        ...hero,
                        [key]: e.target.value,
                      })
                    }
                    rows={3}
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none resize-none"
                  />
                ) : (
                  <input
                    value={(hero as any)[key]}
                    onChange={(e) =>
                      setHero({
                        ...hero,
                        [key]: e.target.value,
                      })
                    }
                    className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2.5 text-white text-sm focus:border-amber-500 focus:outline-none"
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => save("hero", hero)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-[#7A8F7B] rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}

            Save Hero
          </button>
        </div>
      )}

      {/* ── PORTFOLIO CARDS ── */}
      {activeTab === "portfolio" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            Portfolio Cards
          </h3>

          <p className="text-green-400">
            Total Cards: {portfolioCards.length}
          </p>

          {portfolioCards.map((card, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl p-5 space-y-4"
            >
              <h4 className="text-white font-medium">
                Card {index + 1}
              </h4>

              <MediaField
                label="Card Image"
                url={card.image}
                mediaType="image"
                onChange={(url) => {
                  const updated = [...portfolioCards];
                  updated[index].image = url;
                  setPortfolioCards(updated);
                }}
                allowedTypes={["image"]}
                context="homepage"
              />

              <input
                value={card.title}
                placeholder="Title"
                onChange={(e) => {
                  const updated = [...portfolioCards];
                  updated[index].title = e.target.value;
                  setPortfolioCards(updated);
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />

              <input
                value={card.link}
                placeholder="Link"
                onChange={(e) => {
                  const updated = [...portfolioCards];
                  updated[index].link = e.target.value;
                  setPortfolioCards(updated);
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={card.visible}
                  onChange={(e) => {
                    const updated = [...portfolioCards];
                    updated[index].visible = e.target.checked;
                    setPortfolioCards(updated);
                  }}
                  className="h-4 w-4"
                />

                <label className="text-white text-sm">
                  Visible
                </label>
              </div>

            </div>
          ))}

          <button
            onClick={() => save("portfolioCards", portfolioCards)}
            className="px-6 py-3 bg-amber-500 text-white rounded-xl font-semibold"
          >
            Save Portfolio Cards
          </button>
        </div>
      )}

      {/* ── SHOWCASE SLIDES ── */}
      {activeTab === "slides" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">
              Showcase Slides
            </h3>

            <button
              onClick={() =>
                setSlides([
                  ...slides,
                  {
                    image1: "",
                    image1MediaType: "image",

                    image2: "",
                    image2MediaType: "image",

                    year: "2K25",
                  },
                ])
              }
              className="flex items-center gap-1.5 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Slide
            </button>
          </div>

          {slides.length === 0 && (
            <p className="text-zinc-500 text-sm">
              No slides yet. Add your first slide.
            </p>
          )}

          {slides.map((slide, i) => (
            <div
              key={i}
              className="border border-zinc-700 rounded-2xl p-5 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-zinc-300 text-sm font-semibold">
                  Slide {i + 1}
                </span>

                <button
                  onClick={() =>
                    setSlides(
                      slides.filter((_, idx) => idx !== i)
                    )
                  }
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <MediaField
                  label="Left Image"
                  url={slide.image1}
                  mediaType={slide.image1MediaType || "image"}
                  onChange={(url, mediaType) => {
                    const s = [...slides];

                    s[i].image1 = url;
                    s[i].image1MediaType = mediaType;

                    setSlides(s);
                  }}
                  allowedTypes={["image", "video"]}
                  context="homepage"
                />

                <MediaField
                  label="Right Image"
                  url={slide.image2}
                  mediaType={slide.image2MediaType}
                  onChange={(url, mediaType) => {
                    const s = [...slides];

                    s[i].image2 = url;
                    s[i].image2MediaType = mediaType;

                    setSlides(s);
                  }}
                  allowedTypes={["image", "video"]}
                  context="homepage"
                />
              </div>

              <div>
                <label className="block text-zinc-400 text-sm mb-1.5">
                  Year Label
                </label>

                <input
                  value={slide.year}
                  onChange={(e) => {
                    const s = [...slides];
                    s[i].year = e.target.value;
                    setSlides(s);
                  }}
                  className="w-32 bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-white text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>
          ))}

          <button
            onClick={() => save("showcaseSlides", slides)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-[#7A8F7B] rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}

            Save Slides
          </button>
        </div>
      )}

      {/* ── STORIES STRIP ── */}
      {activeTab === "stories" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-semibold text-lg">
              Stories Strip Images
            </h3>

            <button
              onClick={() =>
                setStoryImages([
                  ...storyImages,
                  {
                    src: "",
                    mediaType: "image",
                    alt: `Story ${storyImages.length + 1}`,
                  },
                ])
              }
              className="flex items-center gap-1.5 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white rounded-xl text-sm transition-colors"
            >
              <Plus className="w-4 h-4" />
              Add Image
            </button>
          </div>

          {storyImages.length === 0 && (
            <p className="text-zinc-500 text-sm">
              No story images yet.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {storyImages.map((img, i) => (
              <div
                key={i}
                className="border border-zinc-700 rounded-xl p-3 space-y-2"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-zinc-500 text-xs font-medium">
                    Image {i + 1}
                  </span>

                  <button
                    onClick={() =>
                      setStoryImages(
                        storyImages.filter((_, idx) => idx !== i)
                      )
                    }
                    className="text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <MediaField
                  label=""
                  url={img.src}
                  mediaType={img.mediaType}
                  onChange={(url, mediaType) => {
                    const s = [...storyImages];

                    s[i].src = url;
                    s[i].mediaType = mediaType;

                    setStoryImages(s);
                  }}
                  allowedTypes={["image"]}
                  context="homepage"
                  previewHeight="h-20"
                />

                <input
                  value={img.alt}
                  placeholder="Alt text"
                  onChange={(e) => {
                    const s = [...storyImages];
                    s[i].alt = e.target.value;
                    setStoryImages(s);
                  }}
                  className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-2 py-1.5 text-white text-xs focus:border-amber-500 focus:outline-none"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => save("storyImages", storyImages)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-text-[#7A8F7B] rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}

            Save Story Images
          </button>
        </div>
      )}

      {/* ── PAGE IMAGES ── */}
      {activeTab === "images" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-5">
          <h3 className="text-white font-semibold text-lg">
            Page Image Slots
          </h3>

          <p className="text-zinc-500 text-sm">
            Manage specific image slots used across homepage sections.
          </p>

          {homeImages.map((slot, i) => (
            <div
              key={slot.key}
              className="border border-zinc-700 rounded-xl p-4"
            >
              <MediaField
                label={slot.label}
                url={slot.url}
                mediaType={slot.mediaType || "image"}
                onChange={(url, mediaType) => {
                  const s = [...homeImages];

                  s[i].url = url;
                  s[i].mediaType = mediaType;

                  setHomeImages(s);
                }}
                allowedTypes={["image", "video"]}
                context="homepage"
              />
            </div>
          ))}

          <button
            onClick={() => save("homeImages", homeImages)}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-text-[#7A8F7B] rounded-xl font-semibold text-sm transition-colors disabled:opacity-50"
          >
            {saving ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Save className="w-4 h-4" />
            )}

            Save Page Images
                    </button>
        </div>
      )}

      {activeTab === "about" && (
        
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            About Section
          </h3>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Small Title
            </label>
            <input
              value={aboutContent.title}
              onChange={(e) =>
                setAboutContent({
                  ...aboutContent,
                  title: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Heading
            </label>
            <input
              value={aboutContent.heading}
              onChange={(e) =>
                setAboutContent({
                  ...aboutContent,
                  heading: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Description
            </label>
            <textarea
              rows={4}
              value={aboutContent.description}
              onChange={(e) =>
                setAboutContent({
                  ...aboutContent,
                  description: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
          <label className="block text-zinc-400 text-sm mb-2">
           Experience Badge Text
          </label>

          <input
           value={aboutContent.experienceBadge || ""}
           onChange={(e) =>
            setAboutContent({
             ...aboutContent,
            experienceBadge: e.target.value,
           })
          }
          className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
        />
         </div>

          <button
            onClick={() => save("about", aboutContent)}
            className="px-6 py-3 bg-amber-500 text-text-[#7A8F7B] rounded-xl font-semibold"
          >
            Save About Section
          </button>
        </div>
      )}

      {activeTab === "instagram" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            Instagram Feed
          </h3>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Section Title
            </label>

            <input
              value={instagram.title}
              onChange={(e) =>
                setInstagram({
                  ...instagram,
                  title: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Instagram Username
            </label>

            <input
              value={instagram.username}
              onChange={(e) =>
                setInstagram({
                  ...instagram,
                  username: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Button Text
            </label>

            <input
              value={instagram.buttonText}
              onChange={(e) =>
                setInstagram({
                  ...instagram,
                  buttonText: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Instagram URL
            </label>

            <input
              value={instagram.buttonUrl}
              onChange={(e) =>
                setInstagram({
                  ...instagram,
                  buttonUrl: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-white font-medium">
              Instagram Images
            </h4>

            {instagram.images.map((image, index) => (
              <MediaField
                key={index}
                label={`Image ${index + 1}`}
                url={image}
                mediaType="image"
                onChange={(url) => {
                  const updatedImages = [...instagram.images];
                  updatedImages[index] = url;

                  setInstagram({
                    ...instagram,
                    images: updatedImages,
                  });
                }}
                allowedTypes={["image"]}
                context="homepage"
              />
            ))}
          </div>

          <button
            onClick={() => save("instagram", instagram)}
            className="px-6 py-3 bg-amber-500 text-[#7A8F7B] rounded-xl font-semibold"
          >
            Save Instagram Feed
          </button>
        </div>
      )}

      {activeTab === "featuredFilms" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            Featured Films
          </h3>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Small Title
            </label>
            <input
              value={featuredFilms.subheading}
              onChange={(e) =>
                setFeaturedFilms({
                  ...featuredFilms,
                  subheading: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Heading
            </label>
            <input
              value={featuredFilms.heading}
              onChange={(e) =>
                setFeaturedFilms({
                  ...featuredFilms,
                  heading: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Description
            </label>
            <textarea
              rows={4}
              value={featuredFilms.paragraph}
              onChange={(e) =>
                setFeaturedFilms({
                  ...featuredFilms,
                  paragraph: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Button Text
            </label>
            <input
              value={featuredFilms.buttonText}
              onChange={(e) =>
                setFeaturedFilms({
                  ...featuredFilms,
                  buttonText: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          <div>
            <label className="block text-zinc-400 text-sm mb-2">
              Button Link
            </label>
            <input
              value={featuredFilms.buttonLink}
              onChange={(e) =>
                setFeaturedFilms({
                  ...featuredFilms,
                  buttonLink: e.target.value,
                })
              }
              className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
            />
          </div>

          {featuredFilms.cards.map((card, index) => (
            <div
              key={index}
              className="border border-zinc-700 rounded-2xl p-5 space-y-4"
            >
              <h4 className="text-white font-medium">
                Film Card {index + 1}
              </h4>

              <MediaField
                label="Thumbnail"
                url={card.thumbnail}
                mediaType={card.thumbnailMediaType}
                onChange={(url, mediaType) => {
                  const cards = [...featuredFilms.cards];

                  cards[index] = {
                    ...cards[index],
                    thumbnail: url,
                    thumbnailMediaType: mediaType,
                  };

                  setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                  });
                }}
                allowedTypes={["image"]}
                context="homepage"
              />

              <input
                placeholder="Film Title"
                value={card.title}
                onChange={(e) => {
                  const cards = [...featuredFilms.cards];
                  cards[index].title = e.target.value;

                  setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                  });
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />

              <input
                placeholder="Category"
                value={card.category}
                onChange={(e) => {
                  const cards = [...featuredFilms.cards];
                  cards[index].category = e.target.value;

                  setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                  });
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />

              <input
                placeholder="Duration"
                value={card.duration}
                onChange={(e) => {
                  const cards = [...featuredFilms.cards];
                  cards[index].duration = e.target.value;

                  setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                  });
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />

              <input
                placeholder="YouTube Video URL"
                value={card.videoUrl}
                onChange={(e) => {
                  const cards = [...featuredFilms.cards];
                  cards[index].videoUrl = e.target.value;

                  setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                  });
                }}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-2 text-white"
              />
            </div>
          ))}
        
          <button
            onClick={() => save("featuredFilms", featuredFilms)}
            className="px-6 py-3 bg-amber-500 text-[#7A8F7B] rounded-xl font-semibold"
          >
            Save Featured Films
          </button>
        </div>
      )}

      {activeTab === "logo" && (
        <div className="bg-zinc-900 rounded-2xl p-6 space-y-6">
          <h3 className="text-white font-semibold text-lg">
            Website Logo
          </h3>

          <MediaField
            label="Website Logo"
            url={siteSettings.logo}
            mediaType="image"
            onChange={(url) =>
              setSiteSettings({
                ...siteSettings,
                logo: url,
              })
            }
            allowedTypes={["image"]}
            context="homepage"
          />

          <button
            onClick={() => save("siteSettings", siteSettings)}
            className="px-6 py-3 bg-amber-500 text-text-[#7A8F7B] rounded-xl font-semibold"
          >
            Save Logo
          </button>
        </div>
      )}
    </div>
  );
}