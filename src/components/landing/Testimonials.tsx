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
    quote: "QR код генераторът на OtziviPro.bg е напълно безплатен и революционен – генерира за 30 секунди персонализирани QR за Google Maps директно на български! Преди средният ми рейтинг беше 4.1/5 с 150 ревюта и 200 посетителя седмично, а сега имам стотици положителни отзиви (рейтинг 4.8/5) и над 350 посетителя всяка седмица. Печатам бизнес карти на масите – клиенти сканират с ентусиазъм по време на вечеря, A5 плакатите на входа и в тоалетните удвояват ефекта!",
    author: "Иван М.",
    company: "Собственик на ресторант в София",
    image: testimonialIvan,
  },
  {
    quote: "QR код генераторът на OtziviPro.bg е фантастичен – безплатен, на български/английски и готов за 30 секунди! Преди средният ни рейтинг беше 4.3/5 с 200 ревюта и 80% запълненост, а сега получаваме десетки 5-звездни отзиви седмично (рейтинг 4.9/5) и над 95% запълненост. Печатаме A5 плакатите в стаите и на рецепцията – гостите сканират с възторг преди изезд, бизнес визитките оставяме в банята; клиентите са щастливи и пишат за чистотата и услугата ни!",
    author: "София Л.",
    company: "Мениджър на хотел в Варна",
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
