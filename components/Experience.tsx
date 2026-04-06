
import React, { useState } from 'react';
import { EXPERIENCE } from '../constants';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { 
  Briefcase, 
  Calendar, 
  ChevronRight, 
  Activity, 
  Compass,
  Zap,
  Cpu
} from 'lucide-react';

const ExperienceBrief: React.FC<{ job: typeof EXPERIENCE[0]; index: number }> = ({ job, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isPresent = job.duration.toLowerCase().includes('present');

  return (
    <div 
      className="relative group/brief mb-32 last:mb-0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Neural Node Anchor */}
      <div className="absolute -left-[44px] md:-left-[76px] top-0 z-30">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-700 ease-premium border-4 border-slate-950 shadow-[0_0_20px_rgba(14,165,233,0.3)] ${
          isHovered ? 'bg-brand-500 scale-125 -rotate-12' : 'bg-slate-900 text-slate-400'
        }`}>
          {isHovered ? <Zap size={18} className="text-white animate-pulse" /> : <Briefcase size={18} />}
        </div>
        {isPresent && (
          <div className="absolute inset-0 rounded-2xl bg-brand-500/20 animate-ping pointer-events-none" />
        )}
      </div>

      <div className={`grid lg:grid-cols-12 gap-8 items-start transition-all duration-1000 ease-premium ${isHovered ? 'translate-x-4' : ''}`}>
        
        {/* Date & Metadata Pillar */}
        <div className="lg:col-span-3 pt-3">
          <div className="flex flex-col gap-3">
            <div className={`flex items-center gap-2 font-black text-[11px] uppercase tracking-[0.4em] transition-colors duration-500 ${isHovered ? 'text-brand-400' : 'text-slate-500'}`}>
              <Calendar size={12} /> {job.duration}
            </div>
            <div className={`h-[1px] w-16 transition-all duration-1000 ${isHovered ? 'w-full bg-brand-500 shadow-[0_0_10px_#0ea5e9]' : 'bg-slate-800'}`} />
            {isPresent && (
              <div className="flex items-center gap-2 mt-2 px-3 py-1 bg-brand-500/5 border border-brand-500/20 rounded-full w-fit">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest">Live_Mission</span>
              </div>
            )}
          </div>
        </div>

        {/* Obsidian Glass Brief */}
        <div className="lg:col-span-9">
          <TiltCard className="rounded-[3rem]" spotlight={true}>
            <div className={`relative p-8 md:p-14 border rounded-[3rem] transition-all duration-1000 ease-premium overflow-hidden backdrop-blur-xl gpu-accelerate ${
              isHovered 
              ? 'border-brand-500/40 bg-slate-900/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)]' 
              : 'border-white/5 bg-white/[0.03] shadow-2xl'
            }`}>
              
              {/* Internal Holographic Accent */}
              <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] transition-all duration-1000 ${isHovered ? 'bg-brand-500/20 opacity-100' : 'bg-brand-500/5 opacity-50'}`} />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <Cpu size={14} className="text-brand-500" />
                        <span className="text-[10px] font-black text-brand-500/60 uppercase tracking-[0.4em]">Node_Sequence_0{index + 1}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-none group-hover/brief:text-brand-400 transition-colors duration-500">
                      {job.role}
                    </h3>
                    <div className="flex items-center gap-3 pt-3">
                      <span className="text-xl font-bold text-slate-600">at</span>
                      <span className="text-2xl font-black text-white/90 uppercase tracking-tight relative">
                        {job.company}
                        <div className={`absolute -bottom-1 left-0 h-1 bg-brand-500 transition-all duration-700 ${isHovered ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl border transition-all duration-500 ${
                    isHovered ? 'bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(14,165,233,0.3)]' : 'bg-white/5 border-white/10 text-slate-400'
                  }`}>
                    <Activity size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Deployment_Status</span>
                  </div>
                </div>

                <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mb-14 font-medium border-l-2 border-slate-800 pl-8 group-hover/brief:border-brand-500/50 transition-all duration-700">
                  {job.description}
                </p>

                <div className="space-y-4">
                  <div className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] mb-8 flex items-center gap-6">
                    Operational_Outcomes <div className="flex-1 h-[1px] bg-slate-800/50" />
                  </div>
                  <div className="grid gap-4">
                    {job.achievements.map((item, i) => (
                      <div 
                        key={i} 
                        className="group/item flex items-start gap-5 p-5 rounded-[1.5rem] transition-all duration-500 border border-transparent hover:border-white/10 hover:bg-white/[0.02] hover:translate-x-3"
                        style={{ 
                          transitionDelay: isHovered ? `${i * 80}ms` : '0ms',
                          opacity: isHovered ? 1 : 0.4,
                          transform: isHovered ? 'translate3d(0,0,0)' : 'translate3d(-20px, 0, 0)'
                        }}
                      >
                        <div className="mt-1.5 w-6 h-6 rounded-xl bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover/item:bg-brand-500 group-hover/item:shadow-[0_0_15px_rgba(14,165,233,0.5)] transition-all duration-500">
                          <ChevronRight size={14} className="text-slate-400 group-hover/item:text-white" />
                        </div>
                        <span className="text-[17px] font-bold text-slate-300 group-hover/item:text-white leading-snug transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* HUD Corner Accents */}
              <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-white/10 rounded-tl-3xl transition-all duration-700 group-hover/brief:border-brand-500/30 group-hover/brief:scale-110" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-white/10 rounded-br-3xl transition-all duration-1000 group-hover/brief:border-brand-500/30 group-hover/brief:scale-110" />
            </div>
          </TiltCard>
        </div>
      </div>
    </div>
  );
};

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-48 bg-slate-950 relative overflow-hidden">
      
      {/* Neural Matrix Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 1px, transparent 0)', 
            backgroundSize: '48px 48px' 
          }} 
        />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-600/10 rounded-full blur-[160px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[160px] animate-pulse-slow-delay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-40">
          <Reveal>
            <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-[1.5rem] text-[11px] font-black uppercase tracking-[0.5em] mb-12 shadow-2xl">
              <Compass size={16} className="text-brand-400 animate-spin-slow" /> 
              Trajectory_Audit_V4
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter mb-10 leading-[0.85] md:leading-[0.9]">
              Strategic <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-purple-400">
                Executions.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed px-4">
              Operating at the intersection of exponential growth and high-fidelity product strategy.
            </p>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Central Bioluminescent Timeline */}
          <div className="absolute left-[23px] md:left-[59px] top-6 bottom-0 w-[2px] bg-slate-900 overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-b from-brand-500 via-purple-500 to-transparent opacity-60 animate-[neural-pulse_6s_infinite]" />
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={index} delay={index * 150}>
                <ExperienceBrief job={job} index={index} />
              </Reveal>
            ))}
          </div>

          {/* Timeline Origin Point */}
          <div className="absolute -bottom-16 left-[14px] md:left-[50px] flex flex-col items-center">
             <div className="w-[20px] h-[20px] rounded-full bg-slate-900 border-4 border-brand-500/20 shadow-[0_0_15px_rgba(14,165,233,0.3)]" />
             <div className="mt-5 text-[10px] font-black text-slate-600 uppercase tracking-[0.3em] whitespace-nowrap">Genesis_Sequence</div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes neural-pulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Experience;
