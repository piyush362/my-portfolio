// src/components/homepage/Education.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Link as LinkIcon } from "lucide-react";

const educationList = [
  {
    degree: "B.Tech in Information Technology",
    university: "Dr. Ram Manohar Lohia Avadh University, Ayodhya, India",
    score: "74.9%",
    duration: "Nov 2020 – June 2024",
    project: {
      name: "Deepotsav",
      description:
        "Honored by Hon’ble Anandiben Patel, the Governor of Uttar Pradesh, for developing the Android app 'Deepotsav'. This app connects every citizen of India to the annual Deepotsav celebration in Ayodhya.",
      link: "https://www.facebook.com/100044545594736/posts/648168926677955/",
    },
  },
];

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="space-y-8">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-2xl shadow-md hover:shadow-lg p-8 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Degree */}
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap
                  size={20}
                  className="text-blue-700 flex-shrink-0"
                />
                <h3 className="text-xl font-semibold text-blue-900">
                  {edu.degree}
                </h3>
              </div>

              {/* University & Score */}
              <p className="text-gray-700 mb-1">{edu.university}</p>
              <p className="text-gray-600 mb-1">
                Score: <span className="font-semibold">{edu.score}</span>
              </p>
              <p className="text-gray-600 mb-4">Duration: {edu.duration}</p>

              {/* Project */}
              {edu.project && (
                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Award size={18} className="text-blue-500 flex-shrink-0" />
                    <h4 className="text-blue-800 font-semibold">
                      Project: {edu.project.name}
                    </h4>
                  </div>
                  <p className="text-gray-700 mb-2">
                    {edu.project.description}
                  </p>
                  <a
                    href={edu.project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 font-medium hover:underline"
                  >
                    <LinkIcon size={16} /> Official Post
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
