import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp, Sparkles } from 'lucide-react';

export default function Footer({ personal, socials }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-dark-950 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-8 sm:flex-row">
        {/* Brand details */}
        <div className="text-center sm:text-left space-y-2">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-lg font-bold text-white tracking-tight">
              {personal.name}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-950 text-cyan-400 border border-blue-800/50">
              JECRC Univ
            </span>
          </div>
          <p className="text-xs text-slate-400 font-sans max-w-sm">
            {personal.role}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/30 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-purple-500/30 transition-all"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all ml-2"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
        <p>© 2026 {personal.name}. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Crafted for 1st-Year CSE (AI & ML) Portfolio • JECRC Jaipur
        </p>
      </div>
    </footer>
  );
}
