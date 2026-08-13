// src/components/homepage/ProjectsSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { projectsData, type Project } from "../../data/projectsData";
import { ProjectShowcase } from "../cards/ProjectShowcase.card";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-[#f4f3ef] relative overflow-hidden font-mono"
    >
      {/* Consistent Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
        }}
      ></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
            >
                <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-2 inline-block transform rotate-2">
                    Portfolio_Builds
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                    Featured Projects
                </h2>
                <div className="h-1 bg-blue-700 w-24 mx-auto mt-4 border-2 border-black"></div>
            </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project: Project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectShowcase project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;