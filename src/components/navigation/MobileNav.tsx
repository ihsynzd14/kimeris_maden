"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";

export type NavItem = { href: string; label: string };

export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const trigger = triggerRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button"
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger?.focus();
    };
  }, [open]);

  const panel = open ? (
    <div
      ref={panelRef}
      id="mobile-nav-panel"
      className="fixed inset-0 z-50 flex flex-col bg-paper/95 backdrop-blur-2xl motion-safe:animate-[fade-in_0.3s_ease-out]"
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <div onClick={() => setOpen(false)}>
          <Wordmark />
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={() => setOpen(false)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-hairline bg-paper px-3.5 text-ink transition-colors duration-200 hover:bg-canvas"
        >
          <span className="sr-only">Menüyü kapat</span>
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none">
            <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <nav
        aria-label="Mobil gezinme"
        className="mx-auto w-full max-w-7xl flex-1 overflow-y-auto px-6 pb-10 pt-4"
      >
        <ul className="divide-y divide-hairline/60 border-y border-hairline/60">
          {items.map((item, index) => (
            <li
              key={item.href}
              className="motion-safe:animate-[slide-up_0.4s_ease-out_both]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex min-h-14 items-center justify-between font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-seam"
              >
                {item.label}
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  aria-hidden="true"
                  fill="none"
                  className="text-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-seam"
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
            </li>
          ))}
          <li
            className="motion-safe:animate-[slide-up_0.4s_ease-out_both]"
            style={{ animationDelay: `${items.length * 60}ms` }}
          >
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="group flex min-h-14 items-center justify-between font-display text-2xl font-bold tracking-tight text-seam"
            >
              İletişim
              <svg
                width="18"
                height="12"
                viewBox="0 0 18 12"
                aria-hidden="true"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
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
          </li>
        </ul>
      </nav>
    </div>
  ) : null;

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-hairline bg-paper/60 px-3.5 text-ink backdrop-blur-sm transition-colors duration-200 hover:bg-canvas"
      >
        <span className="sr-only">Menüyü aç</span>
        <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" fill="none">
          <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </button>

      {open && createPortal(panel, document.body)}
    </div>
  );
}
