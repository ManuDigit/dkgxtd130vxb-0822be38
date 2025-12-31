const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} OtziviPro.bg – Подобрете вашата местна репутация.
          </p>
          <p className="text-xs text-muted-foreground/70 text-center md:text-right">
            OtziviPro.bg by{" "}
            <a 
              href="https://lewindigital.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Lewin Digital
            </a>
            {" "}· ул. "Цар Асен" № 11, София, България
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
