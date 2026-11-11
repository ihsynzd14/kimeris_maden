"use client";

import { useEffect, useRef, useState } from "react";
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

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen(true)}
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-hairline bg-paper px-3 text-ink"
      >
        <span className="sr-only">Menüyü aç</span>
        <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true" fill="none">
          <path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>

      {open && (
        <div
          ref={panelRef}
          id="mobile-nav-panel"
          className="fixed inset-0 z-50 flex flex-col bg-paper"
        >
          <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
            <div onClick={() => setOpen(false)}>
              <Wordmark />
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-hairline px-3 text-ink"
            >
              <span className="sr-only">Menüyü kapat</span>
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none">
                <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            </button>
          </div>
          <nav
            aria-label="Mobil gezinme"
            className="mx-auto w-full max-w-7xl flex-1 overflow-y-auto px-6 pb-10 pt-6"
          >
            <ul className="divide-y divide-hairline border-y border-hairline">
              {items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-14 items-center font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-seam"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="flex min-h-14 items-center font-display text-2xl font-bold tracking-tight text-seam"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}
