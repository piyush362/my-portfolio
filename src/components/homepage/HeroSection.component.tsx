// src/components/homepage/HeroSection.component.tsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white via-blue-50 to-blue-100 px-6 relative overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,219,254,0.4),transparent_60%)] animate-pulse"></div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-4 drop-shadow-lg"
      >
        <span className="bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 bg-clip-text text-transparent">
          Piyush Sagar
        </span>
      </motion.h1>

      {/* Title */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl font-medium text-gray-700 mb-4 tracking-wide"
      >
        <span className="text-blue-700 font-semibold">
          Mobile Application Developer
        </span>{" "}
        |{" "}
        <span className="text-blue-700 font-semibold">
          React Native Specialist
        </span>
      </motion.p>

      {/* Short Summary */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-2xl text-gray-600 text-base md:text-lg leading-relaxed mb-10"
      >
        Building <span className="font-semibold text-blue-800">scalable</span>{" "}
        and{" "}
        <span className="font-semibold text-blue-800">high-performance</span>{" "}
        mobile applications using{" "}
        <span className="text-blue-700 font-semibold">React Native</span>.
        Passionate about{" "}
        <span className="text-blue-700 font-semibold">
          smooth user experiences
        </span>{" "}
        and{" "}
        <span className="text-blue-700 font-semibold">
          production-ready apps
        </span>{" "}
        for <span className="font-semibold text-blue-800">Android</span> &{" "}
        <span className="font-semibold text-blue-800">iOS</span> platforms.
      </motion.p>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col md:flex-row gap-5 z-10"
      >
        <a
          href="#projects"
          className="px-8 py-3 bg-blue-800 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          🚀 View Projects
        </a>
        <a
          href="#contact"
          className="px-8 py-3 border-2 border-blue-800 text-blue-800 font-semibold rounded-xl shadow-lg hover:bg-blue-800 hover:text-white hover:shadow-xl transition-all duration-300"
        >
          📩 Contact Me
        </a>
      </motion.div>

      {/* Subtle decorative tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        <span>Transforming ideas into elegant digital experiences ✨</span>
      </motion.div>
    </section>
  );
};

export default HeroSection;
