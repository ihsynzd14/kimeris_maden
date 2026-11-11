import Link from "next/link";

const TOPICS = [
  {
    href: "/sustainability",
    label: "İş Sağlığı ve Güvenliği",
    body: "Risk değerlendirmesi, eğitim ve bildirim ilkeleri.",
  },
  {
    href: "/sustainability",
    label: "Çevre ve Kaynak Yönetimi",
    body: "İzleme, ölçüm ve şeffaf raporlama yaklaşımı.",
  },
  {
    href: "/sustainability",
    label: "Toplum ve Paydaşlarla İlişkiler",
    body: "Yerel paydaşlarla iletişim ve geri bildirim kanalları.",
  },
];

export default function Responsibility() {
  return (
    <section className="on-ink bg-ink-strong">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-5">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-paper">
            Sorumlu Faaliyetler
          </h2>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-soft">
            İş sağlığı ve güvenliği, çevresel etkiler ve paydaşlarla iletişim,
            madencilik faaliyetlerinin temel değerlendirme alanlarıdır. Bu
            sayfada KIMERIS MADEN&rsquo;in onaylanmış uygulamalarına ve ilgili
            belgelere yer verilecektir.
          </p>
        </div>
        <ul className="border-y border-white/10 lg:col-span-7">
          {TOPICS.map((topic) => (
            <li key={topic.label} className="border-b border-white/10 last:border-b-0">
              <Link
                href={topic.href}
                className="group flex min-h-14 items-center justify-between gap-6 py-6"
              >
                <span>
                  <span className="font-display text-xl font-bold text-paper transition-colors duration-200 group-hover:text-seam-bright">
                    {topic.label}
                  </span>
                  <span className="mt-1 block text-[15px] leading-relaxed text-soft">
                    {topic.body}
                  </span>
                </span>
                <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  aria-hidden="true"
                  fill="none"
                  className="shrink-0 text-seam-bright transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M0 6h16M11 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
