import testimonialMaria from "@/assets/testimonial-maria.jpg";
import testimonialIvan from "@/assets/testimonial-ivan.jpg";
import testimonialSofia from "@/assets/testimonial-sofia.jpg";

const testimonials = [
  {
    quote: "Благодарение на otzivipro.bg успях да автоматизирам събирането на отзиви от клиентите си и значително да подобря онлайн репутацията си. Приложенията са лесни за интегриране, а използването на изкуствен интелект за отговаряне на отзивите ми спести ценно време. Сега сайтът ми се класира по-добре в търсачките, а продажбите ми се увеличиха с 25%.",
    author: "Мария Д.",
    company: "Онлайн магазин за мода",
    image: testimonialMaria,
  },
  {
    quote: "Като ресторантьор, получаването на положителни отзиви е от решаващо значение за привличането на клиенти. С otzivipro.bg успях да увелича броя на отзивите си и да ги споделям лесно в социалните мрежи. Тяхната система за събиране на отзиви е особено ефективна. Откакто използвам това решение, ресторантът ми се изкачи в онлайн класациите и забелязвам значително увеличение на броя на резервациите.",
    author: "Иван М.",
    company: "Ресторантьор",
    image: testimonialIvan,
  },
  {
    quote: "otzivipro.bg промени начина, по който управлявам отзивите на клиентите си. Персонализираните отговори с едно кликване ми позволиха да обединя ангажирана общност около моята коучинг дейност. Не само че отзивите ми са предимно положителни, но и моето класиране в търсачките се подобри, което ми донесе нови клиенти. Това е просто и ефективно решение, което горещо препоръчвам.",
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
