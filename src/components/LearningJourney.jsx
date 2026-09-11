import React from 'react';
import { BookOpenCheck, Code, Binary, Brain, Globe, GitBranch, Sparkles, Quote } from 'lucide-react';

export default function LearningJourney({ modules, quote }) {
  const iconMap = {
    Code: <Code className="w-5 h-5 text-blue-400" />,
    Binary: <Binary className="w-5 h-5 text-purple-400" />,
    Brain: <Brain className="w-5 h-5 text-cyan-400" />,
    Globe: <Globe className="w-5 h-5 text-indigo-400" />,
    GitBranch: <GitBranch className="w-5 h-5 text-emerald-400" />,
    Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  };

  return (
    <section id="learning" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800/40 text-indigo-300 text-xs font-mono uppercase tracking-wider">
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Active Curriculum & Exploration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Currently <span className="text-gradient-cyan">Learning</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            My daily focus areas in Computer Science Engineering & Artificial Intelligence.
          </p>
        </div>

        {/* Motivational Quote Banner as requested */}
        <div className="mb-14 relative max-w-3xl mx-auto">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-md"></div>
          <div className="relative glass-card rounded-2xl p-6 sm:p-7 border border-slate-700/70 text-center space-y-3">
            <Quote className="w-8 h-8 text-cyan-400/60 mx-auto" />
            <p className="text-slate-200 text-base sm:text-lg font-medium italic leading-relaxed">
              "{quote}"
            </p>
            <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
              — 1st Year B.Tech CSE (AI & ML) Philosophy
            </div>
          </div>
        </div>

        {/* Learning Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, idx) => (
            <div
              key={idx}
              className={`glass-card glass-card-hover rounded-2xl p-6 border ${module.borderColor} bg-gradient-to-br ${module.color} flex flex-col justify-between space-y-4`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-md">
                    {iconMap[module.icon] || <Code className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 border border-slate-800">
                    Active Study
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight">
                  {module.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {module.status}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
                  In Progress
                </span>
                <span>Self-Paced & College</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
