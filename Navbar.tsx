
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Inquiry', href: '#inquiry' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'py-3' : 'py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-500 rounded-[1.5rem] md:rounded-full px-8 flex justify-between h-16 md:h-20 items-center ${
          scrolled ? 'bg-slate-950/80 backdrop-blur-xl border border-slate-800/50 shadow-2xl' : 'bg-transparent'
        }`}>
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-black tracking-tighter uppercase gradient-text transition-transform hover:scale-105 inline-block">
              Iheb
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center">
            <a 
              href="#cta"
              className="px-6 py-3 bg-blue-600 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/20 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
