import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import CareerTimeline from "@/components/CareerTimeline";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ValueProps />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <CareerTimeline />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
