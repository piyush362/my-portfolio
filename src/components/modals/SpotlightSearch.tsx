import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  X, 
  Command, 
  Smartphone, 
  Briefcase, 
  BrainCircuit, 
  Mail, 
  FileText,
  ChevronRight
} from 'lucide-react';
import { projectsData, experienceData, skillsCategories, profileData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

interface SpotlightItem {
  id: string;
  type: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  action?: () => void;
}

interface SpotlightSearchProps {
  isOpen: boolean;
  onClose: () => void;
  openResumeModal: () => void;
}

export const SpotlightSearch: React.FC<SpotlightSearchProps> = ({ isOpen, onClose, openResumeModal }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        soundEngine.playGlassTap();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const projectItems: SpotlightItem[] = projectsData
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.summary.toLowerCase().includes(query.toLowerCase()))
    .map(p => ({
      id: `project-${p.id}`,
      type: 'Project',
      title: p.title,
      subtitle: p.tagline,
      icon: Smartphone,
      href: '#projects'
    }));

  const experienceItems: SpotlightItem[] = experienceData
    .filter(e => e.company.toLowerCase().includes(query.toLowerCase()) || e.role.toLowerCase().includes(query.toLowerCase()))
    .map(e => ({
      id: `exp-${e.id}`,
      type: 'Experience',
      title: `${e.role} @ ${e.company}`,
      subtitle: e.duration,
      icon: Briefcase,
      href: '#experience'
    }));

  const skillItems: SpotlightItem[] = skillsCategories
    .flatMap(c => c.skills.filter(s => s.name.toLowerCase().includes(query.toLowerCase())))
    .map(s => ({
      id: `skill-${s.name}`,
      type: 'Skill',
      title: s.name,
      subtitle: s.tag || 'Technical Skill',
      icon: BrainCircuit,
      href: '#skills'
    }));

  const contactItems: SpotlightItem[] = [
    {
      id: 'contact-phone',
      type: 'Contact',
      title: `Call Piyush (${profileData.phone})`,
      subtitle: 'Direct Phone / WhatsApp',
      icon: Mail,
      href: `tel:${profileData.phone}`
    },
    {
      id: 'resume-pdf',
      type: 'Document',
      title: 'View Resume PDF Document',
      subtitle: 'Google Drive Link',
      icon: FileText,
      action: () => {
        onClose();
        openResumeModal();
      }
    }
  ];

  const searchResults: SpotlightItem[] = [
    ...projectItems,
    ...experienceItems,
    ...skillItems,
    ...contactItems
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundEngine.playGlassTap();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Spotlight Modal Box */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="relative w-full max-w-2xl liquid-glass-card rounded-3xl border border-white/25 shadow-2xl z-10 overflow-hidden"
        >
          {/* Search Bar Input */}
          <div className="flex items-center space-x-3 p-4 border-b border-white/10 bg-slate-900/80">
            <Search className="w-5 h-5 text-blue-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type to search projects, experience, skills, resume..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full bg-transparent text-white placeholder-white/40 text-base focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 text-white/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:flex items-center space-x-0.5 text-[10px] bg-white/15 px-2 py-1 rounded text-white/80 font-mono">
              ESC
            </kbd>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-2 space-y-1">
            {searchResults.length > 0 ? (
              searchResults.map(item => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => {
                      soundEngine.playGlassTap();
                      if (item.action) {
                        item.action();
                      } else if (item.href) {
                        window.location.href = item.href;
                        onClose();
                      }
                    }}
                    className="flex items-center justify-between p-3 rounded-2xl hover:bg-white/15 cursor-pointer transition-colors border border-transparent hover:border-white/10 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </p>
                        <p className="text-xs text-white/50 font-mono">{item.subtitle}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/60">
                        {item.type}
                      </span>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="py-8 text-center text-xs text-white/50 font-mono">
                No matching results found for "{query}".
              </div>
            )}
          </div>

          {/* Spotlight Footer */}
          <div className="px-4 py-2.5 bg-slate-950/80 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 font-mono">
            <span>macOS Spotlight Search Engine 2026</span>
            <div className="flex items-center space-x-1">
              <Command className="w-3 h-3" />
              <span>+ K to toggle search anytime</span>
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
