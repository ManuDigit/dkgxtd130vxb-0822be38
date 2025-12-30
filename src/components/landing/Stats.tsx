const stats = [
  {
    value: "+2 400",
    label: "Сканирания през последните 30 дни",
  },
  {
    value: "94%",
    label: "По-висок шанс за 5★ отзив в рамките на 48 часа",
  },
  {
    value: "0 лв",
    label: "Инвестиция – получавате готови A5 + A4 PDF файлове",
  },
  {
    value: "3 езика",
    label: "BG · EN · FR за международни клиенти",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card min-h-[140px] flex flex-col justify-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;