
import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  width?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  width = '100%', 
  delay = 0, 
  direction = 'up',
  className = ''
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate3d(0, 30px, 0) scale(0.98)';
        case 'down': return 'translate3d(0, -30px, 0) scale(0.98)';
        case 'left': return 'translate3d(30px, 0, 0) scale(0.98)';
        case 'right': return 'translate3d(-30px, 0, 0) scale(0.98)';
        default: return 'translate3d(0, 30px, 0) scale(0.98)';
      }
    }
    return 'translate3d(0, 0, 0) scale(1)';
  };

  return (
    <div 
      ref={ref} 
      style={{ width }} 
      className={`${className} relative will-change-transform`}
    >
      <div 
        style={{ 
          transform: getTransform(),
          opacity: isVisible ? 1 : 0,
          transition: `transform 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;
