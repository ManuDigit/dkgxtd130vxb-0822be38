import Hero from "@/components/landing/Hero";
import Stats from "@/components/landing/Stats";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

const Index = () => {
  // Replace with your FluentForms embed URL when ready
  const formEmbedUrl = "https://otzivipro.bg/fr/test-qr/";

  return (
    <div className="min-h-screen bg-background">
      <Hero formEmbedUrl={formEmbedUrl} />
      <Stats />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
