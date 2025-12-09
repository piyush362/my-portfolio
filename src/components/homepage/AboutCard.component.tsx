// src/components/homepage/AboutCard.component.tsx
import React from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.jpg";

const AboutCard: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-[#f4f3ef] flex justify-center relative overflow-hidden font-mono"
    >
      {/* 1. Consistent Background Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "24px 24px"
        }}
      ></div>

      {/* 2. Exact Same Container Style as Hero */}
      <motion.div
        className="relative z-10 max-w-5xl w-full bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        {/* 3. Consistent Window Header (Red/Yellow/Green) */}
        <div className="h-10 border-b-4 border-black bg-zinc-200 flex items-center px-4 justify-between">
             <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
            </div>
            {/* Optional: Path breadcrumb for extra 'tech' feel */}
            <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest hidden md:block">
                ~/home/user/about
            </div>
        </div>

        <div className="p-6 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">
            
            {/* Profile Image - Square with Hard Border */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex-shrink-0"
            >
                <div className="relative w-48 h-48 md:w-64 md:h-64 border-4 border-black bg-zinc-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-2">
                    <img
                        src={Profile}
                        alt="Piyush Sagar"
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="flex-1 text-left">
                
                {/* Heading */}
                <h2 className="text-3xl md:text-5xl font-black uppercase text-black mb-8 tracking-tighter">
                    Who Am I?
                </h2>

                <div className="space-y-6 text-zinc-800 text-sm md:text-base leading-relaxed">
                    <p>
                        I’m a{" "}
                        <span className="font-bold bg-blue-100 px-1 border border-black text-black">
                            Mobile Application Developer
                        </span>{" "}
                        with{" "}
                        <span className="font-bold border-b-4 border-blue-700/50">
                            1.5+ years of experience
                        </span>{" "}
                        specializing in{" "}
                        <span className="font-bold text-blue-700">React Native</span>.
                    </p>

                    <p>
                        I’ve successfully built and deployed{" "}
                        <span className="font-bold bg-zinc-200 px-1 border border-black">
                            production-grade apps
                        </span>{" "}
                        for Android and iOS with a focus on{" "}
                        <span className="font-bold text-blue-800">robust architecture</span>,{" "}
                        <span className="font-bold text-blue-800">smooth performance</span>, and{" "}
                        <span className="font-bold text-blue-800">intuitive UI/UX</span>.
                    </p>

                    <p>
                        Skilled in technologies like{" "}
                        <span className="font-bold text-black bg-gray-200 px-1">React Native</span>,{" "}
                        <span className="font-bold text-black bg-gray-200 px-1">Redux</span>,{" "}
                        <span className="font-bold text-black bg-gray-200 px-1">Node.js</span>,{" "}
                        and{" "}
                        <span className="font-bold text-black bg-gray-200 px-1">Tailwind CSS</span>.
                    </p>

                    <p className="pt-4 border-t-2 border-dashed border-zinc-400">
                        I’ve published{" "}
                        <span className="font-black text-lg text-blue-700">10+ apps</span> on the{" "}
                        Play Store & App Store, working on IoT, analytics, and interactive data visualization.
                    </p>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCard;