"use client";

import { useEffect, useState } from "react";
import GalleryUpload from "../gallery/GalleryUpload";
import { CATEGORIES } from "@/lib/categories";

interface Story {
  _id?: string;

  title: string;
  slug: string;

  seoTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;

  coverImage: string;
  category: string;
  location: string;
  date: string;
  description: string;
  featured: boolean;
}

interface Props {
  onClose: () => void;
  editingStory?: Story | null;
  onSaved?: () => void;
}

export default function StoryForm({
  onClose,
  editingStory,
  onSaved,
}: Props) {
    console.log("editingStory:", editingStory);
    
    const [coverImage, setCoverImage] = useState("");
    const [title, setTitle] = useState("");
    const [slug, setSlug] = useState("");
    const [seoTitle, setSeoTitle] = useState("");
    const [metaDescription, setMetaDescription] = useState("");
    const [canonicalUrl, setCanonicalUrl] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("Wedding");
    const [location, setLocation] = useState("");
    const [featured, setFeatured] = useState(false);
    const [saving, setSaving] = useState(false);
    const [date, setDate] = useState("");
        useEffect(() => {
        if (!editingStory) return;

        setTitle(editingStory.title || "");
        setSlug(editingStory.slug || "");
        setSeoTitle(editingStory.seoTitle || "");
        setMetaDescription(editingStory.metaDescription || "");
        setCanonicalUrl(editingStory.canonicalUrl || "");
        setCoverImage(editingStory.coverImage || "");
        setCategory(editingStory.category || "Wedding");
        setLocation(editingStory.location || "");
        setDate(editingStory.date || "");
        setDescription(editingStory.description || "");
        setFeatured(editingStory.featured || false);
        }, [editingStory]);
    
    const generateSEO = () => {
      setSeoTitle(`${title} | Kutti Story Photography`);

      setMetaDescription(
        `Capture timeless memories with our ${title} story by Kutti Story Photography. Professional photography in Madurai with cinematic storytelling and premium albums.`
      );

      setCanonicalUrl(`/stories/${slug}`);
    };

    const seoChecks = [
      {
        label: "SEO Title added",
        passed: seoTitle.trim().length > 0,
      },
      {
        label: "SEO Title length (30–150)",
        passed: seoTitle.length >= 30 && seoTitle.length <= 150,
      },
      {
        label: "Meta Description added",
        passed: metaDescription.trim().length > 0,
      },
      {
        label: "Meta Description length (80–250)",
        passed:
          metaDescription.length >= 80 &&
          metaDescription.length <= 250,
      },
      {
        label: "URL Slug exists",
        passed: slug.trim().length > 0,
      },
      {
        label: "Canonical URL added",
        passed: canonicalUrl.trim().length > 0,
      },
    ];

    const seoScore = Math.round(
      (seoChecks.filter((item) => item.passed).length /
        seoChecks.length) *
        100
    );

        
    const saveStory = async () => {
      console.log("Save button clicked");

      if (!title.trim()) {
        alert("Please enter a story title.");
        return;
      }

      if (!slug.trim()) {
        alert("Please enter a slug.");
        return;
      }

      if (!coverImage) {
        alert("Please upload a cover image.");
        return;
      }

      try {
        setSaving(true);

        console.log("Sending POST request...");

        const url = editingStory
            ? `/api/stories/${editingStory._id}`
            : "/api/stories";

        const method = editingStory ? "PUT" : "POST";

        const res = await fetch(url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
            title,
            slug,

            seoTitle,
            metaDescription,
            canonicalUrl,

            coverImage,
            category,
            location,
            date,
            description,
            featured,
        }),
     });

    const data = await res.json();

    console.log("API Response:", data);

    if (!data.success) {
      alert(data.message || "Failed to create story.");
      return;
    }

    alert(
    editingStory
        ? "Story updated successfully!"
        : "Story created successfully!"
    );

    onSaved?.();
    onClose();
  } catch (error) {
    console.error("Save Error:", error);
    alert("Something went wrong.");
  } finally {
    setSaving(false);
  }
};

  return (
    <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-800 p-6 scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent">

          <h2 className="text-2xl font-bold mb-6">
            {editingStory ? "Edit Story" : "Add Story"}
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
              Story Title
            </label>

            <input
              placeholder="Enter story title"
              value={title}
              onChange={(e) => {
                const value = e.target.value;

                setTitle(value);

                setSlug(
                  value
                    .toLowerCase()
                    .replace(/&/g, "and")
                    .replace(/[^a-z0-9\s-]/g, "")
                    .trim()
                    .replace(/\s+/g, "-")
                );
              }}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-amber-500 focus:outline-none"
            />
          </div>

           <div>
                <label className="mb-2 block text-sm text-zinc-400">
                    Slug
                </label>

                <input
                    value={slug}
                    readOnly
                    className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 text-zinc-400 cursor-not-allowed"
                />
            </div>

          <div>
            <label className="mb-2 block text-sm text-zinc-400">
                Category
            </label>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
            >
              {CATEGORIES.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-3">

            <label className="block text-sm text-zinc-400">
              Cover Image
            </label>

            <GalleryUpload onUpload={setCoverImage} />

            {coverImage && (
              <div className="overflow-hidden rounded-xl border border-zinc-700">
                <img
                  src={coverImage}
                  alt="Cover Preview"
                  className="h-64 w-full object-cover"
                />
              </div>
            )}

          </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Location
              </label>

              <input
                placeholder="Enter event location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-zinc-400">
                Event Date
              </label>

              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-amber-500 focus:outline-none"
              />
            </div>

            <label className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="h-4 w-4"
                />

                <span className="text-white">
                    Featured Story
                </span>
            </label>

            <div className="md:col-span-2">
              <label className="mb-2 block text-sm text-zinc-400">
                Description
              </label>

              <textarea
                placeholder="Write the story description..."
                rows={6}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
              />
            </div>

            {/* SEO Settings */}
            <div className="md:col-span-2 rounded-xl border border-zinc-700 p-5 space-y-5">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    SEO Settings
                  </h3>

                  <p className="text-sm text-zinc-500">
                    Optimize this story for Google and AI search engines.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={generateSEO}
                  className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-400 transition-colors"
                >
                  ✨ Generate SEO
                </button>

              </div>

              {/* SEO Title */}
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  SEO Title
                </label>

                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-zinc-400">
                    SEO Title
                  </label>

                  <span
                    className={`text-xs font-medium ${
                      seoTitle.length === 0
                        ? "text-zinc-500"
                        : seoTitle.length < 30
                        ? "text-yellow-400"
                        : seoTitle.length <= 150
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {seoTitle.length}/150{" "}
                    {seoTitle.length === 0
                      ? ""
                      : seoTitle.length < 30
                      ? "• Needs Improvement"
                      : seoTitle.length <= 150
                      ? "• Good"
                      : "• Too Long"}
                  </span>
                </div>

                <input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  placeholder="Best Wedding Photography in Madurai | Kutti Story"
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3 focus:border-amber-500 focus:outline-none"
                />

                <div className="mt-2 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      seoTitle.length === 0
                        ? "bg-zinc-600"
                        : seoTitle.length < 30
                        ? "bg-yellow-500"
                        : seoTitle.length <= 150
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min((seoTitle.length / 150) * 100, 100)}%`,
                    }}
                  />
                </div>
              </div>

              {/* Meta Description */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm text-zinc-400">
                    Meta Description
                  </label>

                  <span
                    className={`text-xs font-medium ${
                      metaDescription.length === 0
                        ? "text-zinc-500"
                        : metaDescription.length < 80
                        ? "text-yellow-400"
                        : metaDescription.length <= 250
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {metaDescription.length}/250{" "}
                    {metaDescription.length === 0
                      ? ""
                      : metaDescription.length < 80
                      ? "• Needs Improvement"
                      : metaDescription.length <= 250
                      ? "• Good"
                      : "• Too Long"}
                  </span>
                </div>

                <textarea
                  rows={4}
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  placeholder="Write a compelling meta description..."
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
                />

                <div className="mt-2 h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      metaDescription.length === 0
                        ? "bg-zinc-600"
                        : metaDescription.length < 80
                        ? "bg-yellow-500"
                        : metaDescription.length <= 250
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        (metaDescription.length / 250) * 100,
                        100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              {/* Canonical URL */}
              <div>
                <label className="mb-2 block text-sm text-zinc-400">
                  Canonical URL
                </label>

                <input
                  value={canonicalUrl}
                  onChange={(e) => setCanonicalUrl(e.target.value)}
                  placeholder="/stories/your-story-slug"
                  className="w-full rounded-lg bg-zinc-800 border border-zinc-700 px-4 py-3"
                />
              </div>

              {/* Google Search Preview */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-5">

                <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Google Search Preview
                </p>

                <div className="space-y-1">

                  <h3 className="cursor-pointer text-lg font-medium text-blue-400 hover:underline">
                    {seoTitle || title || "Your Story Title"}
                  </h3>

                  <p className="break-all text-sm text-green-500">
                    https://kuttistoryphotography.in
                    {canonicalUrl || `/stories/${slug || "your-story-slug"}`}
                  </p>

                  <p className="text-sm leading-6 text-zinc-400">
                    {metaDescription ||
                      "Your meta description will appear here as it could appear in Google Search results."}
                  </p>

                </div>

              </div>

              {/* Google Search Preview */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-950 p-5 space-y-2">

                <p className="text-xs uppercase tracking-wider text-zinc-500">
                  Google Search Preview
                </p>

                <div className="space-y-1">

                  <h4 className="text-lg text-blue-400 hover:underline cursor-pointer">
                    {seoTitle || title || "Your Story Title"}
                  </h4>

                  <p className="text-sm text-green-500 break-all">
                    https://kuttistoryphotography.in
                    {canonicalUrl || `/stories/${slug || "your-story-slug"}`}
                  </p>

                  <p className="text-sm text-zinc-400">
                    {metaDescription ||
                      "Your meta description will appear here exactly as it may appear in Google Search."}
                  </p>

                </div>

              </div>

              {/* SEO Analysis */}
              <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-5 space-y-4">

                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    SEO Analysis
                  </h3>

                  <span
                    className={`text-lg font-bold ${
                      seoScore >= 80
                        ? "text-green-400"
                        : seoScore >= 50
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    {seoScore}/100
                  </span>
                </div>

                <div className="space-y-2">

                  {seoChecks.map((check) => (
                    <div
                      key={check.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-zinc-300">
                        {check.label}
                      </span>

                      <span
                        className={
                          check.passed
                            ? "text-green-400"
                            : "text-red-400"
                        }
                      >
                        {check.passed ? "✓" : "✗"}
                      </span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg bg-zinc-800 px-5 py-2"
          >
            Cancel
          </button>

          <button
            onClick={saveStory}
            disabled={saving}
            className="rounded-lg bg-amber-500 px-5 py-2 font-semibold text-white disabled:opacity-50"
            >
            {saving
                ? "Saving..."
                : editingStory
                ? "Update Story"
                : "Save Story"}
            </button>

        </div>

      </div>
    </div>
  );
}