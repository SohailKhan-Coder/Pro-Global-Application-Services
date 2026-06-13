/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { 
  FileText, 
  Database, 
  BookOpen, 
  UserCheck, 
  Award, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from "lucide-react";

interface ServicesProps {
  onScrollTo: (sectionId: string, prefillService?: string) => void;
}

export default function Services({ onScrollTo }: ServicesProps) {
  const [activeCategoryId, setActiveCategoryId] = useState(SERVICES[0].id);

  // Dynamic icon map helper
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "FileText":
        return <FileText className={className} />;
      case "Database":
        return <Database className={className} />;
      case "BookOpen":
        return <BookOpen className={className} />;
      case "UserCheck":
        return <UserCheck className={className} />;
      case "Award":
        return <Award className={className} />;
      default:
        return <FileText className={className} />;
    }
  };

  const activeCategory = SERVICES.find((cat) => cat.id === activeCategoryId) || SERVICES[0];

  return (
    <section id="services" className="py-24 relative bg-[#0F0F0FF0]">
      {/* Decorative radial gradients */}
      <div className="absolute top-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30rem] h-[30rem] rounded-full bg-[#8a6a3d]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Specialized Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Our Premium <span className="gold-gradient-text">Operational Services</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Double-vetted form filling, data ingestion, and professional academic layouts engineered to clear extreme back-office workloads for agencies.
          </p>
        </div>

        {/* Categories Explorer Layout (Left list tabs, Right content panel) */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Categories select sidebar */}
          <div id="service-tabs" className="lg:col-span-4 space-y-2.5">
            <h3 className="text-[10px] font-mono uppercase tracking-widest text-[#C4C4C4]/50 pl-2 mb-3">
              SELECT CORE FOCUS AREA
            </h3>
            <div className="flex overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 scrollbar-none snap-x">
              {SERVICES.map((cat) => {
                const isActive = cat.id === activeCategoryId;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryId(cat.id)}
                    className={`flex items-center text-left gap-4 p-4 rounded-xl transition-all duration-300 w-full shrink-0 lg:shrink snap-center cursor-pointer ${
                      isActive
                        ? "bg-[#161616] border border-[#C8A46D]/30 shadow-lg translate-x-1"
                        : "bg-[#121212]/50 border border-white/5 hover:border-white/10 hover:bg-[#121212]/80"
                    }`}
                  >
                    <div className={`p-2 rounded-lg transition-colors ${
                      isActive ? "bg-[#C8A46D] text-black" : "bg-white/5 text-[#BDBDBD]"
                    }`}>
                      {getIcon(cat.iconName, "w-5 h-5")}
                    </div>
                    <div>
                      <h4 className={`text-xs sm:text-sm font-semibold tracking-wide ${isActive ? "text-white" : "text-[#BDBDBD]"}`}>
                        {cat.title}
                      </h4>
                      <p className="text-[10px] text-[#888888] hidden sm:block mt-0.5 line-clamp-1 font-light">
                        {cat.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active category details display panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategoryId}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="bg-[#121212] rounded-2xl p-6 sm:p-10 border border-white/5 shadow-25 hover:border-[#C8A46D]/10 transition-colors duration-300"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 mb-8">
                  <div>
                    <span className="text-[10px] font-mono uppercase bg-[#C8A46D]/15 text-[#C8A46D] px-2.5 py-1 rounded inline-block mb-3 tracking-widest font-semibold">
                      Outsourcing Division
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {activeCategory.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-[#BDBDBD]">
                    <ShieldCheck className="w-4 h-4 text-[#C8A46D]" />
                    <span>24h Turnaround Eligible</span>
                  </div>
                </div>

                {/* Subtext description */}
                <p className="text-xs sm:text-sm font-light text-[#BDBDBD] leading-relaxed mb-8">
                  {activeCategory.description}
                </p>

                {/* Checklist Blocks */}
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  {activeCategory.details.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#C8A46D] border-b border-white/5 pb-2">
                        {section.title}
                      </h4>
                      <ul className="space-y-3">
                        {section.items.map((item, idy) => (
                          <li key={idy} className="flex items-start gap-2.5 text-xs text-[#BDBDBD] font-light leading-snug hover:text-white transition-colors">
                            <CheckCircle className="w-3.5 h-3.5 text-[#C8A46D] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Panel CTA action */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-[11px] text-[#888888] font-mono">
                    * Available for bulk operations and single priority requests.
                  </div>
                  
                  <button
                    onClick={() => onScrollTo("contact", activeCategory.title)}
                    className="inline-flex items-center gap-2 py-3 px-6 bg-[#C8A46D]/10 hover:bg-[#C8A46D] text-[#C8A46D] hover:text-black font-semibold text-xs tracking-wider uppercase rounded-lg border border-[#C8A46D]/30 transition-all duration-300 group cursor-pointer"
                  >
                    Inquire About {activeCategory.title.split(" & ")[0]}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
