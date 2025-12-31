const FinalCTA = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="section-title animate-fade-up">
          Готови ли сте да изпратите първия си KIT QR?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 animate-fade-up-delay-1 max-w-2xl mx-auto">
          Натиснете бутона, попълнете 3 полета и в рамките на 30 секунди получавате двата готови PDF шаблона (A5 плакат и A4 лист с 9 мини карти). Безплатно и без риск.
        </p>
        <a
          href="#qr-demo-form"
          className="btn-cta-yellow inline-block text-lg animate-fade-up-delay-2"
        >
          Стартирайте демото
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;