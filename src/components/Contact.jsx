import React, { useState } from 'react';
import { Send, Mail, MapPin, Linkedin, Github, Check, Copy, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Contact({ personal, socials }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 900);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/40 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something <span className="text-gradient-cyan">Together</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Have an idea, project, or opportunity? I'd love to connect and learn from new experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Connect Directly
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Feel free to reach out for hackathon collaborations, tech discussions, open-source projects, or learning opportunities.
              </p>

              <div className="space-y-3">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-blue-950/80 border border-blue-800/40 text-blue-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                      <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate max-w-[190px] sm:max-w-none">
                        {socials.email}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-rose-950/80 border border-rose-800/40 text-rose-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200">
                      Jaipur, Rajasthan, India
                    </div>
                  </div>
                </div>

                {/* Social Links Row */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3.5 rounded-xl bg-slate-900/70 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 flex items-center gap-2.5 text-slate-300 hover:text-white transition-all text-xs font-semibold"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 relative">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below and I'll get back to you as soon as possible.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! Your message has been received. I look forward to connecting with you.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-xs sm:text-sm placeholder-slate-400 outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300 block">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-xs sm:text-sm placeholder-slate-400 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300 block">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message, project idea, or inquiry here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-slate-100 text-xs sm:text-sm placeholder-slate-400 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
