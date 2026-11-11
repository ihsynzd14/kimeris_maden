import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import PageHero from "@/components/layout/PageHero";
import PendingNote from "@/components/layout/PendingNote";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "KIMERIS MADEN ile iş birliği, tedarik ve genel konular için iletişim kurun.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <PageHero
          title="İletişim"
          intro="İş birliği, tedarik ve diğer talepleriniz için ilgili ekibimize ulaşabilirsiniz."
        />
        <PendingNote />
      </main>
      <SiteFooter />
    </>
  );
}
