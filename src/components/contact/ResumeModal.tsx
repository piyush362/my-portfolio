import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Download, FileText, CheckCircle } from 'lucide-react';
import { profileData } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundEngine.playGlassTap();
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
        />

        {/* Modal Content Frame */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-3xl liquid-glass-card rounded-3xl border border-white/25 shadow-2xl z-10 p-6 sm:p-8 space-y-6"
        >
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="font-bold text-white text-base">Piyush Sagar - Official Resume 2026</span>
            </div>
            <button
              onClick={() => {
                soundEngine.playGlassTap();
                onClose();
              }}
              className="p-1.5 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <p className="text-white/80 text-sm leading-relaxed">
              You can preview or download Piyush Sagar's official resume document hosted directly on Google Drive.
            </p>

            <div className="liquid-glass-card p-5 rounded-2xl border border-white/15 space-y-3 font-mono text-xs text-white/80">
              <div className="flex items-center justify-between text-blue-300 font-bold">
                <span>Resume Document Highlights:</span>
                <span>PDF Format</span>
              </div>
              <ul className="space-y-1.5 text-white/70">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>React Native & Expo App Store/Play Store Deployments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Mettsenia IoT Property Platform (MettsCredit & MettsPe)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Stapples Smart Printing Network (Android, iOS, Kiosk, Web)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>On-Device AI Mobile Agent Architecture & Native JSI C++</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/10">
            <a
              href={profileData.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playGlassTap()}
              className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center space-x-2 transition-all shadow-lg border border-blue-400/40"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Resume on Google Drive</span>
            </a>

            <button
              onClick={() => {
                soundEngine.playGlassTap();
                onClose();
              }}
              className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors border border-white/15"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
