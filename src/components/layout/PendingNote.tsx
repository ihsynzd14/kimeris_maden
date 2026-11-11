import Link from "next/link";

export default function PendingNote() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
        <div className="rounded-md border border-hairline bg-canvas p-8 md:p-10">
          <p className="font-display text-xl font-bold text-ink">
            Bu bölümün ayrıntılı içeriği hazırlanmaktadır.
          </p>
          <p className="mt-3 max-w-[56ch] leading-relaxed text-muted">
            Doğrulanmış bilgiler hazırlandıkça burada yayımlanacaktır.
            Sorularınız için bize doğrudan ulaşabilirsiniz.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="link-quiet">
              İletişime geçin
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
