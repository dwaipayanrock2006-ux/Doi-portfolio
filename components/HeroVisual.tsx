
import React from 'react';

const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-visible">
      
      {/* 1. KINETIC INFRASTRUCTURE & DATA FLOW */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[180%] h-[180%] border-[0.5px] border-slate-300 rounded-full [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] animate-[spin_60s_linear_infinite]" />
        
        {/* Horizontal & Vertical Grid Lines */}
        <div className="absolute w-full h-[0.5px] bg-gradient-to-r from-transparent via-slate-400 to-transparent" />
        <div className="absolute h-full w-[0.5px] bg-gradient-to-b from-transparent via-slate-400 to-transparent" />
        
        {/* Traveling Data Packets */}
        <div className="absolute w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-0 w-2 h-0.5 bg-brand-500 blur-[1px] animate-[flow-x_4s_linear_infinite]" />
          <div className="absolute top-1/3 left-0 w-2 h-0.5 bg-brand-400 blur-[1px] animate-[flow-x_6s_linear_infinite_1s]" />
          <div className="absolute left-1/2 top-0 h-2 w-0.5 bg-brand-600 blur-[1px] animate-[flow-y_5s_linear_infinite_0.5s]" />
          <div className="absolute left-2/3 top-0 h-2 w-0.5 bg-brand-300 blur-[1px] animate-[flow-y_7s_linear_infinite_2s]" />
        </div>
      </div>

      {/* 2. THE GROWTH ENGINE (Central Multi-Axis Core) */}
      <div className="relative z-20">
        {/* Ambient Logic Glow */}
        <div className="absolute inset-0 bg-brand-500/20 blur-[150px] rounded-full scale-150 animate-pulse-slow" />
        
        <div className="relative w-80 h-80 flex items-center justify-center scale-90 md:scale-100">
            {/* Synchronized Orbital Frames */}
            <div className="absolute inset-0 border-[0.5px] border-slate-200 rounded-[4rem] animate-[orbital-cw_15s_linear_infinite]" />
            <div className="absolute inset-8 border-[0.5px] border-brand-200/40 rounded-[3rem] animate-[orbital-ccw_10s_linear_infinite]" />
            
            {/* The Strategy Terminal */}
            <div className="relative w-60 h-60 bg-white/90 backdrop-blur-[50px] rounded-[3.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border border-white overflow-hidden flex flex-col p-8 animate-float-core">
                <div className="flex justify-between items-start mb-6">
                    <div className="space-y-1">
                        <div className="text-[7px] font-black text-slate-400 uppercase tracking-[0.4em] animate-pulse">Processing...</div>
                        <div className="text-[12px] font-black text-brand-black tracking-tighter">CORE_STRATEGY</div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-brand-500 animate-ping absolute" />
                      <div className="w-2 h-2 rounded-full bg-brand-600 relative" />
                    </div>
                </div>

                {/* Growth Trajectory Line - Animated Waveform */}
                <div className="flex-1 relative flex items-end mb-4">
                    <svg viewBox="0 0 100 40" className="w-full h-24 overflow-visible">
                        <defs>
                            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#bae6fd" />
                                <stop offset="100%" stopColor="#0ea5e9" />
                            </linearGradient>
                            <filter id="glowEffect">
                              <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                              <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                              </feMerge>
                            </filter>
                        </defs>
                        <path 
                            d="M0,38 Q10,35 25,25 T50,22 T75,10 T100,2" 
                            fill="none" 
                            stroke="url(#glowGrad)" 
                            strokeWidth="4" 
                            strokeLinecap="round"
                            strokeDasharray="200"
                            strokeDashoffset="200"
                            filter="url(#glowEffect)"
                            className="animate-[draw-path_6s_ease-in-out_infinite]"
                        />
                        <path 
                            d="M0,38 Q10,35 25,25 T50,22 T75,10 T100,2" 
                            fill="none" 
                            stroke="#0ea5e9" 
                            strokeWidth="15" 
                            strokeOpacity="0.05"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <div className="flex justify-between items-end border-t border-slate-100 pt-4">
                    <div className="space-y-0.5">
                        <div className="text-[7px] font-black text-slate-400 uppercase tracking-widest">Growth_Rate</div>
                        <div className="text-sm font-black text-brand-black tracking-tight">+142% <span className="text-[8px] text-emerald-500 font-bold">▲</span></div>
                    </div>
                    <div className="flex gap-1 h-4 items-end">
                        {[0.4, 0.7, 1, 0.6, 0.8].map((h, i) => (
                            <div 
                              key={i} 
                              className="w-1 bg-brand-500 rounded-full animate-bar-jump" 
                              style={{ height: `${h * 100}%`, animationDelay: `${i * 150}ms` }} 
                            />
                        ))}
                    </div>
                </div>

                {/* HUD Scan Line */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-brand-500/10 via-brand-500/5 to-transparent h-20 animate-scan-hud" />
            </div>

            {/* Float Metric: Market Sync */}
            <div className="absolute -top-10 -right-16 w-36 h-16 bg-slate-950 rounded-[2rem] shadow-3xl flex flex-col justify-center px-5 border border-slate-800 animate-bounce-slow-alt z-30">
                <div className="text-[6px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1.5">Market_Alloc</div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-500 w-[84%] animate-[shimmer-bar_4s_infinite]" />
                  </div>
                  <span className="text-[9px] font-bold text-white">84%</span>
                </div>
            </div>
        </div>
      </div>

      {/* 3. MODULE: STRATEGY MATRIX (Upper Left) */}
      <div className="absolute top-10 -left-24 w-64 p-7 bg-white/70 backdrop-blur-[40px] border border-white/90 rounded-[3rem] shadow-2xl animate-float-delayed z-30 overflow-hidden group">
        <div className="flex justify-between items-center mb-6">
            <span className="text-[8px] font-black text-slate-600 uppercase tracking-[0.4em]">Matrix_Inference</span>
            <div className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
        </div>
        <div className="grid grid-cols-6 gap-2">
            {[...Array(18)].map((_, i) => (
                <div 
                    key={i} 
                    className="aspect-square rounded-[5px] animate-matrix-pulse"
                    style={{ 
                        animationDelay: `${i * 100}ms`,
                        backgroundColor: i % 4 === 0 ? '#0ea5e9' : i % 3 === 0 ? '#bae6fd' : '#f1f5f9'
                    }}
                />
            ))}
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center text-[7px] font-black text-slate-400 uppercase tracking-widest">
            <span>Optimization_v4</span>
            <span className="text-brand-600">Stable_001</span>
        </div>
      </div>

      <style>{`
        @keyframes draw-path {
          0% { stroke-dashoffset: 200; stroke-opacity: 0; }
          10% { stroke-opacity: 1; }
          90% { stroke-opacity: 1; }
          100% { stroke-dashoffset: -200; stroke-opacity: 0; }
        }
        @keyframes scan-hud {
          0% { transform: translateY(-100%); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        @keyframes flow-x {
          0% { transform: translateX(-200px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateX(200px); opacity: 0; }
        }
        @keyframes flow-y {
          0% { transform: translateY(-200px); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(200px); opacity: 0; }
        }
        @keyframes orbital-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbital-ccw {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes float-core {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-15px) rotate(1deg) scale(1.02); }
        }
        @keyframes bar-jump {
          0%, 100% { transform: scaleY(1); opacity: 0.6; }
          50% { transform: scaleY(1.5); opacity: 1; }
        }
        @keyframes matrix-pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        @keyframes shimmer-bar {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pulse-slow {
          animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-float-delayed {
          animation: float-core 9s ease-in-out infinite;
          animation-delay: 4.5s;
        }
        .animate-float {
          animation: float-core 11s ease-in-out infinite;
        }
        .animate-bounce-slow-alt {
          animation: float-core 7s ease-in-out infinite;
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default HeroVisual;
