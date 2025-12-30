import Hero from "@/components/landing/Hero";
import FormSection from "@/components/landing/FormSection";
import Stats from "@/components/landing/Stats";
import Benefits from "@/components/landing/Benefits";
import KitVisualization from "@/components/landing/KitVisualization";
import HowItWorks from "@/components/landing/HowItWorks";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FormSection />
      <Stats />
      <Benefits />
      <KitVisualization />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;