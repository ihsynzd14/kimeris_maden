import Link from "next/link";
import Wordmark from "@/components/ui/Wordmark";
import { NAV_ITEMS } from "@/components/layout/SiteHeader";

const FOOTER_LINKS = [...NAV_ITEMS, { href: "/contact", label: "İletişim" }];

export default function SiteFooter() {
  return (
    <footer className="on-ink bg-ink-strong">
      <div className="mx-auto w-full max-w-7xl px-6 pb-10 pt-16 lg:px-12">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Wordmark tone="paper" />
            <p className="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-soft">
              Maden ve doğal kaynaklar alanında, doğrulanabilir bilgiye dayalı
              bir kurumsal iletişim yaklaşımı.
            </p>
          </div>
          <nav aria-label="Alt bilgilerde site gezinmesi" className="md:col-span-4">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-soft">
              Site
            </h2>
            <ul className="mt-4 flex flex-col">
              {FOOTER_LINKS.map((item) => (
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
          </nav>
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-soft">
              Yasal
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-soft">
              Gizlilik, çerez ve kullanım koşulları sayfaları hukuki inceleme
              sonrasında yayımlanacaktır.
            </p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-[13px] text-soft md:flex-row md:items-center md:justify-between">
          <p>© 2026 KIMERIS MADEN</p>
          <p>Bu site bir konsept çalışmasıdır; içerikler temsilidir.</p>
        </div>
      </div>
    </footer>
  );
}
