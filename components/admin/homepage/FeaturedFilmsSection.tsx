"use client";

import { useEffect, useState } from "react";

export default function FeaturedFilmsSection() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);


  const [featuredFilms, setFeaturedFilms] = useState({
    smallTitle: "",
    heading: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    cards: [
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

  useEffect(() => {
    loadData();
  }, []);

  async function saveData() {
    setSaving(true);

    const res = await fetch("/api/homepage", {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        section: "featuredFilms",
        data: featuredFilms,
        }),
    });

    const result = await res.json();

    if (result.success) {
        alert("Featured Films updated successfully.");
    } else {
        alert(result.error || "Failed to save.");
    }

    setSaving(false);
    }

  async function loadData() {
    const res = await fetch("/api/homepage");
    const data = await res.json();

    if (data?.settings?.featuredFilms) {
        const films = data.settings.featuredFilms;
        console.log("Featured Films:", films);
        console.log("Cards count:", films.cards?.length);

        while (films.cards.length < 4) {
            films.cards.push({
            title: "",
            category: "",
            duration: "",
            thumbnail: "",
            thumbnailMediaType: "image",
            videoUrl: "",
            });
        }

        setFeaturedFilms(films);
        }

    setLoading(false);
  }

  if (loading) {
    return (
      <div className="rounded-xl border border-gray-700 bg-gray-900 p-6 text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-5">
        <div>
            <label className="block mb-2 text-white font-medium">
            Small Title
            </label>

            <input
            type="text"
            value={featuredFilms.smallTitle}
            onChange={(e) =>
                setFeaturedFilms({
                ...featuredFilms,
                smallTitle: e.target.value,
                })
            }
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
        </div>

        <div>
            <label className="block mb-2 text-white font-medium">
            Heading
            </label>

            <input
            type="text"
            value={featuredFilms.heading}
            onChange={(e) =>
                setFeaturedFilms({
                ...featuredFilms,
                heading: e.target.value,
                })
            }
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
        </div>

        <div>
            <label className="block mb-2 text-white font-medium">
            Description
            </label>

            <textarea
            rows={4}
            value={featuredFilms.description}
            onChange={(e) =>
                setFeaturedFilms({
                ...featuredFilms,
                description: e.target.value,
                })
            }
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
        </div>

        <div>
            <label className="block mb-2 text-white font-medium">
            Button Text
            </label>

            <input
            type="text"
            value={featuredFilms.buttonText}
            onChange={(e) =>
                setFeaturedFilms({
                ...featuredFilms,
                buttonText: e.target.value,
                })
            }
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
        </div>

        <div>
            <label className="block mb-2 text-white font-medium">
            Button Link
            </label>

            <input
            type="text"
            value={featuredFilms.buttonLink}
            onChange={(e) =>
                setFeaturedFilms({
                ...featuredFilms,
                buttonLink: e.target.value,
                })
            }
            className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
        </div>

    {featuredFilms.cards.map((card, index) => (
        <div
            key={index}
            className="mt-8 rounded-lg border border-gray-700 p-5"
        >
           <div className="mb-4 flex items-center justify-between">

                <h3 className="text-xl font-semibold text-white">
                    Film Card {index + 1}
                </h3>

            </div>
            <div className="space-y-4">
            <input
                type="text"
                placeholder="Film Title"
                value={card.title}
                onChange={(e) => {
                const cards = [...featuredFilms.cards];
                cards[index] = {
                    ...cards[index],
                    title: e.target.value,
                };

                setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                });
                }}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />

            <input
                type="text"
                placeholder="Category"
                value={card.category}
                onChange={(e) => {
                const cards = [...featuredFilms.cards];
                cards[index] = {
                    ...cards[index],
                    category: e.target.value,
                };

                setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                });
                }}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />

            <input
                type="text"
                placeholder="Duration"
                value={card.duration}
                onChange={(e) => {
                const cards = [...featuredFilms.cards];
                cards[index] = {
                    ...cards[index],
                    duration: e.target.value,
                };

                setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                });
                }}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />

            <input
                type="text"
                placeholder="Video URL"
                value={card.videoUrl}
                onChange={(e) => {
                const cards = [...featuredFilms.cards];
                cards[index] = {
                    ...cards[index],
                    videoUrl: e.target.value,
                };

                setFeaturedFilms({
                    ...featuredFilms,
                    cards,
                });
                }}
                className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white"
            />
            </div>
       
        </div>
      ))}

        <div className="mt-6">
            <button
                onClick={saveData}
                disabled={saving}
                className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400 disabled:opacity-50"
            >
                {saving ? "Saving..." : "Save Featured Films"}
            </button>
        </div>

    </div>
);
}