/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Gift, Sparkles, Send, Clock, ShieldCheck, CheckCircle, RefreshCw, X, FileCheck } from "lucide-react";
import emailjs from "@emailjs/browser";
import { supabase } from "../components/supabase";
interface ActiveTrial {
  id: string;
  name: string;
  companyName: string;
  service: string;
  scope: string;
  status: string;
  timestamp: string;
}

export default function FreeTrial() {
  const [showWizard, setShowWizard] = useState(false);
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("University Form Filling (3 Profiles)");
  const [scope, setScope] = useState("");
  const [activeTrials, setActiveTrials] = useState<ActiveTrial[]>([]);
  const [loading, setLoading] = useState(false);
  

  // Load active trials from localStorage on component load
  useEffect(() => {
  const loadTrials = async () => {
    const { data, error } = await supabase
      .from("trial_requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      setActiveTrials(
        data.map((item) => ({
          id: item.ticket_id,
          name: item.name,
          companyName: item.company_name,
          service: item.service,
          scope: item.scope,
          status: item.status,
          timestamp: new Date(item.created_at).toLocaleString(),
        }))
      );
    }
  };

  loadTrials();
}, []);

  const handleSubmit = async (e: React.FormEvent) => {const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setLoading(true);

  try {
    const templateParams = {
      name,
      company_name: companyName,
      email,
      phone: phone || "Not Provided",
      service,
      scope: scope || "No additional details provided",
    };

    // Send Email
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TRIAL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    // Generate Ticket ID
    const ticketId = `TRIAL-${new Date().getFullYear()}-${Date.now()}`;

    // Create Trial Object
    const newTrial: ActiveTrial = {
      id: ticketId,
      name,
      companyName,
      service,
      scope,
      status: "Pending Review",
      timestamp: new Date().toLocaleString(),
    };

    // Save to Supabase
    const { error } = await supabase
      .from("trial_requests")
      .insert([
        {
          ticket_id: ticketId,
          name,
          company_name: companyName,
          email,
          phone: phone || "Not Provided",
          service,
          scope,
          status: "Pending Review",
        },
      ]);

    if (error) {
      console.error("Supabase Error:", error);
      alert("Failed to save trial request.");
      return;
    }

    // Update Tracker UI
    setActiveTrials((prev) => [newTrial, ...prev]);

    alert(`Free Trial Request Submitted! Ticket ID: ${ticketId}`);

    // Reset Form
    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setScope("");

    // Close Modal
    setShowWizard(false);

  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to submit trial request.");
  } finally {
    setLoading(false);
  }
};

  const handleClearTrial = (id: string) => {
    const updated = activeTrials.filter((t) => t.id !== id);
    setActiveTrials(updated);
    try {
      localStorage.setItem("pro_global_trials", JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <section id="free-trial" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Decorative gradient glowing backing */}
      <div className="absolute top-[30%] left-[20%] w-[35rem] h-[35rem] rounded-full bg-[#C8A46D]/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Container Grid panel */}
        <div className="bg-[#121212] rounded-2xl p-8 sm:p-12 lg:p-16 border border-[#C8A46D]/15 shadow-xl relative overflow-hidden">
          {/* Top visual corner crown */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#C8A46D]/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Info block (Sponsor Statement) */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#C8A46D]">
                <Gift className="w-5 h-5" />
                <span className="text-xs font-mono uppercase tracking-widest font-semibold">Risk-Free onboarding</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                Free Trial Available for <br />
                <span className="gold-gradient-text">Selected Projects</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#BDBDBD] font-light leading-relaxed">
                We believe in building long-term partnerships based on trust and performance. To help new education consultancies, scholarship recruitment centers, and document agencies evaluate our operational speed, we offer a <strong className="text-white">FREE TRIAL SESSION</strong> for selected pilot tasks.
              </p>

              <blockquote className="border-l-2 border-[#C8A46D] pl-4 italic text-xs text-[#BDBDBD] font-mono py-1">
                "Allows you to comprehensively assess our accuracy, formatting alignment, security protocols, and turnaround times before executing long-term corporate cooperation contracts."
              </blockquote>

              <div className="space-y-3.5 pt-4">
                <div className="flex items-center gap-3 text-xs text-[#BDBDBD] font-light">
                  <CheckCircle className="w-4 h-4 text-[#C8A46D]" />
                  <span>3 University Application form completions (Free)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#BDBDBD] font-light">
                  <CheckCircle className="w-4 h-4 text-[#C8A46D]" />
                  <span>Up to 50 entries of bulk data entry pilot (Free)</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#BDBDBD] font-light">
                  <CheckCircle className="w-4 h-4 text-[#C8A46D]" />
                  <span>1 Academic assignment (Free)</span>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => setShowWizard(true)}
                  className="px-8 py-4 bg-[#C8A46D] hover:bg-[#D9B880] text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-[0_4px_25px_rgba(200,164,109,0.2)] hover:shadow-[0_4px_35px_rgba(200,164,109,0.35)] cursor-pointer hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center gap-2"
                >
                  Request Free Trial
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Interactive Status panel (Awaiting / Active trial dashboard trackers using localStorage) */}
            <div className="bg-black/45 p-6 sm:p-8 rounded-xl border border-white/5 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                  <h3 className="font-display text-sm font-bold text-white tracking-wide flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#C8A46D]" />
                    Interactive Trial Tracker
                  </h3>
                  <span className="text-[9px] font-mono text-[#888888]">
                    Client Session Preserved
                  </span>
                </div>

                {activeTrials.length === 0 ? (
                  <div className="text-center py-10 space-y-3 select-none">
                    <FileCheck className="w-10 h-10 text-[#C8A46D]/25 mx-auto" />
                    <p className="text-xs text-[#BDBDBD] font-light">
                      No active trials requested yet.
                    </p>
                    <p className="text-[10px] text-[#888888] font-mono leading-relaxed">
                      Click the "Request Free Trial" button to submit a task and monitor operational audits in real-time.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4 max-h-[280px] overflow-y-auto pr-1">
                    {activeTrials.map((trial) => (
                      <div
                        key={trial.id}
                        className="bg-[#121212] p-4 rounded-xl border border-[#C8A46D]/15 relative overflow-hidden group hover:border-[#C8A46D]/30 transition-all duration-300"
                      >
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#C8A46D] to-emerald-500" />
                        
                        <div className="flex justify-between items-start gap-4">
                          <div>
                            <span className="text-[9px] font-mono text-[#C8A46D] uppercase tracking-wider font-semibold">
                              {trial.id}
                            </span>
                            <h4 className="font-display font-bold text-white text-xs mt-1">
                              {trial.service}
                            </h4>
                            <p className="text-[10px] text-[#BDBDBD] font-light mt-0.5">
                              {trial.companyName} &bull; {trial.name}
                            </p>
                          </div>

                          <button
                            onClick={() => handleClearTrial(trial.id)}
                            className="p-1 rounded bg-white/5 text-[#888888] hover:text-white hover:bg-white/10 transition-colors"
                            title="Remove Ticket Tracker"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Details and tracker statuses */}
                        <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono">
                          <span className="text-[#888888]">{trial.timestamp}</span>
                          <span className="text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded flex items-center gap-1">
                            <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                            {trial.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {activeTrials.length > 0 && (
                <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-[#888888] font-light">
                  * Keeping this window open runs local simulation. Our real staff coordinates with your email upon administrative ticket verification.
                </div>
              )}
            </div>

          </div>
        </div>

      </div>

      {/* Pop-up Free Trial Form Wizard Modal */}
      <AnimatePresence>
        {showWizard && (
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
              className="bg-[#0D0D0D] border border-[#C8A46D]/20 rounded-2xl p-6 sm:p-8 max-w-xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_20px_50px_rgba(0,0,0,0.8)] gold-glow"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowWizard(false)}
                className="absolute top-4 right-4 p-2 text-[#BDBDBD] hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 text-[#C8A46D] mb-4 font-mono text-[10px] uppercase tracking-widest font-bold">
                <Gift className="w-4 h-4" />
                Initialize Corporate Trial
              </div>

              <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
                Request Free Operational Pilot
              </h3>
              
              <p className="text-[11px] text-[#BDBDBD] font-light leading-relaxed mb-6">
                Please complete the form. No credit cards or obligations are required. Our COO Sohail Khan reviews trial scopes within business hours.
              </p>

              {/* Form Input fields */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Fawad Ahmad"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#161616] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                      Consultancy Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Partners"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full bg-[#161616] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. admin@apex.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#161616] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. +92 300 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#161616] text-xs text-white placeholder-white/35 px-3.5 py-2.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Select Pilot Service Package <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[#161616] text-xs text-white px-3.5 py-2.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  >
                    <option value="University Form Filling (3 Profiles)">University Form Filling (3 Profiles)</option>
                    <option value="Bulk Ingestion / Data Entry (50 Entries)">Bulk Ingestion / Data Entry (50 Entries)</option>
                    <option value="Thesis Layout / Citation Styling (1 Assignment)">Thesis Layout / Citation Styling (1 Assignment)</option>
                    <option value="Executive Resume Layout Audit (1 Profile)">Executive Resume Layout Audit (1 Profile)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Pilot Task Details & Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe specific form portals, Excel templates, or citation styles required..."
                    value={scope}
                    onChange={(e) => setScope(e.target.value)}
                    className="w-full bg-[#161616] text-xs text-white placeholder-white/35 p-3.5 rounded-md border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-4 flex items-center justify-between border-t border-white/5">
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Secure SSL Tunnel
                  </span>
                  <button
  type="submit"
  disabled={loading}
  className="px-6 py-3 bg-[#C8A46D] hover:bg-[#D9B880] text-black font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
>
  {loading ? (
    <>
      <RefreshCw className="w-4 h-4 animate-spin" />
      Submitting...
    </>
  ) : (
    <>
      Request Free Trial
      <Send className="w-4 h-4" />
    </>
  )}
</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

