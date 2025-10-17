// src/components/homepage/ExperienceSection.component.tsx
import React from "react";
import { motion } from "framer-motion";

// Sample experience data (you can replace it with your experienceData.ts)
const experiences = [
  {
    company: "Srchout Software",
    role: "React Native Engineer",
    duration: "July 2024 – Present",
    location: "Gurgaon, India (Remote)",
    description: [
      "Developed and maintained 10+ React Native apps with smooth performance and scalable architecture.",
      "Built Property Management app (Mettsenia) with advanced graph views, dashboards, and Bluetooth IoT support.",
      "Deployed multiple apps on App Store and Google Play with full platform compliance."
    ],
  },
  {
    company: "Hyathi Technology",
    role: "Full-Stack Developer Intern",
    duration: "September 2023 – April 2024",
    location: "Gorakhpur, India (On-site)",
    description: [
      "Built cross-platform apps with React Native, Redux, and RTK Query.",
      "Developed FinTech features: in-app KYC, NFC payments, push notifications.",
      "Contributed to a Web3 DeSo blockchain-based social media app."
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-12 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-red-50 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex justify-between items-center mb-2 flex-col md:flex-row md:gap-4">
                <h3 className="text-xl font-semibold text-red-900">{exp.role}</h3>
                <span className="text-gray-700">{exp.duration}</span>
              </div>
              <p className="text-gray-600 mb-2 font-medium">{exp.company} | {exp.location}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
