// src/components/homepage/HeroSection.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { RESUME_DRIVE_LINK } from "../../data/profileData";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-[#f4f3ef] text-zinc-900 font-mono px-4 pt-14 md:pt-24"
    >
      {/* Retro Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Main Content Card - The "Retro Window" Look */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-4xl w-full border-4 border-black bg-white p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
      >
        {/* Top Decorative Bar (Like an old OS window) */}
        <div className="absolute top-0 left-0 w-full h-8 border-b-4 border-black bg-zinc-200 flex items-center px-2 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
        </div>

        <div className="mt-8 flex flex-col items-start text-left">
          {/* Status Tag */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 mb-6 border-2 border-black bg-green-300 text-xs font-bold tracking-wider uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            System Online
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4 leading-none"
          >
            Piyush{" "}
            <span className="text-blue-700 decoration-4 underline decoration-black underline-offset-4">
              Sagar
            </span>
          </motion.h1>

          {/* Role / Title */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-bold border-l-4 border-blue-700 pl-4 mb-6 text-zinc-600"
          >
            <p>Software Engineer</p>
            <p className="text-zinc-800">
              Mobile App Developer{" "}
              <span className="mx-2 text-blue-700">//</span> React Native
              Specialist
            </p>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg text-zinc-600 mb-10 max-w-2xl leading-relaxed"
          >
            Building{" "}
            <span className="bg-blue-100 px-1 border border-black font-bold text-black">
              scalable
            </span>{" "}
            and{" "}
            <span className="bg-blue-100 px-1 border border-black font-bold text-black">
              high-performance
            </span>{" "}
            applications.
            <br className="hidden md:block" />
            Focusing on smooth UX and production-ready apps for{" "}
            <span className="font-bold text-blue-700">Android</span> &{" "}
            <span className="font-bold text-blue-700">iOS</span>.
          </motion.p>

          {/* Retro Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row gap-4 w-full md:w-auto"
          >
            <a
              href="#projects"
              className="group px-6 py-3 bg-black text-white border-2 border-black font-bold text-center hover:bg-white hover:text-black transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Start_Projects.exe
            </a>

            <a
              href="#contact"
              className="px-6 py-3 bg-white text-black border-2 border-black font-bold text-center hover:bg-blue-50 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Contact_Me
            </a>

            <a
              href={RESUME_DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-700 text-white border-2 border-black font-bold text-center hover:bg-blue-600 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Download_Resume
            </a>
          </motion.div>
        </div>

        {/* Decorative Corner Text */}
        <div className="absolute bottom-2 right-4 text-xs font-bold text-zinc-400 uppercase hidden md:block">
          V1.0.0 // EST. 2025
        </div>
      </motion.div>

      {/* Bottom Tagline */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="mt-8 text-xs md:text-sm font-bold tracking-widest text-zinc-500 uppercase"
      >
        Transforming ideas into elegant digital experiences
      </motion.div>
    </section>
  );
};

export default HeroSection;
