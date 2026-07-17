"use client";

import { useState } from "react";
import GalleryUpload from "./GalleryUpload";
import { GalleryItem } from "./GallerySection";
import { CATEGORIES } from "@/lib/categories";

interface Props {
  storyId: string;
  photo: GalleryItem | null;
  refresh: () => void;
  onClose: () => void;
}

export default function GalleryForm({
  storyId,
  photo,
  refresh,
  onClose,
}: Props) {
  const [title, setTitle] = useState(photo?.title || "");
  const [category, setCategory] = useState(photo?.category || "Wedding");
  const [image, setImage] = useState(photo?.image || "");
  const [featured, setFeatured] = useState(photo?.featured || false);
  const [saving, setSaving] = useState(false);

  const save = async () => {
    if (!title.trim()) {
      alert("Please enter a title.");
      return;
    }

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    try {
      setSaving(true);

      const url = photo?._id
        ? `/api/gallery/${photo._id}`
        : "/api/gallery";

      const method = photo?._id ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          storyId,
          title,
          image,
          category,
          featured,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Failed to save photo.");
        return;
      }

      refresh();
      onClose();
    } catch (err) {
      console.error(err);
      alert("Failed to save photo.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6 space-y-5">

        <h2 className="text-2xl font-bold">
          {photo ? "Edit Portfolio Photo" : "Add Portfolio Photo"}
        </h2>

        <div>
          <label className="text-sm text-zinc-400">
            Title
          </label>

          <input
            className="mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 outline-none focus:border-amber-500"
            placeholder="Photo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400">
            Category
          </label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
          >
            {CATEGORIES.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <GalleryUpload onUpload={setImage} />

        {image && (
          <img
            src={image}
            alt="Preview"
            className="h-48 w-full rounded-xl object-cover border border-zinc-700"
          />
        )}

        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />

          <span>Featured Photo</span>
        </label>

        <div className="flex justify-end gap-3 pt-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700"
          >
            Cancel
          </button>

          <button
            disabled={saving}
            onClick={save}
            className="px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold disabled:opacity-50"
          >
            {saving
              ? "Saving..."
              : photo
              ? "Update Photo"
              : "Save Photo"}
          </button>
        </div>
      </div>
    </div>
  );
}