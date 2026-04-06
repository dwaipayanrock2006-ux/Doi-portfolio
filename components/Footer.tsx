
import React, { useState, useEffect, useRef } from 'react';
import { PERSONAL_INFO } from '../constants';
import { 
  ArrowUp, 
  Activity, 
  Globe, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Radio, 
  Orbit,
  Hexagon,
  Layers
} from 'lucide-react';

const SystemMetric: React.FC<{ label: string; value: string; icon: any; color: string; delay: number }> = ({ label, value, icon: Icon, color, delay }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const suffix = value.replace(/[0-9.]/g, '');

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 2500;
      const increment = targetValue / (duration / 16);
      
      const counter = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setDisplayValue(targetValue);
          clearInterval(counter);
        } else {
          setDisplayValue(start);
        }
      }, 16);
    }, delay);
    return () => clearTimeout(timer);
  }, [targetValue, delay]);

  return (
    <div className="flex flex-col items-end group/metric perspective-1000">
      <div className="flex items-center gap-4 mb-3 transition-transform duration-700 group-hover/metric:translate-x-[-6px]">
        <Icon size={14} className={`${color} group-hover/metric:animate-pulse shadow-[0_0_15px_currentColor]`} />
        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">{label}</span>
      </div>
      <div className="text-xl font-black text-white tabular-nums tracking-tighter group-hover/metric:text-brand-400 transition-colors duration-700">
        {displayValue % 1 === 0 ? displayValue : displayValue.toFixed(suffix === '%' ? 1 : 0)}{suffix}
      </div>
    </div>
  );
};

