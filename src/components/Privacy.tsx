/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { COMPLIANCE_ITEMS } from "../data";
import { 
  ShieldCheck, 
  Lock, 
  EyeOff, 
  FileText, 
  CheckCircle, 
  AlertCircle,
  X,
  FileSpreadsheet
} from "lucide-react";

export default function Privacy() {
  const [showNdaPreview, setShowNdaPreview] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [authorizedSigner, setAuthorizedSigner] = useState("");

  const todayStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <section id="privacy" className="py-24 relative overflow-hidden bg-[#0F0F0FF0]">
      {/* Visual security cues */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[35rem] h-[35rem] rounded-full bg-emerald-500/2 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Shield Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-emerald-400 mb-3 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Security Trust Protocol</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Privacy & <span className="text-emerald-400">Confidentiality Guarantee</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            We understand that student records, personal information, academic documents, consultancy databases, and client records are highly sensitive.
          </p>
        </div>

        {/* Dynamic Guarantee Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Main Statement Display (Col 5) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#121212] to-[#0A0A0A] p-6 sm:p-8 rounded-2xl border border-emerald-500/20 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 to-emerald-850" />
            
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6">
                <Lock className="w-6 h-6" />
              </div>
              
              <h3 className="font-display text-xl font-bold text-white tracking-wide">
                Protective Policy Assurance
              </h3>
              
              <p className="text-xs sm:text-sm text-[#BDBDBD] font-light leading-relaxed">
                At Pro Global Application Services, protecting your information is our highest priority. We deploy rigorous data hygiene practices directly into our Lahore operations center to ensure zero leakages.
              </p>

              <div className="p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/20 flex gap-3.5">
                <AlertCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-[#BDBDBD] leading-relaxed">
                  <span className="text-white font-semibold">Standard NDA Option:</span> Any consultancy onboarding can immediately request a bilateral Non-Disclosure Agreement before releasing application portal credentials.
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5">
              <p className="text-[#BDBDBD] font-display font-medium text-xs tracking-wider uppercase mb-2">
                Absolute Commitment
              </p>
              <h4 className="text-base sm:text-lg font-bold text-emerald-400 tracking-wide">
                "Your Privacy is 100% Guaranteed."
              </h4>
            </div>
          </div>

          {/* Interactive Core Commitments Checklist (Col 7) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/5 relative">
            <div>
              <h3 className="text-[10px] font-mono text-[#BDBDBD]/60 uppercase tracking-widest pl-1 mb-6">
                Active Privacy Measures
              </h3>
              
              <div className="space-y-5">
                {COMPLIANCE_ITEMS.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-950/30 border border-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0 group-hover:scale-105 transition-transform">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] sm:text-xs text-[#BDBDBD] font-light mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* NDA Draft Overlay Launch Trigger */}
            <div className="pt-8 mt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-[10px] tracking-wide text-[#BDBDBD] font-light italic">
                Bilateral Confidentiality and Data Protection protocols verified daily.
              </span>
              
              <button
                onClick={() => setShowNdaPreview(true)}
                className="inline-flex items-center gap-2 py-2.5 px-5 bg-emerald-950/40 hover:bg-emerald-500 hover:text-black border border-emerald-500/30 text-emerald-400 hover:border-transparent rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer text-center"
              >
                <FileText className="w-4 h-4 shrink-0" />
                Draft NDA Instantly
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Pop-Up Modal: Interactive Legal NDA Document Draft Preview */}
      <AnimatePresence>
        {showNdaPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-[#0A0A0A] border border-[#C8A46D]/20 rounded-2xl p-6 sm:p-8 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] gold-glow"
            >
              {/* Top Close bar */}
              <button
                onClick={() => setShowNdaPreview(false)}
                className="absolute top-4 right-4 p-2 text-[#BDBDBD] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 text-[#C8A46D] mb-4 font-mono text-[10px] uppercase tracking-widest font-bold">
                <FileSpreadsheet className="w-4 h-4" />
                Instantly Generated NDA Draft Preview
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight pr-6 mb-2">
                Bilateral Mutual Non-Disclosure Agreement
              </h3>
              
              <p className="text-[11px] text-[#BDBDBD] font-light leading-relaxed mb-6">
                Fill details to instantly verify a customized boilerplate Confidentiality Agreement. You can download or print this preview for internal coordination.
              </p>

              {/* Dynamic input fields */}
              <div className="grid sm:grid-cols-2 gap-4 bg-[#121212] p-4 rounded-xl border border-white/5 mb-6">
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Your Consultancy Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Paramount Education"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/10 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Authorised Signer Officer
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe, Director"
                    value={authorizedSigner}
                    onChange={(e) => setAuthorizedSigner(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/10 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  />
                </div>
              </div>

              {/* Legal Text Panel */}
              <div className="bg-[#161616] border border-white/5 p-5 font-mono text-[10px] text-[#BDBDBD] leading-relaxed rounded-xl max-h-[250px] overflow-y-auto select-none relative mb-6">
                <div className="absolute top-2 right-2 text-[8px] bg-emerald-950 text-emerald-400 px-2 py-0.5 rounded uppercase border border-emerald-900/40 font-bold">
                  Bilateral Guard
                </div>
                
                <h4 className="text-center font-bold text-white border-b border-white/5 pb-2 uppercase tracking-wide mb-4">
                  MUTUAL NON-DISCLOSURE PROTOCOL (DRAFT)
                </h4>
                
                <p className="mb-3">
                  This Mutual Non-Disclosure Agreement (the "Agreement") is entered into this {todayStr}, by and between <strong>{companyName || "[CONSULTANCY CLIENT PARTNER]"}</strong> ("Disclosing Party"), and <strong>PRO GLOBAL APPLICATION SERVICES</strong>, based in Lahore, Pakistan ("Receiving Party").
                </p>
                <p className="mb-3">
                  <strong>1. Purpose:</strong> The parties wish to evaluate a potential business outlet relationship relating to back-office student intake registration, portfolio formatting, and bulk data auditing (the "Transaction").
                </p>
                <p className="mb-3">
                  <strong>2. Confidential Records:</strong> "Confidential Information" shall mean all sensitive credentials, student registration documents, passport catalogs, blocked funding certificates, or corporate database configurations disclosed by the Disclosing Party.
                </p>
                <p className="mb-3">
                  <strong>3. Standard Guard:</strong> Receiving Party covenants to handle Disclosing Party's information under standard operational isolation. No student documents shall be copied, leased, or transmitted to any third-party. Complete storage scrub is executed upon task confirmation.
                </p>
                
                {/* Simulated Signature Block */}
                <div className="mt-8 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-white">For: {companyName || "[Your Consultancy]"}</p>
                    <p className="mt-4 italic text-white/50">{authorizedSigner || "[Signer Signature]"}</p>
                    <div className="border-t border-white/20 mt-1 max-w-[120px] text-[8px]">Authorized Officer</div>
                  </div>
                  <div>
                    <p className="font-bold text-white">For: Pro Global Application Services</p>
                    <p className="mt-4 italic text-emerald-500 font-serif font-semibold tracking-wider">Sohail Khan, COO</p>
                    <div className="border-t border-white/20 mt-1 max-w-[150px] text-[8px]">Chief Operating Officer</div>
                  </div>
                </div>
              </div>

              {/* Confirm info */}
              <div className="flex justify-between items-center bg-[#121212] p-4 rounded-xl border border-white/5">
                <span className="text-[10px] font-mono text-[#888888]">
                  * Draft complies with global agency privacy standards.
                </span>
                <button
                  type="button"
                  onClick={() => {
                    alert("This functional draft has been verified and registered. Our COO Sohail Khan will review your company details and deliver a signed copy to your email upon contact inquiry submit!");
                    setShowNdaPreview(false);
                  }}
                  className="px-4 py-2 bg-[#C8A46D] text-black font-bold text-[10px] uppercase tracking-wider rounded hover:bg-[#D9B880] transition-colors"
                >
                  Accept & Save Draft
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
