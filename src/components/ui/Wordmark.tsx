import Link from "next/link";
import Image from "next/image";

// Props type kept for API compatibility; the logo image works on both light and dark surfaces.
export default function Wordmark({
  className = "h-12 w-12 lg:h-14 lg:w-14",
}: {
  tone?: "ink" | "paper";
  className?: string;
}) {
  return (
    <Link href="/" aria-label="KIMERIS MADEN — ana sayfa" className="inline-flex items-center">
      <Image
        src="/logo.png"
        alt="KIMERIS MADEN"
        width={1536}
        height={1536}
        className={`shrink-0 ${className}`}
      />
    </Link>
  );
}
