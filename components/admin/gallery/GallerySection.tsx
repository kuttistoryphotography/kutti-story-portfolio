"use client";

import { useEffect, useState } from "react";
import GalleryTable from "./GalleryTable";
import GalleryForm from "./GalleryForm";

export interface GalleryItem {
  _id?: string;
  title: string;
  image: string;
  category: string;
  featured: boolean;
}

interface Props {
  storyId: string;
  storyTitle: string;
  goBack: () => void;
}

export default function GallerySection({
  storyId,
  storyTitle,
  goBack,
}: Props) {
  const [photos, setPhotos] = useState<GalleryItem[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPhoto, setEditingPhoto] = useState<GalleryItem | null>(null);

  const loadPhotos = async () => {
    try {
      const res = await fetch(`/api/gallery?storyId=${storyId}`);
      const data = await res.json();
      setPhotos(data.photos || []);
    } catch (error) {
      console.error("Failed to load photos:", error);
    }
  };

  useEffect(() => {
    if (storyId) {
      loadPhotos();
    }
  }, [storyId]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={goBack}
            className="mb-4 rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700 transition"
          >
            ← Back to Stories
          </button>

          <h1 className="text-3xl font-bold">
            {storyTitle}
          </h1>

          <p className="text-zinc-400">
            {photos.length} Photos
          </p>
        </div>

        <button
          onClick={() => {
            setEditingPhoto(null);
            setShowForm(true);
          }}
          className="rounded-lg bg-amber-500 px-5 py-2.5 font-semibold text-black hover:bg-amber-400"
        >
          + Add Photo
        </button>
      </div>

      <GalleryTable
        photos={photos}
        refresh={loadPhotos}
        onEdit={(photo) => {
          setEditingPhoto(photo);
          setShowForm(true);
        }}
      />

      {showForm && (
        <GalleryForm
          storyId={storyId}
          photo={editingPhoto}
          refresh={loadPhotos}
          onClose={() => {
            setEditingPhoto(null);
            setShowForm(false);
          }}
        />
      )}
    </div>
  );
}