"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function StoryGalleryContent() {
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

export default function StoryGalleryPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
          <p className="text-zinc-400">
            Loading gallery...
          </p>
        </div>
      }
    >
      <StoryGalleryContent />
    </Suspense>
  );
}