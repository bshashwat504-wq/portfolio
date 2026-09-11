import React, { useState } from 'react';
import { X, Check, Copy, Sparkles, RefreshCw } from 'lucide-react';

export default function EditProfileModal({
  isOpen,
  onClose,
  currentData,
  onSave,
  onReset,
}) {
  const [formData, setFormData] = useState({
    name: currentData.personal.name,
    initials: currentData.personal.initials,
    role: currentData.personal.role,
    university: currentData.personal.university,
    location: currentData.personal.location,
    email: currentData.socials.email,
    github: currentData.socials.github,
    linkedin: currentData.socials.linkedin,
  });

  const [copiedCode, setCopiedCode] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleCopyConfig = () => {
    const snippet = `// Update your src/data/portfolioData.js:
export const portfolioData = {
  personal: {
    name: "${formData.name}",
    initials: "${formData.initials}",
    role: "${formData.role}",
    year: "1st Year Student",
    university: "${formData.university}",
    location: "${formData.location}",
    ...
  },
  socials: {
    github: "${formData.github}",
    linkedin: "${formData.linkedin}",
    email: "${formData.email}",
    ...
  }
};`;
    navigator.clipboard.writeText(snippet);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card rounded-2xl max-w-xl w-full p-6 border border-slate-700 relative max-h-[90vh] overflow-y-auto space-y-5 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-bold text-white">
              Live Customizer & Quick Personalization
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs text-slate-300">
          Enter your real details below to instantly preview your live portfolio. You can also edit the file <code>src/data/portfolioData.js</code>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Your Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Avatar Initials (e.g. SN, JS)
              </label>
              <input
                type="text"
                maxLength={4}
                value={formData.initials}
                onChange={(e) => setFormData({ ...formData, initials: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">
                Academic Specialization & Branch
              </label>
              <input
                type="text"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                University Name
              </label>
              <input
                type="text"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1 sm:col-span-2">
              <label className="text-xs font-semibold text-slate-300">
                Contact Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                GitHub URL
              </label>
              <input
                type="text"
                value={formData.github}
                onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-300">
                LinkedIn URL
              </label>
              <input
                type="text"
                value={formData.linkedin}
                onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:border-cyan-400 outline-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={onReset}
              className="px-3 py-2 rounded-xl text-xs font-medium text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800 flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyConfig}
                className="px-3 py-2 rounded-xl text-xs font-medium text-cyan-300 bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-800/60 flex items-center gap-1.5"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCode ? 'Copied Snippet!' : 'Copy Config'}</span>
              </button>

              <button
                type="submit"
                className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md"
              >
                Apply Live
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
