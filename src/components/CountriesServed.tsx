/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVED_COUNTRIES } from "../data";
import { Globe, ArrowRight, Sparkles, MapPin, Network, Clock } from "lucide-react";

export default function CountriesServed() {
  const [selectedId, setSelectedId] = useState("uk");
  
  const selectedCountry = SERVED_COUNTRIES.find((c) => c.id === selectedId) || SERVED_COUNTRIES[0];

  return (
    <section id="countries" className="py-24 relative overflow-hidden bg-[#0F0F0FF0]">
      {/* Visual decorative accents */}
      <div className="absolute inset-0 dots-grid opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <Network className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Global Ingestion Infrastructure</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Countries We <span className="gold-gradient-text">Actively Serve</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Our services are available worldwide through online collaboration and remote support. We bridge global admissions criteria with rapid 24-hour delivery.
          </p>
        </div>

        {/* Global Hub Visualization Panel */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Interactive Network Map (Left column - Col span 7) */}
          <div className="lg:col-span-8 bg-[#121212] p-4 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden min-h-[320px] sm:min-h-[420px] flex flex-col justify-between group">
            {/* Dark abstract outline of a world map representation */}
            <div className="absolute inset-0 select-none opacity-40 flex items-center justify-center p-4">
              {/* High-quality styled minimal SVG representation of global coordinate grid */}
              <svg 
                viewBox="0 0 1000 500" 
                className="w-full h-full text-white/5 stroke-current stroke-[0.8] stroke-dasharray-[2,4]"
              >
                {/* Horizontal latitude lines */}
                <line x1="0" y1="100" x2="1000" y2="100" />
                <line x1="0" y1="200" x2="1000" y2="200" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="400" x2="1000" y2="400" />
                {/* Vertical longitude lines */}
                <line x1="200" y1="0" x2="200" y2="500" />
                <line x1="400" y1="0" x2="400" y2="500" />
                <line x1="600" y1="0" x2="600" y2="500" />
                <line x1="800" y1="0" x2="800" y2="500" />

                {/* Simulated continents connections (minimalist abstract polygons) */}
                <path d="M150,150 L250,100 L320,150 L280,220 L210,250 Z" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.03)" />
                <path d="M460,180 L520,120 L580,180 L500,280 L440,240 Z" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.03)" />
                <path d="M720,220 L800,180 L880,240 L840,320 L740,280 Z" fill="rgba(255,255,255,0.015)" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                
                {/* Connection lines from selected country to Pakistan operations group (fixed roughly at x:64%, y:45%) */}
                {SERVED_COUNTRIES.map((c) => {
                  const isActive = c.id === selectedId;
                  if (!isActive) return null;
                  return (
                    <g key={`line-${c.id}`}>
                      {/* Connection curve */}
                      <path
                        d={`M ${parseFloat(c.coords.x.replace('%','')) * 10} ${parseFloat(c.coords.y.replace('%','')) * 5} Q 640 180 640 225`}
                        fill="none"
                        stroke="#C8A46D"
                        strokeWidth="1.5"
                        strokeDasharray="4,4"
                        className="animate-[dash_2s_linear_infinite]"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Pakistan hub highlight indicators (Operations HQ) */}
            <div 
              style={{ left: "64%", top: "45%" }} 
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center select-none"
            >
              <div className="relative">
                <span className="absolute inline-flex h-6 w-6 rounded-full bg-emerald-500/30 animate-ping -top-1.5 -left-1.5" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center shadow-lg" />
              </div>
              <span className="text-[9px] font-mono font-extrabold text-emerald-400 bg-black/80 px-2 py-0.5 rounded border border-emerald-500/20 shadow-md mt-1.5 backdrop-blur-xs">
                OPERATIONS HQ (PAKISTAN)
              </span>
            </div>

            {/* Glowing nodes overlay for countries we serve */}
            <div className="absolute inset-0 select-none">
              {SERVED_COUNTRIES.map((c) => {
                const isActive = c.id === selectedId;
                return (
                  <div
                    key={`node-${c.id}`}
                    style={{ left: c.coords.x, top: c.coords.y }}
                    onClick={() => setSelectedId(c.id)}
                    className="absolute cursor-pointer -translate-x-1/2 -translate-y-1/2 p-2 group pointer-events-auto"
                    title={c.name}
                  >
                    <div className="relative">
                      {isActive && (
                        <span className="absolute inline-flex h-5 w-5 rounded-full bg-[#C8A46D]/40 animate-ping -top-1 -left-1" />
                      )}
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isActive 
                          ? "bg-[#C8A46D] scale-125 border-2 border-white shadow-[0_0_10px_#C8A46D]" 
                          : "bg-white/40 hover:bg-[#C8A46D] hover:scale-110"
                      }`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Interactive map helper label */}
            <div className="relative flex justify-between items-center bg-black/60 backdrop-blur-xs px-4 py-3 rounded-xl border border-white/5 w-full">
              <span className="text-[10px] sm:text-xs text-[#BDBDBD] font-light flex items-center gap-1.5 select-none">
                <Globe className="w-3.5 h-3.5 text-[#C8A46D] animate-spin-slow" />
                Click glowing coordinates to audit active processing pipelines.
              </span>
              <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1 shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Network Secure
              </span>
            </div>
          </div>

          {/* Connected Country card details info (Right column - Col span 5) */}
          <div className="lg:col-span-4 flex flex-col justify-between bg-[#121212]/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-[#C8A46D]/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-2.5 h-full bg-[#C8A46D]" />
            
            <div>
              <div className="inline-flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#C8A46D]" />
                <span className="text-xs font-mono text-[#C8A46D] uppercase tracking-widest font-semibold">Serving Client Region</span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedId}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white tracking-wide">
                      {selectedCountry.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#BDBDBD] font-light mt-2.5 leading-relaxed">
                      {selectedCountry.desc}
                    </p>
                  </div>

                  {/* Standard checks in selected country */}
                  <div className="space-y-3.5 bg-white/3 p-4 rounded-xl border border-white/5">
                    <h4 className="text-[10px] font-mono text-white/50 uppercase tracking-widest flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#C8A46D]" />
                      Intake SLA Specs
                    </h4>
                    <ul className="space-y-2 text-[11px] text-[#BDBDBD] font-light">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C8A46D]" />
                        Admissions Deadline Support Ready
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C8A46D]" />
                        99.98% Local Format Compliance
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#C8A46D]" />
                        Direct Portal Form-Filling Verified
                      </li>
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* List selector tags for country quickly */}
            <div className="pt-6 border-t border-white/5">
              <h4 className="text-[9px] font-mono text-white/40 uppercase tracking-widest mb-3">
                QUICK REGIONAL AUDITS
              </h4>
              <div className="flex flex-wrap gap-1.5 max-h-[140px] overflow-y-auto pr-1">
                {SERVED_COUNTRIES.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedId(c.id)}
                    className={`px-2 py-1 text-[10px] font-medium tracking-wide rounded cursor-pointer transition-all ${
                      selectedId === c.id
                        ? "bg-[#C8A46D] text-black font-semibold"
                        : "bg-[#1A1A1A] text-[#BDBDBD] hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
