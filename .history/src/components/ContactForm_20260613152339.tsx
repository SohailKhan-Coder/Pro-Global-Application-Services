/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ShieldCheck, CheckCircle, Trash2, Globe } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { supabase } from "../compone/supabase";

interface Inquiry {
  id: string;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  timestamp: string;
  status: string;
}

interface ContactFormProps {
  prefilledService?: string;
  onClearPrefill?: () => void;
}

export default function ContactForm({ prefilledService = "", onClearPrefill }: ContactFormProps) {
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("University Application & Form Filling");
const [message, setMessage] = useState("");
const [inquiries, setInquiries] = useState<Inquiry[]>([]);
const [loading, setLoading] = useState(false);

  // Capture incoming pre-filled service from other boards
  useEffect(() => {
    if (prefilledService) {
      setService(prefilledService);
    }
  }, [prefilledService]);

  // Load inquiries history from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("pro_global_inquiries");
      if (stored) {
        setInquiries(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Storage reading error:", e);
    }
  }, []);

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (!name || !email || !service || !message) {
    alert("Please fill out all required fields.");
    return;
  }

  setLoading(true);

  try {
    const templateParams = {
      name,
      company_name: companyName || "N/A",
      email,
      phone: phone || "Not Provided",
      service,
      message,
    };

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    const newInquiry: Inquiry = {
      id: "PGI-" + Math.floor(10000 + Math.random() * 90000),
      name,
      companyName: companyName || "N/A",
      email,
      phone: phone || "Not Provided",
      service,
      message,
      timestamp: new Date().toLocaleString(),
      status: "Email Sent Successfully",
    };

    const updated = [newInquiry, ...inquiries];
    setInquiries(updated);

    localStorage.setItem(
      "pro_global_inquiries",
      JSON.stringify(updated)
    );

    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setMessage("");

    if (onClearPrefill) onClearPrefill();

    alert(
      `Inquiry received successfully! Ticket ID: ${newInquiry.id}.`
    );
  } catch (error) {
    console.error("EmailJS Error:", error);
    alert("Failed to send inquiry. Please try again.");
  } finally {
    setLoading(false);
  }
};

  const handleClearInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    setInquiries(updated);
    try {
      localStorage.setItem("pro_global_inquiries", JSON.stringify(updated));
    } catch (e) {
      console.warn(e);
    }
  };

  // Pre-filled template layouts for mail/WhatsApp clicks
  const whatsappUrl = `https://wa.me/923000000000?text=${encodeURIComponent(
    "Hello Pro Global Application Services, I am looking for professional form filling and back-office outsourcing support."
  )}`;
  const mailtoUrl = `mailto:support@proglobalapps.com?subject=Outsourcing%20Inquiry&body=Hello%20Pro%20Global%20Application%20Services,%0A%0AI%20am%20interested%2520in%2520your%2520services%2520for%2520my%2520consultancy.%2520Please%2520contact%2520me.`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0A0A] border-t border-white/5">
      {/* Background visual graphics */}
      <div className="absolute top-[30%] right-[10%] w-[40rem] h-[30rem] rounded-full bg-[#C8A46D]/1.5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#C8A46D] mb-3">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">Inquiry Dispatch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Initiate Corporate <span className="gold-gradient-text">Connection</span>
          </h2>
          <p className="text-[#BDBDBD] text-xs sm:text-sm mt-3 font-light leading-relaxed max-w-xl mx-auto">
            Submit your processing specifications, team sizes, and templates. Our operations desk is active across all regional timezones.
          </p>
        </div>

        {/* Contact Layout Grid: Left Details card, Right Form Card */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto mb-16">
          
          {/* Details & Live Connections Panel (Col 5) */}
          <div className="lg:col-span-5 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between shadow-lg relative overflow-hidden">
            {/* Top gold lines */}
            <div className="absolute top-0 left-0 w-2.5 h-full bg-[#C8A46D]" />
            
            <div className="space-y-8">
              <h3 className="font-display text-lg font-bold text-white tracking-wide">
                Global Operations Hub
              </h3>
              
              <p className="text-xs sm:text-sm text-[#BDBDBD] font-light leading-relaxed">
                Connect directly with our corporate operations officers in Pakistan for rapid onboarding schedules.
              </p>

              {/* Direct corporate descriptors */}
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded text-[#C8A46D] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono text-white/40 uppercase tracking-widest font-bold">
                      Operations HQ Base:
                    </h4>
                    <p className="text-xs text-[#BDBDBD] mt-0.5 font-light leading-relaxed">
                      Pro Global Application Services LTD,<br />
                      H-13, Islamabad, Zubair Shah Road, Pakistan
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/5 rounded text-[#C8A46D] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-mono text-white/40 uppercase tracking-widest font-bold">
                      SLA Business Hours:
                    </h4>
                    <p className="text-xs text-[#BDBDBD] mt-0.5 font-light">
                      24 hours / 7 Days. Active shift rotations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick action buttons for WhatsApp and Mail */}
              <div className="space-y-3 pt-6 border-t border-white/5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-black font-bold text-xs uppercase tracking-widest rounded-lg transition-transform hover:-translate-y-0.5 text-center"
                >
                  <MessageSquare className="w-4 h-4 fill-black" />
                  Contact on WhatsApp
                </a>

                <a
                  href={mailtoUrl}
                  className="flex items-center justify-center gap-2.5 w-full py-3 bg-[#1A1A1A] hover:bg-[#222222] text-white border border-white/10 hover:border-white/20 font-bold text-xs uppercase tracking-widest rounded-lg transition-transform hover:-translate-y-0.5 text-center"
                >
                  <Mail className="w-4 h-4" />
                  Email Support Desk
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 text-[10px] text-[#888888] font-light">
              * Official response standards apply to all communication paths.
            </div>
          </div>

          {/* Core Inquiry Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/5 shadow-lg relative">
            <h3 className="text-[10px] font-mono text-[#BDBDBD]/60 uppercase tracking-widest pl-1 mb-6">
              SPECIFY YOUR OPERATIONAL WORKLOAD
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Fawad Ahmad"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Company Agency Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Learner Consultancy Ltd"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
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
                    placeholder="e.g. contact@learner.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. +92 301 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                  Select Required outsourcing Division <span className="text-red-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-[#1A1A1A] text-xs text-white px-4 py-3 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors"
                >
                  <option value="Application & Form Filling">Application & Form Filling Services</option>
                  <option value="Data Entry & Administration">Data Entry & Administration Services</option>
                  <option value="Assignment Support Services">Assignment Support Services</option>
                  <option value="CV & Resume Writing">CV & Resume Writing Services</option>
                  <option value="Research & Thesis Support">Research & Thesis Support Services</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1.5 font-bold">
                  Detailed Work Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about daily/weekly forms volumes, specific university portal links, or special research styling requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-[#1A1A1A] text-xs text-white placeholder-white/35 p-4 rounded-lg border border-white/5 focus:outline-none focus:border-[#C8A46D] transition-colors resize-none"
                />
              </div>

              {/* Submit trigger button */}
              <div className="pt-4 flex items-center justify-between border-t border-white/5">
                <span className="text-[10px] font-mono text-[#888888] flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Compliance Secure Securely
                </span>
               <button
  type="submit"
  disabled={loading}
  className="px-6 py-3 bg-[#C8A46D] text-black font-bold text-xs uppercase tracking-widest rounded hover:bg-[#D9B880] transition-colors flex items-center gap-2 cursor-pointer disabled:opacity-50"
>
  {loading ? "Sending..." : "Submit Inquiry"}
  {!loading && <Send className="w-3.5 h-3.5" />}
</button>
              </div>
            </form>
          </div>

        </div>

        {/* Submitted Inquiries List (Administrative receipts Board for high-fidelity interactive flow!) */}
        <AnimatePresence>
          {inquiries.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-6xl mx-auto bg-[#121212] p-6 sm:p-8 rounded-2xl border border-white/5"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <h3 className="font-display text-sm font-bold text-white tracking-widest flex items-center gap-2 uppercase">
                  <Globe className="w-4 h-4 text-[#C8A46D]" />
                  Your Sent Inquiries Dispatch Control
                </h3>
                <span className="text-[9px] font-mono text-emerald-400">
                  Client Record In Sync
                </span>
              </div>

              <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="bg-[#0A0A0A] p-4 sm:p-5 rounded-xl border border-white/5 relative group hover:border-[#C8A46D]/15 transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <span className="text-[9px] font-mono text-[#C8A46D] font-bold">
                            {inq.id}
                          </span>
                          <span className="text-[#888888] text-[9px] font-mono">&bull; {inq.timestamp}</span>
                        </div>
                        <h4 className="font-display font-medium text-xs text-white mt-1.5">
                          Service: <span className="text-[#C8A46D]">{inq.service}</span>
                        </h4>
                        <p className="text-[11px] text-[#BDBDBD] font-light mt-1">
                          Applicant: <strong className="text-white">{inq.name}</strong> ({inq.companyName}) &bull; Email: {inq.email}
                        </p>
                        
                        {/* Message representation */}
                        <div className="mt-3 text-xs bg-white/2 p-3 rounded border border-white/3 text-[#888888] leading-relaxed font-light">
                          {inq.message}
                        </div>
                      </div>

                      <button
                        onClick={() => handleClearInquiry(inq.id)}
                        className="p-1 rounded bg-white/5 text-[#888888] hover:text-white hover:bg-white/10 transition-colors shrink-0"
                        title="Remove Inquiry Record"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex justify-end">
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/30 px-2 py-0.5 rounded flex items-center gap-1 select-none">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        {inq.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></span>

        <a
          href="https://wa.me/923000000000?text=Hello%20Pro%20Global%20Application%20Services,%20I%20am%20interested%20in%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-xl hover:scale-110 transition-transform"
          aria-label="Contact on WhatsApp"
        >
          <FaWhatsapp size={34} className="text-white" />
        </a>
      </div>

    </section>
  );
}
