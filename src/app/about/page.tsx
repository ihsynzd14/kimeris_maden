import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "KIMERIS MADEN'in kurumsal yapısı, çalışma alanları ve yaklaşımı hakkında bilgi alın.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="KIMERIS MADEN'i Tanıyın"
          intro="KIMERIS MADEN'in faaliyet alanlarını, çalışma yaklaşımını ve kurumsal yapısını bu bölümde bulabilirsiniz. Projelerimizle ilgili teknik ve güncel bilgilere ilgili sayfalardan ulaşabilirsiniz."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
