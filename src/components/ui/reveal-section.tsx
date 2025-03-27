
import React, { useRef, useEffect, ReactNode } from 'react';

interface RevealSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({ 
  children, 
  delay = 0,
  className = '' 
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              section.classList.add('revealed');
            }, delay);
            observer.unobserve(section);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -100px 0px' // Negative bottom margin delays reveal
      }
    );

    observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [delay]);

  return (
    <div ref={sectionRef} className={`reveal-animation ${className}`}>
      {children}
    </div>
  );
};

export default RevealSection;
