import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="border-t border-hairline bg-paper">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 md:py-32 lg:px-12">
        <h2 className="max-w-[18ch] font-display text-[clamp(2.1rem,4.5vw,3.75rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
          Birlikte değerlendirebileceğimiz bir konu mu var?
        </h2>
        <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted">
          İş birliği, tedarik ve diğer talepleriniz için ilgili ekibimize
          ulaşabilirsiniz.
        </p>
        <div className="mt-10">
          <Link href="/contact" className="btn-primary">
            İletişime Geçin
          </Link>
        </div>
      </div>
    </section>
  );
}
