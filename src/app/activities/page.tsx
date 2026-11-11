import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "Faaliyetlerimiz",
  description:
    "KIMERIS MADEN'in doğrulanmış maden ve proje faaliyetlerini keşfedin.",
};

export default function ActivitiesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="Faaliyetlerimiz"
          intro="Her projenin kendine özgü jeolojik, teknik ve çevresel koşulları vardır. Bu bölümde çalışmalarımızın kapsamını ve yayımlanmış proje bilgilerini bir arada sunuyoruz."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
