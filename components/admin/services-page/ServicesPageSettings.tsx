"use client";

import { useEffect, useState } from "react";

export default function ServicesPageSettings() {
  const [loading, setLoading] = useState(true);

  const [hero, setHero] = useState({
    heading: "",
    subheading: "",
    paragraph: "",
    heroImage: "",
    heroImageType: "image",
    heroVideo: "",
    heroVideoType: "video",
  });

  const [showcase, setShowcase] = useState({
    heading: "",
    subheading: "",
    description: "",
    image: "",
  });

  const [cardGrid, setCardGrid] = useState({
    whatsappCardTitle: "",
    whatsappCardPlaceholder: "",
    storytellingCardTitle: "",
    storytellingCardDescription: "",
    storytellingCardImage: "",
    storytellingCardImageType: "image",
    storytellingCardLearnMoreLink: "",
    expertCardTitle: "",
    expertCount: "",
    expertCardTagline: "",
  });

  useEffect(() => {
    async function fetchSettings() {
      const res = await fetch("/api/services-page");
      const data = await res.json();

      setHero(data.settings?.hero || {});
      setShowcase(data.settings?.showcase || {});
      setCardGrid(data.settings?.cardGrid || {});

      setLoading(false);
    }

    fetchSettings();
    }, []);

    const saveHero = async () => {
    try {
        const res = await fetch("/api/services-page", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            section: "hero",
            data: hero,
        }),
        });

        const result = await res.json();

        if (result.success) {
        alert("Hero saved successfully!");
        } else {
        alert("Failed to save hero.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
    };

    const saveShowcase = async () => {
    try {
        const res = await fetch("/api/services-page", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            section: "showcase",
            data: showcase,
        }),
        });

        const result = await res.json();

        if (result.success) {
        alert("Showcase saved successfully!");
        } else {
        alert("Failed to save showcase.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
    };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 space-y-8">

        <h1 className="text-3xl font-bold">
        Services Page Settings
        </h1>

        <div className="rounded-2xl border p-6 space-y-5">

        <h2 className="text-xl font-semibold">
            Hero Section
        </h2>

        {/* Heading */}
        <div>
            <label className="block mb-2 font-medium">
            Heading
            </label>

            <input
            className="w-full border rounded-lg p-3"
            value={hero.heading}
            onChange={(e) =>
                setHero({
                ...hero,
                heading: e.target.value,
                })
            }
            />
        </div>

        {/* Subheading */}
        <div>
            <label className="block mb-2 font-medium">
            Subheading
            </label>

            <input
            className="w-full border rounded-lg p-3"
            value={hero.subheading}
            onChange={(e) =>
                setHero({
                ...hero,
                subheading: e.target.value,
                })
            }
            />
        </div>

        {/* Paragraph */}
        <div>
            <label className="block mb-2 font-medium">
            Paragraph
            </label>

            <textarea
            rows={5}
            className="w-full border rounded-lg p-3"
            value={hero.paragraph}
            onChange={(e) =>
                setHero({
                ...hero,
                paragraph: e.target.value,
                })
            }
            />
        </div>

        <button
            onClick={saveHero}
            className="rounded-xl bg-black px-6 py-3 text-white"
        >
            Save Hero
        </button>

        </div>

        <div className="rounded-2xl border p-6 space-y-5">

            <h2 className="text-xl font-semibold">
                Showcase Section
            </h2>

            {/* Heading */}
            <div>
                <label className="block mb-2 font-medium">
                Heading
                </label>

                <input
                className="w-full border rounded-lg p-3"
                value={showcase.heading}
                onChange={(e) =>
                    setShowcase({
                    ...showcase,
                    heading: e.target.value,
                    })
                }
                />
            </div>

            {/* Subheading */}
            <div>
                <label className="block mb-2 font-medium">
                Subheading
                </label>

                <input
                className="w-full border rounded-lg p-3"
                value={showcase.subheading}
                onChange={(e) =>
                    setShowcase({
                    ...showcase,
                    subheading: e.target.value,
                    })
                }
                />
            </div>

            {/* Description */}
            <div>
                <label className="block mb-2 font-medium">
                Description
                </label>

                <textarea
                rows={5}
                className="w-full border rounded-lg p-3"
                value={showcase.description}
                onChange={(e) =>
                    setShowcase({
                    ...showcase,
                    description: e.target.value,
                    })
                }
                />
            </div>

            <button
                onClick={saveShowcase}
                className="rounded-xl bg-black px-6 py-3 text-white"
            >
                Save Showcase
            </button>

            </div>

    </div>
    );
}