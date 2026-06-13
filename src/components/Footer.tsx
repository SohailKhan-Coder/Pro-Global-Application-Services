/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FileText, Globe, Facebook, Linkedin, MessageSquare, ArrowUp, Sparkles } from "lucide-react";

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const faceBookUrl = "https://facebook.com";
  const linkedInUrl = "https://linkedin.com";
  const whatsappUrl = "https://wa.me/923000000000";

  return (
    <footer id="footer" className="bg-[#090909] text-[#BDBDBD] border-t border-white/5 py-12 relative overflow-hidden">
      <div className="absolute bottom-[20%] left-[20%] w-[30rem] h-[15rem] rounded-full bg-[#C8A46D]/1 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer blocks */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 items-start">
          
          {/* Logo Brand / Tagline Column (Col 5) */}
          <div className="md:col-span-5 space-y-4">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => onScrollTo("home")}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A46D] to-[#8a6a3d] flex items-center justify-center shadow-[0_0_15px_rgba(200,164,109,0.3)] transition-transform duration-300">
                <Globe className="w-5 h-5 text-black stroke-[2.5]" />
              </div>
              <div>
                <span className="font-display text-lg font-bold tracking-wider text-white flex items-center gap-1">
                  PRO GLOBAL
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A46D] animate-pulse" />
                </span>
                <span className="text-[10px] font-mono text-[#C8A46D] tracking-widest block uppercase -mt-0.5 font-bold">
                  Application Services
                </span>
              </div>
            </div>

            <p className="text-xs font-mono text-white/50 tracking-wide">
              Fast. Accurate. Confidential. Global.
            </p>

            <p className="text-xs sm:text-xs text-[#888888] font-light leading-relaxed max-w-sm">
              Supporting student consultancies, scholarship agencies, visa consultants, and academic participants globally with high-quality application processing and document management.
            </p>
          </div>

          {/* Quick Links Column (Col 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono text-white uppercase tracking-widest font-extrabold pb-1.5 border-b border-white/5 inline-block">
              Outsourcing Portal Links
            </h4>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <button
                onClick={() => onScrollTo("home")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => onScrollTo("about")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                About Us
              </button>
              <button
                onClick={() => onScrollTo("services")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={() => onScrollTo("why-choose-us")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Why Choose Us
              </button>
              <button
                onClick={() => onScrollTo("countries")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Countries Served
              </button>
              <button
                onClick={() => onScrollTo("privacy")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => onScrollTo("free-trial")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Free Trial
              </button>
              <button
                onClick={() => onScrollTo("contact")}
                className="text-left text-xs text-[#BDBDBD] hover:text-[#C8A46D] transition-colors font-light cursor-pointer"
              >
                Contact Desk
              </button>
            </div>
          </div>

          {/* Social Channels Column (Col 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono text-white uppercase tracking-widest font-extrabold pb-1.5 border-b border-white/5 inline-block">
              Corporate Desk
            </h4>
            
            <p className="text-[11px] text-[#888888] font-light leading-relaxed">
              Available 24/7 for urgent enrollment intakes. Select digital channels:
            </p>

            <div className="flex gap-2.5">
              <a
                href={linkedInUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-[#BDBDBD] hover:text-white hover:bg-white/10 border border-white/5 transition-all"
                aria-label="LinkedIn Account"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={faceBookUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-[#BDBDBD] hover:text-white hover:bg-white/10 border border-white/5 transition-all"
                aria-label="Facebook Account"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-white/5 text-[#BDBDBD] hover:text-white hover:bg-white/10 border border-white/5 transition-all"
                aria-label="WhatsApp Corporate Desk"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Sub-row credit line */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-[#888888] font-mono">
          <div>
            &copy; {currentYear} PRO GLOBAL APPLICATION SERVICES. All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-1 text-[#888888]/80 select-none">
            Built Securely for Consultancies Worldwide
            <Sparkles className="w-3 h-3 text-[#C8A46D]" />
          </div>

          <button
            onClick={() => onScrollTo("home")}
            className="p-2 bg-gradient-to-br from-[#C8A46D] to-[#8a6a3d] text-black rounded hover:from-[#D9B880] transition-colors flex items-center gap-1.5 font-bold uppercase tracking-widest text-[9px] cursor-pointer"
          >
            Top
            <ArrowUp className="w-3.5 h-3.5 text-black stroke-[3]" />
          </button>
        </div>

      </div>
    </footer>
  );
}
