/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { PARTNERS } from "../data";
import { Handshake, MapPin, Building2, ExternalLink } from "lucide-react";

export default function Partners() {
  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-[20%] left-[-5%] w-[30rem] h-[30rem] rounded-full bg-[#C8A46D]/1.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <Handshake className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Consolidated Alliances</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Existing Consultancy <span className="gold-gradient-text">Partners</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Our experience working with consultancies allows us to understand application workflows, deadlines, and large-volume student processing requirements.
          </p>
        </div>

        {/* Corporate Logo Cards Grid */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
          {PARTNERS.map((partner, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#121212] rounded-2xl p-6 border border-white/5 hover:border-[#C8A46D]/20 shadow-lg flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Visual Branding Mark (Minimal corporate badge) */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  {/* Elegant gold monogram insignia */}
                  <div className="w-14 h-14 rounded-lg bg-black border border-white/10 group-hover:border-[#C8A46D]/30 flex items-center justify-center transition-colors">
                    <span className="font-display text-lg font-bold text-[#C8A46D] tracking-wiest">
                      {partner.logoText}
                    </span>
                  </div>
                  <Building2 className="w-4 h-4 text-white/10 group-hover:text-[#C8A46D]/30 transition-colors" />
                </div>

                {/* Partner Copy */}
                <h3 className="font-display text-base font-bold text-white group-hover:text-[#C8A46D] transition-colors leading-tight">
                  {partner.name}
                </h3>
                <p className="text-[11px] text-[#BDBDBD] font-light mt-1.5 leading-relaxed">
                  Trusted processing integration for scholarship filings, portfolio organization, and document layout auditing.
                </p>
              </div>

              {/* Geo Info Footer */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/3 font-mono text-[10px] text-[#888888]">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#C8A46D]" />
                  {partner.location}
                </span>
                
                <span className="flex items-center gap-1 text-emerald-400 group-hover:translate-x-1 transition-transform">
                  Active Partner
                  <ExternalLink className="w-2.5 h-2.5" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supporting statement */}
        <div className="text-center mt-12">
          <p className="text-[11px] sm:text-xs text-[#888888] font-light italic">
            * Complete references and consultancy testimonials are available for corporate evaluations upon NDA request.
          </p>
        </div>

      </div>
    </section>
  );
}
