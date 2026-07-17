"use client";

import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white">

      <Image
        src="/logo/logo.png"
        alt="Kutti Story"
        width={110}
        height={110}
      />

      <h1 className="mt-8 text-5xl font-[var(--font-heading)] text-[#3D3D3D]">
        Kutti Story
      </h1>

      <p className="mt-3 tracking-[5px] uppercase text-[#7A8450] text-sm">
        Capturing Memories
      </p>

      <div className="mt-8 flex gap-2">
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#7A8450]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#7A8450] [animation-delay:200ms]" />
        <span className="h-3 w-3 animate-bounce rounded-full bg-[#7A8450] [animation-delay:400ms]" />
      </div>

    </div>
  );
}