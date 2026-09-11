import React from 'react';
import { Target, Compass, Milestone, ArrowUpRight, Sparkles, CheckCircle } from 'lucide-react';

export default function FutureGoals({ goals }) {
  return (
    <section id="future-goals" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Vision & Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            What I'm <span className="text-gradient-cyan">Working Towards</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            A structured roadmap from first-year foundational concepts to industry-ready AI/ML engineering capability.
          </p>
        </div>

        {/* Goals Grid / Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((goal, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-slate-400 group-hover:text-cyan-400 transition-colors">
                    {goal.step}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-blue-950/70 text-blue-300 border border-blue-800/50">
                    {goal.target}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {goal.title}
                </h3>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-slate-300">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  Key Milestone
                </span>
                <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
