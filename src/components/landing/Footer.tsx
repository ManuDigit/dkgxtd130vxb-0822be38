import { useState } from "react";

type Language = "BG" | "FR" | "EN";

const Footer = () => {
  const [activeLang, setActiveLang] = useState<Language>("BG");

  const languages: Language[] = ["BG", "EN", "FR"];

  return (
    <footer className="py-8 px-4 border-t border-border/50">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          OtziviPro.bg – Подобрете вашата местна репутация
        </p>
        
        {/* Language Selector */}
        <div className="flex items-center gap-2">
          {languages.map((lang, index) => (
            <span key={lang} className="flex items-center">
              <button
                onClick={() => setActiveLang(lang)}
                className={`text-sm px-2 py-1 rounded transition-colors ${
                  activeLang === lang
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang}
              </button>
              {index < languages.length - 1 && (
                <span className="text-muted-foreground/50">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
