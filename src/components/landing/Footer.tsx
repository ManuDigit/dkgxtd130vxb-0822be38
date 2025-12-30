const languages = [
  { code: "BG", href: "/landing/", active: true },
  { code: "FR", href: "/fr/landing/", active: false },
  { code: "EN", href: "/en/landing/", active: false },
];

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          OtziviPro.bg – Подобрете вашата местна репутация.
        </p>
        
        {/* Language Selector */}
        <div className="flex items-center gap-4">
          {languages.map((lang, index) => (
            <span key={lang.code} className="flex items-center gap-4">
              <a
                href={lang.href}
                className={`text-sm px-2 py-1 rounded transition-colors ${
                  lang.active
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {lang.code}
              </a>
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