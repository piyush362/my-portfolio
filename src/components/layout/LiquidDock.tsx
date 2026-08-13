import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  FolderGit2, 
  Briefcase, 
  BrainCircuit, 
  Cpu, 
  Mail,
  Search
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEffects';

interface LiquidDockProps {
  activeSection: string;
  openSpotlight: () => void;
}

export const LiquidDock: React.FC<LiquidDockProps> = ({ activeSection, openSpotlight }) => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const dockItems = [
    { id: 'hero', label: 'Home', icon: Home, href: '#hero' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, href: '#projects' },
    { id: 'ai-hub', label: 'AI Mobile Hub', icon: Cpu, href: '#ai-hub' },
    { id: 'experience', label: 'Experience', icon: Briefcase, href: '#experience' },
    { id: 'skills', label: 'Skills & Tech', icon: BrainCircuit, href: '#skills' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <motion.div 
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="flex items-center space-x-2 sm:space-x-3 px-4 py-2.5 liquid-dock border border-white/20 shadow-2xl backdrop-blur-3xl rounded-full"
      >
        {dockItems.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredIdx === idx;

          return (
            <div key={item.id} className="relative group">
              
              {/* Floating Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[10px] font-medium whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
                {item.label}
              </div>

              {/* Dock Icon Button */}
              <motion.a
                href={item.href}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  soundEngine.playHoverTick();
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => soundEngine.playGlassTap()}
                whileHover={{ scale: 1.25, y: -8 }}
                whileTap={{ scale: 0.95 }}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-gradient-to-tr from-blue-600 to-indigo-500 text-white shadow-lg shadow-blue-500/40 border border-blue-300/40' 
                    : 'bg-white/10 hover:bg-white/20 text-white/80 hover:text-white border border-white/10'
                }`}
              >
                <Icon className="w-5 h-5" />

                {/* Active Indicator Dot under icon */}
                {isActive && (
                  <motion.span 
                    layoutId="activeDot"
                    className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-glow"
                  />
                )}
              </motion.a>
            </div>
          );
        })}

        {/* Separator Line */}
        <div className="h-6 w-[1px] bg-white/20 mx-1" />

        {/* macOS Spotlight Trigger Icon */}
        <div className="relative group">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-[10px] font-medium whitespace-nowrap border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            Spotlight Search (Cmd+K)
          </div>
          <motion.button
            whileHover={{ scale: 1.25, y: -8 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              soundEngine.playGlassTap();
              openSpotlight();
            }}
            className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-tr from-purple-600/60 to-pink-500/60 hover:from-purple-600 hover:to-pink-500 text-white border border-white/20 shadow-md"
          >
            <Search className="w-5 h-5" />
          </motion.button>
        </div>

      </motion.div>
    </div>
  );
};
