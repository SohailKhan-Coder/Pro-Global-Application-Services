/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Globe, Sparkles } from "lucide-react";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About Us", id: "about" },
    { label: "Services", id: "services" },
    { label: "Why Choose Us", id: "why-choose-us" },
    { label: "Countries Served", id: "countries" },
    { label: "Partners", id: "partners" },
    { label: "Privacy", id: "privacy" },
    { label: "Free Trial", id: "free-trial" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="nav-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0A0A0Ad0] backdrop-blur-md border-b border-[#C8A46D]/15 py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div
            id="nav-logo-brand"
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#C8A46D] to-[#8a6a3d] flex items-center justify-center shadow-[0_0_15px_rgba(200,164,109,0.3)] transition-transform duration-300 group-hover:scale-105">
              <Globe className="w-5 h-5 text-black stroke-[2.5]" />
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-wider text-white flex items-center gap-1">
                PRO GLOBAL
                <Sparkles className="w-3.5 h-3.5 text-[#C8A46D] animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-[#C8A46D] tracking-widest block uppercase -mt-0.5">
                Application Services
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-md relative ${
                  activeSection === item.id
                    ? "text-[#C8A46D] font-semibold"
                    : "text-[#BDBDBD] hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#C8A46D] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("free-trial")}
              className="ml-4 px-4 py-2 text-xs font-bold tracking-wider uppercase bg-[#C8A46D] text-black rounded hover:bg-[#D9B880] transition-colors duration-200 shadow-[0_0_15px_rgba(200,164,109,0.2)]"
            >
              Free Trial
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#BDBDBD] hover:text-white focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#0F0F0F] border-b border-[#C8A46D]/15 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-3 py-2.5 rounded-md text-sm font-medium tracking-wide transition-colors ${
                    activeSection === item.id
                      ? "text-[#C8A46D] bg-[#C8A46D]/10 font-semibold border-l-2 border-[#C8A46D]"
                      : "text-[#BDBDBD] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-3">
                <button
                  onClick={() => handleNavClick("free-trial")}
                  className="w-full py-3 text-center text-xs font-bold tracking-widest uppercase bg-[#C8A46D] text-black rounded hover:bg-[#D9B880] transition-colors shadow-lg"
                >
                  Request Free Trial
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
