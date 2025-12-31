import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

type MessageType = "success" | "warning" | "error" | "loading";

interface FormMessage {
  type: MessageType;
  text: string;
}

const FormSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    business_url: "",
    email: "",
    business_name: "",
  });
  const [message, setMessage] = useState<FormMessage | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({
      type: "loading",
      text: "🔄 Генериране на вашия QR Kit...\n\nТова може да отнеме 10-15 секунди.\nМоля, не затваряйте прозореца."
    });

    // Basic validation
    if (!formData.business_url || !formData.email || !formData.business_name) {
      setMessage({ type: "error", text: "Моля, попълнете всички полета." });
      setIsLoading(false);
      return;
    }

    // URL validation for Google Maps
    const urlPattern = /^https?:\/\/(maps\.google\.com|goo\.gl|maps\.app\.goo\.gl|www\.google\.com\/maps)/i;
    if (!urlPattern.test(formData.business_url)) {
      setMessage({ type: "error", text: "Моля, въведете валиден Google Maps URL." });
      setIsLoading(false);
      return;
    }

    try {
      const payload = {
        google_business_url: formData.business_url.trim(),
        email: formData.email.trim(),
        business_name: formData.business_name.trim(),
        language: "bg",
      };
      
      console.log("=== DIAGNOSTIC WEBHOOK ===");
      console.log("Payload object:", payload);
      console.log("JSON.stringify:", JSON.stringify(payload));
      console.log("Sending to:", "https://n8n.otzivipro.bg/webhook/otzivipro-review");
      
      const response = await fetch("https://n8n.otzivipro.bg/webhook/otzivipro-review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));
      
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok && data.success && data.data) {
        // Succès - templates générés
        setMessage({
          type: "success",
          text: `✅ Вашият QR Kit е генериран успешно!\n\n📧 Проверете имейла си на ${data.data.recipient || formData.email}\n\nПолучихте:\n• 📄 A5 плакат (готов за печат)\n• 📄 A4 лист с 9 карти за изрязване\n\nФайловете са изпратени на вашия email.`,
        });
        toast({
          title: "✅ Готово!",
          description: "Вашият QR Kit е изпратен на имейла ви!",
        });
        // Reset form
        setFormData({ business_url: "", email: "", business_name: "" });
      } else if (data.duplicate) {
        // Duplicate - déjà demandé récemment
        setMessage({
          type: "warning",
          text: "⚠️ Вие вече сте направили заявка наскоро.\n\nЗа да избегнем дублиране, моля изчакайте 2 минути преди нова заявка за същия бизнес.",
        });
        toast({
          title: "⚠️ Вече направена заявка",
          description: "Моля, изчакайте 2 минути преди нова заявка.",
          variant: "destructive",
        });
      } else {
        // Erreur générique
        setMessage({
          type: "error",
          text: "❌ Грешка при генериране на QR Kit.\n\nМоля, проверете данните и опитайте отново.\nАко проблемът продължава, свържете се с поддръжката.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({
        type: "error",
        text: "❌ Грешка в комуникацията със сървъра.\n\nМоля, проверете интернет връзката и опитайте отново.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getMessageStyles = (type: MessageType) => {
    switch (type) {
      case "success":
        return "bg-green-500/20 text-green-400 border border-green-500/30";
      case "warning":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
      case "error":
        return "bg-red-500/20 text-red-400 border border-red-500/30";
      case "loading":
        return "bg-blue-500/20 text-blue-400 border border-blue-500/30";
      default:
        return "";
    }
  };

  return (
    <section id="qr-demo-form" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-6 sm:p-8">
          {/* Title */}
          <div className="text-center mb-3">
            <p className="text-lg sm:text-xl font-semibold uppercase tracking-wider text-secondary">
              Получете своите персонализирани и печатаеми QR кодове
            </p>
            <p className="text-2xl sm:text-3xl font-bold uppercase tracking-wider mt-1" style={{ color: '#FF0055' }}>
              БЕЗПЛАТНО
            </p>
          </div>

          {/* Description */}
          <p className="text-muted-foreground text-center mb-8">
            Попълнете 3 полета и до 30 секунди изпращаме комплекта на имейла ви.
          </p>

          {/* Form */}
          <form id="qr-generator-form" onSubmit={handleSubmit} className="space-y-6">
            {/* Business URL Field */}
            <div className="space-y-2">
              <Label htmlFor="business_url" className="text-foreground font-medium">
                Google Maps URL на вашия бизнес *
              </Label>
              <Input
                type="url"
                id="business_url"
                name="business_url"
                value={formData.business_url}
                onChange={handleChange}
                placeholder="https://maps.google.com/maps?cid=..."
                required
                disabled={isLoading}
                className="bg-background/50 border-border/30 text-foreground placeholder:text-muted-foreground/60 h-12 text-base disabled:opacity-50"
                style={{ fontSize: "16px" }}
              />
              <p className="text-xs text-muted-foreground leading-relaxed">
                <a 
                  href="https://maps.google.com/maps/search/+Bulgaria/?entry=wc&hl=bg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Отворете Google Maps
                </a>{" "}
                и отидете на вашия бизнес профил. Потърсете бутона Споделяне{" "}
                <img 
                  src="/images/share-icon.png" 
                  alt="Споделяне" 
                  className="inline-block w-4 h-4 align-middle mx-0.5"
                />{" "}
                и го натиснете. Ще се отвори изскачащ прозорец. Кликнете върху Копирай линк, за да получите URL адреса. Поставете го тук.
              </p>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Вашият имейл *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="ivan@example.com"
                required
                disabled={isLoading}
                className="bg-background/50 border-border/30 text-foreground placeholder:text-muted-foreground/60 h-12 text-base disabled:opacity-50"
                style={{ fontSize: "16px" }}
              />
            </div>

            {/* Business Name Field */}
            <div className="space-y-2">
              <Label htmlFor="business_name" className="text-foreground font-medium">
                Име на бизнеса *
              </Label>
              <Input
                type="text"
                id="business_name"
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                placeholder="Ресторант София"
                required
                disabled={isLoading}
                minLength={2}
                maxLength={100}
                className="bg-background/50 border-border/30 text-foreground placeholder:text-muted-foreground/60 h-12 text-base disabled:opacity-50"
                style={{ fontSize: "16px" }}
              />
            </div>

            {/* Hidden language field */}
            <input type="hidden" name="language" value="bg" />

            {/* Message Display */}
            {message && (
              <div
                id="form-message"
                className={`p-4 rounded-xl text-center font-medium whitespace-pre-line ${getMessageStyles(message.type)}`}
              >
                {message.type === "loading" && (
                  <div className="flex justify-center mb-3">
                    <svg className="animate-spin h-8 w-8" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                  </div>
                )}
                {message.text}
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              variant="yellow"
              className="w-full h-14 text-lg font-bold uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Генериране...
                </span>
              ) : (
                "ПОЛУЧЕТЕ МОЯ КИТ QR"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;