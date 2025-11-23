import React, { useState } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { Mail, Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const Contact: React.FC = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);

  return (
    <section id="contact" className="py-32 bg-brand-black text-white relative overflow-hidden">
      {/* Background Gradient & Animated Blobs */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl animate-float-delayed pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-float pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          <Reveal>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                Let's build the <br/> <span className="text-brand-500 inline-block animate-float">future</span> together.
              </h2>
              <p className="text-slate-400 text-xl mb-12 max-w-lg leading-relaxed">
                Whether you're interested in discussing Growth Strategy, AI products, or just want to vibe code, I'm always open to connecting.
              </p>
              
              <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center gap-4 text-2xl font-semibold hover:text-brand-400 transition-colors mb-16 group"
              >
                <div className="p-4 bg-slate-800 rounded-full group-hover:bg-brand-600 transition-colors duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-brand-500/50">
                  <Mail size={24} />
                </div>
                {PERSONAL_INFO.email}
              </a>

              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link, index) => {
                   const Icon = link.icon;
                   return (
                     <a 
                      key={index} 
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-brand-900/50 group"
                      aria-label={link.platform}
                     >
                       <Icon size={24} className="group-hover:scale-110 transition-transform" />
                     </a>
                   );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200} direction="left">
            <TiltCard className="rounded-[2.5rem]" spotlight={false}>
              <div className="bg-slate-900/50 p-8 md:p-10 rounded-[2.5rem] border border-slate-800 backdrop-blur-sm relative transition-colors duration-500 hover:border-slate-700">
                {/* Decorative glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

                <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                  <div className="relative group">
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'name' || true ? '-top-3 text-xs text-brand-400 bg-slate-900 px-2 rounded' : 'top-3.5 text-slate-500'
                      }`}
                    >
                      Name
                    </label>
                    <input 
                      type="text" 
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all focus:ring-1 focus:ring-brand-500/50"
                      placeholder="John Specter"
                    />
                  </div>
                  
                  <div className="relative group">
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'email' || true ? '-top-3 text-xs text-brand-400 bg-slate-900 px-2 rounded' : 'top-3.5 text-slate-500'
                      }`}
                    >
                      Email
                    </label>
                    <input 
                      type="email" 
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all focus:ring-1 focus:ring-brand-500/50"
                      placeholder="john@pearsonhardman.com"
                    />
                  </div>
                  
                  <div className="relative group">
                    <label 
                      className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                        focusedField === 'message' || true ? '-top-3 text-xs text-brand-400 bg-slate-900 px-2 rounded' : 'top-3.5 text-slate-500'
                      }`}
                    >
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-slate-950/50 border border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-brand-500 transition-all focus:ring-1 focus:ring-brand-500/50 resize-none"
                      placeholder="I have a project in mind..."
                    ></textarea>
                  </div>
                  
                  <button 
                    className="w-full bg-white text-brand-black font-bold text-lg py-4 rounded-2xl hover:bg-brand-500 hover:text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-lg hover:shadow-brand-500/25 overflow-hidden relative group"
                  >
                    <span className="relative z-10 flex items-center gap-2">Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-brand-400 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  </button>
                </form>
              </div>
            </TiltCard>
          </Reveal>

        </div>
      </div>
    </section>
  );
};

export default Contact;