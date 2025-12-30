import { Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[95vh] flex items-center py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[55fr_45fr] gap-8 lg:gap-12 items-center">
          {/* Left Column - Video */}
          <div className="animate-fade-up order-2 lg:order-1">
            <div className="relative rounded-[32px] overflow-hidden glow-video">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:min-h-[500px]"
                src="https://vz-e8c49872-87b.b-cdn.net/5fc0819b-d913-4ce2-8882-f4c59e8d2050/play_720p.mp4?v=2"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-up-delay-1 order-1 lg:order-2">
            <div className="glass-card-hero p-6 sm:p-8 lg:p-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/30 mb-6">
                <span className="text-sm font-medium text-foreground">OtziviPro Kit</span>
                <span className="px-2 py-0.5 rounded bg-secondary text-secondary-foreground text-xs font-bold">
                  BG
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 text-foreground">
                Увеличете броя на Google Maps отзивите без да харчите лев.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                Генерирайте два персонализирани шаблона – A5 плакат и A4 лист с 9 мини карти – за 30 секунди. Безплатно завинаги, без договори и без кредитна карта.
              </p>

              {/* 2 Checkmarks */}
              <div className="flex flex-wrap gap-8 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium text-foreground">Безплатно завинаги</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-base font-medium text-foreground">14-дневен тест</span>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#qr-demo-form"
                className="btn-cta inline-block text-center w-full sm:w-auto text-lg"
              >
                Генерирайте вашия Kit
              </a>

              {/* Anchor link text */}
              <p className="mt-6 text-sm text-muted-foreground text-center sm:text-left">
                Безплатно завинаги · Без ангажимент
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;