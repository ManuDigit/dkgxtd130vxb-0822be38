const templates = [
  {
    image: "https://otzivipro.b-cdn.net/cards/template-a5-demo.png",
    label: "A5 плакат · готов за печат",
    alt: "A5 плакат шаблон",
  },
  {
    image: "https://otzivipro.b-cdn.net/cards/template-a4-demo.png",
    label: "A4 лист с 9 мини карти за изрязване",
    alt: "A4 лист с мини карти",
  },
];

const KitVisualization = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Визуализации на комплекта
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            В комплекта получавате два файла: A5 плакат и A4 лист с 9 мини карти за изрязване, както на тези примерни изображения.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {templates.map((template, index) => (
            <div
              key={index}
              className="glass-card p-4 sm:p-6 text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={template.image}
                alt={template.alt}
                className="w-full h-auto rounded-xl mb-4"
                loading="lazy"
              />
              <span className="text-sm text-muted-foreground">
                {template.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KitVisualization;