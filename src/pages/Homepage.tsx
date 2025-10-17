import React from "react";

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

const Homepage: React.FC = () => {
  return (
    <div className="font-sans bg-white text-gray-900">
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
    </div>
  );
};

export default Homepage;