const HolographicScroll: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Enhanced magnetic tension
    setPosition({ x: x * 0.55, y: y * 0.55 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const scrollToTop = () => {
    setIsPressed(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setIsPressed(false), 800);
  };

  return (
    <button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={scrollToTop}
      className={`relative group p-14 transition-all duration-[1200ms] ease-premium ${isPressed ? 'scale-90 opacity-60' : 'scale-100'}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      {/* Volumetric Depth Atmosphere */}
      <div className="absolute inset-0 bg-brand-500/15 rounded-full blur-[4.5rem] group-hover:bg-brand-500/30 transition-all duration-[1500ms]" />
      
      {/* Double Kinetic Orbital Array */}
      <div className="absolute inset-4 border border-white/5 rounded-[3rem] animate-[spin_18s_linear_infinite] group-hover:border-brand-500/40" />
      <div className="absolute inset-10 border border-brand-500/10 rounded-[2.5rem] animate-[spin_12s_linear_infinite_reverse] group-hover:border-brand-500/30" />
      
      <div className="relative z-10 w-28 h-28 bg-slate-900/90 border border-white/10 rounded-[2.8rem] flex flex-col items-center justify-center shadow-[0_40px_80px_rgba(0,0,0,0.7)] transition-all duration-1000 ease-premium group-hover:bg-brand-500 group-hover:border-brand-400 group-hover:shadow-[0_0_100px_rgba(14,165,233,0.6)] group-hover:-translate-y-8">
        
        {/* Holographic Reflection Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-[inherit]" />
        
        <ArrowUp size={36} className="text-brand-400 group-hover:text-white group-hover:animate-[bounce_1.2s_infinite] mb-1" />
        <span className="text-[10px] font-black text-slate-500 group-hover:text-white uppercase tracking-[0.4em]">Origin</span>

        {/* Tactical HUD Markers */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/30" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-white/30" />
      </div>

      {/* Dynamic Telemetry Label */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 flex items-center gap-3">
        <div className="px-7 py-3 bg-slate-950/90 border border-brand-500/50 rounded-2xl text-[10px] font-black text-brand-400 uppercase tracking-[0.6em] shadow-3xl whitespace-nowrap backdrop-blur-2xl">
          Protocol_Return_Active
        </div>
      </div>
    </button>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-44 pb-20 relative overflow-hidden border-t border-white/10">
      
      {/* 1. KINETIC ATMOSPHERIC LAYERS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Holographic Neural Matrix */}
        <div className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.4) 1px, transparent 0)', 
            backgroundSize: '55px 55px' 
          }} 
        />
        
        {/* Ambient Parallax Scanline Pass */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_8px] opacity-40" />
        
        {/* Luminous Core Glows */}
        <div className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-full h-[800px] bg-brand-500/5 blur-[220px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-emerald-500/5 blur-[180px] rounded-full animate-pulse-slow-delay" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20">
        
        {/* STRATEGIC COMMAND ARCHITECTURE ROW */}
        <div className="grid lg:grid-cols-12 gap-20 items-center mb-44">
          
          {/* LEFT: BRAND TERMINAL V4 */}
          <div className="lg:col-span-4 flex items-center gap-14 group/brand">
            <div className="relative">
              <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-[3.5rem] flex items-center justify-center relative overflow-hidden transition-all duration-[1500ms] group-hover/brand:border-brand-500/70 group-hover/brand:bg-brand-500/[0.08] group-hover/brand:shadow-[0_0_80px_rgba(14,165,233,0.35)]">
                <Hexagon size={56} className="text-brand-500 animate-[spin_25s_linear_infinite]" />
                <span className="absolute text-lg font-black text-white group-hover/brand:scale-140 transition-transform duration-[1200ms]">DP</span>
                
                {/* HUD Overlay Bezel Micro-Detail */}
                <div className="absolute inset-3 border border-white/5 rounded-[3rem] scale-95 opacity-60" />
              </div>
              {/* Dynamic Telemetry Status */}
              <div className="absolute -bottom-6 -right-6 px-5 py-2.5 bg-slate-900 border border-white/15 rounded-2xl flex items-center gap-3 shadow-3xl">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-80"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                 </span>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">Signal_Locked</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-4xl font-black tracking-tighter uppercase leading-[0.8] text-white">
                DWAIPAYAN <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-purple-500 animate-prismatic-flow bg-[length:200%_auto]">
                  PAL_STRATEGY
                </span>
              </h4>
              <div className="flex items-center gap-6 pt-5">
                <Layers size={18} className="text-brand-500 group-hover/brand:rotate-90 transition-transform duration-1200" />
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.7em]">Node_Deployment</span>
                  <div className="h-[2px] w-0 group-hover/brand:w-full bg-brand-500 transition-all duration-[1500ms] ease-premium mt-2.5 shadow-[0_0_15px_#0ea5e9]" />
                </div>
              </div>
            </div>
          </div>

          {/* CENTER: HOLOGRAPHIC MAGNETIC CONTROL */}
          <div className="lg:col-span-4 flex justify-center order-3 lg:order-2">
            <HolographicScroll />
          </div>

          {/* RIGHT: REAL-TIME BIOMETRIC DASHBOARD */}
          <div className="lg:col-span-4 flex flex-wrap lg:flex-nowrap justify-center lg:justify-end gap-16 order-2 lg:order-3">
            <SystemMetric label="Latent_Sync" value="24ms" icon={Globe} color="text-brand-400" delay={0} />
            <SystemMetric label="Logic_Flux" value="0.42" icon={Cpu} color="text-purple-400" delay={400} />
            <SystemMetric label="Health_Audit" value="99.9%" icon={ShieldCheck} color="text-emerald-400" delay={800} />
            <SystemMetric label="Vibe_Sense" value="120hz" icon={Zap} color="text-amber-400" delay={1200} />
          </div>
        </div>

        {/* FINAL SIGNATURE ARCHITECTURAL BAR */}
        <div className="relative pt-24 border-t border-white/15 group/signature">
          
          {/* Active Accent Underline (Expansive) */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-brand-500 to-transparent scale-x-0 group-hover/signature:scale-x-100 transition-transform duration-[2200ms] ease-premium" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-20 relative z-10">
            
            {/* Copyright: Digital Signature Detail */}
            <div className="flex items-center gap-12">
              <div className="text-[13px] font-black tracking-[0.7em] uppercase text-slate-700">
                // <span className="text-white">PROTO_UNIT_2025</span>
              </div>
              <p className="text-[11px] font-black tracking-[0.6em] uppercase text-slate-500 hover:text-white transition-colors duration-1000">
                © PAL_PROPULSION_LAB. <span className="text-brand-500">EST_MMVI</span>
              </p>
            </div>

            {/* Manifest: High-Frequency Labels */}
            <div className="flex items-center gap-16">
              <div className="flex flex-col items-center gap-4 group/spec cursor-help">
                <Orbit size={24} className="text-slate-800 group-hover/spec:text-brand-500 group-hover/spec:rotate-180 transition-all duration-[3s]" />
                <span className="text-[9px] font-black text-slate-800 uppercase tracking-[0.4em] group-hover/spec:text-brand-400 transition-colors">Momentum_Engine</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-white/5" />
              <div className="flex flex-col items-center gap-4 group/spec cursor-help">
                <Radio size={24} className="text-slate-800 group-hover/spec:text-emerald-500 group-hover/spec:animate-pulse transition-all duration-1000" />
                <span className="text-[9px] font-black text-slate-800 uppercase tracking-[0.4em] group-hover/spec:text-emerald-400 transition-colors">Neural_Stream</span>
              </div>
            </div>

            {/* Global Relay Node HUD */}
            <div className="relative overflow-hidden group/geo rounded-3xl">
               <div className="absolute inset-0 bg-brand-500/10 translate-y-full group-hover/geo:translate-y-0 transition-transform duration-800" />
               <div className="relative border border-white/15 px-10 py-5 rounded-3xl flex items-center gap-6 backdrop-blur-3xl shadow-2xl">
                 <span className="w-3 h-3 rounded-full bg-brand-500 animate-pulse shadow-[0_0_25px_#0ea5e9]" />
                 <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.6em]">Relay_Node_DP_Active</span>
               </div>
            </div>
          </div>

          {/* Kinetic Shimmer Scanning HUD Overlay */}
          <div className="absolute -bottom-20 left-0 w-full h-4 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent animate-[shimmer-bar_10s_infinite] pointer-events-none" />
        </div>
      </div>

      <style>{`
        @keyframes shimmer-bar {
          0% { transform: translateX(-160%); }
          100% { transform: translateX(160%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.55; transform: scale(1.1); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow 12s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          animation-delay: 6s;
        }
        .animate-prismatic-flow {
          animation: prismatic-flow 10s linear infinite;
        }
        @keyframes prismatic-flow {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
