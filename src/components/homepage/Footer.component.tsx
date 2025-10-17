// src/components/homepage/Footer.component.tsx
import React from "react";
import { motion } from "framer-motion";
import { LucideLinkedin, LucideMail, LucidePhone } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-red-900 text-white py-8 px-4 mt-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
          <div className="flex items-center gap-2">
            <LucidePhone className="w-5 h-5" />
            <span>+91 8318237810</span>
          </div>
          <div className="flex items-center gap-2">
            <LucideMail className="w-5 h-5" />
            <span>PiyushSagarOfficial@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <LucideLinkedin className="w-5 h-5" />
            <a
              href="https://www.linkedin.com/in/piyushsagar362/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-gray-200"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-200 text-center md:text-right">
          © {new Date().getFullYear()} Piyush Sagar. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
