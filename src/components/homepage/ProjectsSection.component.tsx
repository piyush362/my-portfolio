// src/components/homepage/ProjectsSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { projectsData, type Project } from "../../data/projectsData";
import { ProjectShowcase } from "../cards/ProjectShowcase.card";

const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text ">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project: Project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
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
