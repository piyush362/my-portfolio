// src/components/homepage/HeroSection.component.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-white to-red-50 px-4"
    >
      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-4">
        Piyush Sagar
      </h1>

      {/* Title */}
      <p className="text-xl md:text-2xl text-gray-700 mb-6">
        Mobile Application Developer | React Native Specialist
      </p>

      {/* Short Summary */}
      <p className="max-w-2xl text-gray-600 mb-8">
        Building scalable, high-performance mobile applications with React Native. 
        Passionate about creating seamless user experiences, robust architecture, 
        and deploying production-grade apps for Android and iOS platforms.
      </p>

      {/* Call-to-Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-red-900 text-white font-semibold rounded-lg shadow hover:bg-red-800 transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border-2 border-red-900 text-red-900 font-semibold rounded-lg shadow hover:bg-red-900 hover:text-white transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
