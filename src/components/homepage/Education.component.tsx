// src/components/homepage/Education.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, Link as LinkIcon, Building2, Calendar } from "lucide-react";

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

      <div className="relative max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="mb-16 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-block"
            >
                <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-2 inline-block transform -rotate-1">
                    Academic_History
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                    Education
                </h2>
                <div className="h-1 bg-blue-700 w-24 mx-auto mt-4 border-2 border-black"></div>
            </motion.div>
        </div>

        <div className="space-y-12">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              {/* Header: University Info */}
              <div className="bg-zinc-100 border-b-4 border-black p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-700 text-white p-2 border-2 border-black">
                        <Building2 size={24} />
                    </div>
                    <div>
                        <h3 className="text-sm md:text-base font-bold uppercase text-zinc-500 tracking-wider">
                            University Record
                        </h3>
                        <p className="text-lg md:text-xl font-black text-black leading-tight">
                            {edu.university}
                        </p>
                    </div>
                </div>
                
                {/* Duration Badge */}
                <div className="flex items-center gap-2 bg-white px-3 py-1 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.2)]">
                    <Calendar size={16} />
                    <span className="font-bold text-sm">{edu.duration}</span>
                </div>
              </div>

              {/* Main Body */}
              <div className="p-6 md:p-8 relative">
                
                {/* Degree Title */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b-2 border-dashed border-zinc-300 pb-6">
                    <div className="flex items-start gap-3">
                        <GraduationCap size={32} className="text-black mt-1" />
                        <div>
                            <span className="text-xs font-bold text-blue-700 uppercase">Degree Awarded</span>
                            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight">
                                {edu.degree}
                            </h3>
                        </div>
                    </div>
                    
                    {/* Score "Stamp" */}
                    <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full border-4 border-blue-700 text-blue-700 font-black transform rotate-12 mask-image-rough">
                        <span className="text-xs uppercase">Grade</span>
                        <span className="text-2xl">{edu.score}</span>
                    </div>
                </div>

                {/* Project / Award Section (Styled as an "Attachment") */}
                {edu.project && (
                  <div className="bg-blue-50 border-2 border-black p-5 md:p-6 relative mt-4">
                    {/* Paperclip visual */}
                    <div className="absolute -top-3 left-6 w-4 h-8 bg-zinc-300 border-2 border-black rounded-full z-10"></div>
                    
                    <div className="flex items-start gap-3 mb-3">
                        <Award size={24} className="text-black flex-shrink-0 mt-1" />
                        <h4 className="text-lg font-bold uppercase text-black">
                             Project: {edu.project.name}
                        </h4>
                    </div>

                    <p className="text-zinc-800 text-sm md:text-base mb-4 leading-relaxed font-medium">
                      {edu.project.description}
                    </p>

                    <a
                      href={edu.project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black border-2 border-black font-bold text-sm hover:bg-blue-700 hover:text-white transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      <LinkIcon size={16} />
                      VIEW_OFFICIAL_POST
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;