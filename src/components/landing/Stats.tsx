import { useEffect, useState, useRef } from "react";

const stats = [
  {
    target: 2400,
    prefix: "+",
    suffix: "",
    format: (n: number) => n.toLocaleString("bg-BG").replace(",", " "),
    label: "Сканирания през последните 30 дни",
  },
  {
    target: 94,
    prefix: "",
    suffix: "%",
    format: (n: number) => n.toString(),
    label: "По-висок шанс за 5★ отзив в рамките на 48 часа",
  },
  {
    target: 0,
    startFrom: 100,
    prefix: "",
    suffix: " EUR",
    format: (n: number) => n.toString(),
    label: "Инвестиция – получавате готови A5 + A4 PDF файлове",
  },
];

const useCountUp = (target: number, startFrom = 0, duration = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(startFrom);
  
  useEffect(() => {
    if (!shouldStart) return;
    
    const startTime = Date.now();
    const difference = target - startFrom;
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const currentValue = Math.round(startFrom + difference * easeOutQuart);
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [target, startFrom, duration, shouldStart]);
  
  return count;
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#002A2A]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  stat, 
  index, 
  isVisible 
}: { 
  stat: typeof stats[0]; 
  index: number; 
  isVisible: boolean;
}) => {
  const count = useCountUp(
    stat.target, 
    stat.startFrom ?? 0, 
    2000, 
    isVisible
  );
  
  return (
    <div
      className="stat-card min-h-[140px] flex flex-col justify-center animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
        {stat.prefix}{stat.format(count)}{stat.suffix}
      </div>
      <div className="text-sm sm:text-base text-muted-foreground">
        {stat.label}
      </div>
    </div>
  );
};

export default Stats;