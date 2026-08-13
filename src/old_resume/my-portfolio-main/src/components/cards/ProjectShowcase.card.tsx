// src/components/cards/ProjectShowcase.card.tsx
import React from "react";
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import type { Project } from "../../data/projectsData";
import { useNavigate } from "react-router";
import { ArrowRight, ExternalLink, Terminal } from "lucide-react";

interface ProjectShowcaseProps {
  project: Project;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
}) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/projectDetails/${project.id}`);
  };

  // Updated styling for the regex replacement to match the Retro theme
  const highlightStyle = "font-bold bg-blue-100 px-1 border border-black text-black";

  return (
    <div className="group bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex flex-col h-full">
      
      {/* Window Title Bar */}
      <div className="bg-zinc-200 border-b-4 border-black p-2 px-4 flex justify-between items-center select-none">
         <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-white border border-black"></div>
         </div>
         <div className="text-xs font-bold uppercase tracking-widest text-zinc-500">
            PROJECT_ID_{project.id}.EXE
         </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Header: Logo + Title */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 flex-shrink-0 bg-zinc-100 border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <img
                src={project.projectLogo}
                alt={project.title}
                className="w-full h-full object-contain"
            />
          </div>
          
          <div className="flex flex-col">
            <h3 className="text-2xl font-black text-black uppercase leading-none mb-2">
                {project.title}
            </h3>
            {project.officialWebsite && (
              <a
                href={project.officialWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-bold text-blue-700 hover:bg-blue-100 transition-colors self-start border-b-2 border-blue-700"
              >
                Official Website <ExternalLink size={12} />
              </a>
            )}
          </div>
        </div>

        {/* Project Subtitle (With Regex Replacement) */}
        <div className="bg-zinc-50 border-2 border-black p-4 mb-6 font-medium text-sm text-zinc-800 leading-relaxed shadow-inner">
             <Terminal size={16} className="mb-2 text-zinc-400" />
             <p
                dangerouslySetInnerHTML={{
                __html: project.subTitle.replace(
                    /(IoT|real-time|Bluetooth|dashboards|control)/gi,
                    `<span class='${highlightStyle}'>$1</span>`
                ),
                }}
            ></p>
        </div>

        {/* Key Features */}
        <div className="mb-6 flex-grow">
          <h4 className="font-black text-black uppercase text-sm mb-3 border-b-2 border-black inline-block">
            Key Features:
          </h4>
          <ul className="space-y-2 text-sm text-zinc-700">
            {project.keyFeatures.map((feature) => (
              <li
                key={feature.id}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 w-2 h-2 bg-black flex-shrink-0"></span>
                <span
                    dangerouslySetInnerHTML={{
                    __html: feature.description.replace(
                        /(real-time|interactive|Bluetooth|offline|QR code|energy|water|MettsCredit|MettsPe)/gi,
                        `<span class='${highlightStyle}'>$1</span>`
                    ),
                    }}
                ></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Project Apps / Platforms */}
        {project.projectApps.length > 0 && (
          <div className="mb-6">
             <h4 className="font-black text-black uppercase text-sm mb-3">
                Deployments:
             </h4>
            <div className="flex flex-col gap-3">
              {project.projectApps.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-zinc-100 border-2 border-dashed border-zinc-400 p-2"
                >
                  <span className="font-bold text-xs uppercase text-zinc-600 pl-2">
                    {app.name}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {app.isPlayStore && app.playStoreLink && (
                      <a
                        href={app.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-white text-black border-2 border-black text-xs font-bold hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      >
                        <FaGooglePlay /> Play Store
                      </a>
                    )}
                    {app.isAppStore && app.appStoreLink && (
                      <a
                        href={app.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-white text-black border-2 border-black text-xs font-bold hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
                      >
                        <FaApple /> App Store
                      </a>
                    )}
                    {app.isWebApp && app.webAppLink && (
                      <a
                        href={app.webAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-white text-black border-2 border-black text-xs font-bold hover:bg-black hover:text-white transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px] active:shadow-none"
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

        {/* View More Button */}
        <div className="mt-auto pt-4 border-t-4 border-black">
          <button
            onClick={handleViewMore}
            className="w-full group flex items-center justify-center gap-2 bg-blue-700 text-white font-bold py-3 uppercase tracking-wider hover:bg-blue-600 transition-colors"
          >
            Open Project Details <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};