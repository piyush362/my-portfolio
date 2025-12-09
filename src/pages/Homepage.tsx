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
// import { motion } from "framer-motion";
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

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group"
          aria-label="Scroll to top"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-black">
            <ArrowUp
              className="w-6 h-6 text-black group-hover:text-white transition-colors duration-200"
              strokeWidth={3}
            />
          </div>
        </button>
      )}
    </div>
  );
};

export default Homepage;
