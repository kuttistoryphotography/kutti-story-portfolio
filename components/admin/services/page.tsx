"use client";

import { useEffect, useState } from "react";

export default function AdminServicesPage() {
  const [loading, setLoading] = useState(true);

  const [hero, setHero] = useState({
    badge: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => {
        setHero(data.settings.hero);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  const saveHero = async () => {
    try {
        const res = await fetch("/api/services", {
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

  return (
    <div className="max-w-5xl mx-auto p-8">

      <h1 className="text-3xl font-bold mb-8">
        Services CMS
      </h1>

      <div className="rounded-xl border p-6 space-y-5">

        <h2 className="text-xl font-semibold">
          Hero Section
        </h2>

        <div>
          <label className="block mb-2 font-medium">
            Badge
          </label>

          <input
            className="w-full border rounded-lg p-3"
            value={hero.badge}
            onChange={(e) =>
              setHero({ ...hero, badge: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>

          <input
            className="w-full border rounded-lg p-3"
            value={hero.title}
            onChange={(e) =>
              setHero({ ...hero, title: e.target.value })
            }
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows={5}
            className="w-full border rounded-lg p-3"
            value={hero.description}
            onChange={(e) =>
              setHero({
                ...hero,
                description: e.target.value,
              })
            }
          />
        </div>

      </div>

    </div>
  );
}