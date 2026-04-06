
import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import Reveal from './ui/Reveal';
import HeroVisual from './HeroVisual';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Building the Next Wave.";
  
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

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-50/30">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-brand-200/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-40" />
      <div className="absolute -bottom-32 left-20 w-[700px] h-[700px] bg-blue-100/30 rounded-full mix-blend-multiply filter blur-[140px] opacity-30" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider mb-8 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
                </span>
                Open to Opportunities
              </div>
            </div>
            
            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-brand-black mb-8 leading-[0.95] md:leading-[1.05]">
                Growth, Strategy <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">
                  & AI Product.
                </span>
              </h1>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mb-10 min-h-[60px]">
                <p className="text-xl md:text-2xl text-slate-600 max-w-xl leading-relaxed">
                  I blend <span className="font-semibold text-brand-black bg-brand-50 px-1 rounded">creative coding</span> with <span className="font-semibold text-brand-black bg-brand-50 px-1 rounded">strategic logic</span> to build...
                  <br/>
                  <span className="font-bold text-brand-600">{typedText}</span>
                  <span className="animate-pulse text-brand-400">|</span>
                </p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#projects" 
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-brand-black rounded-full overflow-hidden transition-all duration-500 ease-premium hover:scale-105 active:scale-95 shadow-xl"
                >
                  <div className="absolute inset-0 w-full h-full bg-slate-800 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-premium" />
                  <span className="relative flex items-center">
                    View My Work
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </a>
                <a 
                  href={PERSONAL_INFO.resumeLink}
                  className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-brand-black bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all duration-500 ease-premium hover:border-brand-300 hover:shadow-lg active:scale-95"
                >
                  Get Resume
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 hidden lg:block relative h-[600px]">
            <Reveal delay={400} direction="left">
               <HeroVisual />
            </Reveal>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center text-slate-400">
        <span className="text-[10px] font-bold mb-2 uppercase tracking-widest opacity-70">Explore Portfolio</span>
        <div className="w-6 h-10 border-2 border-slate-200 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
