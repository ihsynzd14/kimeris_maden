import Link from "next/link";
import StrataField from "@/components/ui/StrataField";
import HeroQuickLinks from "@/components/home/HeroQuickLinks";
import HeroPhotoCarousel from "@/components/home/HeroPhotoCarousel";
import StrokeText from "@/components/ui/StrokeText";

export default function Hero() {
  return (
    <section className="on-ink relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-ink-strong max-md:min-h-[calc(100dvh-5rem)]">
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
            <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold tracking-[0.28em] text-paper/60 lg:mb-7">
              <span aria-hidden="true" className="h-px w-8 bg-seam-bright" />
              KIMERIS MADEN — DOĞAL KAYNAKLAR
            </p>
            <h1 className="font-display font-extrabold text-paper [&_.stroke-text__svg]:ml-0!">
              <StrokeText
                text="Yer altındaki"
                fontSize={64}
                fontWeight={800}
                letterSpacing={-2}
                strokeWidth={1.5}
                strokeColor="#c87f7b"
                fillColor="#fdfbf7"
                drawDuration={1.4}
                stagger={0.045}
                fillDelay={0.15}
                trigger="scroll"
              />
              <span className="block">
                <StrokeText
                  text="potansiyele"
                  fontSize={64}
                  fontWeight={800}
                  letterSpacing={-2}
                  strokeWidth={1.5}
                  strokeColor="#c87f7b"
                  fillColor="#c87f7b"
                  drawDuration={1.4}
                  stagger={0.045}
                  fillDelay={0.15}
                  trigger="scroll"
                />
              </span>
              <span className="block">
                <StrokeText
                  text="yeni bir bakış."
                  fontSize={64}
                  fontWeight={800}
                  letterSpacing={-2}
                  strokeWidth={1.5}
                  strokeColor="#c87f7b"
                  fillColor="#fdfbf7"
                  drawDuration={1.4}
                  stagger={0.045}
                  fillDelay={0.15}
                  trigger="scroll"
                />
              </span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-soft lg:mt-7">
              Maden ve doğal kaynaklar alanındaki çalışmalarımızı yakından tanıyın.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4 lg:mt-9">
              <Link href="/activities" className="btn-inverse">
                Faaliyetlerimizi Keşfedin
              </Link>
              <Link
                href="/about"
                className="inline-flex min-h-11 items-center font-medium text-paper underline decoration-seam-bright decoration-2 underline-offset-[7px] transition-colors duration-200 hover:text-seam-bright active:text-paper"
              >
                Kurumsal
              </Link>
            </div>
          </div>

          <figure className="min-w-0">
            <HeroPhotoCarousel />
          </figure>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-12">
        <HeroQuickLinks />
        <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pb-6 pt-1 lg:mt-8 lg:pb-8">
          <p className="text-[12px] font-medium tracking-[0.18em] text-soft">
            SARIYER / İSTANBUL
          </p>
          <a
            href="#kesif"
            className="group inline-flex min-h-11 items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] text-paper/70 transition-colors duration-200 hover:text-paper active:text-seam-bright"
          >
            Keşfedin
            <svg
              width="10"
              height="12"
              viewBox="0 0 10 12"
              aria-hidden="true"
              fill="none"
              className="cue-nudge text-seam-bright transition-colors duration-200 group-hover:text-paper"
            >
              <path
                d="M5 1v9m0 0L1.5 6.5M5 10l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
