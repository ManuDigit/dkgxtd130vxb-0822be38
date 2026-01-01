import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialIvan from "@/assets/testimonial-ivan.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

const testimonials = [
  {
    quote: "QR код генераторът на OtziviPro.bg е невероятен – супер бърз (30 секунди), на български и безплатен завинаги! Преди използването средният ми рейтинг беше 4.2/5, а сега получавам десетки нови 5-звездни ревюта всяка седмица. Печатам A5 плакатите на огледалата – клиентките са възхитени, сканират веднага след подстригване и пишат ентусиазирано за услугите ни, визитките раздавам с усмивка на излизане!",
    author: "Мария Д.",
    company: "Мениджър на фризьорски салон в Пловдив",
    image: testimonialMaria,
  },
  {
    quote: "Този безплатен QR код генератор е супер лесен и безплатен! Печатам QR кодове на бизнес карти и поставям на всяка маса в ресторанта. Гости сканират по време на сметката за бързи Google Maps ревюта. Също А5 плакати на входа; получих десетки 5-звездни отзиви седмично, без ангажимент!",
    author: "Иван М.",
    company: "Ресторантьор",
    image: testimonialIvan,
  },
  {
    quote: "Най-добрият безплатен инструмент за мене е този QR код генератор! Използвам QR визитките на семинарите и участниците сканират в края за Google ревюта. Плюс А5 плакати в чакалнята. Динамичните линкове водят точно към моя профил; сега имам 100+ ревюта и повече клиенти, всичко безплатно!",
    author: "София Л.",
    company: "Треньор по личностно развитие",
    image: testimonialSofia,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Истински резултати от OtziviPro
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Реални обратни връзки от бизнеси, които вече внедриха решението.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Author Avatar & Info */}
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.author} - ${testimonial.company}`}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-foreground/90 leading-relaxed text-sm">
                „{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
