"use client";

import { useEffect, useState } from "react";
import StoryForm from "./StoryForm";

interface Story {
  _id: string;

  title: string;
  slug: string;

  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;

  category: string;
  location: string;
  coverImage: string;
  date: string;
  description: string;
  featured: boolean;
}

interface Props {
  openGallery: (storyId: string, title: string) => void;
}

export default function StorySection({
  openGallery,
}: Props) {
  const [stories, setStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingStory, setEditingStory] = useState<Story | null>(null);

  const loadStories = async () => {
    try {
      const res = await fetch("/api/stories");
      const data = await res.json();

      if (data.success) {
        setStories(data.stories);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStories();
  }, []);

  const deleteStory = async (id: string) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this story?"
  );

  if (!confirmDelete) return;

  try {
    const res = await fetch(`/api/stories/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    alert("Story deleted successfully!");

    loadStories();
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Story Manager
          </h1>

          <p className="mt-1 text-zinc-400">
            {stories.length} Stories
          </p>
        </div>

        <button
          onClick={() => {
          setEditingStory(null);
          setShowForm(true);
        }}
          className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-black transition hover:bg-amber-400"
        >
          + Add Story
        </button>
      </div>

      {/* Loading */}
      {loading ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
          Loading stories...
        </div>
      ) : stories.length === 0 ? (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center text-zinc-500">
          No stories found.
        </div>
      ) : (
        <div className="space-y-5">
          {stories.map((story) => (
            <div
              key={story._id}
              className="flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900 p-5"
            >
              {/* Left */}
              <div className="flex items-center gap-5">
                <img
                  src={story.coverImage}
                  alt={story.title}
                  className="h-20 w-20 rounded-lg object-cover border border-zinc-700"
                />

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {story.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    {story.category} • {story.location}
                  </p>

                  {story.featured && (
                    <span className="mt-2 inline-block rounded bg-amber-500 px-2 py-1 text-xs font-semibold text-black">
                      Featured
                    </span>
                  )}
                </div>
              </div>

              {/* Right */}
              <div className="flex shrink-0 items-center gap-3">
                <button
                  onClick={() => {
                    setEditingStory(story);
                    setShowForm(true);
                  }}
                  className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => openGallery(story._id, story.title)}
                  className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-black transition hover:bg-amber-400"
                >
                  Manage Gallery
                </button>

                <button
                  onClick={() => deleteStory(story._id)}
                  className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {showForm && (
  <StoryForm
    editingStory={editingStory}
    onSaved={loadStories}
    onClose={() => {
      setEditingStory(null);
      setShowForm(false);
    }}
  />
)}
    </div>
  );
}