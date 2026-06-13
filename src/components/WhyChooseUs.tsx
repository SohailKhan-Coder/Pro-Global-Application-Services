/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { WHY_CHOOSE_US } from "../data";
import { 
  Users, 
  Clock, 
  CheckCircle, 
  Layers, 
  ShieldAlert, 
  Globe, 
  Lock, 
  Briefcase,
  Award
} from "lucide-react";

export default function WhyChooseUs() {
  const getIcon = (name: string, className: string) => {
    switch (name) {
      case "Users":
        return <Users className={className} />;
      case "Clock":
        return <Clock className={className} />;
      case "CheckCircle":
        return <CheckCircle className={className} />;
      case "Layers":
        return <Layers className={className} />;
      case "ShieldAlert":
        return <ShieldAlert className={className} />;
      case "Globe":
        return <Globe className={className} />;
      case "Lock":
        return <Lock className={className} />;
      case "Briefcase":
        return <Briefcase className={className} />;
      default:
        return <Award className={className} />;
    }
  };

  return (
    <section id="why-choose-us" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Decorative lines & elements */}
      <div className="absolute right-[5%] bottom-[10%] w-[40rem] h-[30rem] rounded-full bg-[#C8A46D]/2 blur-[130px] pointer-events-none" />

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <Award className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Our Performance Edge</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Why Partner With <span className="gold-gradient-text">Pro Global</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            We operate as your back-office force multiplier, delivering absolute precision with the rapid speeds needed during peak university admissions cycles.
          </p>
        </div>

        {/* Bento/Modern Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-[#121212] rounded-xl p-6 border border-white/5 hover:border-[#C8A46D]/30 shadow-md transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2.5 rounded-lg bg-[#C8A46D]/15 border border-[#C8A46D]/25 text-[#C8A46D] group-hover:scale-110 transition-transform duration-300">
                  {getIcon(item.iconName, "w-5 h-5")}
                </div>
                
                <h3 className="font-display text-xs sm:text-sm font-bold text-white tracking-wide group-hover:text-[#C8A46D] transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="text-[11px] sm:text-xs text-[#BDBDBD] font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
