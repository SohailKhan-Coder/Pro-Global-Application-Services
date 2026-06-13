/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  title: string;
  items: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  details: ServiceDetail[];
  iconName: string;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface Partner {
  name: string;
  industry: string;
  location: string;
  logoText: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
  bio: string;
  message: string;
  vision: string;
}

export const STATISTICS: Stat[] = [
  { value: "100+", label: "Professional Experts", description: "Dedicated back-office staff working round-the-clock" },
  { value: "24h", label: "Express Delivery", description: "Standard files and urgent tasks delivered on-time" },
  { value: "Global", label: "Coverage", description: "Supporting consultancies & students in 12+ major regions" },
  { value: "1,000+", label: "Applications Daily", description: "High volume processing capability with zero errors" },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "app-filling",
    title: "Application & Form Filling",
    description: "End-to-end management of complex enrollment forms and registrations with absolute accuracy and swift turnaround.",
    iconName: "FileText",
    details: [
      {
        title: "Education Admissions Support",
        items: [
          "University Application Forms Processing",
          "Scholarship Application Forms Management",
          "Admission Document Verification & Submission",
          "Student Registration Forms Filling",
        ],
      },
      {
        title: "Compliance & Reporting",
        items: [
          "Online Application Submission Auditing",
          "Bulk Form Filling Campaigns (for large agencies)",
          "Student Profile Status Management",
          "Live Application Tracking & Status Updates Check",
        ],
      }
    ],
  },
  {
    id: "data-entry",
    title: "Data Entry & Administration",
    description: "Fast, accurate, and scalable back-office data operations to power your consultancy database without any resource drain.",
    iconName: "Database",
    details: [
      {
        title: "Information Management",
        items: [
          "Bulk Data Entry Operations",
          "Excel Database Creation & Cleanup",
          "Student Record System Updating",
        ],
      },
      {
        title: "Document Logistics",
        items: [
          "Scanned Document Processing & Digitization",
          "Administrative Support & Folder Management",
          "Database Structuring & Verification",
        ],
      }
    ],
  },
  {
    id: "assignment-support",
    title: "Assignment Support Services",
    description: "Expert administrative styling, professional formatting, and aesthetic polishing of academic documents to meet institutional guidelines.",
    iconName: "BookOpen",
    details: [
      {
        title: "Document Styling & Preparation",
        items: [
          "Academic Assignment Formatting",
          "Report Structuring & Table of Contents Setup",
          "Presentation Deck Polishing & Formatting",
          "Project Documentation Layout Assembly",
        ],
      }
    ],
  },
  {
    id: "cv-resume",
    title: "CV & Resume Writing",
    description: "High-impact cv layout editing and professional formatting optimized for job applications and university admissions globally.",
    iconName: "UserCheck",
    details: [
      {
        title: "Profile Optimization",
        items: [
          "Professional CV Composition & Formatting",
          "Admissions-ready Student Resumes",
          "Cover Letter Structuring & Editing Assistance",
          "Job Application Form Documentation Alignment",
        ],
      }
    ],
  },
  {
    id: "research-thesis",
    title: "Research & Thesis Support",
    description: "Elite document management, citation audit, and structure alignment support to help research consultancies and academics perfect their publications.",
    iconName: "Award",
    details: [
      {
        title: "Pre-Submission Polishing",
        items: [
          "Thesis Layout & Typography Formatting",
          "Research Proposal Alignment & Structure Guard",
          "Proofreading & Scholarly Document Structuring",
          "Final Submission Layout Validation",
        ],
      },
      {
        title: "Reference & Citations Audits",
        items: [
          "Literature Review Formatting Assistance",
          "Citation & Referencing Alignment (APA, Harvard, Chicago, etc.)",
          "Research Data Organization & Visual Presentation",
        ],
      }
    ],
  }
];

export const WHY_CHOOSE_US: CoreValue[] = [
  {
    title: "100+ Professional Members",
    description: "A fully vetted, in-house team of document controllers, data specialists, and academic formatters processing work 24/7.",
    iconName: "Users",
  },
  {
    title: "24-Hour Delivery Standards",
    description: "Engineered to deliver high-quality, verified results within hours, resolving urgent deadlines for student intake seasons.",
    iconName: "Clock",
  },
  {
    title: "Precision Quality Control",
    description: "Every single application is subjected to dual-layer expert auditing to guarantee 100% submission accuracy.",
    iconName: "CheckCircle",
  },
  {
    title: "Bulk Capacity Specialists",
    description: "Designed specifically to handle high-volume consultancy intakes of up to 500+ student applications simultaneously.",
    iconName: "Layers",
  },
  {
    title: "Dedicated Project Accounts",
    description: "Receive a dedicated manager who coordinates directly with your counseling team for transparent tracking.",
    iconName: "ShieldAlert",
  },
  {
    title: "Globally Distributed Reach",
    description: "Serving agencies and institutions across several continuous time zones to ensure seamless overnight execution.",
    iconName: "Globe",
  },
  {
    title: "100% Privacy Safeguard",
    description: "Vigorously secure data pipelines ensuring your students' credentials and consultant directories are never exposed.",
    iconName: "Lock",
  },
  {
    title: "Ethical Work Compliance",
    description: "Maintaining strict professional code of standards; no plagiarized formatting or synthetic document generation.",
    iconName: "Briefcase",
  }
];

