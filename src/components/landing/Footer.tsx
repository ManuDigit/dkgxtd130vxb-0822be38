const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} OtziviPro.bg – Подобрете вашата местна репутация.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-xs text-muted-foreground/70">
            <span className="text-center md:text-right">
              ул. "Цар Асен" № 11, София, България
            </span>
            <span className="hidden md:inline">·</span>
            <div className="flex items-center gap-3">
              <a 
                href="/privacy" 
                className="hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                Политика за поверителност
              </a>
              <span>·</span>
              <a 
                href="/terms" 
                className="hover:text-primary transition-colors underline-offset-2 hover:underline"
              >
                Условия за ползване
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
