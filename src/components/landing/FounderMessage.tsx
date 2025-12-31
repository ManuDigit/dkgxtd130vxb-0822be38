import { useState, useRef } from "react";
import { CheckCircle, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { text: "88% от клиентите", highlight: "четат отзиви преди покупка" },
  { text: "3 секунди", highlight: "за създаване на персонализиран QR код" },
  { text: "1 клик", highlight: "за клиентите да оставят отзив" },
  { text: "100% безплатно", highlight: "– без скрити такси" },
];

const FounderMessage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsMuted((prev) => {
      const next = !prev;
      video.muted = next;

      if (!next) {
        // Ensure audible playback once user explicitly interacts.
        video.volume = 1;
        void video.play().catch(() => {});
      }

      return next;
    });
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("qr-demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Video Column - Left */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-1">
            <div
              className="relative w-full max-w-[280px] md:max-w-[320px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20 group cursor-pointer"
              onClick={toggleMute}
            >
              <video
                ref={videoRef}
                src="https://vz-e8c49872-87b.b-cdn.net/59c8d15f-bfe6-4a00-80f2-ee5edf94ca56/play_720p.mp4"
                autoPlay
                loop
                muted={isMuted}
                playsInline
                preload="metadata"
                className="w-full h-full object-cover"
                aria-label="Видео съобщение от основателя на OtziviPro"
              />
              {/* Sound toggle button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                className="absolute bottom-4 right-4 p-3 bg-background/80 backdrop-blur-sm rounded-full shadow-lg transition-all hover:bg-background hover:scale-110"
                aria-label={isMuted ? "Включи звука" : "Изключи звука"}
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-foreground" />
                ) : (
                  <Volume2 className="w-5 h-5 text-primary" />
                )}
              </button>
              {/* Decorative elements */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl -z-10 blur-xl" />
            </div>
          </div>

          {/* Text Column - Right */}
          <div className="order-2 lg:order-2 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              Защо собствениците на бизнес ни избират?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Безплатно решение за повече Google отзиви
            </p>

            {/* Benefits List */}
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-left"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">
                    <strong className="text-primary">{benefit.text}</strong>{" "}
                    {benefit.highlight}
                  </span>
                </li>
              ))}
            </ul>

            {/* Conclusion Text */}
            <p className="text-lg font-medium text-foreground mb-6">
              Спрете да губите клиенти. Започнете да събирате отзиви още днес.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Създай безплатен QR код →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
