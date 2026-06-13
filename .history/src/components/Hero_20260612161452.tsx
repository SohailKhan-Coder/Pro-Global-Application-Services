/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Phone, Clock, FileText, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  // Let's create an array of floating elements to render in background
  const backgroundChips = [
    { text: "Admission Processing", x: "12%", y: "20%", delay: 0 },
    { text: "Thesis Support", x: "80%", y: "15%", delay: 1 },
    { text: "24h SLA Guarantee", x: "75%", y: "70%", delay: 2 },
    { text: "No Third-Party Sharing", x: "15%", y: "75%", delay: 1.5 },
    { text: "Excel & Data Audit", x: "85%", y: "45%", delay: 3 },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      {/* Premium Visual Elements: Grid line background & ambient glow spots */}
      <div className="absolute inset-0 dots-grid opacity-40 pointers-events-none" />
      
      {/* Atmospheric Radial Gold Glow spots */}
      <div className="absolute top-[25%] left-[10%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[5%] w-[40rem] h-[40rem] rounded-full bg-[#A6834F]/3 blur-[140px] pointer-events-none" />

      {/* Floating particles (minimalist circles) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#C8A46D]/10"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.7, 0.1],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating business agency context chips for visual richness */}
      <div className="absolute inset-0 overflow-hidden hidden lg:block pointer-events-none">
        {backgroundChips.map((chip, idx) => (
          <motion.div
  key={idx}
  initial={{ opacity: 0, y: 20 }}
  animate={{
    opacity: [0.3, 0.6, 0.3],
    y: [0, -12, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
    delay: chip.delay,
  }}
  className="absolute px-4 py-2 bg-[#121212]/90 backdrop-blur-sm rounded-lg border border-[#C8A46D]/10 text-[11px] font-mono tracking-wider text-[#BDBDBD] flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] cursor-default select-none"
  style={{ left: chip.x, top: chip.y }}
>
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C8A46D] animate-ping" />
            {chip.text}
          </motion.div>
        ))}
      </div>

      {/* Hero Section Master Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text content card (Left / Centered if single) */}
          <div className="lg:col-span-8 text-left z-10 max-w-4xl">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-[#121212] px-3.5 py-1.5 rounded-full border border-[#C8A46D]/20 mb-6 group cursor-pointer"
              onClick={() => onScrollTo("about")}
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A46D] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#C8A46D] uppercase font-semibold">
                Trusted Outsourcing & Operational Partner
              </span>
              <ArrowRight className="w-3 h-3 text-[#BDBDBD] group-hover:translate-x-1 transition-transform" />
            </motion.div>

            {/* Main Action Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6"
            >
              Global Application Processing & <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Academic Support Experts</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base sm:text-lg font-display tracking-wide text-[#C8A46D] font-medium mb-4"
            >
              Supporting Consultancies, Agencies & Students Worldwide
            </motion.p>

            {/* Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm sm:text-base text-[#BDBDBD] leading-relaxed mb-8 max-w-2xl font-light"
            >
              Professional Form Filling, Application Processing, Assignment Support, Research & Thesis Assistance, CV Writing, and Data Entry Services — Delivered Fast, Accurately, Securely, and Professionally.
            </motion.p>

            {/* Call to Actions (CTAs) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center"
            >
              <button
                onClick={() => onScrollTo("free-trial")}
                className="group relative px-8 py-4 bg-[#C8A46D] hover:bg-[#D9B880] text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_4px_30px_rgba(200,164,109,0.25)] hover:shadow-[0_4px_35px_rgba(200,164,109,0.4)] flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                Get Free Trial
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
              
              <button
                onClick={() => onScrollTo("contact")}
                className="px-8 py-4 bg-[#121212] hover:bg-[#181818] text-white border border-white/10 hover:border-white/20 font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0"
              >
                Contact Us
                <Phone className="w-3.5 h-3.5 text-[#C8A46D]" />
              </button>
            </motion.div>
          </div>

          {/* Quick Metrics Widget Panel (Right side) */}
          <div className="lg:col-span-4 z-10 w-full flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full glass-panel-gold rounded-2xl p-6 sm:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.7)] relative overflow-hidden group"
            >
              {/* Decorative side accent */}
              <div className="absolute top-0 right-0 w-2.5 h-full bg-gradient-to-b from-[#C8A46D] to-[#8a6a3d]" />
              
              <h3 className="font-display text-lg font-bold text-white tracking-wide mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#C8A46D]" />
                Live SLA Monitoring
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                  <span className="text-[#BDBDBD]">Standard Turnaround</span>
                  <span className="text-white font-mono font-medium flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C8A46D]" />
                    &lt; 24 Hours
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                  <span className="text-[#BDBDBD]">Internal Accuracy Rate</span>
                  <span className="text-[#C8A46D] font-mono font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    99.98%
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/5">
                  <span className="text-[#BDBDBD]">Capacity Limit</span>
                  <span className="text-white font-mono font-medium">Scalable Outsourcing</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#BDBDBD]">Data Hosting Guard</span>
                  <span className="text-white font-mono text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-emerald-950/50 text-emerald-400 border border-emerald-900/40">
                    Secure
                  </span>
                </div>
              </div>

              {/* Promo box */}
              <div className="p-3 bg-[#C8A46D]/10 rounded border border-[#C8A46D]/20 text-[11px] text-[#BDBDBD] leading-relaxed mb-4">
                <span className="text-white font-semibold">Special Offer:</span> Evaluate client-specific speed & format compliance with our secure <span className="text-[#C8A46D] font-medium cursor-pointer underline" onClick={() => onScrollTo("free-trial")}>Free Demo Session</span>.
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
