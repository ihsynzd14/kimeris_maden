"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function VideoBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useIsoLayoutEffect(() => {
    const section = sectionRef.current;
    const parallax = parallaxRef.current;
    const video = videoRef.current;
    if (!section || !parallax || !video) return undefined;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      video.classList.remove("opacity-0");
      return undefined;
    }

    const ctx = gsap.context(() => {
      // Entrance: video settles in — fade + gentle scale-down.
      gsap.timeline().fromTo(
        video,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.6, ease: "power3.out" }
      );

      const mm = gsap.matchMedia();

      // Scroll-out (tablet and desktop only; phones play full width at native
      // aspect): oversized layer drifts up slower, zooms faintly and dims
      // into ink-strong so the hero takes over.
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          parallax,
          { yPercent: -5, scale: 1, opacity: 1 },
          {
            yPercent: 5,
            scale: 1.12,
            opacity: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 80",
              end: "bottom 80",
              scrub: 0.6,
            },
          }
        );
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-hidden="true"
      className="relative h-[calc(100svh-5rem)] w-full overflow-hidden bg-ink-strong max-md:h-auto"
    >
      <div ref={parallaxRef} className="absolute -inset-[10%] max-md:static max-md:w-full">
        <video
          ref={videoRef}
          className="h-full w-full object-cover opacity-0 max-md:h-auto"
          src="/banner_video.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-strong" />
    </section>
  );
}
