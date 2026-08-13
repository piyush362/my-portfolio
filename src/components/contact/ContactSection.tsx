import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Mail, 
  Phone, 
  Send, 
  FileText, 
  CheckCircle2, 
  MessageSquare
} from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

interface ContactSectionProps {
  openResumeModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ openResumeModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Mobile / AI Role Opportunity',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEngine.playSuccessChime();
    
    // Trigger confetti fireworks
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
            <Mail className="w-4 h-4 text-blue-400" />
            <span>Let's Build Extraordinary Mobile Apps Together</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Whether you have an exciting mobile role, an AI project, or want to discuss React Native engineering, feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Direct Contact Info & Resume Button */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone */}
            <a
              href={`tel:${profileData.phone}`}
              onClick={() => soundEngine.playGlassTap()}
              className="liquid-glass-card rounded-2xl p-5 border border-white/20 flex items-center space-x-4 hover:border-emerald-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-mono">Direct Phone / WhatsApp</p>
                <p className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {profileData.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${profileData.email}`}
              onClick={() => soundEngine.playGlassTap()}
              className="liquid-glass-card rounded-2xl p-5 border border-white/20 flex items-center space-x-4 hover:border-blue-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-mono">Official Email</p>
                <p className="text-base font-bold text-white group-hover:text-blue-300 transition-colors truncate max-w-[220px] sm:max-w-none">
                  {profileData.email}
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playGlassTap()}
              className="liquid-glass-card rounded-2xl p-5 border border-white/20 flex items-center space-x-4 hover:border-indigo-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-mono">LinkedIn Profile</p>
                <p className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
                  linkedin.com/in/piyushsagar362
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playGlassTap()}
              className="liquid-glass-card rounded-2xl p-5 border border-white/20 flex items-center space-x-4 hover:border-purple-400/40 transition-all group"
            >
              <div className="p-3 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-white/50 font-mono">GitHub Profile</p>
                <p className="text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                  github.com/piyush362
                </p>
              </div>
            </a>

            {/* Resume Trigger Card */}
            <div 
              onClick={() => {
                soundEngine.playGlassTap();
                openResumeModal();
              }}
              className="liquid-glass-card rounded-2xl p-5 border border-blue-400/40 bg-blue-900/20 cursor-pointer hover:bg-blue-900/30 transition-all flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-blue-300" />
                <div>
                  <p className="text-sm font-bold text-white">Download Resume PDF</p>
                  <p className="text-xs text-blue-200">Google Drive Document Link</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-xl bg-blue-600 text-white text-xs font-semibold">View</span>
            </div>

          </div>

          {/* Right Column: Liquid Glass Interactive Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                  <p className="text-white/70 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'Friend'}! Piyush will get back to you shortly at {formData.email || 'your email'}.
                  </p>
                  <button
                    onClick={() => {
                      soundEngine.playGlassTap();
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Mobile / AI Role Opportunity', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center space-x-2 text-xs font-mono text-blue-300 pb-2 border-b border-white/10">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span>Direct Message Dispatcher</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/70">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/60"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-white/70">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/60"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/70">Subject / Role Title</label>
                    <input
                      type="text"
                      required
                      placeholder="React Native Role / Project Inquiry"
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-white/70">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hi Piyush, we are looking for a React Native / AI Mobile Developer..."
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-white/15 text-white placeholder-white/30 text-sm focus:outline-none focus:border-blue-400/60 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 border border-blue-300/40 flex items-center justify-center space-x-2 transition-all hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Message & Trigger Celebration</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
