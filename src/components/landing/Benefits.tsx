const benefits = [
  {
    number: "01",
    title: "Премиум дизайн + QR",
    description: "Безплатните статични дизайни са адаптирани към визията OtziviPro и насочват вниманието директно към QR кода.",
  },
  {
    number: "02",
    title: "Мобилно friendly оформяне",
    description: "Формулярът Fluent Forms е оптимизиран за мобилни устройства, така че клиентите завършват отзива в 3 клика.",
  },
  {
    number: "03",
    title: "Готов за печат",
    description: "Готов PDF пакет: A5 плакат плюс A4 лист с 9 мини карти – изтегляте, принтирате и поставяте за минути.",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title">
            Създаден за български търговци
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Геотаргетирани ресурси, които говорят на клиентите от вашия квартал – независимо дали управлявате ресторант, студио за красота или бутик.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass-card p-6 flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge Number */}
              <div className="badge-number mb-4">
                {benefit.number}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;