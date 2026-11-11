import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "Kariyer",
  description:
    "KIMERIS MADEN'de çalışma kültürü, yaklaşımımız ve yayınlanacak açık pozisyonlar.",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="Kariyer"
          intro="Maden ve doğal kaynaklar alanında farklı disiplinlerde çalışan bir ekibiz. Çalışma yaklaşımımızı ve yayınlanacak açık pozisyonları bu bölümde bulabilirsiniz."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
