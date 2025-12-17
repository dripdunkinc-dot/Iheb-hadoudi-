
import React from 'react';
import { 
  Zap, 
  Rocket, 
  Smartphone, 
  Settings, 
  Globe,
  Clock,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Iheb Hadoudi",
  role: "No-Code MVP Developer & Startup Builder",
  title: "No-Code MVP Developer",
  whatsapp: "+216 20 200 524",
  // Standard format with a pre-filled message to start the conversation faster
  whatsappLink: "https://wa.me/21620200524?text=Hi%20Iheb%2C%20I'm%20interested%20in%20building%20an%20MVP.",
  fiverrLink: "https://fr.fiverr.com/s/gDkBbjL",
  upworkLink: "https://www.upwork.com/freelancers/~017bae96678ac99372?mp_source=share",
  callBookingLink: "https://calendly.com/iheb-hadoudi",
};

export const TRUST_HIGHLIGHTS = [
  { icon: <ShieldCheck className="w-5 h-5" />, text: "Secure Platform Hiring" },
  { icon: <Clock className="w-5 h-5" />, text: "7–14 Day Delivery" },
  { icon: <Rocket className="w-5 h-5" />, text: "Startup Strategy" },
  { icon: <CheckCircle2 className="w-5 h-5" />, text: "Verified Expert" },
];

export const SERVICES = [
  {
    title: "MVP Development",
    description: "Launch your core product fast. I build functional, scalable MVPs using Bubble that are ready for your first 1,000 users.",
    icon: <Rocket className="w-8 h-8" />
  },
  {
    title: "No-Code Web Apps",
    description: "Complex SaaS platforms, custom dashboards, and internal business tools built with deep logic and secure databases.",
    icon: <Settings className="w-8 h-8" />
  },
  {
    title: "Startup Prototypes",
    description: "High-fidelity interactive prototypes to secure funding or test ideas before full-scale development.",
    icon: <Smartphone className="w-8 h-8" />
  },
  {
    title: "Validation Landing",
    description: "High-performance landing pages designed to capture leads, test demand, and convert visitors into early adopters.",
    icon: <Globe className="w-8 h-8" />
  }
];

export const PACKAGES = [
  {
    name: "Express MVP",
    price: "$1,499",
    delivery: "7 Days",
    type: "lite",
    features: [
      "Core Database Setup",
      "Essential Auth System",
      "3 Core Functional Pages",
      "Stripe Payment Hook",
      "7 Days Priority Support"
    ]
  },
  {
    name: "SaaS Launch",
    price: "$2,999",
    delivery: "14 Days",
    type: "full",
    features: [
      "Full SaaS Logic Flow",
      "Custom User Dashboards",
      "API & Tool Integrations",
      "Premium UI/UX Polish",
      "30 Days Tech Support",
      "SEO & Analytics Setup"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    delivery: "21+ Days",
    type: "enterprise",
    features: [
      "AI/LLM Implementation",
      "Marketplace Logic",
      "Custom Architecture",
      "Admin Control Panels",
      "Performance Scaling",
      "White-Glove Strategy"
    ]
  }
];

export const PROJECTS = [
  {
    name: "JumpBot Blockchain",
    client: "JumpBot Labs",
    type: "Web3 Landing Page",
    problem: "Investor-ready landing page needed to explain complex tech.",
    solution: "Interactive 3D links and dark-mode premium UI built in Webflow.",
    tools: ["Webflow", "Spline", "GSAP"],
    buildTime: "5 Days",
    outcome: "Generated $200k+ in pre-seed investor interest.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1600"
  },
  {
    name: "Crypto Academy LMS",
    client: "Alex Academy",
    type: "Learning Platform",
    problem: "Secure gated platform required for automated course delivery.",
    solution: "Custom LMS with module locking and automated student onboarding.",
    tools: ["Bubble", "Airtable", "Stripe"],
    buildTime: "10 Days",
    outcome: "Successfully scaled to 500+ students without manual overhead.",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=1600"
  },
  {
    name: "Relearn Marketplace",
    client: "Relearn Tech",
    type: "Skill Marketplace",
    problem: "Marketplace for niche creators with student social features.",
    solution: "Vibrant marketplace with creator dashboards and real-time social proof.",
    tools: ["FlutterFlow", "Firebase", "RevenueCat"],
    buildTime: "14 Days",
    outcome: "Processed $12,000 in transactions in the first 30 days.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600"
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Pick a Platform", desc: "Choose your preferred hiring platform: Fiverr or Upwork for secure escrow." },
  { step: "02", title: "Share Your Idea", desc: "We discuss your vision and requirements to map out the technical scope." },
  { step: "03", title: "Build & Update", desc: "I build your MVP with rapid 48-hour sprints and frequent video updates." },
  { step: "04", title: "Secure Delivery", desc: "Final review and delivery through the platform. Launch your startup." }
];
