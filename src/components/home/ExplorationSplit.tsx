"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

const STEPS = [
  {
    index: "01",
    title: "Keşif",
    body: "Jeolojik haritalama ve yüzey gözlemleriyle başlayan süreç.",
  },
  {
    index: "02",
    title: "Analiz",
    body: "Numune çalışmaları ve laboratuvar bulgularının değerlendirilmesi.",
  },
  {
    index: "03",
    title: "Operasyon",
    body: "Onaylanmış planlara uygun yürütülen saha çalışmaları.",
  },
];

export default function ExplorationSplit() {
  const rootRef = useRef<HTMLElement>(null);

  useIsoLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(
          "[data-figure-wrap], [data-figure-img], [data-seam-rule], [data-gap-rule-top], [data-gap-rule-bottom], [data-line], [data-step]",
          { clearProps: "all" }
        );
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 74%", once: true },
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          "[data-figure-wrap]",
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 1.15, ease: "power4.out" },
          0
        )
          .fromTo(
            "[data-figure-img]",
            { scale: 1.16 },
            { scale: 1, duration: 1.6, ease: "power2.out" },
            0
          )
          .fromTo(
            "[data-seam-rule]",
            { scaleX: 0 },
            { scaleX: 1, duration: 0.9, ease: "power2.inOut" },
            0.25
          )
          .fromTo(
            "[data-gap-rule-top]",
            { scaleY: 0 },
            { scaleY: 1, duration: 1, ease: "power2.inOut" },
            0.3
          )
          .fromTo(
            "[data-gap-rule-bottom]",
            { scaleY: 0 },
            { scaleY: 1, duration: 0.7, ease: "power2.inOut" },
            0.45
          )
          .fromTo(
            "[data-line]",
            { yPercent: 115 },
            { yPercent: 0, duration: 0.9, stagger: 0.09 },
            0.3
          )
          .fromTo(
            "[data-step]",
            { autoAlpha: 0, x: -22 },
            { autoAlpha: 1, x: 0, duration: 0.75, stagger: 0.11 },
            0.55
          );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="border-t border-hairline bg-paper">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 py-24 md:py-28 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <figure className="min-w-0 lg:col-span-5">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute -right-5 -bottom-5 h-full w-full rounded-md border border-seam/35"
            />
            <div
              data-figure-wrap
              className="group relative z-10 aspect-[4/3] overflow-hidden rounded-md border border-hairline bg-canvas lg:aspect-[4/5]"
            >
              <span data-figure-img className="absolute inset-0 block">
                <Image
                  src="/mountain_peak.webp"
                  alt="Saha keşif çalışmalarında dağ zirvesi görünümü"
                  fill
                  draggable={false}
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="select-none object-cover transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                />
              </span>
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-strong/30 to-transparent"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-paper/70"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-paper/70"
              />
            </div>
          </div>
        </figure>

        <div
          aria-hidden="true"
          className="hidden items-stretch justify-center py-4 lg:col-span-1 lg:flex"
        >
          <div className="flex flex-col items-center gap-5">
            <span
              data-gap-rule-top
              className="block w-px flex-1 origin-top bg-hairline"
            />
            <span className="rotate-180 text-[11px] font-semibold tracking-[0.34em] text-soft [writing-mode:vertical-rl]">
              KEŞİF · ANALİZ · OPERASYON
            </span>
            <span
              data-gap-rule-bottom
              className="block h-10 w-px origin-bottom bg-seam"
            />
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <p className="flex items-center gap-3 text-[12px] font-semibold tracking-[0.28em] text-muted">
            <span aria-hidden="true" className="h-px w-8 bg-seam" />
            KEŞİF SÜRECİ
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.1rem,3.8vw,3.4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            <span className="block overflow-hidden pb-1">
              <span data-line className="block">
                Yer altını okuma
              </span>
            </span>
            <span className="block overflow-hidden pb-1">
              <span data-line className="block text-seam">
                disiplini.
              </span>
            </span>
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted">
            Jeolojik veri toplama, örnekleme ve analiz; saha operasyonlarının
            temelini oluşturur. Çalışmalarımızı bu sırayla yürütür, her aşamayı
            kayıt altına alırız.
          </p>

          <span
            data-seam-rule
            aria-hidden="true"
            className="mt-10 block h-px w-full origin-left bg-hairline"
          />

          <ul className="mt-2">
            {STEPS.map((step) => (
              <li
                key={step.index}
                data-step
                className="group border-b border-hairline transition-colors duration-300 last:border-b-0 hover:border-seam/40"
              >
                <div className="flex items-center gap-6 py-5">
                  <span className="w-12 shrink-0 font-display text-[2rem] font-extrabold leading-none tracking-[-0.02em] text-ink/10 transition-colors duration-300 group-hover:text-seam/50 tabular-nums">
                    {step.index}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink transition-colors duration-200 group-hover:text-seam">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Link href="/activities" className="link-row">
              Faaliyet detaylarını görün
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                aria-hidden="true"
                fill="none"
                className="shrink-0 text-seam transition-transform duration-200 group-hover:translate-x-1"
              >
                <path
                  d="M0 6h16M11 1l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
