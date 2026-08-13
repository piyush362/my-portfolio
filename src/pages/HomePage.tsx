import React, { useState, useEffect } from 'react';
import { GlassNavbar } from '../components/layout/GlassNavbar';
import { LiquidDock } from '../components/layout/LiquidDock';
import { HeroSection } from '../components/hero/HeroSection';
import { AIMobilePlayground } from '../components/hero/AIMobilePlayground';
import { ProjectsSection } from '../components/projects/ProjectsSection';
import { ExperienceSection } from '../components/experience/ExperienceSection';
import { SkillsSection } from '../components/skills/SkillsSection';
import { ContactSection } from '../components/contact/ContactSection';
import { Footer } from '../components/layout/Footer';
import { ResumeModal } from '../components/contact/ResumeModal';
import { SpotlightSearch } from '../components/modals/SpotlightSearch';

export const HomePage: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [isSpotlightOpen, setIsSpotlightOpen] = useState<boolean>(false);

  // Section Observer for updating LiquidDock active item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'ai-hub', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync dark/light mode class on body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  }, [darkMode]);

  return (
    <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] transition-colors duration-500 overflow-x-hidden">
      
      {/* Top Status Bar Navbar */}
      <GlassNavbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        openSpotlight={() => setIsSpotlightOpen(true)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Flow */}
      <main className="space-y-12">
        <HeroSection openResumeModal={() => setIsResumeModalOpen(true)} />
        <ProjectsSection />
        <AIMobilePlayground />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection openResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* macOS 26 Floating Dock */}
      <LiquidDock
        activeSection={activeSection}
        openSpotlight={() => setIsSpotlightOpen(true)}
      />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <SpotlightSearch
        isOpen={isSpotlightOpen}
        onClose={() => setIsSpotlightOpen(false)}
        openResumeModal={() => setIsResumeModalOpen(true)}
      />

    </div>
  );
};
