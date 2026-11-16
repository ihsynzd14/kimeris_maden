import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { NAV_ITEMS } from "@/components/layout/SiteHeader";

const LINK_COLUMNS = [
  [...NAV_ITEMS.slice(0, 3), { href: "/contact", label: "İletişim" }],
  NAV_ITEMS.slice(3),
];

const LEGAL_ITEMS = ["Gizlilik", "Çerez Politikası", "Kullanım Koşulları", "Erişilebilirlik", "Site Haritası"];

const SOCIALS = [
  {
    label: "LinkedIn",
    path: "M6.5 9.5v8M6.5 6.2v.1M11 17.5v-4.7c0-1.6 1-2.8 2.7-2.8s2.8 1.2 2.8 2.8v4.7",
  },
  {
    label: "YouTube",
    path: "M4.5 7.5h11c1 0 1.8.8 1.8 1.8v5.4c0 1-.8 1.8-1.8 1.8h-11c-1 0-1.8-.8-1.8-1.8V9.3c0-1 .8-1.8 1.8-1.8zM10.2 10.2l3.4 1.8-3.4 1.8z",
  },
  {
    label: "X",
    path: "M5 5l10 10M15 5L5 15",
  },
  {
    label: "Instagram",
    path: "M7 4.5h6A2.5 2.5 0 0 1 15.5 7v6a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 13V7A2.5 2.5 0 0 1 7 4.5zM10 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM13.2 6.8v.1",
  },
  {
    label: "TikTok",
    path: "M12.5 5v7.2a2.6 2.6 0 1 1-2.6-2.6M12.5 5c.3 1.9 1.6 3.1 3.5 3.4",
  },
];

function ArrowChip() {
  return (
    <span className="inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center bg-seam text-paper">
      <svg width="8" height="8" viewBox="0 0 8 8" aria-hidden="true" fill="none">
        <path
          d="M3 1l3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SiteFooter() {
  return (
    <footer className="on-ink bg-ink-strong">
      <div className="mx-auto w-full max-w-7xl px-6 pb-8 pt-16 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <Wordmark
              tone="paper"
              className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24"
            />
          </div>

          <nav aria-label="Alt bilgilerde site gezinmesi" className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-x-8">
              {LINK_COLUMNS.map((column, index) => (
                <ul key={index} className="flex flex-col">
                  {column.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="flex min-h-11 items-center text-[15px] font-medium text-paper underline-offset-[6px] transition-colors duration-200 hover:text-seam-bright"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-soft">
              Sürdürülebilirlik
            </p>
            <p className="mt-4 text-[13px] leading-relaxed text-soft">
              Doğal kaynakları gelecek nesiller için sorumlu biçimde yönetiyor;
              çevresel, sosyal ve yönetişim alanlarındaki taahhütlerimizi şeffaf
              biçimde paylaşıyoruz.
            </p>
            <Link
              href="/sustainability"
              className="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-paper underline-offset-[6px] transition-colors duration-200 hover:text-seam-bright"
            >
              Yaklaşımımızı görün
              <ArrowChip />
            </Link>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-soft">
              Beyanlar
            </p>
            <Link
              href="/about"
              className="mt-3 inline-flex min-h-11 items-center gap-2 text-[14px] font-medium text-paper underline-offset-[6px] transition-colors duration-200 hover:text-seam-bright"
            >
              Modern Kölelik Beyanı
              <ArrowChip />
            </Link>

            <ul className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href="#"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-seam text-paper transition-colors duration-200 hover:bg-seam-deep active:bg-seam-deep"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true" fill="none">
                      <path
                        d={social.path}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <address className="mt-8 text-[13px] not-italic leading-relaxed text-soft">
              Maslak Mah. Büyükdere Cd. No: 255
              <br />
              Sarıyer / İstanbul
              <br />
              <a
                href="tel:+902120000000"
                className="underline-offset-[6px] transition-colors duration-200 hover:text-paper"
              >
                +90 212 000 00 00
              </a>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-7 text-[13px] text-soft md:flex-row md:items-center md:justify-between">
          <p>© 2026 KIMERIS MADEN</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL_ITEMS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
