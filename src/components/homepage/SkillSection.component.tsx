// src/components/homepage/SkillSection.component.tsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "React Native", level: 90 },
  { name: "React", level: 85 },
  { name: "Redux & RTK Query", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "Tailwind CSS", level: 80 },
  { name: "JavaScript / TypeScript", level: 90 },
  { name: "Kotlin", level: 70 },
  { name: "Firebase & APIs", level: 85 },
];

const SkillSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-8 text-center">
          Technical Skills
        </h2>

        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold text-gray-700">{skill.name}</span>
                <span className="font-semibold text-gray-700">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4">
                <motion.div
                  className="bg-red-900 h-4 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
