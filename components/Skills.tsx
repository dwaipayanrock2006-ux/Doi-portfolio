import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import { SKILLS } from '../constants';
import { SkillItem } from '../types';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const getLevelLabel = (level: number) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Advanced";
  if (level >= 50) return "Intermediate";
  return "Beginner";
};

const getLevelStyle = (level: number) => {
  if (level >= 90) return "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200";
  if (level >= 75) return "bg-brand-50 text-brand-700 border-brand-200";
  if (level >= 50) return "bg-sky-50 text-sky-700 border-sky-200";
  return "bg-slate-50 text-slate-600 border-slate-200";
};

const SkillRow: React.FC<{ skill: SkillItem, index: number }> = ({ skill, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    if (ref.current) observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group/skill mb-6 last:mb-0">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-slate-800 group-hover/skill:text-brand-700 transition-colors duration-500 ease-premium">
            {skill.name}
          </span>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${getLevelStyle(skill.level)} transform scale-90 sm:scale-100 opacity-0 sm:opacity-100 sm:group-hover/skill:opacity-100 transition-all duration-500 ease-premium`}>
            {getLevelLabel(skill.level)}
          </span>
        </div>
        <span className="text-sm font-bold text-slate-400 group-hover/skill:text-brand-600 transition-colors duration-500 ease-premium">
          {skill.level}%
        </span>
      </div>
      
      <div className="h-2.5 w-full bg-slate-100 rounded-full overflow-hidden border border-slate-50 shadow-inner relative">
        <div 
          className={`h-full rounded-full relative overflow-hidden transition-all duration-[1500ms] ease-premium group-hover/skill:brightness-105 ${
            skill.level >= 90 ? 'bg-gradient-to-r from-fuchsia-500 to-purple-600' : 'bg-gradient-to-r from-brand-400 to-brand-600'
          }`}
          style={{ 
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 150}ms`
          }} 
        >
          {/* Shimmer effect overlay */}
          <div className="absolute inset-0 bg-white/30 skew-x-12 animate-[shimmer_2.5s_infinite] w-full" style={{ left: '-100%' }} />
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-brand-200/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Skills & Expertise" subtitle="My toolkit for solving complex problems." />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <TiltCard className="h-full rounded-[2rem]" spotlight={true}>
                  <div 
                    className="bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-[2rem] shadow-sm border border-white/50 hover:shadow-2xl hover:border-brand-200/50 transition-all duration-700 ease-premium group h-full relative overflow-hidden"
                  >
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-50/0 via-transparent to-brand-50/0 group-hover:from-brand-50/30 group-hover:to-purple-50/30 transition-colors duration-700 ease-premium pointer-events-none" />
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-lg shadow-brand-100/50 border border-brand-50 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-premium">
                            <Icon size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-brand-900 transition-colors duration-500 ease-premium">{category.title}</h3>
                            <p className="text-sm text-slate-500 font-medium">{category.skills.length} Skills</p>
                        </div>
                        </div>
                        
                        <div className="space-y-1">
                        {category.skills.map((skill, idx) => (
                            <SkillRow key={idx} skill={skill} index={idx} />
                        ))}
                        </div>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;