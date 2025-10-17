// src/components/homepage/Education.component.tsx
import React from "react";
import { motion } from "framer-motion";

// Sample education data (you can also import from educationData.ts)
const educationList = [
  {
    degree: "B.Tech in Information Technology",
    university: "Dr. Ram Manohar Lohia Avadh University, Ayodhya, India",
    score: "74.9%",
    duration: "Nov 2020 – June 2024",
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-red-900 mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-red-900 mb-1">{edu.degree}</h3>
              <p className="text-gray-700 mb-1">{edu.university}</p>
              <p className="text-gray-600 mb-1">Score: {edu.score}</p>
              <p className="text-gray-600">Duration: {edu.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
