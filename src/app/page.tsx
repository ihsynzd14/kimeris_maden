import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/home/Hero";
import CompanyStatement from "@/components/home/CompanyStatement";
import Activities from "@/components/home/Activities";
import Responsibility from "@/components/home/Responsibility";
import CareersTeaser from "@/components/home/CareersTeaser";
import NewsSection from "@/components/home/NewsSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <CompanyStatement />
        <Activities />
        <Responsibility />
        <CareersTeaser />
        <NewsSection />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
