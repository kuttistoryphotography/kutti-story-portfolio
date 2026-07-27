"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

interface Props {
  title: string;
  artist: string;
  src: string;
}

export default function MusicPlayer({
  title,
  artist,
  src,
}: Props) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  };

  return (
    <div className="flex items-center w-full max-w-[1080px] h-22 overflow-hidden rounded-sm border border-[#DDD4C6] bg-[#F5EFE6] shadow-sm">
      
      <button
        onClick={toggle}
        className="flex h-full w-24 items-center justify-center border-r border-[#DDD4C6] transition hover:bg-[#ECE3D5]"
      >
        {playing ? (
          <Pause size={28} />
        ) : (
          <Play size={28} fill="currentColor" />
        )}
      </button>

      <div className="flex flex-col justify-center px-6">
        <h4 className="text-3xl font-medium text-[#222]">
          {title}
        </h4>

        <p className="mt-1 text-lg text-[#6B7280]">
          {artist}
        </p>
      </div>

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setPlaying(false)}
      />
    </div>
  );
}