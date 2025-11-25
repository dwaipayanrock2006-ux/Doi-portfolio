import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-premium ${
        scrolled ? 'glass shadow-sm border-b border-white/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter text-brand-black flex items-center gap-2 group">
          <span className="w-9 h-9 bg-brand-black text-white rounded-xl flex items-center justify-center text-sm font-bold group-hover:bg-brand-600 transition-colors duration-500 ease-premium">DP</span>
          <span className="group-hover:text-brand-600 transition-colors duration-500 ease-premium">{PERSONAL_INFO.name}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors duration-300 ease-premium relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 after:transition-all after:duration-500 after:ease-premium hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.resumeLink}
            className="px-5 py-2.5 text-sm font-medium text-white bg-brand-black rounded-full hover:bg-slate-800 transition-all duration-300 ease-premium hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900 p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg transition-all duration-500 ease-premium transform ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="py-4 px-6 flex flex-col space-y-4">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-base font-medium text-slate-700 hover:text-brand-600 pl-2 border-l-2 border-transparent hover:border-brand-600 transition-all duration-300 ease-premium"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href={PERSONAL_INFO.resumeLink}
            className="inline-block text-center px-5 py-3 text-sm font-medium text-white bg-brand-black rounded-xl hover:bg-brand-800 transition-all duration-300 ease-premium"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;