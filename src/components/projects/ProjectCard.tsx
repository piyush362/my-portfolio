import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Smartphone, 
  Sparkles, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import type { Project } from '../../types/portfolio';
import { soundEngine } from '../../utils/soundEffects';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="liquid-glass-card rounded-3xl p-6 sm:p-7 border border-white/20 shadow-2xl flex flex-col justify-between relative group"
    >
      {/* Specular Glow Background */}
      <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none`} />

      <div className="space-y-4 relative z-10">
        
        {/* Top Header Row */}
        <div className="flex items-center justify-between">
          
          {/* Category Badge */}
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-medium text-blue-300 uppercase tracking-wider flex items-center space-x-1.5">
            {project.category === 'mobile' && <Smartphone className="w-3.5 h-3.5 text-blue-400" />}
            {project.category === 'ai' && <Sparkles className="w-3.5 h-3.5 text-purple-400" />}
            <span>{project.category} Project</span>
          </span>

          {/* Store App Indicators */}
          <div className="flex items-center space-x-2 text-xs">
            {project.projectApps.some(a => a.isPlayStore) && (
              <span className="px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono">
                Play Store
              </span>
            )}
            {project.projectApps.some(a => a.isAppStore) && (
              <span className="px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-mono">
                App Store
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-blue-300/90 font-mono mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Summary Description */}
        <p className="text-white/80 text-sm leading-relaxed line-clamp-3">
          {project.summary}
        </p>

        {/* Key Features Bullet List */}
        <div className="space-y-1.5 pt-2">
          {project.keyFeatures.slice(0, 3).map((feature) => (
            <div key={feature.id} className="flex items-start space-x-2 text-xs text-white/70">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feature.title || feature.description}</span>
            </div>
          ))}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-3">
          {project.technologies.slice(0, 5).map((tech, idx) => (
            <span 
              key={idx}
              className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-white/70"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="px-2 py-1 rounded-lg bg-white/5 text-[11px] font-mono text-white/50">
              +{project.technologies.length - 5} more
            </span>
          )}
        </div>

      </div>

      {/* Card Footer: Action Button */}
      <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between relative z-10">
        <button
          onClick={() => {
            soundEngine.playModalOpen();
            onSelectProject(project);
          }}
          className="flex items-center space-x-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-xl border border-white/15 transition-all group-hover:border-blue-400/40"
        >
          <span>View Full Showcase & Screenshots</span>
          <ChevronRight className="w-4 h-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
        </button>

        {project.officialWebsite && (
          <a
            href={project.officialWebsite}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => soundEngine.playGlassTap()}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors border border-white/10"
            title="Official Website"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

    </motion.div>
  );
};
