import Link from "next/link";

const PRINCIPLES = [
  {
    title: "Güvenlik önce gelir.",
    body: "Tüm süreçlerde iş sağlığı ve güvenliği temel ölçüttür.",
  },
  {
    title: "Ölçülebilir yaklaşım.",
    body: "Yaptığımız işi ölçümlerimizle ve sonuçlarımızla değerlendiririz.",
  },
  {
    title: "Sürekli gelişim.",
    body: "Ekip içi eğitim ve bilgi paylaşımı kültürümüzün parçasıdır.",
  },
];

export default function CareersTeaser() {
  return (
    <section className="border-t border-hairline bg-paper">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-6">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-ink">
            KIMERIS MADEN&rsquo;de Kariyer
          </h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
            Madencilik; jeoloji, mühendislik, saha operasyonları ve idari
            disiplinlerin birlikte çalıştığı bir alandır. Ekibimizde güvenli,
            düzenli ve ölçülebilir bir çalışma kültürü hedefliyoruz.
          </p>
          <p className="mt-4 max-w-[56ch] leading-relaxed text-muted">
            Açık pozisyonlar yayımlandığında bu alandan duyurulacaktır.
          </p>
          <div className="mt-9">
            <Link href="/careers" className="link-quiet">
              Kariyer sayfasına gidin
            </Link>
          </div>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-md border border-hairline bg-canvas p-8 md:p-10">
            <h3 className="font-display text-xl font-bold tracking-tight text-ink">
              Çalışma Yaklaşımımız
            </h3>
            <ul className="mt-7 space-y-6">
              {PRINCIPLES.map((principle) => (
                <li key={principle.title}>
                  <p className="font-display font-bold text-ink">
                    {principle.title}
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">
                    {principle.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
