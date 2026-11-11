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
    <ul className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-1 lg:mx-0 lg:grid lg:grid-cols-5 lg:gap-4 lg:overflow-visible lg:px-0 lg:pb-0">
      {QUICK_LINKS.map((link) => (
        <li key={link.href} className="w-[210px] shrink-0 snap-start lg:w-auto">
          <Link
            href={link.href}
            className="group flex min-h-[104px] flex-col justify-between rounded-md bg-paper p-5 transition-colors duration-200 hover:bg-canvas"
          >
            <span className="text-muted transition-colors duration-200 group-hover:text-seam">
              {link.icon}
            </span>
            <span className="mt-6 flex items-center gap-2.5 font-display text-[15px] font-bold leading-tight text-ink transition-colors duration-200 group-hover:text-seam lg:text-[16px]">
              {link.label}
              <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center bg-seam text-paper">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  aria-hidden="true"
                  fill="none"
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
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
