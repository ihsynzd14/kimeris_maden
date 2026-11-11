import Link from "next/link";

const STAGES = [
  {
    title: "Arama",
    body: "Saha jeolojisi, jeokimya ve jeofizik çalışmalarla kaynak potansiyeli araştırılır; elde edilen veriler projelerin ileriki aşamalarının temelini oluşturur.",
  },
  {
    title: "Geliştirme",
    body: "Doğrulanan potansiyel, mühendislik çalışmaları ve çevresel değerlendirmelerle uygun bir proje kapsamına dönüştürülür.",
  },
  {
    title: "Üretim",
    body: "Yürütülen faaliyetler; iş sağlığı ve güvenliği, çevre yönetimi ve toplumla ilişkiler esaslarına göre planlanır ve izlenir.",
  },
];

export default function Activities() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-ink">
            Faaliyet Alanlarımız
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            Her projenin kendine özgü jeolojik, teknik ve çevresel koşulları
            vardır. Bu bölümde çalışmalarımızın kapsamını ve yayımlanmış proje
            bilgilerini bir arada sunuyoruz.
          </p>
        </div>
        <div className="mt-14 divide-y divide-hairline border-y border-hairline">
          {STAGES.map((stage) => (
            <div
              key={stage.title}
              className="grid gap-4 py-9 md:grid-cols-12 md:gap-8"
            >
              <h3 className="font-display text-2xl font-bold tracking-tight text-ink md:col-span-4">
                {stage.title}
              </h3>
              <p className="max-w-[58ch] leading-relaxed text-muted md:col-span-6">
                {stage.body}
              </p>
              <div className="md:col-span-2 md:text-right">
                <Link
                  href="/activities"
                  className="link-row group"
                  aria-label={`${stage.title} faaliyetini incele`}
                >
                  İncele
                  <svg
                    width="18"
                    height="12"
                    viewBox="0 0 18 12"
                    aria-hidden="true"
                    fill="none"
                  >
                    <path
                      d="M0 6h16M11 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-[58ch] text-[15px] leading-relaxed text-muted">
          Doğrulanmış proje bilgileri, ilgili sahalarda yayımlanmaya
          başlandıkça bu alanda listelenecektir.
        </p>
      </div>
    </section>
  );
}
