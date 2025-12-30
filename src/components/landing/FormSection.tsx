import { Button } from "@/components/ui/button";

const FormSection = () => {
  return (
    <section id="qr-demo-form" className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="glass-card p-6 sm:p-8">
          {/* Title */}
          <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3 text-center">
            Стартирайте демото и получете A5 + A4 PDF
          </p>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8">
            Попълнете 3 полета и до 30 секунди изпращаме комплекта на имейла ви.
          </p>

          {/* Form placeholder - Replace with FluentForms shortcode [fluentform id="4"] */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Име на бизнеса
              </label>
              <input
                type="text"
                placeholder="Въведете име..."
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Google Maps линк
              </label>
              <input
                type="url"
                placeholder="https://maps.google.com/..."
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm text-muted-foreground mb-2">
                Имейл
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Button className="btn-cta w-full py-6 text-lg font-semibold mt-4 bg-transparent hover:bg-transparent">
              ПОЛУЧЕТЕ МОЯ КИТ QR (PDF)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;