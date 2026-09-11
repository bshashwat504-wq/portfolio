import React, { useState } from 'react';
import { Code, Layout, Brain, Wrench, Sparkles, Layers, CheckCircle } from 'lucide-react';

export default function Skills({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    Programming: <Code className="w-4 h-4 text-blue-400" />,
    'Web Development': <Layout className="w-4 h-4 text-cyan-400" />,
    'AI & Machine Learning': <Brain className="w-4 h-4 text-purple-400" />,
    'Tools & Environment': <Wrench className="w-4 h-4 text-emerald-400" />,
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & <span className="text-gradient-cyan">Competencies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Focusing on building practical foundational knowledge across programming, AI/ML concepts, modern web development, and developer tooling.
          </p>
          <div className="inline-block pt-1">
            <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
              * Indicating foundational & intermediate academic proficiency
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-dark-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
            }`}
          >
            All Categories
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat.name
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-dark-900/80 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {categoryIcons[cat.name]}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category.name}
              className="glass-card glass-card-hover rounded-2xl p-6 sm:p-7 border border-slate-800 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Category Top Banner */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
                      {categoryIcons[category.name] || <Layers className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-sans">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill List */}
                <div className="space-y-4.5 mt-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-800/80 text-cyan-300 border border-slate-700/60">
                            {skill.tag}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400">
                          {skill.level}
                        </span>
                      </div>

                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden p-0.5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 transition-all duration-1000 ease-out shadow-sm shadow-cyan-500/50"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer status */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                  Active Coursework & Practice
                </span>
                <span>Year 1 Focus</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
