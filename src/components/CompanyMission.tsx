/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PROMISES } from "../data";
import { 
  Zap, 
  Target, 
  Shield, 
  Lock, 
  Award, 
  Handshake, 
  Sparkles,
  Compass
} from "lucide-react";

export default function CompanyMission() {
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Zap":
        return <Zap className={className} />;
      case "Target":
        return <Target className={className} />;
      case "Shield":
        return <Shield className={className} />;
      case "Lock":
        return <Lock className={className} />;
      case "Award":
        return <Award className={className} />;
      case "Handshake":
        return <Handshake className={className} />;
      default:
        return <Compass className={className} />;
    }
  };

  return (
    <section id="mission" className="py-24 relative overflow-hidden bg-[#0F0F0FF0] border-t border-white/5">
      {/* Decorative backing meshes */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/1.5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[15%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#8a6a3d]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Our Mission Manifesto (Dual-column layout) */}
        <div className="grid lg:grid-cols-12 gap-16 items-center pb-20 border-b border-white/5 mb-20">
          
          {/* Headline (Col 5) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-4"
          >
            <div className="flex items-center space-x-2 text-[#C8A46D]">
              <Compass className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Corporate Manifesto</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Our Visionary <br />
              <span className="gold-gradient-text">Working Mission</span>
            </h2>
          </motion.div>

          {/* Manifesto description (Col 7) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#121212] p-8 rounded-2xl border border-white/5 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#C8A46D]/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <p className="text-sm sm:text-base text-[#BDBDBD] font-light leading-relaxed">
                Our mission is to help consultancies, agencies, and students save time, reduce workload, and improve productivity through professional outsourcing solutions.
              </p>
              
              <p className="text-[#C8A46D] font-display font-medium text-xs tracking-wider uppercase mt-6 flex items-center gap-2">
                <Sparkles className="w-4 h-4 animate-pulse" />
                "We handle the paperwork so you can focus on growing your business."
              </p>
            </div>
          </motion.div>

        </div>

        {/* Corporate Promise Section Grid */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-[10px] font-mono text-[#C8A46D] uppercase tracking-widest font-bold mb-2">
              GUARANTEED STANDARDS
            </h3>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our Six-Point <span className="gold-gradient-text">Operational Promise</span>
            </h2>
            <p className="text-[#BDBDBD] text-xs sm:text-sm mt-2.5 font-light leading-relaxed max-w-lg mx-auto">
              Every profile we submit, spreadsheet we compile, and research draft we layout is bound by these uncompromised corporate benchmarks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROMISES.map((promise, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#121212]/90 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-[#C8A46D]/20 shadow-md transition-all duration-300 group hover:-translate-y-1 text-left flex gap-5 items-start"
              >
                <div className="p-2.5 rounded-lg bg-[#C8A46D]/10 border border-[#C8A46D]/20 text-[#C8A46D] group-hover:scale-110 transition-transform duration-300 shrink-0">
                  {getIcon(promise.iconName, "w-4.5 h-4.5")}
                </div>

                <div className="space-y-1.5">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-[#C8A46D] transition-colors">
                    {promise.title}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-[#BDBDBD] font-light leading-relaxed">
                    {promise.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
