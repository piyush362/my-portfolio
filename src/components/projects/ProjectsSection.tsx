import React, { useState } from 'react';
import { FolderGit2, Smartphone, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import type { Project } from '../../types/portfolio';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { soundEngine } from '../../utils/soundEffects';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'mobile' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
              <FolderGit2 className="w-4 h-4 text-blue-400" />
              <span>Production Portfolio & Case Studies</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Featured Mobile Projects
            </h2>
            <p className="text-white/70 max-w-xl text-sm sm:text-base">
              Production apps powering IoT property management, smart kiosk document printing, and on-device AI agent architecture.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center space-x-2 p-1.5 rounded-2xl liquid-glass-card border border-white/15">
            <button
              onClick={() => {
                soundEngine.playGlassTap();
                setActiveFilter('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              All ({projectsData.length})
            </button>

            <button
              onClick={() => {
                soundEngine.playGlassTap();
                setActiveFilter('mobile');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                activeFilter === 'mobile'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Apps</span>
            </button>

            <button
              onClick={() => {
                soundEngine.playGlassTap();
                setActiveFilter('ai');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                activeFilter === 'ai'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI Mobile</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

      </div>

      {/* Project Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
