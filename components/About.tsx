import React, { useState } from 'react';
import { User, Target, Zap, Quote } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  // Use the profile image defined in constants
  const [imgSrc, setImgSrc] = useState(PERSONAL_INFO.profileImage);

  const handleImageError = () => {
    // If the user's link fails (which it will if it's a git repo URL), 
    // we normally fallback. I've commented out the auto-fallback so you can see 
    // the broken image and confirm the code is trying to use your link.
    
    // Uncomment the line below to restore the professional placeholder fallback:
    // setImgSrc("https://github.com/dwaipayanrock2006-ux/Doi-portfolio/blob/e1b4fcfb92708317693fc9a2bccbababd77b2b09/Dwaipayan.jpeg");
    console.warn("Image failed to load. Please check the URL in constants.tsx");
  };

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="About Me" subtitle="The person behind the strategy." />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal direction="right">
            <TiltCard className="rounded-3xl" spotlight={false}>
              <div className="relative group">
                {/* Main Image Container */}
                <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative z-10 shadow-2xl shadow-slate-200 ring-4 ring-white border border-slate-100">
                  <img 
                    src={imgSrc} 
                    alt="Dwaipayan Pal - Portrait" 
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-1000 ease-premium"
                    onError={handleImageError}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-premium" />
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-brand-100 rounded-3xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700 ease-premium" />
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-slate-50 rounded-3xl -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-700 ease-premium" />
                
                {/* Animated Backdrop Blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-100/30 rounded-full blur-3xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-premium pointer-events-none" />
              </div>
            </TiltCard>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={100}>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-brand-black leading-tight">
                The "Vibe Coder" & <br className="hidden md:block" /> Growth Strategist
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                I'm an 18-year-old BBA Business Analytics student at Bennett University, but my education goes far beyond the classroom. I operate at the intersection of <span className="font-bold text-brand-700 bg-brand-50 px-1 rounded transition-colors duration-300 hover:bg-brand-100">data, product, and strategy</span>.
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                Currently, I'm the Growth Head Intern at Myndra AI and Co-Founder of Porobangla AI. I don't just build things; I build things that grow. My approach blends the analytical rigor of finance with the creative potential of generative AI.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <TiltCard className="rounded-2xl">
                <div className="bg-gradient-to-br from-brand-50/80 to-white p-8 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow duration-500 ease-premium">
                  <Quote className="absolute top-4 right-4 text-brand-200/50 w-16 h-16 -z-0 group-hover:rotate-12 group-hover:text-brand-200 transition-all duration-700 ease-premium" />
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5 relative z-10">
                    <div className="p-3 bg-white rounded-xl shadow-sm text-brand-600 border border-brand-50 group-hover:scale-110 transition-transform duration-500 ease-premium w-fit">
                      <Target size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-2 text-brand-900">The Harvey Specter Mindset</h4>
                      <p className="text-lg text-slate-700 italic font-serif leading-relaxed">
                        "I don't play the odds, I play the man."
                      </p>
                      <div className="h-px w-12 bg-brand-200 my-3" />
                      <p className="text-sm text-slate-500 font-medium">
                        Confidence • Strategic Thinking • Emotional Control • Execution
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>

            <Reveal delay={300}>
              <div className="grid grid-cols-2 gap-4">
                <TiltCard className="h-full rounded-2xl">
                  <div className="p-5 h-full rounded-2xl border border-slate-100 bg-white group hover:border-brand-200 hover:shadow-lg transition-all duration-500 ease-premium">
                    <div className="mb-3 p-2 bg-yellow-50 w-fit rounded-lg group-hover:bg-yellow-100 transition-colors duration-300">
                      <Zap className="w-6 h-6 text-yellow-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500 ease-premium" />
                    </div>
                    <div className="font-bold text-slate-900 text-lg">Zero-to-One</div>
                    <div className="text-sm text-slate-500">Startup Execution</div>
                  </div>
                </TiltCard>
                <TiltCard className="h-full rounded-2xl">
                  <div className="p-5 h-full rounded-2xl border border-slate-100 bg-white group hover:border-brand-200 hover:shadow-lg transition-all duration-500 ease-premium">
                    <div className="mb-3 p-2 bg-brand-50 w-fit rounded-lg group-hover:bg-brand-100 transition-colors duration-300">
                      <User className="w-6 h-6 text-brand-600 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500 ease-premium" />
                    </div>
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