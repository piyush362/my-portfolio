import React from "react";
import { motion } from "framer-motion";
import {
  LucideLinkedin,
  LucideMail,
  LucidePhone,
  LucideGithub,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="relative bg-white/80 backdrop-blur-md border-t-4 border-blue-400 text-blue-900 py-12 px-6 mt-16 shadow-inner"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <LucidePhone className="w-5 h-5 text-blue-700" />
            <a
              href="tel:+918318237810"
              className="font-medium hover:text-blue-500 transition-colors"
            >
              +91 8318237810
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LucideMail className="w-5 h-5 text-blue-700" />
            <a
              href="mailto:PiyushSagarOfficial@gmail.com"
              className="font-medium hover:text-blue-500 transition-colors"
            >
              PiyushSagarOfficial@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LucideLinkedin className="w-5 h-5 text-blue-700" />
            <a
              href="https://www.linkedin.com/in/piyushsagar362/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 font-medium transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LucideGithub className="w-5 h-5 text-blue-700" />
            <a
              href="https://github.com/piyush362"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 font-medium transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500 text-center md:text-right mt-6 md:mt-0">
          © {new Date().getFullYear()} Piyush Sagar. All rights reserved.
        </div>
      </div>

      {/* Subtle background gradient / decorative glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.2),transparent)] -z-10 pointer-events-none"></div>
    </motion.footer>
  );
};

export default Footer;
