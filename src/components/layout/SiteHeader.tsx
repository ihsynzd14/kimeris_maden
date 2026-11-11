import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
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
    <header className="sticky top-0 z-40 border-b border-hairline bg-paper">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-6 px-6 lg:px-12">
        <Wordmark />
        <nav
          aria-label="Site içi gezinme"
          className="hidden items-center gap-7 lg:flex"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center text-[15px] font-medium text-ink underline-offset-[6px] transition-colors duration-200 hover:text-seam"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            İletişim
          </Link>
        </div>
        <MobileNav items={NAV_ITEMS} />
      </div>
    </header>
  );
}
