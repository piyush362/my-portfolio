// src/components/homepage/SkillSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Cpu, Layers, Wrench, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["JavaScript", "TypeScript", "Kotlin", "C++"],
  },
  {
    title: "Frameworks",
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
      "Performance",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Computer Science",
    icon: Database,
    skills: [
      "Data Structures",
      "Algorithms",
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

      <div className="relative max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
            >
                <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-2 inline-block transform -rotate-2">
                    System_Capabilities
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                    Technical Skills
                </h2>
                <div className="h-1 bg-blue-700 w-24 mx-auto mt-4 border-2 border-black"></div>
            </motion.div>
        </div>

        {/* Skill Category Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex flex-col"
            >
              {/* Card Header (Top Bar) */}
              <div className="bg-blue-100 border-b-4 border-black p-4 flex items-center gap-3">
                <div className="bg-white border-2 border-black p-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex-shrink-0">
                  <category.icon size={20} className="text-black" strokeWidth={2.5} />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black truncate">
                  {category.title}
                </h3>
              </div>

              {/* Skills Content */}
              <div className="p-5 flex-grow">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1.5 bg-white border-2 border-black text-xs md:text-sm font-bold text-zinc-800 hover:bg-black hover:text-white hover:border-black transition-colors cursor-default shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Card Footer (Decor) */}
              <div className="bg-zinc-100 border-t-4 border-black px-4 py-2 flex justify-between items-center text-[10px] font-bold text-zinc-400 uppercase">
                <span>DIR: /USR/BIN</span>
                <span>SIZE: {category.skills.length}KB</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;