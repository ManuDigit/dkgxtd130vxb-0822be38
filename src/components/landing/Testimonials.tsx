import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialIvan from "@/assets/testimonial-ivan.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

const testimonials = [
  {
    quote: "За да събера повече ревюта, слагам A5 QR плакатите директно на огледалата – клиентките ги сканират веднага след подстригване, докато са щастливи от прическата! Раздавам визитки с QR на излизане с дума \"Сподели впечатлението си\". От 4.2/5 скочих на 4.8/5 с десетки 5-звездни всяка седмица – всичко безплатно за 30 секунди!",
    author: "Мария Д.",
    company: "Мениджър на фризьорски салон в Пловдив",
    image: testimonialMaria,
  },
  {
    quote: "Моят трик: QR бизнес карти на всяка маса, за да сканират гостите по време на вечеря или сметка, плюс A5 плакати на входа и в тоалетните за напомняне. Клиентите оставят ревюта на момента! От 4.1/5 и 200 посетителя седмично – сега 4.8/5 с 350+ гости. Безплатният генератор промени всичко!",
    author: "Иван М.",
    company: "Собственик на ресторант в София",
    image: testimonialIvan,
  },
  {
    quote: "Поставям A5 QR плакати в стаите и на рецепцията – гостите сканират преди изезд, все още впечатлени от престоя. Визитки в банята с \"Оцени ни в Google\"! Резултат: от 80% запълненост на 4.3/5 стигнахме 95% с 4.9/5 и ежедневни ревюта. Лесен и безплатен начин за растеж!",
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
