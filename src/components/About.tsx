/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Users2, Clock, Globe2, Sparkles, Files } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = end / (duration / 16); // 16ms is roughly 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isInView]);

  return (
    <span ref={ref} className="font-display font-bold tracking-tight">
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const stats = [
    { 
      endValue: 100, 
      suffix: "+", 
      label: "Team Members", 
      icon: <Users2 className="w-5 h-5 text-[#C8A46D]" />,
      desc: "Full-time document controllers & data specialists based in Pakistan." 
    },
    { 
      endValue: 24, 
      suffix: "-Hour Delivery", 
      label: "Turnaround SLA", 
      icon: <Clock className="w-5 h-5 text-[#C8A46D]" />,
      desc: "Our active operational squads execute workflows in overnight shifts." 
    },
    { 
      endValue: 100, // worldwide
      suffix: "% Secure", 
      label: "Worldwide Coverage", 
      icon: <Globe2 className="w-5 h-5 text-[#C8A46D]" />,
      desc: "Remote online support for global consultancies and research bodies." 
    },
    { 
      endValue: 1000, 
      suffix: "+", 
      label: "Applications Processed", 
      icon: <Files className="w-5 h-5 text-[#C8A46D]" />,
      desc: "Admissions, scholarship profiles, and data files solved flawlessly." 
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Decorative gradients */}
      <div className="absolute top-[40%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/3 blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Block: Deep Company Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2 text-[#C8A46D]">
              <Sparkles className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest font-semibold">Who We Are</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              About Pro Global <br />
              <span className="gold-gradient-text">Application Services</span>
            </h2>
            
            <div className="text-sm sm:text-base text-[#BDBDBD] space-y-5 font-light leading-relaxed">
              <p>
                Pro Global Application Services is a professional outsourcing and back-office support company based in Pakistan.
              </p>
              <p>
                We provide fast, accurate, and reliable application processing, form filling, data entry, academic support, and document management services to clients worldwide.
              </p>
              <p>
                Our primary focus is helping education consultancies, scholarship agencies, visa consultants, student recruitment agencies, and individual students manage large workloads efficiently while meeting strict deadlines.
              </p>
              <p className="border-l-2 border-[#C8A46D] pl-4 font-mono text-xs tracking-wide text-white py-1">
                With a dedicated team of over 100 professionals, we are capable of handling high-volume projects and delivering quality results within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Right Block: Animated statistics cards */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#C8A46D]/70 mb-2">Our Key Operational Stats</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-[#121212]/80 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-[#C8A46D]/30 transition-all duration-300 group hover:-translate-y-1 shadow-[0_4px_25px_rgba(0,0,0,0.4)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-lg bg-[#C8A46D]/10 border border-[#C8A46D]/20 group-hover:scale-105 transition-transform">
                      {stat.icon}
                    </div>
                    <span className="text-[10px] font-mono text-[#BDBDBD] bg-white/5 px-2 py-0.5 rounded">
                      Verified
                    </span>
                  </div>
                  
                  <div className="text-2xl sm:text-3xl text-white font-display font-bold mb-1">
                    {/* Animated counters */}
                    <Counter end={stat.endValue} suffix={stat.suffix} />
                  </div>
                  
                  <p className="text-xs font-display font-medium text-[#C8A46D] uppercase tracking-wider mb-2">
                    {stat.label}
                  </p>
                  
                  <p className="text-[11px] text-[#BDBDBD] font-light leading-relaxed">
                    {stat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
