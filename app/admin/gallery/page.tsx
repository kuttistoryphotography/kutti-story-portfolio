"use client";

import { useSearchParams } from "next/navigation";

export default function StoryGalleryPage() {
  const searchParams = useSearchParams();

  const storyId = searchParams.get("storyId");

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">
      <h1 className="text-4xl font-bold">
        Story Gallery
      </h1>

      <p className="mt-4 text-zinc-400">
        Story ID:
      </p>

      <p className="mt-2 rounded-lg bg-zinc-900 p-4 border border-zinc-800">
        {storyId}
      </p>
    </div>
  );
}