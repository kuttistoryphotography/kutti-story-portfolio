"use client";

import { useEffect, useState } from "react";
import MediaField from "@/components/ui/MediaField";
import { MediaType } from "@/lib/media";

export default function FilmsSection() {
  const [films, setFilms] = useState({
    hero: {
      heading: "",
      subheading: "",
      paragraph: "",
    },

    featuredFilm: {
      title: "",
      category: "",
      thumbnail: "",
      thumbnailMediaType: "image" as MediaType,
      videoUrl: "",
    },

    recentFilms: [] as {
      title: string;
      category: string;
      thumbnail: string;
      thumbnailMediaType: MediaType;
      videoUrl: string;
    }[],
  });

  useEffect(() => {
    fetch("/api/films")
      .then((res) => res.json())
      .then((data) => {
        if (data.settings) {
          setFilms({
            hero: data.settings.hero || {
              heading: "",
              subheading: "",
              paragraph: "",
            },

            featuredFilm: {
              title: data.settings.featuredFilm?.title || "",
              category: data.settings.featuredFilm?.category || "",
              thumbnail: data.settings.featuredFilm?.thumbnail || "",
              thumbnailMediaType:
                data.settings.featuredFilm?.thumbnailMediaType || "image",
              videoUrl: data.settings.featuredFilm?.videoUrl || "",
            },

            recentFilms: data.settings.recentFilms || [],
          });
        }
      })
      .catch(console.error);
  }, []);

  const handleSave = async () => {
    try {
      const sections = [
        { section: "hero", data: films.hero },
        { section: "featuredFilm", data: films.featuredFilm },
        { section: "recentFilms", data: films.recentFilms },
      ];

      for (const item of sections) {
        const res = await fetch("/api/films", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        });

        const result = await res.json();

        if (!result.success) {
          throw new Error(`Failed to save ${item.section}`);
        }
      }

      alert("Films page saved successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to save Films page.");
    }
  };

  return (
    <div className="max-w-5xl">

      <h2 className="text-3xl font-bold text-white mb-2">
        Films Page
      </h2>

      <p className="text-zinc-400 mb-8">
        Manage the Films page hero section.
      </p>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-6">

        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Hero Heading
          </label>

          <input
            type="text"
            value={films.hero.heading}
            onChange={(e) =>
              setFilms({
                ...films,
                hero: {
                  ...films.hero,
                  heading: e.target.value,
                },
              })
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Hero Sub Heading
          </label>

          <input
            type="text"
            value={films.hero.subheading}
            onChange={(e) =>
              setFilms({
                ...films,
                hero: {
                  ...films.hero,
                  subheading: e.target.value,
                },
              })
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-zinc-300 mb-2">
            Hero Description
          </label>

          <textarea
            rows={5}
            value={films.hero.paragraph}
            onChange={(e) =>
              setFilms({
                ...films,
                hero: {
                  ...films.hero,
                  paragraph: e.target.value,
                },
              })
            }
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
          />
        </div>

        <hr className="border-zinc-700 my-8" />

        <h3 className="text-xl font-semibold text-white mb-6">
          Featured Film
        </h3>

        <div className="space-y-6">

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Film Title
            </label>

            <input
              type="text"
              value={films.featuredFilm?.title || ""}
              onChange={(e) =>
                setFilms({
                  ...films,
                  featuredFilm: {
                    ...films.featuredFilm,
                    title: e.target.value,
                  },
                })
              }
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Category
            </label>

            <input
              type="text"
              value={films.featuredFilm?.category || ""}
              onChange={(e) =>
                setFilms({
                  ...films,
                  featuredFilm: {
                    ...films.featuredFilm,
                    category: e.target.value,
                  },
                })
              }
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>

          <MediaField
            label="Featured Thumbnail"
            url={films.featuredFilm.thumbnail}
            mediaType={films.featuredFilm.thumbnailMediaType}
            onChange={(url, mediaType) =>
              setFilms({
                ...films,
                featuredFilm: {
                  ...films.featuredFilm,
                  thumbnail: url,
                  thumbnailMediaType: mediaType,
                },
              })
            }
            allowedTypes={["image"]}
            context="films"
          />

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Video URL
            </label>

            <input
              type="text"
              value={films.featuredFilm?.videoUrl || ""}
              onChange={(e) =>
                setFilms({
                  ...films,
                  featuredFilm: {
                    ...films.featuredFilm,
                    videoUrl: e.target.value,
                  },
                })
              }
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>

        </div>

        <hr className="border-zinc-700 my-8" />

        <h3 className="text-xl font-semibold text-white">
          Recent Films
        </h3>

        <div className="flex items-center gap-4 mt-6">
          <button
            type="button"
            onClick={() =>
              setFilms({
                ...films,
                recentFilms: [
                  ...films.recentFilms,
                  {
                    title: "",
                    category: "",
                    thumbnail: "",
                    thumbnailMediaType: "image" as MediaType,
                    videoUrl: "",
                  },
                ],
              })
            }
            className="px-4 py-2 rounded-lg bg-zinc-700 hover:bg-zinc-600 text-white font-semibold transition"
          >
            + Add Film
          </button>

          </div>

        {films.recentFilms.map((film, index) => (
        <div
          key={index}
          className="mt-6 rounded-xl border border-zinc-700 bg-zinc-900 p-6 space-y-5"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-white">
              Film {index + 1}
            </h4>

            <button
              type="button"
              onClick={() =>
                setFilms({
                  ...films,
                  recentFilms: films.recentFilms.filter((_, i) => i !== index),
                })
              }
              className="rounded-lg bg-red-600 px-3 py-2 text-white hover:bg-red-700"
            >
              Delete
            </button>
          </div>
       
          <MediaField
            label="Thumbnail"
            url={film.thumbnail}
            mediaType={film.thumbnailMediaType}
            onChange={(url, mediaType) => {
              const updated = [...films.recentFilms];

              updated[index] = {
                ...updated[index],
                thumbnail: url,
                thumbnailMediaType: mediaType,
              };

              setFilms({
                ...films,
                recentFilms: updated,
              });
            }}
            allowedTypes={["image"]}
            context="films"
          />

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Film Title
            </label>

            <input
              type="text"
              value={film.title}
              onChange={(e) => {
                const updated = [...films.recentFilms];

                updated[index].title = e.target.value;

                setFilms({
                  ...films,
                  recentFilms: updated,
                });
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Category
            </label>

            <input
              type="text"
              value={film.category}
              onChange={(e) => {
                const updated = [...films.recentFilms];

                updated[index].category = e.target.value;

                setFilms({
                  ...films,
                  recentFilms: updated,
                });
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>

          <div>
            <label className="block text-sm text-zinc-300 mb-2">
              Video URL
            </label>

            <input
              type="text"
              value={film.videoUrl}
              onChange={(e) => {
                const updated = [...films.recentFilms];

                updated[index].videoUrl = e.target.value;

                setFilms({
                  ...films,
                  recentFilms: updated,
                });
              }}
              className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
            />
          </div>
        </div>
      ))}    
      </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white hover:bg-amber-400 transition"
          >
            Save Films Page
          </button>
        </div>
        
    </div>
  );
}