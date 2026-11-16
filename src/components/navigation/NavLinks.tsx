"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/components/navigation/MobileNav";

export default function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Site içi gezinme" className="hidden items-center gap-1 lg:flex">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`group relative inline-flex min-h-11 items-center rounded-md px-3.5 text-[14px] font-medium transition-colors duration-200 ${
              active ? "text-seam" : "text-ink hover:text-seam"
            }`}
          >
            {item.label}
            <span
              className={`absolute inset-x-3.5 -bottom-px h-[2px] origin-left bg-seam transition-transform duration-300 ease-out ${
                active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
