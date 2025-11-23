import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-slate-800 py-8">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </p>
        <p className="text-slate-600 text-xs mt-2">
          Built with React, Tailwind & Vibe Coding.
        </p>
      </div>
    </footer>
  );
};

export default Footer;