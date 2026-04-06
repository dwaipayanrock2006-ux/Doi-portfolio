
import React, { useState } from 'react';
import { SKILLS } from '../constants';
import Reveal from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const SkillBar: React.FC<{ name: string; level: number; delay: number; active: boolean }> = ({ name, level, delay, active }) => {
  return (
    <div className="group py-6 border-b border-slate-100 last:border-0">
      <div className="flex justify-between items-end mb-3">
        <h4 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors duration-300">
          {name}
        </h4>
        <span className="text-xs font-black text-slate-400 tabular-nums tracking-widest uppercase">
          Lvl. {level}%
        </span>
      </div>
      <div className="h-[2px] w-full bg-slate-100 overflow-hidden relative">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-500 transition-all duration-[1500ms] ease-premium"
          style={{ 
            width: active ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Section Logic & Nav */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-brand-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                Core Competencies
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-12 leading-none">
                Skill <br/> 
                <span className="text-slate-300">Architecture.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-2">
              {SKILLS.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`group flex items-center justify-between text-left py-4 px-6 rounded-2xl transition-all duration-500 ease-premium ${
                    activeTab === i 
                      ? 'bg-slate-900 text-white shadow-2xl shadow-slate-900/20 translate-x-2' 
                      : 'text-slate-400 hover:text-slate-900 hover:translate-x-1'
                  }`}
                >
                  <span className={`text-xl font-bold tracking-tight ${activeTab === i ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    {cat.title}
                  </span>
                  <ArrowRight 
                    size={20} 
                    className={`transition-all duration-500 ${activeTab === i ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} 
                  />
                </button>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-16 p-8 rounded-[2rem] bg-brand-50 border border-brand-100">
                <p className="text-brand-900 font-medium leading-relaxed italic">
                  "Blending the analytical rigor of business intelligence with the rapid execution of modern AI products."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Skill List Display */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative min-h-[400px]">
              {SKILLS.map((category, catIndex) => (
                <div 
                  key={category.title}
                  className={`transition-all duration-700 ease-premium ${
                    activeTab === catIndex 
                      ? 'opacity-100 translate-y-0 relative z-10' 
                      : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        delay={index * 100}
                        active={activeTab === catIndex}
                      />
                    ))}
                  </div>
                  
                  {/* Category Summary */}
                  <div className="mt-12 pt-8 border-t border-slate-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-600">
                        <category.icon size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Focus_Area</div>
                        <div className="text-sm font-bold text-slate-900">{category.title} Specialist</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
