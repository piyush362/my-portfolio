import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  Smartphone, 
  Globe, 
  Store, 
  ArrowUpRight
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { soundEngine } from '../../utils/soundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Overlay */}
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

        {/* Modal Window Container (Simulating macOS / iOS App Frame) */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto liquid-glass-card rounded-3xl border border-white/25 shadow-2xl z-10 p-6 sm:p-8 space-y-6"
        >
          
          {/* Top Window Control Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs font-mono text-white/50 ml-2">
                Project Inspector ~ {project.id}.app
              </span>
            </div>

            <button
              onClick={() => {
                soundEngine.playGlassTap();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Badge Header */}
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono">
                {project.category.toUpperCase()}
              </span>
              {project.metrics?.map((m, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono">
                  {m}
                </span>
              ))}
            </div>

            <h2 className="text-3xl font-extrabold text-white">
              {project.title}
            </h2>
            <p className="text-sm text-blue-300 font-mono">
              {project.tagline}
            </p>
          </div>

          {/* Detailed Overview */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-white/50 font-mono font-semibold">
              System Overview & Architecture
            </h3>
            <p className="text-white/85 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Role & Contributions */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-white/50 font-mono font-semibold">
              Piyush's Engineering Contributions
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {project.roleHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start space-x-2.5 text-xs sm:text-sm text-white/80 bg-white/5 p-3 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Published Apps & Direct Store Links */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-white/50 font-mono font-semibold">
              Published Applications & Store Deployment Links
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.projectApps.map((app) => (
                <div key={app.id} className="liquid-glass-card p-4 rounded-2xl border border-white/15 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-sm">{app.name}</span>
                    <Smartphone className="w-4 h-4 text-blue-400" />
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {app.playStoreLink && (
                      <a
                        href={app.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundEngine.playGlassTap()}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-400/40 text-emerald-200 text-xs font-medium transition-all"
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Google Play Store</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {app.appStoreLink && (
                      <a
                        href={app.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundEngine.playGlassTap()}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600/30 hover:bg-blue-600/50 border border-blue-400/40 text-blue-200 text-xs font-medium transition-all"
                      >
                        <Store className="w-3.5 h-3.5" />
                        <span>Apple App Store</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}

                    {app.webAppLink && (
                      <a
                        href={app.webAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundEngine.playGlassTap()}
                        className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-400/40 text-purple-200 text-xs font-medium transition-all"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Web App</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Grid */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-wider text-white/50 font-mono font-semibold">
              Technologies & Native Modules Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-white/90">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Close Action Button */}
          <div className="pt-4 border-t border-white/10 flex justify-end">
            <button
              onClick={() => {
                soundEngine.playGlassTap();
                onClose();
              }}
              className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
            >
              Close Inspector
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
