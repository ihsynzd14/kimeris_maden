import Link from "next/link";

export default function Wordmark({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  const ink = tone === "ink" ? "var(--ink)" : "var(--paper)";
  const text = tone === "ink" ? "text-ink" : "text-paper";
  const accent = tone === "ink" ? "text-seam" : "text-seam-bright";

  return (
    <Link
      href="/"
      aria-label="KIMERIS MADEN — ana sayfa"
      className="inline-flex min-h-11 items-center gap-2.5"
    >
      <svg
        width="30"
        height="26"
        viewBox="0 0 30 26"
        aria-hidden="true"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M2 5.5C6.5 2.8 11 2.6 15 4.2s7.5 1.5 13-1.4"
          stroke={ink}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M2 13c5.5-2.4 10-2 14.5.5s8 1.3 11.5-1.7"
          stroke="var(--seam)"
          strokeWidth="2.8"
          strokeLinecap="round"
        />
        <path
          d="M2 20.5c6-1.7 10.5-.6 14.5 1.8s7.5.9 11.5-1.8"
          stroke={ink}
          strokeWidth="2.4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      <span
        className={`font-display text-[17px] font-extrabold leading-none tracking-[-0.02em] ${text}`}
      >
        KIMERIS <span className={accent}>MADEN</span>
      </span>
    </Link>
  );
}
