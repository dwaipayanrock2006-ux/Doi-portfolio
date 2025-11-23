import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, MousePointer2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import Reveal from './ui/Reveal';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState("");
  const fullText = "Building the Next Wave.";
  
  // Parallax Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText((prev) => {
        if (index >= fullText.length) {
          clearInterval(timer);
          return prev;
        }
        index++;
        return fullText.slice(0, index);
      });
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const calculateTransform = (factor: number) => {
    const x = (mousePos.x / window.innerWidth - 0.5) * factor;
    const y = (mousePos.y / window.innerHeight - 0.5) * factor;
    return `translate(${x}px, ${y}px)`;
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-50/30">
      {/* Animated Background Blobs with Parallax */}
      <div 
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob transition-transform duration-75 ease-out"
        style={{ transform: calculateTransform(30) }} 
      />
      <div 
        className="absolute top-0 right-40 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 transition-transform duration-100 ease-out"
        style={{ transform: calculateTransform(-30) }} 
      />
      <div 
        className="absolute -bottom-32 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 transition-transform duration-150 ease-out"
        style={{ transform: calculateTransform(50) }} 
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm hover:shadow-md transition-all cursor-default hover:scale-105">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Open to Opportunities
            </div>
          </div>
          
          <div className="animate-[fadeIn_0.8s_ease-out_0.2s_forwards] opacity-0">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-brand-black mb-8 leading-[1.05]">
              Growth, Strategy <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                & AI Product.
              </span>
            </h1>
          </div>
          
          <Reveal delay={200}>
            <div className="mb-10 min-h-[60px] md:min-h-[40px]">
              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
                I blend <span className="font-semibold text-brand-black bg-brand-50 px-1 rounded">creative coding</span> with <span className="font-semibold text-brand-black bg-brand-50 px-1 rounded">strategic logic</span> to build...
                <br/>
                <span className="font-semibold text-brand-600">{typedText}</span>
                <span className="animate-pulse text-brand-400">|</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-black rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-brand-900/10"
              >
                <div className="absolute inset-0 w-full h-full bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center">
                  View Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a 
                href={PERSONAL_INFO.resumeLink}
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-black bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all hover:border-brand-300 hover:shadow-lg active:scale-95"
              >
                Download Resume
                <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400 animate-float">
        <span className="text-xs font-medium mb-2 uppercase tracking-widest opacity-70">Scroll</span>
        <MousePointer2 size={20} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;