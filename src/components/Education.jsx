import React from 'react';
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle2 } from 'lucide-react';

export default function Education({ education }) {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Glow background */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education <span className="text-gradient-cyan">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            My ongoing academic journey and formal foundations in Computer Science Engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {education.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center shadow-neon-blue group-hover:scale-125 transition-transform duration-300">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
              </div>

              {/* Education Card */}
              <div className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 relative space-y-4">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-cyan-950/80 text-cyan-400 border border-cyan-800/40 font-semibold">
                      {item.status}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-2">
                      {item.institution}
                    </h3>
                    <p className="text-sm font-semibold text-slate-200 mt-0.5">
                      {item.degree}
                    </p>
                    <p className="text-xs font-mono text-cyan-300 mt-0.5">
                      Specialization: {item.specialization}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-400 space-y-1 font-mono">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{item.currentYear}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Focus Areas */}
                {item.keyFocus && (
                  <div className="pt-3 border-t border-slate-800/80 space-y-2">
                    <span className="text-xs font-semibold text-slate-300">
                      Key Academic Focus:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {item.keyFocus.map((focus, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/50 p-2 rounded-lg border border-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span>{focus}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
