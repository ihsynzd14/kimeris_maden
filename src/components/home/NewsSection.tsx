import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="border-t border-hairline bg-canvas">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-28 lg:px-12">
        <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-ink">
          Haberler ve Duyurular
        </h2>
        <div className="mt-10 rounded-md border border-hairline bg-paper p-10 md:p-12">
          <p className="font-display text-xl font-bold text-ink">
            Şu anda yayınlanmış haber bulunmuyor.
          </p>
          <p className="mt-3 max-w-[56ch] leading-relaxed text-muted">
            Kurumsal duyurularımız ve proje haberlerimiz yayımlandıkça bu
            bölümde yer alacaktır. Bu zamana kadar bize doğrudan
            ulaşabilirsiniz.
          </p>
          <div className="mt-7">
            <Link href="/contact" className="link-quiet">
              İletişime geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
