import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import ConservationSection from "@/components/ConservationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <VisitSection />
      <ConservationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
