import React, { useState } from 'react';
import SectionHeading from './ui/SectionHeading';
import { PROJECTS } from '../constants';
import { ArrowUpRight, Layers } from 'lucide-react';
import Reveal from './ui/Reveal';
import TiltCard from './ui/TiltCard';

const CATEGORIES = ['All', 'Product', 'Growth', 'Content', 'Tech'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(p => p.highlight);

  return (
    <section id="projects" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading title="Featured Projects" subtitle="Ventures where I'm leading the charge." />

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-brand-black text-white shadow-lg scale-105' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600 hover:-translate-y-0.5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.title} width="100%" delay={index * 100}>
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center group`}>
                <div className="w-full lg:w-1/2">
                  <TiltCard className="rounded-3xl" spotlight={false}>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[4/3] group-hover:shadow-brand-900/10 transition-shadow duration-500">
                      <div className="absolute inset-0 bg-brand-900/0 group-hover:bg-brand-900/10 transition-colors duration-500 z-10" />
                      <img 
                        src={project.imagePlaceholder} 
                        alt={project.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </TiltCard>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase animate-fade-in">
                    <Layers size={14} />
                    {project.role}
                  </div>
                  <h3 className="text-4xl font-bold text-brand-black group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-800 group-hover:to-brand-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-sm text-slate-600 font-medium hover:border-brand-300 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-6">
                    <button className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-brand-black font-semibold hover:bg-brand-black hover:text-white transition-all shadow-sm hover:shadow-lg group/btn hover:scale-105 active:scale-95">
                      View Project <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          {featuredProjects.length === 0 && (
             <div className="text-center text-slate-500 py-10">No featured projects in this category.</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;