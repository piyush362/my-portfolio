// src/components/homepage/ProjectsSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { projectsData, type Project } from "../../data/projectsData";
import { FaGooglePlay, FaApple, FaGlobe } from "react-icons/fa";

interface ProjectShowcaseProps {
  project: Project;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ project }) => {
  return (
    <div className="bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-2xl shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
      {/* Project Title */}
      <h3 className="text-xl font-bold text-blue-900 mb-2">{project.title}</h3>

      {/* Project Subtitle */}
      <p
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{
          __html: project.subTitle.replace(
            /(IoT|real-time|Bluetooth|dashboards|control)/gi,
            "<span class='font-semibold text-blue-700'>$1</span>"
          ),
        }}
      ></p>

      {/* Key Features */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-1">Key Features:</h4>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          {project.keyFeatures.map((feature) => (
            <li
              key={feature.id}
              dangerouslySetInnerHTML={{
                __html: feature.description.replace(
                  /(real-time|interactive|Bluetooth|offline|QR code|energy|water)/gi,
                  "<span class='font-semibold text-blue-700'>$1</span>"
                ),
              }}
            ></li>
          ))}
        </ul>
      </div>

      {/* Project Apps / Platforms */}
      {project.projectApps.length > 0 && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">
            Apps & Platforms:
          </h4>
          <div className="flex flex-col gap-3">
            {project.projectApps.map((app) => (
              <div
                key={app.id}
                className="flex flex-col md:flex-row md:items-center gap-3 bg-blue-50/70 rounded-lg p-2"
              >
                <span className="font-medium text-blue-900">{app.name}</span>
                {/* App Links */}
                <div className="flex flex-wrap gap-2">
                  {app.isPlayStore && app.playStoreLink && (
                    <a
                      href={app.playStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                    >
                      <FaGooglePlay /> Play Store
                    </a>
                  )}
                  {app.isAppStore && app.appStoreLink && (
                    <a
                      href={app.appStoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                    >
                      <FaApple /> App Store
                    </a>
                  )}
                  {app.isWebApp && app.webAppLink && (
                    <a
                      href={app.webAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-lg text-sm hover:bg-blue-600 transition"
                    >
                      <FaGlobe /> Web App
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

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
