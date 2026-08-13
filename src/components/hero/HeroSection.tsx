import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Smartphone, 
  BrainCircuit, 
  ArrowRight, 
  FileDown, 
  FolderGit2, 
  Cpu,
  CheckCircle2,
  Zap,
  Globe
} from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

interface HeroSectionProps {
  openResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ openResumeModal }) => {
  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 px-4 flex flex-col justify-center overflow-hidden">
      
      {/* Background Animated Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/25 via-indigo-500/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none ambient-orb" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none ambient-orb-delayed" />

      <div className="max-w-6xl mx-auto relative z-10 w-full">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-pill mb-6 shadow-xl border border-white/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-white/90">
            {profileData.statusText}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-blue-400 ml-1" />
        </motion.div>

        {/* Hero Title & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-8 space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              React Native Engineer & <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                AI Mobile Architect
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed font-normal">
              {profileData.subTitle}
            </p>

            {/* Micro Badge Highlights */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium flex items-center space-x-1.5">
                <Smartphone className="w-3.5 h-3.5" />
                <span>10+ Store Apps</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium flex items-center space-x-1.5">
                <BrainCircuit className="w-3.5 h-3.5" />
                <span>On-Device AI Agent Integration</span>
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium flex items-center space-x-1.5">
                <Zap className="w-3.5 h-3.5" />
                <span>IoT & BLE Control</span>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                onClick={() => soundEngine.playGlassTap()}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 border border-blue-400/40 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#ai-hub"
                onClick={() => soundEngine.playGlassTap()}
                className="px-6 py-3.5 rounded-2xl liquid-button text-white font-semibold text-sm flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
              >
                <Cpu className="w-4 h-4 text-purple-400" />
                <span>Try AI Mobile Hub</span>
              </a>

              <button
                onClick={() => {
                  soundEngine.playGlassTap();
                  openResumeModal();
                }}
                className="px-5 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 flex items-center space-x-2 transition-all hover:scale-105 active:scale-95"
              >
                <FileDown className="w-4 h-4 text-blue-300" />
                <span>Resume</span>
              </button>
            </div>

          </motion.div>

          {/* Right Column: Liquid Glass Interactive Avatar / Badge Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="liquid-glass-card rounded-3xl p-6 border border-white/20 text-center space-y-6 shadow-2xl relative">
              
              {/* Profile Avatar Frame with Glass Specular Reflect */}
              <div className="relative mx-auto w-32 h-32 rounded-3xl p-1 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl overflow-hidden group">
                <div className="w-full h-full rounded-2xl bg-slate-900 flex items-center justify-center text-white text-3xl font-extrabold tracking-wider overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/40 opacity-80" />
                  <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                    PS
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-xs text-blue-300 font-mono mt-1">{profileData.location}</p>
              </div>

              <div className="pt-4 border-t border-white/10 text-left space-y-2 text-xs text-white/80 font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Primary Framework</span>
                  <span className="font-semibold text-blue-400">React Native / Expo</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">Languages</span>
                  <span className="font-semibold text-purple-300">TS, JS, Kotlin, C++</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/50">AI Stack</span>
                  <span className="font-semibold text-emerald-400">On-Device LLMs, Voice AI</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Quick Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {profileData.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="liquid-glass-card rounded-2xl p-5 border border-white/15 hover:border-blue-400/40 transition-all"
            >
              <div className="text-3xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200 font-mono">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-white/90 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-white/50 mt-0.5">
                {stat.description}
              </div>
            </div>
          ))}
        </motion.div>

      </div>

    </section>
  );
};
