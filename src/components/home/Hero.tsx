import Link from "next/link";
import StrataField from "@/components/ui/StrataField";
import GeologyPlate from "@/components/ui/GeologyPlate";
import HeroQuickLinks from "@/components/home/HeroQuickLinks";

export default function Hero() {
  return (
    <section className="on-ink relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-ink-strong lg:min-h-[calc(50svh-5rem)]">
      <svg
        viewBox="0 0 720 720"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        fill="none"
        className="pointer-events-none absolute -right-32 top-[-6%] hidden h-[78%] w-[46%] min-w-[420px] overflow-hidden lg:block"
      >
        <g stroke="var(--paper)" strokeWidth="1" opacity="0.1">
          <path d="M0 720L720 0" />
          <path d="M-80 720L640 0" />
          <path d="M-160 720L560 0" />
          <path d="M-240 720L480 0" />
        </g>
        <path
          d="M300 300l100 100-100 100"
          stroke="var(--seam-bright)"
          strokeWidth="1.6"
          opacity="0.24"
        />
      </svg>

      <StrataField
        variant="field"
        tone="paper"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] w-full"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pb-12 pt-12 lg:px-12 lg:pb-20 lg:pt-24">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <h1 className="font-display text-[clamp(2.4rem,4.6vw,3.75rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-paper">
              <span className="block">Yer altındaki</span>
              <span className="block">
                <span className="bg-seam px-[0.14em] py-[0.06em] text-paper [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                  potansiyele
                </span>
              </span>
              <span className="block">yeni bir bakış.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-soft lg:mt-7">
              Maden ve doğal kaynaklar alanındaki çalışmalarımızı yakından tanıyın.
            </p>
            <div className="mt-8 lg:mt-9">
              <Link href="/activities" className="btn-inverse">
                Faaliyetlerimizi Keşfedin
              </Link>
            </div>
          </div>

          <figure className="min-w-0">
            <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-white/10 bg-ink lg:aspect-[4/3]">
              <GeologyPlate className="absolute inset-0 h-full w-full" />
              <div className="absolute bottom-4 left-4 flex gap-[3px]" aria-hidden="true">
                <span className="h-[3px] w-9 bg-paper/45" />
                <span className="h-[3px] w-9 bg-seam-bright" />
                <span className="h-[3px] w-9 bg-paper/45" />
                <span className="h-[3px] w-9 bg-paper/45" />
              </div>
            </div>
            <figcaption className="mt-2.5 text-[13px] leading-snug text-soft lg:mt-3">
              Temsili jeolojik kesit çizimi; ölçekli bir saha gösterimi değildir.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pb-8 lg:px-12 lg:pb-12">
        <HeroQuickLinks />
      </div>
    </section>
  );
}
