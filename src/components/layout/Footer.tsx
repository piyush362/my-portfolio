import React from 'react';
import { 
  Mail, 
  Phone, 
  ArrowUp, 
  Terminal, 
  Heart,
  Smartphone
} from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundEngine.playGlassTap();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-16 pb-28 px-4 border-t border-white/10 overflow-hidden text-sm">
      
      {/* Background glowing gradient reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Terminal Header Bar */}
        <div className="liquid-glass-card rounded-2xl p-4 mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/15">
          <div className="flex items-center space-x-3 text-xs font-mono text-blue-300">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>PiyushSagar@iOS2026-macOS ~ % ./deploy_portfolio.sh --status SUCCESS</span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-white/70">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All Systems Operational (React Native 0.76+ & iOS 18 / macOS 26)</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Left Column: Brand & Bio */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                PS
              </div>
              <span className="text-xl font-bold tracking-tight text-white">Piyush Sagar</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Specialized React Native Engineer & AI Mobile Developer dedicated to building fluid, high-performance mobile applications and integrating ambient on-device intelligence.
            </p>
            <div className="flex items-center space-x-2 text-xs text-blue-300 font-mono">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Available for Full-time Roles & High-Impact Consulting</span>
            </div>
          </div>

          {/* Right Column: Quick Links & Contact Badges */}
          <div className="md:col-span-6 flex flex-col sm:flex-row justify-between gap-6">
            
            {/* Social & Direct Contact */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-white/50 font-mono font-semibold">Direct Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href={`mailto:${profileData.email}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-blue-400 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-blue-400" />
                    <span>{profileData.email}</span>
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${profileData.phone}`}
                    className="flex items-center space-x-2 text-white/80 hover:text-emerald-400 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-400" />
                    <span>{profileData.phone}</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Platform Profiles */}
            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-white/50 font-mono font-semibold">Profiles</h4>
              <div className="flex flex-wrap gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 text-white/90 hover:text-white transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/30 text-blue-200 transition-all"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex items-center space-x-2">
            <span>© {new Date().getFullYear()} Piyush Sagar. Engineered with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>& React 19 + Liquid Glass.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/90 transition-all border border-white/15"
          >
            <span>Return to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
