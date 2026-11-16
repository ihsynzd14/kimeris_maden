import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import NavLinks from "@/components/navigation/NavLinks";
import MobileNav, { type NavItem } from "@/components/navigation/MobileNav";

export const NAV_ITEMS: NavItem[] = [
  { href: "/about", label: "Kurumsal" },
  { href: "/activities", label: "Faaliyetlerimiz" },
  { href: "/sustainability", label: "Sürdürülebilirlik" },
  { href: "/careers", label: "Kariyer" },
  { href: "/news", label: "Haberler" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline/60 bg-paper/80 backdrop-blur-xl backdrop-saturate-150">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Wordmark />
        <NavLinks items={NAV_ITEMS} />
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-ink px-6 font-display text-[14px] font-bold text-paper transition-all duration-300 hover:bg-seam active:scale-[0.97]"
          >
            İletişim
          </Link>
        </div>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </header>
  );
}
