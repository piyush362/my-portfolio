import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BrainCircuit, 
  Mic, 
  MicOff, 
  Activity, 
  ScanText, 
  Sparkles, 
  Play, 
  CheckCircle, 
  Terminal, 
  Code,
  Zap,
  Volume2
} from 'lucide-react';
import { aiShowcaseFeatures } from '../../data/portfolioData';
import { soundEngine } from '../../utils/soundEffects';

export const AIMobilePlayground: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('voice-agent');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [voiceLog, setVoiceLog] = useState<string[]>([
    "System Ready. Tap 'Start Voice Assistant Demo' to test."
  ]);
  const [diagnosticResult, setDiagnosticResult] = useState<{
    cpu: number;
    ram: string;
    fps: number;
    thermal: string;
    status: string;
  } | null>(null);

  const activeFeature = aiShowcaseFeatures.find(f => f.id === activeTab) || aiShowcaseFeatures[0];

  const handleSimulateVoice = () => {
    soundEngine.playGlassTap();
    setIsSimulating(true);
    setVoiceLog([
      "🎙️ Listening to ambient audio on device microphone...",
      "⚡ Local Whisper model running inference on Neural Engine...",
      "✨ Intent parsed: 'Show me Mettsenia IoT project details'",
      "🚀 Executing React Native action dispatch: NAVIGATE_PROJECT('mettsenia')"
    ]);
    setTimeout(() => {
      setIsSimulating(false);
      soundEngine.playSuccessChime();
    }, 1800);
  };

  const handleRunDiagnostics = () => {
    soundEngine.playGlassTap();
    setIsSimulating(true);
    setTimeout(() => {
      setDiagnosticResult({
        cpu: Math.floor(Math.random() * 15) + 12,
        ram: "142 MB / 4.0 GB",
        fps: 60,
        thermal: "NOMINAL (32°C)",
        status: "OPTIMAL: Full Reanimated 3 rendering enabled"
      });
      setIsSimulating(false);
      soundEngine.playSuccessChime();
    }, 1200);
  };

  return (
    <section id="ai-hub" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono">
            <BrainCircuit className="w-4 h-4 text-purple-400" />
            <span>AI Mobile Architecture Playground</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            On-Device AI Mobile Innovations
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm sm:text-base">
            Explore live interactive simulations of local voice agents, real-time hardware telemetry predictors, and on-device neural models built for React Native.
          </p>
        </div>

        {/* Playground Container Card */}
        <div className="liquid-glass-card rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative">
          
          {/* Top Tabs */}
          <div className="flex flex-wrap gap-3 pb-6 border-b border-white/10">
            {aiShowcaseFeatures.map((feature) => {
              const isActive = activeTab === feature.id;
              return (
                <button
                  key={feature.id}
                  onClick={() => {
                    soundEngine.playGlassTap();
                    setActiveTab(feature.id);
                  }}
                  className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/50'
                      : 'bg-white/5 hover:bg-white/15 text-white/70 hover:text-white border border-white/10'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-purple-300" />
                  <span>{feature.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
            
            {/* Left: Description & Code Snippet */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <span>{activeFeature.title}</span>
                </h3>
                <p className="text-xs text-purple-300 font-mono mt-1">{activeFeature.subtitle}</p>
              </div>

              <p className="text-white/80 text-sm leading-relaxed">
                {activeFeature.description}
              </p>

              {/* Code Snippet Box */}
              <div className="rounded-2xl bg-slate-950/80 border border-white/15 p-4 font-mono text-xs text-slate-200 overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/50 text-[11px]">
                  <span className="flex items-center space-x-1.5">
                    <Code className="w-3.5 h-3.5 text-blue-400" />
                    <span>React Native AI Implementation</span>
                  </span>
                  <span>TypeScript</span>
                </div>
                <pre className="text-emerald-300 whitespace-pre-wrap leading-relaxed">
                  {activeFeature.codeSnippet}
                </pre>
              </div>
            </div>

            {/* Right: Live Interactive Simulator */}
            <div className="lg:col-span-5">
              <div className="liquid-glass-card rounded-2xl p-5 border border-white/20 space-y-4 bg-slate-900/60">
                <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
                  <span className="flex items-center space-x-2 text-white/90">
                    <Terminal className="w-4 h-4 text-purple-400" />
                    <span>Neural Simulator Window</span>
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Simulated Output Area */}
                {activeTab === 'voice-agent' && (
                  <div className="space-y-4">
                    <div className="h-40 rounded-xl bg-slate-950/90 p-3 font-mono text-xs text-blue-300 space-y-2 overflow-y-auto border border-white/10">
                      {voiceLog.map((log, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="text-purple-400">&gt;</span>
                          <span className="text-slate-200">{log}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handleSimulateVoice}
                      disabled={isSimulating}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-lg border border-purple-300/30 disabled:opacity-50"
                    >
                      {isSimulating ? (
                        <>
                          <Sparkles className="w-4 h-4 animate-spin" />
                          <span>Processing Local Neural Inference...</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-4 h-4" />
                          <span>Test Voice Assistant Simulation</span>
                        </>
                      )}
                    </button>
                  </div>
                )}

                {activeTab === 'diagnostics' && (
                  <div className="space-y-4">
                    {diagnosticResult ? (
                      <div className="space-y-2 text-xs font-mono bg-slate-950/90 p-3 rounded-xl border border-white/10">
                        <div className="flex justify-between text-white/70">
                          <span>CPU Load:</span>
                          <span className="text-emerald-400 font-bold">{diagnosticResult.cpu}%</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Memory Usage:</span>
                          <span className="text-blue-400 font-bold">{diagnosticResult.ram}</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Frame Rate Cap:</span>
                          <span className="text-purple-400 font-bold">{diagnosticResult.fps} FPS (Smooth)</span>
                        </div>
                        <div className="flex justify-between text-white/70">
                          <span>Thermal State:</span>
                          <span className="text-emerald-300 font-bold">{diagnosticResult.thermal}</span>
                        </div>
                        <div className="pt-2 border-t border-white/10 text-emerald-400 text-[11px]">
                          ✓ {diagnosticResult.status}
                        </div>
                      </div>
                    ) : (
                      <div className="h-32 rounded-xl bg-slate-950/90 flex items-center justify-center text-xs text-white/50 font-mono text-center p-4 border border-white/10">
                        Press button to sample real-time device telemetry
                      </div>
                    )}

                    <button
                      onClick={handleRunDiagnostics}
                      disabled={isSimulating}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-bold flex items-center justify-center space-x-2 transition-all shadow-lg border border-blue-300/30 disabled:opacity-50"
                    >
                      <Activity className="w-4 h-4" />
                      <span>Run Diagnostic AI Sampler</span>
                    </button>
                  </div>
                )}

                {activeTab === 'ocr-scanner' && (
                  <div className="space-y-4">
                    <div className="relative h-40 rounded-xl bg-slate-950 overflow-hidden border border-white/15 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 to-blue-900/30 pointer-events-none" />
                      
                      {/* Scanning Line Animation */}
                      <motion.div
                        animate={{ y: [-60, 60, -60] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#06b6d4]"
                      />

                      <div className="text-center space-y-1 relative z-10 font-mono text-xs">
                        <ScanText className="w-8 h-8 text-cyan-400 mx-auto animate-pulse" />
                        <p className="text-white/80">Local Neural OCR Active</p>
                        <p className="text-[10px] text-cyan-300">Extracting Meter Reading: <span className="font-bold">482.50 kWh</span></p>
                      </div>
                    </div>

                    <div className="text-[11px] text-white/70 font-mono bg-white/5 p-2.5 rounded-xl border border-white/10">
                      ⚡ Camera preview frame processing executes at 30fps without writing images to disk.
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
