import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/home/Hero";
import VideoBanner from "@/components/home/VideoBanner";
import CompanyStatement from "@/components/home/CompanyStatement";
import ExplorationSplit from "@/components/home/ExplorationSplit";
import PurposeBanner from "@/components/home/PurposeBanner";
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
        <VideoBanner />
        <CompanyStatement />
        <ExplorationSplit />
        <PurposeBanner />
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
