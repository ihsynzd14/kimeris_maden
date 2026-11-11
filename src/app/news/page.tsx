import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "Haberler ve Duyurular",
  description:
    "KIMERIS MADEN'in kurumsal duyuruları ve proje haberleri.",
};

export default function NewsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="Haberler ve Duyurular"
          intro="Kurumsal duyurularımız ve proje haberlerimiz yayımlandıkça bu bölümde yer alacaktır."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
