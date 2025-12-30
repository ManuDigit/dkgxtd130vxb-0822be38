const testimonials = [
  {
    quote: "Фризьорският ни салон събра 37 нови 5★ отзива за 12 дни. Клиентите обожават дизайна, а QR плаките изглеждат като premium реклама.",
    author: "Мария Георгиева",
    company: "Sofia Hair Lab",
  },
  {
    quote: "Внедрихме системата в три пекарни. A4 листът с 9 мини карти до касата ни донесе +62% повече запазвания в Google Maps.",
    author: "Кирил Стоянов",
    company: "Bread & Butter",
  },
  {
    quote: "Без CRM интеграция ни беше трудно да следим кампаниите. Сега всичко влиза в n8n и FluentCRM автоматично.",
    author: "Ивайло Димитров",
    company: "Gastro Group",
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
            Реални обратни връзки от салони, пекарни и студиа, които вече внедриха комплекта.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card pt-12 animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                „{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="text-sm">
                <span className="font-semibold text-foreground">
                  — {testimonial.author}
                </span>
                <span className="text-muted-foreground">
                  {" "}· {testimonial.company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;