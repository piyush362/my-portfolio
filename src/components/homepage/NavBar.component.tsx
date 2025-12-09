// src/components/homepage/NavBar.component.tsx
import React, { useState, useEffect } from "react";
import {
  LucideMenu,
  LucideX,
  Home,
  User,
  Code,
  Briefcase,
  GraduationCap,
  Folder,
  Mail,
  Terminal
} from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Exp", href: "#experience", icon: Briefcase }, // Shortened for retro feel
    { name: "Edu", href: "#education", icon: GraduationCap }, // Shortened
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 font-mono border-b-4 border-black ${
        scrolled
          ? "bg-[#f4f3ef] shadow-[0px_6px_0px_0px_rgba(0,0,0,1)] py-2"
          : "bg-[#f4f3ef] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo / System Name */}
        <div className="flex items-center gap-2">
            <div className="bg-black text-white p-1">
                <Terminal size={20} />
            </div>
            <a 
                href="#hero"
                className="text-xl md:text-2xl font-black uppercase tracking-tighter text-black hover:text-blue-700 transition-colors"
            >
            Piyush_Sagar<span className="animate-pulse">_</span>
            </a>
        </div>

        {/* Desktop Links - Brutalist Tabs */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-2 px-3 py-2 text-sm font-bold uppercase text-black border-2 border-transparent hover:border-black hover:bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
              >
                <Icon size={16} className="text-blue-700 group-hover:text-black" strokeWidth={2.5} />
                {link.name}
              </a>
            );
          })}
          
          {/* Decorative separator */}
          <div className="h-6 w-0.5 bg-black mx-2 opacity-20"></div>
          
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black" title="System Online"></div>
        </div>

        {/* Mobile Menu Button - Retro Box */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="p-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
          >
            {isOpen ? (
              <LucideX className="w-6 h-6 text-black" />
            ) : (
              <LucideMenu className="w-6 h-6 text-black" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Dropdown Panel */}
      <div
        className={`md:hidden absolute top-full left-0 w-full border-b-4 border-black bg-white transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4 gap-2 bg-[#f4f3ef]">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-3 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
                >
                  <Icon size={18} className="text-black" strokeWidth={2.5} />
                  <span className="font-bold uppercase tracking-wider text-black">
                    {link.name}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;