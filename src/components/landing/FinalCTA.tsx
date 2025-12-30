import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("qr-demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 animate-fade-up">
          Готови ли сте да изпратите първия си KIT QR?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-up-delay-1">
          Получете безплатно персонализиран QR код и увеличете отзивите си в Google Maps още днес.
        </p>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="px-8 py-6 text-lg font-semibold animate-fade-up-delay-2 glow-emerald"
        >
          Стартирайте демото
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
