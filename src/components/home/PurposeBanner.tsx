import Link from "next/link";
import Image from "next/image";

export default function PurposeBanner() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-ink-strong lg:pt-8">
      <svg
        viewBox="0 0 600 600"
        aria-hidden="true"
        fill="none"
        className="pointer-events-none absolute right-[10%] top-1/2 hidden h-[78%] w-[46%] -translate-y-1/2 lg:block"
      >
        <g stroke="var(--seam-bright)" strokeLinejoin="round">
          <path d="M300 40l180 150-90 330-240-90z" strokeWidth="1.4" opacity="0.45" />
          <path d="M355 10l185 165-70 345-250-70z" strokeWidth="1.6" opacity="0.65" />
        </g>
        <g stroke="var(--paper)" strokeWidth="1" opacity="0.1">
          <path d="M300 40l180 150-90 330-240-90z" />
        </g>
      </svg>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-16 md:py-20 lg:min-h-[420px] lg:flex-row lg:items-center lg:gap-0 lg:px-12 lg:py-0">
        <div className="relative z-10 lg:w-[46%] lg:py-16">
          <h2 className="font-display text-[clamp(1.6rem,2.6vw,2.4rem)] font-extrabold leading-[1.12] tracking-[-0.03em] text-paper">
            <span className="block">Daha parlak</span>
            <span className="block">yarınlar,</span>
            <span className="block">birlikte.</span>
          </h2>
          <p className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-soft">
            Doğal kaynakları sorumlu biçimde geliştirerek insanların yaşamlarına
            ve gelecek nesillere değer katıyoruz. Sahiplerimiz ve iş
            ortaklarımız, kaynakların potansiyelini birlikte gerçeğe
            dönüştürmemize güvenir.
          </p>
          <div className="mt-7">
            <Link
              href="/about"
              className="inline-flex min-h-11 items-center justify-center bg-seam px-5 py-2.5 font-display text-[14px] font-bold text-paper transition-colors duration-200 hover:bg-seam-deep active:bg-seam-deep"
            >
              Bizi tanıyın
            </Link>
          </div>
        </div>

        <div className="relative z-10 lg:absolute lg:inset-y-0 lg:right-0 lg:flex lg:w-[52%] lg:items-end lg:justify-end">
          <Image
            src="/minning_man.png"
            alt="Baretli maden çalışanı"
            width={1678}
            height={800}
            loading="eager"
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-auto w-full lg:h-full lg:w-auto lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}
