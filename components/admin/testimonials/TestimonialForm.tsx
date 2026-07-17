"use client";

import { useEffect, useState } from "react";
import GalleryUpload from "../gallery/GalleryUpload";

interface Testimonial {
  _id?: string;
  name: string;
  location: string;
  review: string;
  image: string;
  rating: number;
  featured: boolean;
}

interface Props {
  onClose: () => void;
  onSaved?: () => void;
  editingTestimonial?: Testimonial | null;
}

export default function TestimonialForm({
  onClose,
  onSaved,
  editingTestimonial,
}: Props) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [rating, setRating] = useState(5);
    const [featured, setFeatured] = useState(true);
    const [image, setImage] = useState("");
    const [review, setReview] = useState("");
    const [saving, setSaving] = useState(false);

const saveTestimonial = async () => {
  if (!name.trim()) {
    alert("Please enter client name.");
    return;
  }

  if (!review.trim()) {
    alert("Please enter review.");
    return;
  }

  try {
    setSaving(true);

    console.log("Editing Testimonial:", editingTestimonial);
    console.log("ID:", editingTestimonial?._id);

    const url = editingTestimonial
    ? `/api/testimonials/${editingTestimonial._id}`
    : "/api/testimonials";

    const method = editingTestimonial ? "PUT" : "POST";

    const res = await fetch(url, {
    method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        location,
        review,
        image,
        rating,
        featured,
      }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    alert(
    editingTestimonial
        ? "Testimonial updated successfully!"
        : "Testimonial added successfully!"
    );

    onSaved?.();
    onClose();
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setSaving(false);
  }
};

useEffect(() => {
  if (!editingTestimonial) return;

  setName(editingTestimonial.name || "");
  setLocation(editingTestimonial.location || "");
  setReview(editingTestimonial.review || "");
  setImage(editingTestimonial.image || "");
  setRating(editingTestimonial.rating || 5);
  setFeatured(editingTestimonial.featured || false);
}, [editingTestimonial]);

  return (
  <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
    <div className="w-full max-w-xl rounded-2xl bg-zinc-900 border border-zinc-800 p-6">

      <h2 className="text-2xl font-bold mb-6">
        {editingTestimonial ? "Edit Testimonial" : "Add Testimonial"}
      </h2>

      <input
        placeholder="Client Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
        />

        <input
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="mt-4 w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
        />

        <textarea
            placeholder="Review"
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="mt-4 w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
        />

        <div className="mt-4">
            <label className="mb-2 block text-sm text-zinc-400">
                Rating
            </label>

            <input
                type="number"
                min={1}
                max={5}
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
            />
        </div>

        <div className="mt-4">
            <label className="mb-2 block text-sm text-zinc-400">
                Client Photo
            </label>

            <GalleryUpload onUpload={setImage} />

            {image && (
                <img
                src={image}
                alt="Preview"
                className="mt-4 h-40 w-40 rounded-xl object-cover border border-zinc-700"
                />
            )}
        </div>

        <label className="mt-4 flex items-center gap-3">
            <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="h-4 w-4"
            />

            <span className="text-white">
                Featured Testimonial
            </span>
        </label>

      <div className="mt-6 flex justify-end gap-3">

        <button
            onClick={onClose}
            className="rounded-lg bg-zinc-800 px-5 py-2"
        >
            Cancel
        </button>

        <button
            onClick={saveTestimonial}
            disabled={saving}
            className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-black disabled:opacity-50"
        >
            {saving
            ? "Saving..."
            : editingTestimonial
            ? "Update"
            : "Save"}
        </button>

      </div>

    </div>
  </div>
);
}