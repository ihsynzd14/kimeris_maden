import Link from "next/link";
import StrataField from "@/components/ui/StrataField";

export default function CompanyStatement() {
  return (
    <section className="border-t border-hairline bg-paper">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-24 md:py-28 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-7">
          <h2 className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold tracking-[-0.03em] text-ink">
            KIMERIS MADEN&rsquo;i Tanıyın
          </h2>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-muted">
            KIMERIS MADEN&rsquo;in faaliyet alanlarını, çalışma yaklaşımını ve
            kurumsal yapısını bu bölümde bulabilirsiniz. Projelerimizle ilgili
            teknik ve güncel bilgilere ilgili sayfalardan ulaşabilirsiniz.
          </p>
          <div className="mt-9">
            <Link href="/about" className="link-quiet">
              Kurumsal bilgileri görün
            </Link>
          </div>
        </div>
        <figure className="lg:col-span-5">
          <div className="h-64 overflow-hidden rounded-md border border-hairline bg-canvas md:h-80">
            <StrataField variant="core" className="h-full w-full" />
          </div>
          <figcaption className="mt-3 text-[13px] leading-snug text-muted">
            Temsili katman çizimi; jeolojik kesit yorumudur.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
