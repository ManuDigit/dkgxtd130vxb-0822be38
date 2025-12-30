const FormSection = () => {
  return (
    <section id="qr-demo-form" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-4 sm:p-6 overflow-hidden">
          {/* Title */}
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 text-center">
            Стартирайте демото и получете A5 + A4 PDF
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-6">
            Попълнете 3 полета и до 30 секунди изпращаме комплекта на имейла ви.
          </p>

          {/* Embedded iframe from otzivipro.bg */}
          <div className="w-full rounded-xl overflow-hidden">
            <iframe
              src="https://otzivipro.bg/qr-generator/"
              className="w-full min-h-[600px] border-0"
              title="OtziviPro QR Demo Form"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;