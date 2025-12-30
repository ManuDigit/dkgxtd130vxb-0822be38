import { Button } from "@/components/ui/button";

interface HeroProps {
  formEmbedUrl?: string;
}

const Hero = ({ formEmbedUrl }: HeroProps) => {
  return (
    <section id="qr-demo-form" className="hero-gradient min-h-screen flex items-center py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Увеличете безплатно броя на вашите отзиви в Google Maps
            </h1>
            <h2 className="text-lg sm:text-xl text-muted-foreground mb-8">
              Генерирайте персонализирани QR кодове за 30 секунди
            </h2>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Безплатно завинаги
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Без ангажимент
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                14-дневен тест
              </span>
            </div>

            {/* Video Section */}
            <div className="relative rounded-xl overflow-hidden glow-emerald mb-8 aspect-video bg-muted">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
                src="https://vz-e8c49872-87b.b-cdn.net/5fc0819b-d913-4ce2-8882-f4c59e8d2050/play_720p.mp4"
              />
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="animate-fade-up-delay-1">
            <div className="bg-card rounded-2xl p-6 sm:p-8 border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Получете вашия безплатен QR Kit
              </h3>
              
              {formEmbedUrl ? (
                <iframe
                  src={formEmbedUrl}
                  className="w-full min-h-[400px] border-0"
                  title="OtziviPro Form"
                />
              ) : (
                /* Placeholder form until real URL is provided */
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Име на бизнеса
                    </label>
                    <input
                      type="text"
                      placeholder="Въведете име..."
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Google Maps линк
                    </label>
                    <input
                      type="url"
                      placeholder="https://maps.google.com/..."
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">
                      Имейл
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <Button className="w-full py-6 text-lg font-semibold mt-4">
                    ПОЛУЧЕТЕ МОЯ КИТ QR (PDF)
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
