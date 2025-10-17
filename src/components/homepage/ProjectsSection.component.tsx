// src/components/homepage/ProjectsSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { projectsData, type Project } from "../../data/projectsData";

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <div className="bg-red-50 rounded-xl shadow-lg p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-red-900 mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.subTitle}</p>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {project.keyFeatures.map((feature) => (
            <li key={feature.id}>{feature.description}</li>
          ))}
        </ul>
      </div>

      {/* Project Apps / Tech Stack */}
      {project.projectApps && project.projectApps.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-1">Platforms / Apps:</h4>
          <div className="flex flex-wrap gap-2">
            {project.projectApps.map((app) => (
              <span
                key={app.id}
                className="bg-red-200 text-red-900 px-2 py-1 rounded-full text-sm font-medium"
              >
                {app.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Live Links */}
      {project.projectApps && project.projectApps.length > 0 && (
        <div className="mt-auto">
          <h4 className="font-semibold text-gray-800 mb-2">Live Links:</h4>
          <div className="flex flex-wrap gap-3">
            {project.projectApps.map((app) =>
              app.isPlayStore || app.isAppStore || app.isWebApp ? (
                <React.Fragment key={app.id}>
                  {app.isPlayStore && app.playStoreLink && (
                    <a
                      href={app.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-red-900 text-white rounded-lg text-sm hover:bg-red-800 transition"
                    >
                      Play Store
                    </a>
                  )}
                  {app.isAppStore && app.appStoreLink && (
                    <a
                      href={app.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-red-900 text-white rounded-lg text-sm hover:bg-red-800 transition"
                    >
                      App Store
                    </a>
                  )}
                  {app.isWebApp && app.webAppLink && (
                    <a
                      href={app.webAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-red-900 text-white rounded-lg text-sm hover:bg-red-800 transition"
                    >
                      Web App
                    </a>
                  )}
                </React.Fragment>
              ) : null
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-12 text-center">
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
