import { projectsData, type Project } from "../data/projectsData";
import { FaApple, FaGlobe, FaGooglePlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router";
import { useEffect } from "react";

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []); // scrolls to top on component mount

  const project: Project | undefined = projectsData.find(
    (p) => p.id.toString() === projectId
  );

  if (!project) {
    return (
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold text-blue-900">Project Not Found</h1>
        <p className="mt-2 text-gray-500">
          No project found with ID: {projectId}
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 p-6">
      {/* Project Header */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <motion.img
          src={project.projectLogo}
          alt={project.title}
          className="w-40 h-40 md:w-52 md:h-52 object-contain rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="flex flex-col text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-2 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 bg-clip-text text-transparent">
              {project.title}
            </span>
          </motion.h1>

          {project.officialWebsite && (
            <a
              href={project.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-lg font-medium"
            >
              Official Website
            </a>
          )}
        </div>
      </div>

      {/* Project Description */}
      <motion.div
        className="max-w-3xl mx-auto text-gray-700 mb-8 text-lg md:text-xl leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: project.subTitle.replace(
              /(IoT|real-time|Bluetooth|dashboards|control)/gi,
              "<span class='font-semibold text-blue-700'>$1</span>"
            ),
          }}
        />
      </motion.div>

      {/* Key Features */}
      <motion.div
        className="max-w-3xl mx-auto mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">
          Key Features
        </h2>
        <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside text-gray-700">
          {project.keyFeatures.map((feature) => (
            <li
              key={feature.id}
              className="p-2 bg-white/80 backdrop-blur-md rounded-lg shadow-sm hover:shadow-md transition"
              dangerouslySetInnerHTML={{
                __html: feature.description.replace(
                  /(real-time|interactive|Bluetooth|offline|QR code|energy|water|MettsCredit|MettsPe)/gi,
                  "<span class='font-semibold text-blue-700'>$1</span>"
                ),
              }}
            />
          ))}
        </ul>
      </motion.div>

      {/* Project Apps / Platforms */}
      {project.projectApps.length > 0 && (
        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Apps & Platforms
          </h2>

          <div className="flex flex-col gap-8">
            {project.projectApps.map((app) => (
              <div
                key={app.id}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-md p-6 hover:shadow-lg transition"
              >
                {/* App Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                  <span className="font-extrabold text-blue-900 text-2xl md:text-3xl mb-2 md:mb-0">
                    {app.name}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {app.isPlayStore && app.playStoreLink && (
                      <a
                        href={app.playStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-full text-sm hover:bg-blue-600 transition"
                      >
                        <FaGooglePlay size={14} /> Play Store
                      </a>
                    )}
                    {app.isAppStore && app.appStoreLink && (
                      <a
                        href={app.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-full text-sm hover:bg-blue-600 transition"
                      >
                        <FaApple size={14} /> App Store
                      </a>
                    )}
                    {app.isWebApp && app.webAppLink && (
                      <a
                        href={app.webAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-1 bg-blue-700 text-white rounded-full text-sm hover:bg-blue-600 transition"
                      >
                        <FaGlobe size={14} /> Web App
                      </a>
                    )}
                  </div>
                </div>

                {/* Short description */}
                <p className="text-gray-700 mb-3 text-sm md:text-base">
                  Showcase images of{" "}
                  <span className="font-semibold">{app.name}</span> from a Pixel
                  6a device.
                </p>

                {/* Showcase Images */}
                {app.shoCaseImages && app.shoCaseImages.length > 0 && (
                  <div className="flex overflow-x-auto gap-4 py-2 scrollbar-hide">
                    {app.shoCaseImages.map((img, idx) => (
                      <motion.img
                        key={idx}
                        src={img}
                        alt={`${app.name} screenshot ${idx + 1}`}
                        className="w-60 h-auto object-contain rounded-xl shadow-lg flex-shrink-0"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * idx }} // faster animation
                        loading="lazy" // reduce latency
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Associated Description / Disclaimer */}
      {project.associatedDescription && (
        <motion.div
          className="max-w-3xl mx-auto mb-12 p-4 bg-white/80 backdrop-blur-md rounded-lg border-l-4 border-blue-500 shadow-sm"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Main Description */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {project.associatedDescription.split(" ").map((word, idx) => {
              const keywords = [
                "developer",
                "features",
                "frontend",
                "deployment",
                "Play",
                "App",
                "app",
                "project",
                "Srchout",
                "Software",
                "Store",
                "web",
              ];
              const cleanWord = word.replace(/[^a-zA-Z0-9]/g, "");
              if (keywords.includes(cleanWord)) {
                return (
                  <span key={idx} className="font-semibold text-blue-700">
                    {word}{" "}
                  </span>
                );
              }
              return word + " ";
            })}
          </p>

          {/* Disclaimer / Advisory */}
          <p className="mt-4 italic text-gray-600">
            ⚠️ I do not have any personal ownership over this app. This is
            purely a showcase of my work to demonstrate my{" "}
            <span className="font-semibold text-blue-700">skills</span> and
            contribution as a{" "}
            <span className="font-semibold text-blue-700">developer</span> on
            this <span className="font-semibold text-blue-700">project</span>.
          </p>
        </motion.div>
      )}
    </section>
  );
}
