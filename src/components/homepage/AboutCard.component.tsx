// src/components/homepage/AboutCard.component.tsx
import React from "react";
import { motion } from "framer-motion";
import Profile from "../../assets/profile.jpg";

const AboutCard: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-blue-50 via-sky-100 to-blue-200 flex justify-center relative overflow-hidden"
    >
      {/* Decorative background gradient blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(191,219,254,0.5),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(147,197,253,0.4),transparent_60%)]"></div>

      <motion.div
        className="relative max-w-5xl bg-gradient-to-br from-white/90 via-blue-50/90 to-blue-100/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 border border-blue-100"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-shrink-0 relative"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 blur opacity-50"></div>
          <img
            src={Profile}
            alt="Piyush Sagar"
            className="relative w-44 h-44 md:w-56 md:h-56 rounded-full object-cover shadow-lg ring-4 ring-blue-200"
          />
        </motion.div>

        {/* About Content */}
        <div className="flex-1 text-center md:text-left relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text ">
            About Me
          </h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            I’m a{" "}
            <span className="font-semibold text-blue-800">
              Mobile Application Developer
            </span>{" "}
            with{" "}
            <span className="font-semibold text-blue-800">
              1.5+ years of experience
            </span>{" "}
            specializing in{" "}
            <span className="text-blue-700 font-semibold">React Native</span>.
            I’ve successfully built and deployed{" "}
            <span className="text-blue-700 font-semibold">
              production-grade apps
            </span>{" "}
            for Android and iOS with a focus on{" "}
            <span className="text-blue-700 font-semibold">
              robust architecture
            </span>
            ,{" "}
            <span className="text-blue-700 font-semibold">
              smooth performance
            </span>
            , and{" "}
            <span className="text-blue-700 font-semibold">intuitive UI/UX</span>
            .
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            Skilled in technologies like{" "}
            <span className="font-semibold text-blue-800">
              React Native, Redux, RTK Query, Node.js,
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-800">Tailwind CSS</span>, I
            specialize in creating{" "}
            <span className="text-blue-700 font-semibold">responsive</span> and{" "}
            <span className="text-blue-700 font-semibold">scalable</span> mobile
            applications with seamless API integration.
          </p>

          <p className="text-gray-700 leading-relaxed">
            I’ve published{" "}
            <span className="font-semibold text-blue-800">10+ apps</span> on the{" "}
            <span className="text-blue-700 font-semibold">
              Google Play Store
            </span>{" "}
            and <span className="text-blue-700 font-semibold">App Store</span>,
            working on projects involving{" "}
            <span className="text-blue-700 font-semibold">
              IoT integration, real-time analytics,
            </span>{" "}
            and{" "}
            <span className="text-blue-700 font-semibold">
              interactive graphs
            </span>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCard;
