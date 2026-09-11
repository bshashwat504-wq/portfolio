import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Sparkles, Terminal, Edit3 } from 'lucide-react';

export default function Navbar({ personal, onOpenResume, onOpenCustomizer }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'achievements', 'learning', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyber-blue rounded-lg"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyber-blue via-indigo-600 to-cyber-purple p-[1px] shadow-neon-blue/30 shadow-md">
            <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center group-hover:bg-dark-850 transition-colors">
              <span className="font-mono font-bold text-base text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                {personal.initials || 'SN'}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-100 text-sm sm:text-base tracking-tight group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              {personal.name}
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            </span>
            <span className="text-[11px] text-slate-400 font-mono">
              JECRC • AI & ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-dark-900/60 backdrop-blur-md p-1.5 rounded-full border border-slate-800/80 shadow-inner">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Quick Edit button for the student to update their details live */}
          <button
            onClick={onOpenCustomizer}
            className="px-3 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 transition-all flex items-center gap-1.5"
            title="Customize your portfolio details"
          >
            <Edit3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Customize</span>
          </button>

          {/* Download Resume Button */}
          <button
            onClick={onOpenResume}
            className="relative group px-4 py-2 rounded-xl text-xs font-semibold text-white overflow-hidden shadow-lg shadow-blue-600/20 transition-all active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-indigo-600 to-cyber-purple transition-all duration-300 group-hover:opacity-90"></div>
            <div className="relative flex items-center gap-1.5">
              <FileDown className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              <span>Resume</span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenCustomizer}
            className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-800/60 border border-slate-700/60 sm:hidden"
            title="Customize details"
          >
            <Edit3 className="w-4 h-4 text-cyan-400" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-300 hover:text-white bg-dark-900 border border-slate-800 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-nav border-t border-slate-800/80 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-slate-600">→</span>
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-cyber-blue to-indigo-600 flex items-center justify-center gap-2"
            >
              <FileDown className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
