"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

const PHOTOS = [
  { src: "/machinery_collage.webp", alt: "Makine ve ekipman kolajı" },
  { src: "/machinery_panels.webp", alt: "Makine ve ekipman panelleri" },
  { src: "/mountain_peak.webp", alt: "Dağ zirvesi görünümü" },
  { src: "/quarry_montage.webp", alt: "Ocak sahası montajı" },
];

const SWIPE_THRESHOLD = 40;

export default function HeroPhotoCarousel() {
  const [active, setActive] = useState(0);
  const touchX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    setActive(Math.min(Math.max(index, 0), PHOTOS.length - 1));
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(active - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(active + 1);
    }
  };

  const handleTouchStart = (event: React.TouchEvent) => {
    touchX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: React.TouchEvent) => {
    const startX = touchX.current;
    touchX.current = null;
    if (startX == null) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX == null) return;
    const delta = endX - startX;
    if (Math.abs(delta) < SWIPE_THRESHOLD) return;
    goTo(delta < 0 ? active + 1 : active - 1);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Saha görselleri"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-ink outline-none focus-visible:ring-2 focus-visible:ring-seam-bright lg:aspect-[4/3]"
    >
      {PHOTOS.map((photo, index) => (
        <div
          key={photo.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} / ${PHOTOS.length}: ${photo.alt}`}
          aria-hidden={active !== index}
          className={`absolute inset-0 transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
            active === index ? "scale-100 opacity-100" : "scale-[1.06] opacity-0"
          }`}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            draggable={false}
            sizes="(min-width: 1024px) 48vw, 92vw"
            className="select-none object-cover"
          />
        </div>
      ))}

      {/* Legibility scrim for the control rail. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-strong/80 to-transparent"
      />

      {/* Control rail: story-style progress bars, counter, glass arrows. */}
      <div className="absolute bottom-3 left-4 right-3 flex items-end justify-between gap-4">
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-[3px]">
            {PHOTOS.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`${index + 1}. görseli göster: ${photo.alt}`}
                aria-current={active === index}
                className="p-1.5"
              >
                <span
                  className={`block h-[3px] w-9 transition-colors duration-300 ${
                    index <= active ? "bg-seam-bright" : "bg-paper/30"
                  }`}
                />
              </button>
            ))}
          </div>
          <p className="pl-1.5 text-[11px] font-medium tracking-[0.22em] text-paper/70 tabular-nums">
            {String(active + 1).padStart(2, "0")} / {String(PHOTOS.length).padStart(2, "0")}
          </p>
        </div>

        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Önceki görsel"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink-strong/60 text-paper/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-200 hover:bg-ink-strong/90 hover:text-paper active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <svg width="10" height="10" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path
                d="M5 1L2 4l3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => goTo(active + 1)}
            disabled={active === PHOTOS.length - 1}
            aria-label="Sonraki görsel"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink-strong/60 text-paper/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm transition-all duration-200 hover:bg-ink-strong/90 hover:text-paper active:scale-95 disabled:pointer-events-none disabled:opacity-30"
          >
            <svg width="10" height="10" viewBox="0 0 8 8" fill="none" aria-hidden="true">
              <path
                d="M3 1l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
