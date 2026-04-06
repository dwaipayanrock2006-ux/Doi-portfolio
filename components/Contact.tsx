
import React, { useState, useRef, useEffect } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Mail, Send, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const MorphingSocialIcon: React.FC<{ link: typeof SOCIAL_LINKS[0] }> = ({ link }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = link.icon;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.45, y: y * 0.45 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <a
      ref={ref}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center transition-all duration-700 ease-premium group"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div 
        className={`absolute inset-0 bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-[1.5s] ease-premium ${
          isHovered 
          ? 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%] scale-110 bg-brand-500/20 border-brand-500/50 rotate-12 shadow-[0_0_40px_rgba(14,165,233,0.3)]' 
          : 'rounded-xl rotate-0'
        }`}
      />
      
      <div className={`absolute inset-0 rounded-full bg-brand-500/20 blur-2xl transition-opacity duration-700 ${isHovered ? 'opacity-100 scale-125' : 'opacity-0 scale-50'}`} />

      <Icon 
        size={20} 
        className={`relative z-10 transition-all duration-700 ${
          isHovered ? 'text-white scale-110 rotate-[-12deg]' : 'text-slate-500'
        }`} 
      />
      
      <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-brand-black border border-white/10 rounded-lg text-[7px] font-black text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 whitespace-nowrap z-20 shadow-2xl`}>
        {link.platform}
      </div>
    </a>
  );
};

const Contact: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number }[] = [];
    const particleCount = 40;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement?.offsetHeight || 1000;
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.1)';
      ctx.fillStyle = 'rgba(14, 165, 233, 0.2)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 180) {
            ctx.globalAlpha = (1 - dist / 180) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    resize();
    animate();
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <section id="contact" className="pt-32 pb-24 bg-slate-950 relative overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
      />
      
      <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-brand-600/5 rounded-full blur-[180px] animate-pulse" />
      <div className="absolute bottom-0 left-[-10%] w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 xl:gap-24 items-start">
          
          <div className="lg:col-span-5 relative z-20">
            <Reveal>
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-white/5 border border-white/10 backdrop-blur-xl text-brand-400 rounded-xl text-[9px] font-black uppercase tracking-[0.5em] mb-8 shadow-2xl">
                <Sparkles size={12} className="animate-spin-slow" /> 
                System_Link_V11
              </div>
              <h2 className="text-5xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter mb-8 leading-[0.85] break-words">
                Let's <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-300 to-emerald-400 animate-prismatic-flow bg-[length:200%_auto]">Accelerate.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed max-w-md mb-16">
                Ready to deploy next-gen growth engines? My inbox is a high-bandwidth node for strategic partnerships.
              </p>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={200}>
                <div className="group flex flex-col gap-4">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Primary_Uplink</span>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center gap-6 p-5 md:p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-brand-500/50 hover:bg-brand-500/[0.04] transition-all duration-1000 ease-premium group/link shadow-2xl"
                  >
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-[1rem] bg-brand-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(14,165,233,0.3)] group-hover/link:rotate-12 transition-transform duration-1000 shrink-0">
                      <Mail size={24} />
                    </div>
                    <div className="space-y-0.5 min-w-0">
                      <div className="text-lg md:text-xl xl:text-2xl font-black text-white tracking-tighter transition-all duration-1000 group-hover/link:text-brand-400 truncate">
                        {PERSONAL_INFO.email}
                      </div>
                      <div className="flex items-center gap-2 text-[8px] font-black text-slate-500 uppercase tracking-[0.2em]">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Relay_Active
                      </div>
                    </div>
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div className="space-y-8">
                  <span className="text-[9px] font-black text-slate-500 uppercase tracking-[0.4em]">Neural_Nodes</span>
                  <div className="flex flex-wrap gap-5 md:gap-8">
                    {SOCIAL_LINKS.map((link, i) => (
                      <MorphingSocialIcon key={i} link={link} />
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7 relative z-10">
            <Reveal delay={400} direction="left">
              <TiltCard className="rounded-[3rem] max-w-2xl lg:ml-auto" spotlight={true}>
                <div className="relative p-8 md:p-10 lg:p-12 border border-white/10 bg-slate-900/70 backdrop-blur-3xl rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.6)] overflow-hidden group/form">
                  
                  <div className="absolute top-5 left-5 w-12 h-12 border-t border-l border-brand-500/20 rounded-tl-[2.5rem] group-hover/form:border-brand-500/40 group-hover/form:scale-105 transition-all duration-[1500ms]" />
                  <div className="absolute bottom-5 right-5 w-12 h-12 border-b border-r border-brand-500/20 rounded-br-[2.5rem] group-hover/form:border-brand-500/40 group-hover/form:scale-105 transition-all duration-[1500ms]" />

                  <div className={`absolute top-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-transparent via-brand-500 to-transparent transition-all duration-1000 ${focused ? 'opacity-100 translate-y-3' : 'opacity-0 -translate-y-full'}`} />

                  <form className="space-y-8 relative z-10 mt-2">
                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${focused === 'name' ? 'text-brand-400' : 'text-slate-500'}`}>Full_Signature</label>
                        <div className="relative group/input">
                          <input 
                            type="text" 
                            onFocus={() => setFocused('name')}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-[1.4rem] px-6 py-4 text-white text-sm font-bold tracking-tight focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/[0.04] transition-all duration-1000 ease-premium shadow-inner"
                            placeholder="Harvey Specter"
                          />
                          <div className={`absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-brand-500 to-emerald-500 opacity-0 group-focus-within:opacity-20 blur-sm transition-opacity duration-1000`} />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${focused === 'email' ? 'text-brand-400' : 'text-slate-500'}`}>Return_Uplink</label>
                        <div className="relative group/input">
                          <input 
                            type="email" 
                            onFocus={() => setFocused('email')}
                            onBlur={() => setFocused(null)}
                            className="w-full bg-white/[0.03] border border-white/10 rounded-[1.4rem] px-6 py-4 text-white text-sm font-bold tracking-tight focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/[0.04] transition-all duration-1000 ease-premium shadow-inner"
                            placeholder="h.specter@pearson.com"
                          />
                          <div className={`absolute -inset-0.5 rounded-[1.5rem] bg-gradient-to-r from-brand-500 to-emerald-500 opacity-0 group-focus-within:opacity-20 blur-sm transition-opacity duration-1000`} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${focused === 'message' ? 'text-brand-400' : 'text-slate-500'}`}>Protocol_Payload</label>
                      <div className="relative group/input">
                        <textarea 
                          rows={5}
                          onFocus={() => setFocused('message')}
                          onBlur={() => setFocused(null)}
                          className="w-full bg-white/[0.03] border border-white/10 rounded-[1.8rem] px-6 py-5 text-white text-sm font-bold tracking-tight focus:outline-none focus:border-brand-500/50 focus:bg-brand-500/[0.04] transition-all duration-1000 ease-premium resize-none shadow-inner"
                          placeholder="What is the mission objective?"
                        />
                        <div className={`absolute -inset-0.5 rounded-[1.9rem] bg-gradient-to-r from-brand-500 to-emerald-500 opacity-0 group-focus-within:opacity-20 blur-sm transition-opacity duration-1000`} />
                      </div>
                    </div>

                    <button 
                      type="button"
                      className="group relative w-full h-16 md:h-18 bg-brand-500 rounded-[1.8rem] overflow-hidden shadow-[0_20px_40px_-10px_rgba(14,165,233,0.4)] hover:shadow-brand-500/60 transition-all duration-[1200ms] ease-premium active:scale-[0.98] gpu-accelerate"
                    >
                      <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-[800ms] cubic-bezier(0.19, 1, 0.22, 1)" />
                      <div className="relative z-10 flex items-center justify-center gap-4 text-white font-black uppercase tracking-[0.5em] text-xs md:text-sm">
                        <span>Initiate Sync</span>
                        <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-1000 ease-premium" />
                      </div>
                      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shimmer_1.3s_infinite]" />
                    </button>
                    
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-white/5">
                        <div className="flex items-center gap-3 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
                            <ShieldCheck size={14} className="text-emerald-500" /> Layer_7_Encrypted
                        </div>
                        <div className="flex items-center gap-3 text-[9px] font-black text-slate-600 uppercase tracking-[0.3em]">
                            <Zap size={14} className="text-brand-400 animate-pulse" /> Low_Latency
                        </div>
                    </div>
                  </form>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes prismatic-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
