/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Leadership from "./components/Leadership";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import CountriesServed from "./components/CountriesServed";
import Partners from "./components/Partners";
import Privacy from "./components/Privacy";
import FreeTrial from "./components/FreeTrial";
import CompanyMission from "./components/CompanyMission";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import LiveNotification from "./components/LiveNotification";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [prefilledService, setPrefilledService] = useState("");

  const handleScrollTo = (sectionId: string, prefillService?: string) => {
  setActiveSection(sectionId);

  if (prefillService) {
    setPrefilledService(prefillService);
  }

  const element = document.getElementById(sectionId);

  if (element) {
    const offset = 76;
    const top =
      element.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
    
   

  // Setup dynamic scroll listener to update active navbar selections (IntersectionObserver)
 useEffect(() => {
  const sections = [
    "home",
    "about",
    "leadership",
    "services",
    "why-choose-us",
    "countries",
    "partners",
    "privacy",
    "free-trial",
    "contact",
  ];

  const handleObserver = () => {
    const scrollPosition = window.scrollY + 200;

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);

      if (element) {
        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(sectionId);
          break;
        }
      }
    }
  };

  window.addEventListener("scroll", handleObserver);
  return () => window.removeEventListener("scroll", handleObserver);
}, []);
  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-white selection:bg-[#C8A46D] selection:text-black">
      {/* Dynamic Global Navbar */}
      <Navbar onNavigate={handleScrollTo} activeSection={activeSection} />

      {/* Hero Header Section */}
      <Hero onScrollTo={handleScrollTo} />

      {/* Main Blocks */}
      <main id="main-content">
        {/* About Company */}
        <About />

        {/* Board of Leadership */}
        <Leadership />

        {/* Operational Services with prefill actions */}
        <Services onScrollTo={handleScrollTo} />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Interactive Global Map served */}
        <CountriesServed />

        {/* Partners */}
        <Partners />

        {/* Company Mission & Promises */}
        <CompanyMission />

        {/* Privacy & Safeguard with NDA builder */}
        <Privacy />

        {/* Free trial onboarding panel with tracker */}
        <FreeTrial />

        {/* Contact Form Inquiry console */}
        <ContactForm 
  prefilledService={prefilledService} 
  onClearPrefill={() => setPrefilledService("")} 
/>
</main>

<LiveNotification />

{/* Elegant Footer with scroll-back top */}
<Footer onScrollTo={handleScrollTo} />
    </div>
  );
}


