import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Cpu, Brain, ExternalLink } from 'lucide-react';

export default function Hero({ personal, socials }) {
  const [typedText, setTypedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'AI & Machine Learning Student',
    'B.Tech CSE @ JECRC University',
    'Python & Problem Solving Enthusiast',
    'Aspiring AI/ML Engineer',
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    let timer;

    if (!isDeleting && typedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(
        () => {
          setTypedText(
            isDeleting
              ? currentPhrase.substring(0, typedText.length - 1)
              : currentPhrase.substring(0, typedText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Ambient background glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Introduction & CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300">
              1st Year B.Tech CSE (AI & ML) • JECRC University
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                {personal.name}
              </span>
            </h1>
            <div className="h-9 sm:h-10 flex items-center">
              <span className="font-mono text-lg sm:text-2xl text-cyan-400 font-semibold">
                &gt; {typedText}
              </span>
              <span className="w-2.5 h-6 bg-cyan-400 ml-1.5 animate-pulse inline-block"></span>
            </div>
          </div>

          {/* University subtitle */}
          <p className="text-sm sm:text-base font-medium text-slate-400">
            {personal.role} —{' '}
            <span className="text-slate-200">{personal.year} at {personal.university}, Jaipur</span>
          </p>

          {/* Short Bio */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl bg-dark-900/30 p-4 rounded-2xl border border-slate-800/60 backdrop-blur-sm">
            {personal.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
            <a
              href="#projects"
              className="relative group px-6 py-3.5 rounded-xl font-semibold text-sm text-white overflow-hidden shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 group-hover:opacity-90 transition-opacity"></div>
              <span className="relative z-10 flex items-center gap-2">
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all hover:text-white flex items-center justify-center gap-2 w-full sm:w-auto shadow-md"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Social Icons & Status */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800/70 w-full">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Connect:
            </span>
            <div className="flex items-center gap-2.5">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-600/20 text-slate-400 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all hover:-translate-y-0.5"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-blue-600/20 text-slate-400 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 transition-all hover:-translate-y-0.5"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-purple-600/20 text-slate-400 hover:text-purple-400 border border-slate-800 hover:border-purple-500/40 transition-all hover:-translate-y-0.5"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-1.5 text-xs text-slate-400 font-mono">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>Jaipur, RJ</span>
            </div>
          </div>
        </div>

        {/* Right Column: AI / Tech Visualizer Card */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Glow Backing */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-purple-600/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>

            {/* Futuristic Tech Box */}
            <div className="relative glass-card rounded-2xl p-5 sm:p-6 shadow-2xl border border-slate-700/60 overflow-hidden">
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                    <Terminal className="w-3 h-3 text-cyan-400" />
                    aiml_student_env.py
                  </span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                  active
                </span>
              </div>

              {/* Code / Visual Representation */}
              <div className="space-y-3 font-mono text-xs sm:text-[13px] leading-relaxed">
                <p className="text-slate-400">
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-cyan-300">StudentEngineer</span>:
                </p>
                <div className="pl-4 space-y-1.5 border-l border-slate-800/80">
                  <p className="text-slate-300">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-300">__init__</span>(self):
                  </p>
                  <div className="pl-4 space-y-1 text-slate-300">
                    <p>
                      self.name = <span className="text-emerald-300">"{personal.name}"</span>
                    </p>
                    <p>
                      self.university = <span className="text-emerald-300">"JECRC University"</span>
                    </p>
                    <p>
                      self.year = <span className="text-amber-300">1</span>{' '}
                      <span className="text-slate-500"># 1st Year CSE (AI&ML)</span>
                    </p>
                    <p>
                      self.interests = [
                      <span className="text-cyan-300">"AI/ML"</span>,{' '}
                      <span className="text-cyan-300">"Python"</span>,{' '}
                      <span className="text-cyan-300">"Web"</span>
                      ]
                    </p>
                    <p>
                      self.curiosity = <span className="text-purple-300">float('inf')</span>
                    </p>
                  </div>

                  <p className="text-slate-300 pt-1">
                    <span className="text-purple-400">def</span>{' '}
                    <span className="text-blue-300">current_mission</span>(self):
                  </p>
                  <div className="pl-4 text-slate-300">
                    <p>
                      <span className="text-purple-400">return</span>{' '}
                      <span className="text-emerald-300">"Building strong fundamentals & solving real problems"</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Neural Mini-Stats */}
              <div className="mt-5 pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center justify-center text-cyan-400 mb-1">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-200">1st Year</div>
                  <div className="text-[10px] text-slate-400">Undergrad</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center justify-center text-blue-400 mb-1">
                    <Brain className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-200">AI & ML</div>
                  <div className="text-[10px] text-slate-400">Specialization</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center justify-center text-purple-400 mb-1">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-200">Jaipur</div>
                  <div className="text-[10px] text-slate-400">JECRC Univ</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
