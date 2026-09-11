import React, { useState } from 'react';
import { FolderGit2, Github, ExternalLink, Sparkles, Terminal, Code2, Cpu, Eye, Check } from 'lucide-react';

export default function Projects({ projects }) {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Practical Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Hands-on projects developed to apply computer science theory, AI/ML models, and web development fundamentals.
          </p>
        </div>

        {/* Projects Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl border border-slate-800 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-dark-850 to-indigo-950/70 p-5 flex flex-col justify-between border-b border-slate-800 overflow-hidden">
                  {/* Subtle decorative grid/glow */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-lg bg-dark-950/80 text-cyan-400 border border-cyan-500/30">
                      Project #{project.id}
                    </span>
                    <span className="text-[11px] font-medium text-slate-300 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 text-cyan-300 font-mono text-xs">
                      {project.category.includes('AI') ? (
                        <Cpu className="w-4 h-4 text-purple-400" />
                      ) : project.category.includes('Python') ? (
                        <Terminal className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Code2 className="w-4 h-4 text-blue-400" />
                      )}
                      <span>{project.highlight}</span>
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 group-hover:border-slate-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-600 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    if (project.liveDemoUrl === '#') {
                      e.preventDefault();
                      setActiveModalProject(project);
                    }
                  }}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Details Modal for Demo preview */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card rounded-2xl max-w-lg w-full p-6 border border-slate-700 relative space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-cyan-400">
                Project #{activeModalProject.id} Overview
              </span>
              <button
                onClick={() => setActiveModalProject(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {activeModalProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <span className="font-semibold text-slate-200">Tech Stack:</span>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-800 text-cyan-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs font-mono text-slate-400 p-3 rounded-lg bg-blue-950/40 border border-blue-800/40">
                💡 <em>Note: Live demo URL is ready to be linked to your hosted deployment (e.g. Vercel / GitHub Pages).</em>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-medium bg-slate-800 text-slate-300 hover:text-white"
              >
                Close
              </button>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Visit Repository</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
