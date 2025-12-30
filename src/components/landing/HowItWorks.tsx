const steps = [
  {
    number: "01",
    title: "Сканиране",
    description: "Поставете персонализирания A5 плакат с QR код на видно място. Клиентът сканира и попълва формата за отзив.",
  },
  {
    number: "02",
    title: "AI магия",
    description: "Workflow-ът засича език, проверява лимитите (2/ден) и генерира перфектен отговор с Claude 3.5 Sonnet.",
  },
  {
    number: "03",
    title: "Резултат",
    description: "Получавате двата PDF файла (A5 плакат и A4 лист с 9 карти), готови за печат и споделяне в Google Business Profile.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Три стъпки до повече 5★ отзива
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Изцяло автоматизирано чрез n8n + OpenRouter + PostgreSQL rate limiting. Без ръчни кръпки.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-6 min-h-[210px] flex flex-col animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step Number + Title */}
              <div className="text-primary font-bold text-lg mb-4">
                {step.number} · {step.title}
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm flex-grow">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;