import React from 'react';
import { motion } from 'framer-motion';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  Award,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { experienceData, educationData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Professional Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Education
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm sm:text-base">
            Detailed breakdown of production React Native applications built, IoT hardware modules integrated, and academic credentials.
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="relative border-l-2 border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {experienceData.map((exp, idx) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 border-2 border-slate-900 flex items-center justify-center text-white shadow-lg group-hover:scale-125 transition-transform">
                <Briefcase className="w-3 h-3 sm:w-4 sm:h-4" />
              </div>

              {/* Experience Card */}
              <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl space-y-5">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-mono font-semibold">
                          PRESENT ROLE
                        </span>
                      )}
                    </div>
                    <p className="text-base text-blue-300 font-semibold mt-0.5 flex items-center space-x-2">
                      <Building2 className="w-4 h-4 text-blue-400" />
                      <span>{exp.company}</span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/60 text-xs font-mono">{exp.type}</span>
                    </p>
                  </div>

                  <div className="text-xs font-mono text-white/60 space-y-1 sm:text-right">
                    <div className="flex items-center space-x-1.5 sm:justify-end text-blue-200">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5 sm:justify-end text-white/50">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-white/80 text-sm italic">
                  "{exp.summary}"
                </p>

                {/* Key Experience Highlights */}
                <div className="space-y-2.5">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-white/85">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-white/90">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Education Highlight Card */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
          
          <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white shadow-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{educationData.degree}</h3>
              <p className="text-xs text-blue-300 font-mono mt-0.5">{educationData.institution}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 text-xs font-mono border-b border-white/10">
            <div>
              <span className="text-white/50">Score / Grade:</span>
              <p className="text-emerald-400 font-bold text-sm mt-0.5">{educationData.score}</p>
            </div>
            <div>
              <span className="text-white/50">Duration:</span>
              <p className="text-white/90 font-bold text-sm mt-0.5">{educationData.duration}</p>
            </div>
            <div>
              <span className="text-white/50">Location:</span>
              <p className="text-white/90 font-bold text-sm mt-0.5">{educationData.location}</p>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            {educationData.details.map((d, i) => (
              <div key={i} className="flex items-start space-x-2 text-xs text-white/70">
                <Sparkles className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                <span>{d}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
