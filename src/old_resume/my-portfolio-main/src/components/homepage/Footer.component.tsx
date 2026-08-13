// src/components/layout/Footer.component.tsx
import React from "react";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Phone,
  Github,
  Terminal,
  ArrowUpCircle
} from "lucide-react";

const Footer: React.FC = () => {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#f4f3ef] pt-16 pb-8 px-4 font-mono overflow-hidden">
        {/* Consistent Background Grid */}
        <div 
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
                backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
                backgroundSize: "24px 24px"
            }}
        ></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto border-t-4 border-black"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {/* Decorative "End of File" Bar */}
        <div className="bg-black text-white px-4 py-2 flex justify-between items-center mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                <Terminal size={14} />
                <span>End_Of_Transmission</span>
            </div>
            <div className="flex gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          
          {/* Contact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row gap-4 w-full md:w-auto">
            
            {/* Phone */}
            <a
              href="tel:+918318237810"
              className="group flex items-center gap-3 bg-white border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Phone size={18} className="text-blue-700 group-hover:text-white" />
              <span className="font-bold text-sm">+91 8318237810</span>
            </a>

            {/* Email */}
            <a
              href="mailto:PiyushSagarOfficial@gmail.com"
              className="group flex items-center gap-3 bg-white border-2 border-black px-4 py-3 hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Mail size={18} className="text-blue-700 group-hover:text-white" />
              <span className="font-bold text-sm truncate max-w-[200px] md:max-w-none">
                PiyushSagarOfficial@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/piyushsagar362/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-black px-4 py-3 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Linkedin size={18} className="text-black group-hover:text-white" />
              <span className="font-bold text-sm">LinkedIn</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/piyush362"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 bg-white border-2 border-black px-4 py-3 hover:bg-[#333] hover:text-white hover:border-[#333] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Github size={18} className="text-black group-hover:text-white" />
              <span className="font-bold text-sm">GitHub</span>
            </a>

          </div>

          {/* Scroll To Top Button (Hidden on small screens usually, but nice for retro UX) */}
          <button 
            onClick={scrollToTop}
            className="hidden md:flex items-center gap-2 font-bold uppercase text-xs tracking-widest hover:underline text-zinc-500 hover:text-black transition-colors"
          >
            Return_To_Top <ArrowUpCircle size={16} />
          </button>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="mt-12 pt-6 border-t-2 border-dashed border-zinc-400 flex flex-col md:flex-row justify-between items-center text-xs font-bold text-zinc-500 uppercase tracking-wide gap-4">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-center md:text-left">
             <span>© {new Date().getFullYear()} Piyush Sagar.</span>
             <span className="hidden md:inline">|</span>
             <span>All rights reserved.</span>
          </div>
          <div className="bg-zinc-200 px-2 py-1 border border-zinc-400">
             V2.0.25 (Stable)
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;