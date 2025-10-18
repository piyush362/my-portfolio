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
} from "lucide-react";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Education", href: "#education", icon: GraduationCap },
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-md"
          : "bg-white/40 backdrop-blur-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo / Name */}
        <div className="text-2xl font-bold text-blue-900 cursor-pointer">
          Piyush Sagar
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="group relative flex items-center gap-1 text-gray-800 hover:text-blue-700 transition-colors font-medium"
              >
                <Icon size={18} className="text-blue-700" />
                {link.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <LucideX className="w-6 h-6 text-blue-700" />
            ) : (
              <LucideMenu className="w-6 h-6 text-blue-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 py-4 bg-white/80 backdrop-blur-xl shadow-lg">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li key={link.name} className="flex items-center gap-2">
                <Icon size={18} className="text-blue-700" />
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-800 hover:text-blue-700 font-medium transition-colors"
                >
                  {link.name}
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
