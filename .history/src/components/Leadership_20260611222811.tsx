/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote, ShieldCheck, Sparkles, Building2 } from "lucide-react";
import { LEADERSHIP } from "../data";

export default function Leadership() {
  const executives = [
    {
      data: LEADERSHIP.ceo,
      key: "ceo",
      initials: "FA",
      gradient: "from-[#C8A46D]/20 via-black to-black",
      ringColor: "border-[#C8A46D]/30",
    },
    {
      data: LEADERSHIP.coo,
      key: "coo",
      initials: "SK",
      gradient: "from-[#8a6a3d]/20 via-black to-black",
      ringColor: "border-[#8a6a3d]/30",
    },
  ];

  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-[#121212]/30 border-y border-white/5">
      {/* Background elements */}
      <div className="absolute inset-0 dots-grid opacity-20 pointer-events-none" />
      <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[40rem] h-[20rem] rounded-full bg-[#C8A46D]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <Building2 className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Our Counsel & Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Meet Our <span className="gold-gradient-text">Executive Board</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Governing with operational transparency, high quality assurance, and absolute privacy safeguards.
          </p>
        </div>

        {/* Corporate Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {executives.map((exec) => (
            <motion.div
              key={exec.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8 }}
              className="bg-[#0D0D0D]/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/5 hover:border-[#C8A46D]/20 transition-colors duration-300 flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.5)] relatve overflow-hidden group"
            >
              {/* Card visual elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#C8A46D]/5 to-transparent rounded-bl-full pointer-events-none" />
              
              <div>
                {/* Executive Profile Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-white/5 mb-6">
                  {/* Styled Avatar Placeholder (Classy Minimalist Initials Portrait) */}
                  <div className="relative shrink-0">
  <img
  src={exec.data.image}
  alt={exec.data.imageAlt}
  className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover object-top border border-[#C8A46D]/30 group-hover:scale-105 transition-transform duration-300"
/>

  <div className="absolute -bottom-1 -right-1 p-1 bg-black rounded-full border border-white/10 text-[#C8A46D]">
    <ShieldCheck className="w-3.5 h-3.5" />
  </div>
</div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white tracking-wide group-hover:text-[#C8A46D] transition-colors leading-tight">
                      {exec.data.name}
                    </h3>
                    <p className="text-xs font-mono text-[#C8A46D] uppercase tracking-wider mt-1.5 font-semibold">
                      {exec.data.role}
                    </p>
                    <p className="text-[10px] text-[#BDBDBD] font-mono mt-1">
                      PRO GLOBAL APPLICATION SERVICES
                    </p>
                  </div>
                </div>

                {/* Short message inside a beautiful callout box */}
                <div className="bg-white/3 p-5 rounded-xl border border-white/5 italic relative mb-6">
                  <Quote className="absolute top-3 left-3 w-8 h-8 text-[#C8A46D]/10 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-[#BDBDBD] leading-relaxed relative pl-4">
                    "{exec.data.message}"
                  </p>
                </div>

                {/* Extended Biography */}
                <div className="space-y-4">
                  <p className="text-xs text-[#BDBDBD] font-light leading-relaxed">
                    {exec.data.bio}
                  </p>
                  {exec.data.vision && (
                    <div className="flex items-start gap-2.5 text-[11px] text-[#BDBDBD] border-t border-white/5 pt-4">
                      <Sparkles className="w-4 h-4 text-[#C8A46D] shrink-0 mt-0.5" />
                      <p className="leading-relaxed">
                        <strong className="text-white">Vision Pledge:</strong> {exec.data.vision}
                      </p>
                    </div>
                  )}
                </div>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
