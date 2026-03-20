import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/home/hero-section";
import AboutPreview from "@/components/home/about-preview";
import ProductsPreview from "@/components/home/products-preview";
import ResearchPreview from "@/components/home/research-preview";
import ActivitiesPreview from "@/components/home/activities-preview";
import CooperationPreview from "@/components/home/cooperation-preview";
import ContactPreview from "@/components/home/contact-preview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutPreview />
      <ProductsPreview />
      <ResearchPreview />
      <ActivitiesPreview />
      <CooperationPreview />
      <ContactPreview />
      <Footer />
    </main>
  );
}