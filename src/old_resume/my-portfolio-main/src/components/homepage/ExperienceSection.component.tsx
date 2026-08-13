// src/components/homepage/ExperienceSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Star,
  Activity,
  Bluetooth,
  CreditCard,
  Database,
  MapPin,
  Calendar
} from "lucide-react";

const experiences = [
  {
    company: "Srchout Software",
    role: "React Native Engineer",
    duration: "July 2024 – Present",
    location: "Gurgaon, India (Remote)",
    description: [
      {
        icon: Activity,
        text: "Developed and maintained <span class='font-bold bg-blue-100 px-1 border border-black'>10+ React Native apps</span> with smooth performance and scalable architecture.",
      },
      {
        icon: Bluetooth,
        text: "Built <span class='font-bold bg-blue-100 px-1 border border-black'>Property Management app (Mettsenia)</span> with advanced graph views, dashboards, and Bluetooth IoT support.",
      },
      {
        icon: Star,
        text: "Deployed multiple apps on <span class='font-bold bg-blue-100 px-1 border border-black'>App Store and Google Play</span> with full platform compliance.",
      },
    ],
  },
  {
    company: "Hyathi Technology",
    role: "Full-Stack Developer Intern",
    duration: "September 2023 – April 2024",
    location: "Gorakhpur, India (On-site)",
    description: [
      {
        icon: Activity,
        text: "Built <span class='font-bold bg-blue-100 px-1 border border-black'>cross-platform apps</span> with React Native, Redux, and RTK Query.",
      },
      {
        icon: CreditCard,
        text: "Developed <span class='font-bold bg-blue-100 px-1 border border-black'>FinTech features</span>: in-app KYC, NFC payments, and push notifications.",
      },
      {
        icon: Database,
        text: "Contributed to a <span class='font-bold bg-blue-100 px-1 border border-black'>Web3 DeSo blockchain-based</span> social media app.",
      },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
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
                <div className="bg-black text-white px-4 py-1 text-sm font-bold uppercase tracking-widest mb-2 inline-block transform rotate-1">
                    Career_Log
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-black">
                    Experience
                </h2>
                <div className="h-1 bg-blue-700 w-24 mx-auto mt-4 border-2 border-black"></div>
            </motion.div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200"
            >
              {/* Card Header Bar */}
              <div className="bg-zinc-100 border-b-4 border-black p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                    <div className="bg-blue-700 text-white p-2 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                         <Briefcase size={20} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                            {exp.role}
                        </h3>
                        <p className="text-sm font-bold text-zinc-500 uppercase">
                            @{exp.company}
                        </p>
                    </div>
                </div>
                
                {/* Meta Info (Date/Location) */}
                <div className="flex flex-col md:items-end gap-1 text-xs md:text-sm font-bold text-zinc-600">
                    <div className="flex items-center gap-2 bg-white px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                        <Calendar size={14} />
                        <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white px-2 py-1 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.1)]">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                    </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8">
                <ul className="flex flex-col gap-6">
                  {exp.description.map((desc, i) => {
                    const Icon = desc.icon;
                    return (
                      <li key={i} className="flex items-start gap-4 group">
                        {/* Bullet Point Icon */}
                        <div className="mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border-2 border-black bg-zinc-50 group-hover:bg-blue-200 transition-colors">
                            <Icon size={16} className="text-black" />
                        </div>
                        
                        {/* Text Content */}
                        <span
                          className="text-zinc-800 text-sm md:text-base leading-relaxed pt-1"
                          dangerouslySetInnerHTML={{ __html: desc.text }}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Decorative Footer Strip */}
              <div className="h-4 bg-stripes-gray border-t-4 border-black"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CSS for striped pattern (optional inline style for simplicity) */}
      <style>{`
        .bg-stripes-gray {
            background-image: repeating-linear-gradient(
                45deg,
                #f4f4f5,
                #f4f4f5 10px,
                #e4e4e7 10px,
                #e4e4e7 20px
            );
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;