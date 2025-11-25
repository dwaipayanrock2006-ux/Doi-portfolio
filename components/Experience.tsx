import React from 'react';
import SectionHeading from './ui/SectionHeading';
import { EXPERIENCE } from '../constants';
import Reveal from './ui/Reveal';
import { Briefcase } from 'lucide-react';
import TiltCard from './ui/TiltCard';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Experience" subtitle="My professional journey so far." />

        <div className="max-w-4xl mx-auto mt-16">
          <div className="relative border-l-2 border-slate-100 space-y-16 pl-8 sm:pl-16">
            {/* Timeline gradient line overlay for scroll effect */}
            <div className="absolute top-0 left-[-2px] w-[2px] h-full bg-gradient-to-b from-brand-600 via-brand-300 to-transparent opacity-0 transition-opacity duration-1000 ease-premium" />

            {EXPERIENCE.map((job, index) => (
              <Reveal key={index} delay={index * 150} width="100%">
                <div className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[43px] sm:-left-[75px] top-0 transition-all duration-500 ease-premium z-10">
                    <div className="w-8 h-8 rounded-full border-4 border-white bg-slate-200 shadow-sm group-hover:bg-brand-600 group-hover:scale-125 transition-all duration-500 ease-premium flex items-center justify-center">
                       <Briefcase size={12} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-premium" />
                    </div>
                  </div>
                  
                  <TiltCard className="rounded-3xl" spotlight={true}>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-100 transition-all duration-500 ease-premium -mt-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                        <div>
                          <h3 className="text-2xl font-bold text-brand-black group-hover:text-brand-700 transition-colors duration-300 ease-premium">{job.role}</h3>
                          <div className="text-brand-600 font-bold text-lg">{job.company}</div>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-4 py-2 rounded-full w-fit group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors duration-300 ease-premium">
                          {job.duration}
                        </span>
                      </div>
                      
                      <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                        {job.description}
                      </p>
                      
                      <ul className="space-y-3">
                        {job.achievements.map((item, i) => (
                          <li key={i} className="text-slate-600 flex items-start gap-3 group/item">
                            <span className="mt-2 w-1.5 h-1.5 bg-brand-300 rounded-full flex-shrink-0 group-hover/item:bg-brand-600 group-hover/item:scale-150 transition-all duration-300 ease-premium" />
                            <span className="group-hover/item:text-slate-900 transition-colors duration-300 ease-premium">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;