export const COMPLIANCE_ITEMS = [
  {
    title: "Confidentiality Assured",
    description: "100% confidential handling of sensitive agency databases and student credentials. Standard NDAs provided upon onboarding.",
  },
  {
    title: "Zero Third-Party Sharing",
    description: "We are an insourced operational unit. We never sub-lease or distribute your records. All files remain in private, firewalled silos.",
  },
  {
    title: "Secure Disposal Protocols",
    description: "All client documents and temporary registration details are comprehensively scrubbed upon delivery confirmation.",
  },
  {
    title: "Audit Trail Records",
    description: "Continuous server monitoring ensures that access to student files is heavily guarded and strictly logged.",
  }
];

export const SERVED_COUNTRIES = [
  { id: "uk", name: "United Kingdom", desc: "Major intake partner for Tier 4 visa university processing", coords: { x: "47%", y: "30%" } },
  { id: "aus", name: "Australia", desc: "Admission form filling, GTE document formatting support", coords: { x: "85%", y: "78%" } },
  { id: "usa", name: "United States", desc: "CommonApp processing, scholarship proposal formatting", coords: { x: "20%", y: "35%" } },
  { id: "can", name: "Canada", desc: "Study permit file sorting, portal uploading assistance", coords: { x: "18%", y: "25%" } },
  { id: "uae", name: "United Arab Emirates", desc: "Corporate documentation, regional scholarship coordination", coords: { x: "60%", y: "45%" } },
  { id: "ksa", name: "Saudi Arabia", desc: "Admissions portal management, Arabic translation cataloging", coords: { x: "57%", y: "48%" } },
  { id: "qatar", name: "Qatar", desc: "Higher education application processing & database checks", coords: { x: "59%", y: "46%" } },
  { id: "kuwait", name: "Kuwait", desc: "Scholarship registry formatting, record management", coords: { x: "58%", y: "44%" } },
  { id: "china", name: "China", desc: "MoE student registration assistance, Chinese university admissions", coords: { x: "74%", y: "42%" } },
  { id: "malaysia", name: "Malaysia", desc: "EMGS student visa documentation assembly and layout validation", coords: { x: "77%", y: "56%" } },
  { id: "turkey", name: "Turkey", desc: "Türkiye Bursları applications formatting and administrative file prep", coords: { x: "53%", y: "38%" } },
  { id: "europe", name: "European Countries", desc: "Schengen visa cover letters, blocked account form formatting", coords: { x: "49%", y: "33%" } }
];

export const PARTNERS: Partner[] = [
  { name: "Learner Consultancy", industry: "Education & Admissions", location: "Pakistan & UK", logoText: "LC" },
  { name: "Zian Abroad", industry: "Immigration & Student Visas", location: "Global Network", logoText: "ZA" },
  { name: "PSP Consultant", industry: "International Scholarship Advisors", location: "Middle East", logoText: "PSP" }
];

export const LEADERSHIP: { ceo: Leader; coo: Leader } = {
  ceo: {
    name: "Fawad Ahmad",
    role: "CEO & Founder",
    image: "/images/fawad.jpeg",
    imageAlt: "Fawad Ahmad, CEO & Founder of Pro Global Application Services",
    bio: "Fawad Ahmad is the Founder and Chief Executive Officer of Pro Global Application Services. With extensive experience in application processing, academic support services, data management, and consultancy operations, he has built a professional team dedicated to delivering fast, accurate, and reliable outsourcing solutions to clients worldwide. Under his leadership, Pro Global Application Services has successfully supported education consultancies, student recruitment agencies, scholarship organizations, and individual students by providing efficient application processing and administrative support services.",
    message: "At Pro Global Application Services, our commitment is simple: deliver quality work, protect client confidentiality, and build long-term partnerships based on trust and professionalism. We strive to provide reliable support that helps our clients focus on growth while we handle the administrative workload efficiently.",
    vision: "His vision is to help organizations reduce workload, improve productivity, and achieve operational excellence through professional outsourcing solutions while maintaining the highest standards of privacy, confidentiality, and customer satisfaction."
  },
  coo: {
    name: "Sohail Khan",
    
    role: "Chief Operating Officer (COO)",
    imageAlt: "Sohail Khan, COO of Pro Global Application Services",
    bio: "Sohail Khan serves as the Chief Operating Officer (COO) of Pro Global Application Services, overseeing the company's daily operations, project management, quality assurance, and client service delivery. With a strong focus on efficiency, accuracy, and operational excellence, he plays a key role in ensuring that all application processing, form filling, academic support, data management, and documentation projects are completed professionally and within strict deadlines.",
    message: "Our goal is to provide reliable, accurate, and efficient support services that help our clients save valuable time and resources. We are dedicated to delivering professional results while maintaining the highest standards of confidentiality, quality, and customer satisfaction.",
    vision: "Leading a team of over 100 professionals, Sohail Khan is committed to maintaining high standards of quality control, client satisfaction, and confidentiality. His expertise in workflow management and large-scale project coordination enables Pro Global Application Services to successfully handle high-volume assignments for consultancies, agencies, and students worldwide."
  }
};

export const PROMISES = [
  { title: "Fast Delivery", description: "Standard files and administrative packages processed and double-audited within 24 hours.", iconName: "Zap" },
  { title: "Accurate Processing", description: "Rigorous checklist standards and dual-pass validation checks ensure absolute data accuracy.", iconName: "Target" },
  { title: "Reliability Support", description: "Constant communication lines open via live email and active corporate WhatsApp desks.", iconName: "Shield" },
  { title: "100% Privacy Protection", description: "Secure, firewalled local drives and complete administrative NDAs for peace of mind.", iconName: "Lock" },
  { title: "Professional Results", description: "Experienced document controllers utilizing high-end layout standards.", iconName: "Award" },
  { title: "Long-Term Partnership", description: "We align our operations with your business cycles to serve as an extended core team.", iconName: "Handshake" }
];
