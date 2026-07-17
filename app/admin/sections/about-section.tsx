"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [about, setAbout] = useState({
    hero: {
      title: "",
      heading: "",
      description: "",
      experienceBadge: "",
      backgroundImage: "",
    },
  });

  useEffect(() => {
    fetch("/api/homepage")
        .then((res) => res.json())
        .then((data) => {
        if (data.settings?.about) {
            setAbout(data.settings.about);
        }
        })
        .catch((err) => console.error(err));
    }, []);

  const handleSave = async () => {
    try {
        const res = await fetch("/api/homepage", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            section: "about",
            data: about,
        }),
        });

        const result = await res.json();

        if (result.success) {
        alert("About page saved successfully!");
        } else {
        alert("Failed to save.");
        }
    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
    };

  return (
    <div className="max-w-4xl">
        <h2 className="text-3xl font-bold text-white mb-2">
        About Page
        </h2>

        <p className="text-zinc-400 mb-8">
        Manage your About page content here.
        </p>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <label className="block text-sm font-medium text-zinc-300 mb-2">
            Hero Title
        </label>

        <input
            type="text"
            value={about.hero.title}
            onChange={(e) =>
            setAbout({
                ...about,
                hero: {
                ...about.hero,
                title: e.target.value,
                },
            })
            }
            placeholder="Enter hero title"
            className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none focus:border-amber-500"
        />

        <div className="mt-6">
            <button
                onClick={handleSave}
                className="rounded-lg bg-amber-500 px-6 py-3 font-semibold text-black hover:bg-amber-400 transition"
            >
                Save Changes
            </button>
        </div>

        </div>
    </div>
    );
}