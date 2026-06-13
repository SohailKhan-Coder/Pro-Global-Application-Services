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

 const handleSubmit = async (e: React.FormEvent) => {
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

    const ticketId = `TRIAL-${new Date().getFullYear()}-${Date.now()}`;

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

    // Update Tracker
    setActiveTrials((prev) => [newTrial, ...prev]);

    alert(`Free Trial Request Submitted! Ticket ID: ${ticketId}`);

    setName("");
    setCompanyName("");
    setEmail("");
    setPhone("");
    setScope("");

    setShowWizard(false);
  } catch (error) {
    console.error(error);
    alert("Failed to submit trial request.");
  } finally {
    setLoading(false);
  }:
};

