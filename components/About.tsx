
import React, { useState } from 'react';
import { User, Target, Zap, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  const [imgSrc] = useState(PERSONAL_INFO.profileImage);

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal direction="right">
              <div className="relative group">
                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-brand-500/10 grayscale hover:grayscale-0">
                  <img 
                    src={imgSrc} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-[1.5s] ease-premium group-hover:scale-105"
                  />
                </div>
                {/* Minimalist Floating Label */}
                <div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl hidden md:block">
                  <div className="text-[10px] font-black uppercase tracking-widest text-brand-400 mb-1">Status</div>
                  <div className="text-xl font-bold">Building 0→1</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6">
                Executive Profile
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none mb-8">
                Growth Head <br/> & <span className="text-brand-500">Strategist.</span>
              </h2>
              <div className="space-y-6 max-w-xl">
                <p className="text-xl text-slate-500 leading-relaxed">
                  I operate at the high-stakes intersection of <span className="text-slate-900 font-bold">data science</span> and <span className="text-slate-900 font-bold">market growth</span>. 
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  As the Growth Head Intern at Myndra AI and Co-Founder of Porobangla AI, my mission is to architect digital products that don't just exist, but dominate their vertical.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-6">
              <Reveal delay={200}>
                <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:border-brand-200 transition-all duration-500">
                  <Target className="text-brand-600 mb-4" size={28} />
                  <h4 className="text-xl font-bold mb-2">The Strategy</h4>
                  <p className="text-sm text-slate-500 leading-relaxed italic">
                    "I don't play the odds, I play the man." — Harvey Specter Mindset.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:border-brand-200 transition-all duration-500">
                  <Zap className="text-yellow-500 mb-4" size={28} />
                  <h4 className="text-xl font-bold mb-2">The Execution</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Fast-paced iteration from Zero-to-One. Turning technical complexity into market-ready value.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
