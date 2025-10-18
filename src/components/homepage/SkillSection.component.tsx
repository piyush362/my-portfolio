// src/components/homepage/SkillSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Layers, Wrench, Database } from "lucide-react"; // placeholder icons — replace as you wish

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Kotlin", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "React Native",
      "Expo",
      "React",
      "Redux",
      "RTK Query",
      "Node.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Core Competencies",
    icon: Cpu,
    skills: [
      "Mobile App Architecture",
      "State Management",
      "API Integration",
      "Performance Optimization",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Computer Science",
    icon: Database,
    skills: [
      "Data Structures & Algorithms",
      "OOPs",
      "Operating Systems",
      "DBMS",
      "RESTful APIs",
    ],
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "Xcode",
      "Firebase",
      "Postman",
      "VS Code",
      "Copilot",
    ],
  },
];

const SkillSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Decorative radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.4),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent"
        >
          Technical Skills
        </motion.h2>

        {/* Skill Category Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 hover:shadow-xl border border-blue-100 hover:border-blue-200 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="p-2 rounded-full bg-gradient-to-r from-blue-700 to-sky-400 text-white shadow-md">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-blue-900">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              {/* <ul className="text-gray-700 space-y-2 text-sm md:text-base">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center justify-center md:justify-start gap-2 hover:text-blue-700 transition-colors"
                  >
                    <Box size={16} className="text-blue-600" />
                    {skill}
                  </li>
                ))}
              </ul> */}

              {/* Skills as Elegant Chips */}
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-800 border border-blue-100 rounded-full text-sm font-normal hover:bg-blue-100 hover:text-blue-900 transition-colors duration-200 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
