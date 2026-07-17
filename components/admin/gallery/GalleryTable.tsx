"use client";

import { GalleryItem } from "./GallerySection";

interface Props {
  photos: GalleryItem[];
  refresh: () => void;
  onEdit: (photo: GalleryItem) => void;
}

export default function GalleryTable({
  photos,
  refresh,
  onEdit,
}: Props) {
  const removePhoto = async (id?: string) => {
    if (!id) return;

    const ok = confirm("Delete this photo?");

    if (!ok) return;

    try {
      await fetch(`/api/gallery/${id}`, {
        method: "DELETE",
      });

      refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete photo.");
    }
  };

  if (photos.length === 0) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-10 text-center">
        <p className="text-zinc-500">
          No photos uploaded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6">
      {photos.map((photo) => (
        <div
          key={photo._id}
          className="rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800"
        >
          <img
            src={photo.image}
            alt={photo.title}
            className="w-full h-60 object-cover"
          />

          <div className="p-4 space-y-2">
            <h2 className="font-bold">{photo.title}</h2>

            <p className="text-sm text-zinc-400">
              {photo.category}
            </p>

            {photo.featured && (
              <span className="inline-block px-2 py-1 rounded bg-amber-500 text-black text-xs">
                Featured
              </span>
            )}

            <div className="flex gap-2 pt-3">
              <button
                onClick={() => onEdit(photo)}
                className="flex-1 bg-blue-600 hover:bg-blue-500 rounded-lg py-2 transition"
              >
                Edit
              </button>

              <button
                onClick={() => removePhoto(photo._id)}
                className="flex-1 bg-red-600 hover:bg-red-500 rounded-lg py-2 transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}