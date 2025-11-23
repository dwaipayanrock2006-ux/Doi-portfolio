import React from 'react';
import { User, Target, Zap, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="The person behind the strategy." />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <TiltCard className="rounded-3xl" spotlight={false}>
              <div className="relative group">
                <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative z-10 shadow-2xl shadow-slate-200">
                  <img 
                    src="https://picsum.photos/800/1000?grayscale" 
                    alt="Dwaipayan Pal" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-100 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-50 rounded-full blur-2xl -z-10 animate-pulse" />
              </div>
            </TiltCard>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={100}>
              <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                The "Vibe Coder" & <br className="md:hidden" /> Growth Strategist
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                I'm an 18-year-old BBA Business Analytics student at Bennett University, but my education goes far beyond the classroom. I operate at the intersection of <span className="font-bold text-brand-600 bg-brand-50 px-1 rounded transition-colors hover:bg-brand-100">data, product, and strategy</span>.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Currently, I'm the Growth Head Intern at Myndra AI and Co-Founder of Porobangla AI. I don't just build things; I build things that grow. My approach blends the analytical rigor of finance with the creative potential of generative AI.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <TiltCard className="rounded-2xl">
                <div className="bg-gradient-to-br from-brand-50 to-white p-8 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden group">
                  <Quote className="absolute top-4 right-4 text-brand-200 w-12 h-12 -z-0 opacity-50 group-hover:rotate-12 transition-transform duration-500" />
                  <div className="flex items-start gap-5 relative z-10">
                    <div className="p-3 bg-white rounded-xl shadow-md text-brand-600 border border-brand-50 group-hover:scale-110 transition-transform">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-brand-900">The Harvey Specter Mindset</h4>
                      <p className="text-base text-slate-700 italic">
                        "I don't play the odds, I play the man."
                      </p>
                      <p className="text-sm text-slate-500 mt-2">
                        My ethos: Confidence, strategic thinking, emotional control, and relentless execution.
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-2 gap-4">
                <TiltCard className="h-full rounded-2xl">
                  <div className="p-5 h-full rounded-2xl border border-slate-100 bg-white group hover:border-brand-200 hover:shadow-lg transition-all">
                    <Zap className="w-8 h-8 text-yellow-500 mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                    <div className="font-bold text-slate-900 text-lg">Zero-to-One</div>
                    <div className="text-sm text-slate-500">Startup Execution</div>
                  </div>
                </TiltCard>
                <TiltCard className="h-full rounded-2xl">
                  <div className="p-5 h-full rounded-2xl border border-slate-100 bg-white group hover:border-brand-200 hover:shadow-lg transition-all">
                    <User className="w-8 h-8 text-brand-600 mb-3 group-hover:scale-110 group-hover:-rotate-12 transition-transform" />
                    <div className="font-bold text-slate-900 text-lg">Brand Building</div>
                    <div className="text-sm text-slate-500">Content Strategy</div>
                  </div>
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;