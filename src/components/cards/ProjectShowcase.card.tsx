import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import type { Project } from "../../data/projectsData";

interface ProjectShowcaseProps {
  project: Project;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  project,
}) => {
  return (
    <div className="bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-2xl shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-all duration-300">
      {/* Header: Logo + Title + Official Website */}
      <div className="flex items-center gap-4 mb-4">
        {/* Project Logo with shadow */}
        <img
          src={project.projectLogo}
          alt={project.title}
          className="w-20 h-20 object-contain rounded-xl shadow-lg"
        />

        <div className="flex flex-col">
          {/* Project Title */}
          <h3 className="text-2xl font-bold text-blue-900">{project.title}</h3>

          {/* Official Website Link */}
          {project.officialWebsite && (
            <a
              href={project.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline mt-1"
            >
              Official Website
            </a>
          )}
        </div>
      </div>

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
                  /(real-time|interactive|Bluetooth|offline|QR code|energy|water|MettsCredit|MettsPe)/gi,
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
