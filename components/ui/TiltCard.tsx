
import React, { useRef, useState } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
}

const TiltCard: React.FC<TiltCardProps> = ({ children, className = '', spotlight = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smoother, subtler rotation
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setRotation({ x: rotateX, y: rotateY });
    setPosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transition-all duration-700 cubic-bezier(0.23, 1, 0.32, 1) will-change-transform ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(${isHovered ? 1.015 : 1})`,
      }}
    >
      {spotlight && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-700 ease-premium group-hover:opacity-100 z-10 rounded-[inherit]"
          style={{
            background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(14, 165, 233, 0.1), transparent 45%)`,
            opacity: isHovered ? 1 : 0,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltCard;
