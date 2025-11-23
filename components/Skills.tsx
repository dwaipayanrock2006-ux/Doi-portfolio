import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { SKILLS } from '../constants';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-40 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-10 w-64 h-64 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading title="Skills & Expertise" subtitle="My toolkit for solving complex problems." />

        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal key={index} delay={index * 100}>
                <TiltCard className="h-full rounded-3xl" spotlight={true}>
                  <div 
                    className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-brand-100 transition-all duration-300 group h-full"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 shadow-inner group-hover:rotate-3">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-brand-black">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {category.skills.map((skill, idx) => (
                        <div key={idx} className="group/skill">
                          <div className="flex justify-between text-sm mb-1.5 font-medium">
                            <span className="text-slate-700 group-hover/skill:text-brand-700 transition-colors">{skill.name}</span>
                            <span className="text-slate-400 opacity-0 group-hover/skill:opacity-100 transition-opacity translate-x-2 group-hover/skill:translate-x-0">{skill.level}%</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-brand-500 rounded-full transform translate-x-[-100%] animate-[slideIn_1.5s_ease-out_forwards] group-hover/skill:bg-brand-600 transition-colors"
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(index * 200) + (idx * 100)}ms` 
                              }} 
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;