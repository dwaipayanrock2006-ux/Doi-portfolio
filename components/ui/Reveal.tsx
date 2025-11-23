import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  direction = 'up',
  className = ''
}: RevealProps) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(30px)';
        case 'down': return 'translateY(-30px)';
        case 'left': return 'translateX(30px)';
        case 'right': return 'translateX(-30px)';
        default: return 'translateY(30px)';
      }
    }
    return 'translate(0, 0)';
  };

  return (
    <div 
      ref={ref} 
      style={{ width }} 
      className={`${className} relative`}
    >
      <div 
        style={{ 
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}ms`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;