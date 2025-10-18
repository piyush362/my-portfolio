import React, { useState, useEffect } from "react";

// Import homepage sections
import NavBar from "../components/homepage/NavBar.component";
import HeroSection from "../components/homepage/HeroSection.component";
import AboutCard from "../components/homepage/AboutCard.component";
import SkillSection from "../components/homepage/SkillSection.component";
import ExperienceSection from "../components/homepage/ExperienceSection.component";
import Education from "../components/homepage/Education.component";
import ProjectsSection from "../components/homepage/ProjectsSection.component";
import ContactSection from "../components/homepage/ContactSection.component";
import Footer from "../components/homepage/Footer.component";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Homepage: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Show button after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Remove hash from URL without reloading the page
    if (window.history.pushState) {
      const urlWithoutHash = window.location.href.split("#")[0];
      window.history.pushState(null, "", urlWithoutHash);
    } else {
      // Fallback for older browsers
      window.location.hash = "";
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 relative">
      {/* Navigation */}
      <NavBar />

      {/* Hero / Intro Section */}
      <HeroSection />

      {/* About Me */}
      <AboutCard />

      {/* Skills */}
      <SkillSection />

      {/* Experience */}
      <ExperienceSection />

      {/* Education */}
      <Education />

      {/* Projects */}
      <ProjectsSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 flex items-center justify-center bg-blue-800/80 backdrop-blur-sm text-white rounded-full shadow-2xl hover:bg-blue-700/90 hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center"
          >
            <ArrowUp className="w-6 h-6 text-white" />
          </motion.div>
        </button>
      )}
    </div>
  );
};

export default Homepage;
