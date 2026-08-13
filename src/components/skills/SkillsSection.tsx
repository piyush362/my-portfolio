import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Smartphone, 
  Code2, 
  Wrench, 
  Sparkles, 
  CheckCircle,
  Layers,
  Cpu
} from 'lucide-react';
import { skillsCategories } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState<number>(0);

  const activeCategory = skillsCategories[activeCategoryIdx];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return Smartphone;
      case 'BrainCircuit': return BrainCircuit;
      case 'Code2': return Code2;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
            <BrainCircuit className="w-4 h-4 text-cyan-400" />
            <span>Technical Capabilities & Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Technical Ecosystem
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Comprehensive breakdown of mobile frameworks, state management architectures, languages, on-device AI tools, and native IDEs.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {skillsCategories.map((cat, idx) => {
            const Icon = getCategoryIcon(cat.icon);
            const isActive = activeCategoryIdx === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  soundEngine.playGlassTap();
                  setActiveCategoryIdx(idx);
                }}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/30 border border-blue-400/50 scale-105'
                    : 'liquid-button text-white/70 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid for Active Category */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-6">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
            <div className="p-2.5 rounded-2xl bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{activeCategory.title}</h3>
              <p className="text-xs text-white/50 font-mono">Piyush's Technical Proficiency Matrix</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div key={idx} className="space-y-2 bg-slate-900/40 p-4 rounded-2xl border border-white/10">
                
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="flex items-center space-x-2 text-white">
                    {skill.highlight && <CheckCircle className="w-4 h-4 text-emerald-400" />}
                    <span>{skill.name}</span>
                  </span>
                  <span className="text-blue-300 font-mono">{skill.level}%</span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-2 w-full rounded-full bg-slate-950/80 overflow-hidden p-0.5 border border-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: idx * 0.08 }}
                    className={`h-full rounded-full ${
                      skill.highlight 
                        ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-glow' 
                        : 'bg-gradient-to-r from-blue-600 to-cyan-500'
                    }`}
                  />
                </div>

                {skill.tag && (
                  <div className="text-[10px] font-mono text-white/50 pt-0.5">
                    Tag: <span className="text-blue-200">{skill.tag}</span>
                  </div>
                )}

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
