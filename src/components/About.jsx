import React from 'react';
import { User, MapPin, GraduationCap, Sparkles, BookOpen, Brain, Code, Award, CheckCircle2 } from 'lucide-react';

export default function About({ personal, stats }) {
  const highlights = [
    { title: '1st Year B.Tech CSE', desc: 'Focusing on Computer Science & AI/ML fundamentals' },
    { title: 'JECRC University', desc: 'Active student at the premier tech campus in Jaipur' },
    { title: 'Passionate Programmer', desc: 'Building problem-solving intuition with Python & C/C++' },
    { title: 'Continuous Learner', desc: 'Exploring modern web stacks, data science & AI tools' },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Know Me Better</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About <span className="text-gradient-cyan">Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A 1st-year engineering student dedicated to mastering computer science and modern artificial intelligence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Cyber Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative group mx-auto max-w-sm">
              {/* Glowing gradient frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/40 via-blue-600/40 to-purple-600/40 blur-lg opacity-60 group-hover:opacity-100 transition duration-500"></div>

              <div className="relative glass-card rounded-2xl p-6 border border-slate-700/80 text-center space-y-5 shadow-xl">
                {/* Profile Placeholder / Avatar */}
                <div className="relative mx-auto w-36 h-36 rounded-2xl p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-neon-blue">
                  <div className="w-full h-full bg-dark-900 rounded-[14px] flex flex-col items-center justify-center relative overflow-hidden group-hover:bg-dark-850 transition-colors">
                    {/* Abstract avatar visual */}
                    <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-cyan-400 mb-1">
                      <Brain className="w-9 h-9 animate-pulse" />
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">
                      AI & ML Explorer
                    </span>
                  </div>
                  {/* Active online dot */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-dark-950 rounded-full"></span>
                </div>

                {/* Identity Info */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {personal.name}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    B.Tech CSE (AI & ML)
                  </p>
                </div>

                {/* Badges */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-left text-xs text-slate-300">
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="font-medium text-slate-200">{personal.university}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span className="font-medium text-slate-300">{personal.location}</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                    <span className="font-medium text-slate-300">{personal.statusBadge}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Academic Story & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span>Passionate About Building The Future with AI</span>
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {personal.aboutBio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {highlights.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold text-slate-200">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick 4 Stats Section as requested */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover rounded-2xl p-4 border border-slate-800 text-center flex flex-col justify-center items-center"
                >
                  <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 mt-1">
                    {stat.label}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {stat.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
