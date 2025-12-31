import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import FormSection from "@/components/landing/FormSection";
import Stats from "@/components/landing/Stats";
import Benefits from "@/components/landing/Benefits";
import KitVisualization from "@/components/landing/KitVisualization";
import FounderMessage from "@/components/landing/FounderMessage";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <KitVisualization />
      <Stats />
      <FormSection />
      <Benefits />
      <FounderMessage />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;