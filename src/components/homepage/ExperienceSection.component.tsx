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
        text: "Developed and maintained <span class='font-semibold'>10+ React Native apps</span> with smooth performance and scalable architecture.",
      },
      {
        icon: Bluetooth,
        text: "Built <span class='font-semibold'>Property Management app (Mettsenia)</span> with advanced graph views, dashboards, and Bluetooth IoT support.",
      },
      {
        icon: Star,
        text: "Deployed multiple apps on <span class='font-semibold'>App Store and Google Play</span> with full platform compliance.",
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
        text: "Built <span class='font-semibold'>cross-platform apps</span> with React Native, Redux, and RTK Query.",
      },
      {
        icon: CreditCard,
        text: "Developed <span class='font-semibold'>FinTech features</span>: in-app KYC, NFC payments, and push notifications.",
      },
      {
        icon: Database,
        text: "Contributed to a <span class='font-semibold'>Web3 DeSo blockchain-based</span> social media app.",
      },
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-white via-blue-50 to-blue-100 relative overflow-hidden"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.4),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.4),transparent_60%)]"></div>

      <div className="relative max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent"
        >
          Experience
        </motion.h2>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative bg-white/80 backdrop-blur-md border-l-4 border-blue-400 rounded-2xl shadow-md hover:shadow-lg p-8 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                <h3 className="text-xl font-semibold text-blue-900 flex items-center gap-2">
                  <Briefcase size={20} className="text-blue-700" />
                  {exp.role}
                </h3>
                <span className="text-gray-600 text-sm md:text-base">
                  {exp.duration}
                </span>
              </div>

              {/* Company + Location */}
              <p className="text-gray-700 mb-4 font-medium">
                {exp.company}{" "}
                <span className="text-gray-500">| {exp.location}</span>
              </p>

              {/* Description Bullets */}
              <ul className="flex flex-col gap-3 text-gray-700 text-sm md:text-base">
                {exp.description.map((desc, i) => {
                  const Icon = desc.icon;
                  return (
                    <li key={i} className="flex items-start gap-2">
                      <Icon
                        size={16}
                        className="mt-1 text-blue-500 flex-shrink-0"
                      />
                      <span
                        className="pl-1"
                        dangerouslySetInnerHTML={{ __html: desc.text }}
                      />
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
