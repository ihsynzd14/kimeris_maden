import type { ReactNode } from "react";
import Link from "next/link";

const ICON_CLASS = "h-6 w-6";

function CompassIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.2 8.8l-2 4.4-4.4 2 2-4.4 4.4-2z" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
    >
      <path d="M19 4.5C19 12 14.5 16 8 16H5c0-8 4.5-12 11-12h3z" />
      <path d="M5 20c1.8-6 5.8-9.5 11-11" />
    </svg>
  );
}

function NewsIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
    >
      <rect x="3.5" y="5" width="17" height="14" rx="1.5" />
      <path d="M7 9.5h6M7 13.5h10M7 16h7" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
    >
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 18.5c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
      <path d="M16.2 6.4a3 3 0 0 1 0 5.2" />
      <path d="M17.4 13.6c2 .8 3.1 2.6 3.1 4.9" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={ICON_CLASS}
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="M3.8 7.5L12 13.2l8.2-5.7" />
    </svg>
  );
}

const QUICK_LINKS: { href: string; label: string; icon: ReactNode }[] = [
  { href: "/about", label: "Bir Bakışta", icon: <CompassIcon /> },
  { href: "/sustainability", label: "Sürdürülebilirlik", icon: <LeafIcon /> },
  { href: "/news", label: "Haberler", icon: <NewsIcon /> },
  { href: "/careers", label: "Kariyer", icon: <PeopleIcon /> },
  { href: "/contact", label: "İletişim", icon: <MailIcon /> },
];

export default function HeroQuickLinks() {
  return (
    <ul className="no-scrollbar -mx-6 flex snap-x snap-proximity gap-3 overflow-x-auto overscroll-x-contain px-6 pb-1 max-lg:[mask-image:linear-gradient(to_right,transparent,black_28px,black_calc(100%-28px),transparent)] lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
      {QUICK_LINKS.map((link, index) => (
        <li key={link.href} className="w-[216px] shrink-0 snap-start lg:w-auto">
          <Link
            href={link.href}
            className="group flex min-h-[116px] flex-col justify-between rounded-lg bg-paper p-5 transition-[transform,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:bg-canvas hover:shadow-[0_18px_36px_-18px_rgba(23,19,16,0.55)] active:scale-[0.98] active:transition-transform active:duration-150 lg:min-h-[124px]"
          >
            <div className="flex items-start justify-between">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-canvas text-muted transition-colors duration-300 group-hover:bg-seam group-hover:text-paper">
                {link.icon}
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] text-soft/70" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <span className="mt-6 flex items-center gap-2 font-display text-[15px] font-bold leading-tight text-ink transition-colors duration-300 group-hover:text-seam lg:text-[16px]">
              {link.label}
              <svg
                width="9"
                height="9"
                viewBox="0 0 8 8"
                aria-hidden="true"
                fill="none"
                className="shrink-0 text-seam transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <path
                  d="M3 1l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
