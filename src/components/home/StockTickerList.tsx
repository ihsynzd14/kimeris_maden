"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// useLayoutEffect warns during SSR; fall back to useEffect on the server.
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export type StockRow = {
  id: string;
  exchange: string;
  symbol: string;
  price: string;
  movement: string;
  percent: string;
  down: boolean;
  date: string;
};

export default function StockTickerList({ rows }: { rows: StockRow[] }) {
  const listRef = useRef<HTMLUListElement>(null);

  useIsoLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return undefined;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>("li", list);
      if (!items.length) return;

      gsap.from(items, {
        opacity: 0,
        y: 14,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: list,
          start: "top 88%",
          once: true,
        },
      });
    }, list);

    return () => ctx.revert();
  }, [rows]);

  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-10 lg:px-12">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-soft">
        Borsa Verileri
      </p>
      <ul ref={listRef} className="mt-3 divide-y divide-hairline border-y border-hairline">
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex flex-wrap items-baseline gap-x-5 gap-y-1 py-3 text-[13px] sm:text-sm"
          >
            <span className="w-12 font-display font-bold text-ink">{row.exchange}</span>
            <span className="text-soft">{row.symbol}</span>
            <span className="font-semibold tabular-nums text-ink">{row.price}</span>
            <span className={`font-medium tabular-nums ${row.down ? "text-seam" : "text-ink"}`}>
              <span aria-hidden="true">{row.down ? "▼" : "▲"}</span> {row.movement} · {row.percent}
            </span>
            <span className="ml-auto tabular-nums text-muted">{row.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
