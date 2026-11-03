"use client";

import { useState } from "react";
import Image from "next/image";
import { PlayIcon } from "@/components/ui/Icons";

export default function ReelCard({ src, poster, index }: { src: string; poster: string; index: number }) {
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(false);
  const label = `Reel ${index + 1}`;

  return (
    <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] bg-black ring-1 ring-black/10">
      {active ? (
        <video
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
          aria-label={label}
          onWaiting={() => setLoading(true)}
          onPlaying={() => setLoading(false)}
          onPause={() => setLoading(false)}
          onError={() => setLoading(false)}
          onPlay={(e) => document.querySelectorAll("video").forEach((v) => v !== e.currentTarget && v.pause())}
          className="h-full w-full object-contain"
        />
      ) : (
        <button
          type="button"
          onClick={() => { setActive(true); setLoading(true); }}
          aria-label={`Play ${label}`}
          className="group absolute inset-0"
        >
          <Image src={poster} alt="" fill loading="lazy" sizes="(min-width: 768px) 280px, 46vw"
            className="object-cover transition duration-500 group-hover:scale-105" />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <span className="pulse absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 pl-0.5 text-brand transition group-hover:scale-110">
            <PlayIcon size={22} />
          </span>
        </button>
      )}
      {loading && (
        <span role="status" aria-label="Loading video" className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-black/40">
          <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/25 border-t-white" />
        </span>
      )}
    </div>
  );
}