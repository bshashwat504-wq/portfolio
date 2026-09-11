import React from 'react';
import { FileDown, X, ExternalLink, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose, personal }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card rounded-2xl max-w-md w-full p-6 border border-slate-700 relative space-y-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-cyan-400">
            <FileDown className="w-4 h-4" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider">
              Student Resume
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
            <h4 className="text-base font-bold text-white">
              {personal.name}
            </h4>
            <p className="text-xs font-mono text-cyan-300">
              {personal.role}
            </p>
            <p className="text-xs text-slate-400">
              {personal.university}, Jaipur • 1st Year Undergrad
            </p>
          </div>

          <div className="space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Includes Programming & AI/ML coursework</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Academic projects & code repositories</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Certifications & workshop achievements</span>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-blue-950/40 border border-blue-800/40 text-[11px] font-mono text-slate-400">
            💡 <em>To link your real PDF resume, place your resume file in the <code>public/</code> folder and update <code>resumeUrl</code> in <code>src/data/portfolioData.js</code>.</em>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-xs font-medium bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
          >
            Close
          </button>

          <a
            href={personal.resumeUrl === '#resume' ? '#' : personal.resumeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              if (personal.resumeUrl === '#resume') {
                e.preventDefault();
                alert('Resume link placeholder active. Update resumeUrl in src/data/portfolioData.js with your Google Drive or PDF link!');
              }
            }}
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
