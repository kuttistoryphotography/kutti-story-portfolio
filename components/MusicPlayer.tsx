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

  const toggle = async () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (err) {
        console.error(err);
      }
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="flex items-center w-full max-w-[1080px] overflow-hidden rounded-sm border border-[#DDD4C6] bg-[#F5EFE6] shadow-sm">

      <button
        onClick={toggle}
        className="flex h-24 w-24 items-center justify-center border-r border-[#DDD4C6] transition hover:bg-[#ECE3D5]"
      >
        {playing ? (
          <Pause size={28} />
        ) : (
          <Play size={28} fill="currentColor" />
        )}
      </button>

      <div className="px-6">
        <h4 className="text-2xl font-medium text-[#222]">
          {title}
        </h4>

        <p className="mt-1 text-base text-[#6B7280]">
          {artist}
        </p>
      </div>

      <audio
        ref={audioRef}
        src={src}
        controls
        preload="metadata"
        className="w-full"
        onPlay={() => {
          console.log("PLAY");
          setPlaying(true);
        }}
        onPause={() => {
          console.log("PAUSE");
          setPlaying(false);
        }}
        onLoadedMetadata={() => {
          console.log("Loaded");
        }}
        onCanPlay={() => {
          console.log("Can Play");
        }}
        onError={(e) => {
          console.log("Audio Error", e.currentTarget.error);
        }}
      />
    </div>
  );
}