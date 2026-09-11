import React, { useState } from 'react';
import { Award, Trophy, BookmarkCheck, Users, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Achievements({ achievements }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const typeIcons = {
    Certification: <Award className="w-4 h-4 text-cyan-400" />,
    'Hackathon / Competition': <Trophy className="w-4 h-4 text-amber-400" />,
    Workshop: <BookmarkCheck className="w-4 h-4 text-purple-400" />,
    'Academic Milestone': <Users className="w-4 h-4 text-blue-400" />,
  };

  const filteredAchievements =
    activeFilter === 'All'
      ? achievements
      : achievements.filter((a) => a.type.includes(activeFilter));

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-800/40 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Achievements & <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Recognitions, verified technical certifications, workshops, and hackathon participation milestones.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['All', 'Certification', 'Hackathon', 'Workshop', 'Academic'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-dark-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAchievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {typeIcons[item.type] || <Award className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <span className="text-xs font-mono text-cyan-300">
                      {item.type}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-800/90 text-slate-300 border border-slate-700">
                    {item.year}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-300 mt-0.5">
                    {item.issuer}
                  </p>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {item.badge}
                </span>

                <span className="text-slate-400 text-[11px] font-mono">
                  Editable Placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
