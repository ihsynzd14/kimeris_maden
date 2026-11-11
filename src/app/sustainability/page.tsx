import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "Sorumlu Faaliyetler",
  description:
    "İş güvenliği, çevre ve paydaş ilişkilerine yönelik yayımlanmış politikalarımızı inceleyin.",
};

export default function SustainabilityPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="Sorumlu Faaliyetler"
          intro="İş sağlığı ve güvenliği, çevresel etkiler ve paydaşlarla iletişim, madencilik faaliyetlerinin temel değerlendirme alanlarıdır. Bu sayfada KIMERIS MADEN'in onaylanmış uygulamalarına ve ilgili belgelere yer verilecektir."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
