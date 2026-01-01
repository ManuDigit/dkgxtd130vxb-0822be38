import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialIvan from "@/assets/testimonial-ivan.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

const testimonials = [
  {
    quote: "Като собственичка на онлайн магазин за мода, бях изненадана колко лесно е да генерирам QR кодове за A5 плакати и визитки директно към Google отзиви. Безплатно, без регистрация, на български – само въведох данните и изтеглих в секунди! Сега клиентите ми сканират и оставят ревюта лесно, продажбите скочиха с 20%.",
    author: "Мария Д.",
    company: "Онлайн магазин за мода",
    image: testimonialMaria,
  },
  {
    quote: "За моя ресторант QR генераторът на OtziviPro е спасение! Направих бизнес картички с линк към Google Maps ревюта за масите – клиенти сканират и пишат веднага. Полностью безплатен, PNG в високо качество, на български и английски. Получих 50+ нови ревюта за седмица, без да харча нищо!",
    author: "Иван М.",
    company: "Ресторантьор",
    image: testimonialIvan,
  },
  {
    quote: "Като треньор, използвам QR кодовете за плакати на семинарите си – директно към Google отзиви. 30 секунди за генериране, персонализирани формати, без ангажимент. Идеално за мен, сега имам стотици положителни ревюта и повече записии. Благодарение на OtziviPro.bg!",
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
