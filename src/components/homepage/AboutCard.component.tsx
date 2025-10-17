// src/components/homepage/AboutCard.component.tsx
import React from "react";
import { motion } from "framer-motion";

const AboutCard: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-white flex justify-center"
    >
      <motion.div
        className="max-w-4xl bg-red-50 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Optional Image */}
        <div className="flex-shrink-0">
          <img
            src="/src/assets/react.svg" // replace with your photo if needed
            alt="Piyush Sagar"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md"
          />
        </div>

        {/* About Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl font-bold text-red-900 mb-4">
            About Me
          </h2>
          <p className="text-gray-700 mb-4">
            I am a Mobile Application Developer with 1.5+ years of experience specializing in React Native.
            I have successfully built and deployed production-grade apps for Android and iOS, focusing on
            robust architecture, smooth performance, and intuitive UI/UX.
          </p>
          <p className="text-gray-700 mb-4">
            My expertise includes React Native, Redux, RTK Query, Node.js, Tailwind CSS, and integrating APIs
            to create responsive, scalable applications. I enjoy turning ideas into fully functional mobile
            experiences that delight users.
          </p>
          <p className="text-gray-700">
            Published 10+ apps on Google Play Store and App Store, with experience in IoT integration, graphs,
            and real-time analytics.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCard;
