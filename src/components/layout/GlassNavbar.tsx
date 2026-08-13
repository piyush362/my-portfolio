import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Search, 
  Wifi, 
  BatteryCharging, 
  Sparkles,
  Command,
  FileText
} from 'lucide-react';
import { soundEngine } from '../../utils/soundEffects';

interface GlassNavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  openSpotlight: () => void;
  openResumeModal: () => void;
}

export const GlassNavbar: React.FC<GlassNavbarProps> = ({
  darkMode,
  setDarkMode,
  openSpotlight,
  openResumeModal
}) => {
  const [time, setTime] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [isMuted, setIsMuted] = useState<boolean>(soundEngine.getMuted());

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setDate(now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioToggle = () => {
    const muted = soundEngine.toggleMute();
    setIsMuted(muted);
    if (!muted) soundEngine.playGlassTap();
  };

  const handleThemeToggle = () => {
    soundEngine.playGlassTap();
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-2 pointer-events-auto">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-10 px-4 rounded-full liquid-glass-bar border border-white/10 shadow-lg text-xs font-medium tracking-wide">
        
        {/* Left: macOS Brand / Profile indicator */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5 items-center">
            <span className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-400 cursor-pointer shadow-sm transition-colors" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-400 cursor-pointer shadow-sm transition-colors" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-400 cursor-pointer shadow-sm transition-colors" />
          </div>

          <span className="h-3 w-[1px] bg-white/20 dark:bg-white/20 bg-black/10 hidden sm:block" />

          <a 
            href="#hero" 
            className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors group font-semibold"
            onClick={() => soundEngine.playGlassTap()}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400 group-hover:rotate-12 transition-transform" />
            <span className="hidden sm:inline">Piyush Sagar</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 hidden md:inline">
              React Native & AI Mobile
            </span>
          </a>
        </div>

        {/* Center: macOS Spotlight Quick Command Trigger */}
        <button
          onClick={() => {
            soundEngine.playGlassTap();
            openSpotlight();
          }}
          className="flex items-center space-x-2 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 hover:text-white transition-all shadow-inner group"
        >
          <Search className="w-3 h-3 text-blue-400" />
          <span className="hidden md:inline text-white/70 group-hover:text-white">Search projects, skills...</span>
          <kbd className="hidden sm:flex items-center space-x-0.5 text-[10px] bg-white/15 px-1.5 py-0.5 rounded text-white/90 font-mono">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </kbd>
        </button>

        {/* Right: macOS Menu Bar Utilities */}
        <div className="flex items-center space-x-3">
          
          {/* Resume PDF Quick View Button */}
          <button
            onClick={() => {
              soundEngine.playGlassTap();
              openResumeModal();
            }}
            className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-200 transition-all shadow-sm"
            title="View Resume"
          >
            <FileText className="w-3 h-3 text-blue-300" />
            <span className="hidden sm:inline font-medium">Resume</span>
          </button>

          {/* Sound Mute Toggle */}
          <button
            onClick={handleAudioToggle}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title={isMuted ? "Enable Glass Sound Effects" : "Mute Sound Effects"}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-green-400" />}
          </button>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            title={darkMode ? "Switch to Light Mode" : "Switch to Liquid Dark Mode"}
          >
            {darkMode ? <Sun className="w-3.5 h-3.5 text-amber-300" /> : <Moon className="w-3.5 h-3.5 text-indigo-300" />}
          </button>

          {/* Wifi & Battery Status */}
          <div className="hidden lg:flex items-center space-x-2 text-white/70">
            <Wifi className="w-3.5 h-3.5 text-emerald-400" />
            <BatteryCharging className="w-3.5 h-3.5 text-blue-400" />
          </div>

          {/* Clock & Date */}
          <div className="flex items-center space-x-1.5 text-white/90 font-mono text-[11px] pl-1">
            <span className="hidden lg:inline text-white/60">{date}</span>
            <span className="font-bold">{time}</span>
          </div>

        </div>

      </div>
    </header>
  );
};
