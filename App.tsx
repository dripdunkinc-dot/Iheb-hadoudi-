
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  ArrowRight, 
  Sparkles, 
  Rocket, 
  Zap, 
  ArrowUpRight,
  CheckCircle2,
  Clock,
  ShoppingCart,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Star,
  Check,
  Send,
  Loader2
} from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { PERSONAL_INFO, PROJECTS, SERVICES, TRUST_HIGHLIGHTS, PROCESS_STEPS, PACKAGES } from './constants';

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
} as const;

const SectionHeader = ({ title, subtitle, highlight }: { title: string, subtitle?: string, highlight?: string }) => (
  <motion.div {...fadeUp} className="text-center mb-16 md:mb-24">
    <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
      {title} <span className="gradient-text">{highlight}</span>
    </h2>
    {subtitle && <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">{subtitle}</p>}
  </motion.div>
);

const SectionWrapper: React.FC<{ children: React.ReactNode, id: string, className?: string }> = ({ children, id, className = "" }) => (
  <section id={id} className={`py-24 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

const App: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', brief: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Automation: Redirect to WhatsApp with the brief pre-filled
    const waMessage = `Hi Iheb, my name is ${formData.name} (${formData.email}). I have an MVP idea: ${formData.brief}`;
    const waUrl = `https://wa.me/21620200524?text=${encodeURIComponent(waMessage)}`;

    setTimeout(() => {
      setFormState('success');
      window.open(waUrl, '_blank');
      setTimeout(() => setFormState('idle'), 5000);
    }, 800);
  };

  return (
    <div className="bg-slate-950 text-slate-200">
      <Navbar />

      {/* 1. HERO SECTION (PLATFORM CENTRIC) */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-4 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full hero-gradient -z-10" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-slate-800 text-blue-400 text-[10px] font-black uppercase tracking-[0.25em] mb-10 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4" />
          Ship Your Startup MVP in 7–14 Days
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.85] max-w-5xl mx-auto uppercase"
        >
          I Build Startup <span className="gradient-text">MVPs Fast</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed"
        >
          From idea to working MVP in 7–14 days. Reliable no-code execution for founders who value speed over bureaucracy.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-4xl"
        >
          <a 
            href={PERSONAL_INFO.fiverrLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire Iheb on Fiverr"
            className="w-full sm:w-auto px-10 py-5 bg-[#1dbf73] text-white rounded-[1.5rem] font-black text-xl shadow-2xl shadow-emerald-500/20 hover:bg-[#19a463] hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <ShoppingCart className="w-6 h-6" />
            Hire Me on Fiverr
          </a>
          <a 
            href={PERSONAL_INFO.upworkLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hire Iheb on Upwork"
            className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-xl shadow-2xl shadow-blue-500/20 hover:bg-blue-500 hover:-translate-y-1 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Briefcase className="w-6 h-6" />
            Hire Me on Upwork
          </a>
        </motion.div>
        
        <motion.a 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Quick Question on WhatsApp"
          className="mt-8 px-8 py-3 bg-transparent border border-slate-800 text-slate-400 rounded-full font-bold text-sm hover:border-blue-500/50 hover:text-white transition-all flex items-center gap-2 group"
        >
          <MessageSquare className="w-4 h-4 group-hover:fill-blue-500 group-hover:text-blue-500 transition-all" />
          Quick Question? WhatsApp Me
        </motion.a>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
            Secure hiring & payments via
          </p>
          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-1.5 text-white font-black text-lg italic tracking-tighter">
              <span className="text-[#1dbf73]">fiverr</span>.
            </div>
            <div className="flex items-center gap-1.5 text-white font-black text-lg tracking-tighter">
              upwork
            </div>
          </div>
        </motion.div>
      </section>

      {/* Trust Highlights */}
      <div className="border-y border-slate-900 bg-slate-950/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_HIGHLIGHTS.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center gap-3 text-slate-400"
            >
              <div className="text-blue-500">{item.icon}</div>
              <span className="font-black text-[10px] uppercase tracking-widest">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. SERVICES & PACKAGES */}
      <SectionWrapper id="services">
        <SectionHeader 
          title="Startup" 
          highlight="Solutions" 
          subtitle="Fixed-scope services designed for startup speed. Built to work, scale, and sell." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              {...fadeUp}
              className="p-10 glass-card rounded-[2.5rem] border-slate-800/50 flex flex-col items-start gap-6 group"
            >
              <div className="p-4 bg-blue-600/10 text-blue-500 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white leading-tight">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
              
              <div className="mt-auto flex flex-col gap-3 w-full">
                <a href={PERSONAL_INFO.fiverrLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link text-emerald-500 font-bold text-[10px] uppercase tracking-widest hover:text-emerald-400 transition-colors">
                  Hire on Fiverr <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
                <a href={PERSONAL_INFO.upworkLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between group/link text-blue-500 font-bold text-[10px] uppercase tracking-widest hover:text-blue-400 transition-colors">
                  Hire on Upwork <ChevronRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PACKAGES.map((pkg, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              {...fadeUp}
              className={`relative p-10 rounded-[3rem] border transition-all duration-500 ${
                pkg.type === 'full' 
                  ? 'border-blue-500 bg-blue-600/5 shadow-[0_0_80px_rgba(59,130,246,0.1)] scale-105 z-10' 
                  : 'border-slate-800 bg-slate-900/40'
              }`}
            >
              {pkg.type === 'full' && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-xl">
                  <Star className="w-3 h-3 fill-white" /> Popular
                </div>
              )}
              <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black text-white">{pkg.price}</span>
                <p className="text-slate-500 text-[9px] uppercase tracking-widest mt-1">Starting Price</p>
              </div>
              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-slate-400 text-sm">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href={PERSONAL_INFO.fiverrLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-black text-sm text-center transition-all block ${
                  pkg.type === 'full' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                Choose {pkg.name}
              </a>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 4. REAL PROJECTS */}
      <SectionWrapper id="portfolio" className="bg-slate-900/10 rounded-[4rem]">
        <SectionHeader 
          title="Verified" 
          highlight="Builds" 
          subtitle="Real products currently serving real users. Problem solved, execution delivered." 
        />
        <div className="space-y-32 md:space-y-48">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              {...fadeUp}
              className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-3/5 group relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-[3rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-slate-800 bg-slate-900">
                  <img src={project.image} alt={project.name} className="w-full object-cover aspect-[16/10] group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 left-6 bg-slate-950/90 backdrop-blur-md px-5 py-2 rounded-2xl text-blue-400 font-black text-[10px] border border-slate-800 uppercase tracking-widest">{project.type}</div>
                </div>
              </div>
              <div className="w-full lg:w-2/5 flex flex-col gap-8">
                <div className="flex flex-wrap gap-2">
                  {project.tools.map(tool => (
                    <span key={tool} className="px-4 py-1.5 bg-slate-900/80 border border-slate-800 text-slate-400 rounded-full text-[9px] font-black uppercase tracking-widest">{tool}</span>
                  ))}
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[0.9]">{project.name}</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-5">
                    <div className="w-1 bg-red-500/40 rounded-full h-auto shrink-0" />
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Challenge</span>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{project.problem}</p>
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <div className="w-1 bg-blue-500/40 rounded-full h-auto shrink-0" />
                    <div>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest block mb-1">Solution</span>
                      <p className="text-slate-400 text-sm font-medium leading-relaxed">{project.solution}</p>
                    </div>
                  </div>
                  <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl mt-4 relative overflow-hidden">
                    <div className="flex items-center gap-2 text-emerald-500 font-black text-[10px] uppercase tracking-widest mb-3">
                      <CheckCircle2 className="w-4 h-4" /> Result
                    </div>
                    <p className="text-white text-xl font-black leading-tight mb-4">{project.outcome}</p>
                    <div className="flex items-center gap-4 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                      <Clock className="w-3.5 h-3.5" /> Built in {project.buildTime}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a 
                    href={PERSONAL_INFO.fiverrLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-[#1dbf73] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-[#19a463] transition-all"
                  >
                    View on Fiverr
                  </a>
                  <a 
                    href={PERSONAL_INFO.upworkLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-6 py-4 bg-blue-600 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-blue-500 transition-all"
                  >
                    View on Upwork
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 5. PROCESS */}
      <SectionWrapper id="process">
        <SectionHeader 
          title="How We" 
          highlight="Launch" 
          subtitle="Transparent, platform-backed process for zero-friction development." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={idx}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: idx * 0.1 }}
              className="p-10 bg-slate-900/50 border border-slate-800 rounded-[2.5rem] relative group"
            >
              <span className="text-6xl font-black text-slate-900 absolute top-8 right-8 group-hover:text-blue-500/10 transition-colors pointer-events-none">{step.step}</span>
              <h4 className="text-xl font-black text-white mb-4 uppercase tracking-tighter relative z-10">{step.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed font-medium relative z-10">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* 6. INQUIRY FORM SECTION (AUTOMATED) */}
      <SectionWrapper id="inquiry" className="bg-slate-900/20 rounded-[4rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-6 leading-none">
              Start Your <span className="gradient-text">MVP Brief</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-md font-medium">
              Fill out this brief and I'll receive it instantly on WhatsApp to discuss your project.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500"><ShieldCheck className="w-6 h-6" /></div>
                <span className="text-sm font-bold uppercase tracking-widest">Escrow Protected Hiring</span>
              </div>
              <div className="flex items-center gap-4 text-slate-300">
                <div className="p-3 bg-emerald-600/10 rounded-xl text-emerald-500"><Clock className="w-6 h-6" /></div>
                <span className="text-sm font-bold uppercase tracking-widest">Direct Line to Iheb</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            {...fadeUp}
            className="p-10 glass-card rounded-[3rem] border-slate-800 shadow-2xl relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">Lead Sent!</h3>
                  <p className="text-slate-400 font-medium">Redirecting you to WhatsApp for the next step...</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleInquirySubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Your Name</label>
                    <input required name="name" value={formData.name} onChange={handleInputChange} type="text" placeholder="Steve Jobs" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-800 outline-none focus:border-blue-500 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Email Address</label>
                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" placeholder="steve@apple.com" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-800 outline-none focus:border-blue-500 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Project Brief</label>
                    <textarea required name="brief" value={formData.brief} onChange={handleInputChange} rows={4} placeholder="What are we building?" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-800 outline-none focus:border-blue-500 transition-all font-medium resize-none"></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="w-full py-5 bg-white text-slate-950 rounded-2xl font-black text-lg uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-slate-100 transition-all disabled:opacity-50"
                  >
                    {formState === 'submitting' ? <Loader2 className="w-6 h-6 animate-spin" /> : <><Send className="w-5 h-5" /> Send to WhatsApp</>}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 7. FINAL CONTACT / CTA SECTION */}
      <SectionWrapper id="cta" className="mb-20">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-gradient-to-br from-slate-900 to-slate-950 p-12 md:p-24 rounded-[4rem] text-center border border-slate-800 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] opacity-40" />
          <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-[0.9]">Ready to Start Your MVP?</h2>
          <p className="text-slate-400 text-xl md:text-2xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
            Choose your preferred platform for secure checkout or reach out with a quick question.
          </p>
          
          <div className="flex flex-col items-center gap-12">
            <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-stretch">
              <a 
                href={PERSONAL_INFO.fiverrLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hire Iheb on Fiverr"
                className="px-12 py-6 bg-[#1dbf73] text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-emerald-500/20 hover:bg-[#19a463] active:scale-95 transition-all inline-flex items-center justify-center gap-4"
              >
                <ShoppingCart className="w-8 h-8" />
                Hire on Fiverr
              </a>
              <a 
                href={PERSONAL_INFO.upworkLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Hire Iheb on Upwork"
                className="px-12 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-2xl shadow-2xl shadow-blue-500/20 hover:bg-blue-500 active:scale-95 transition-all inline-flex items-center justify-center gap-4"
              >
                <Briefcase className="w-8 h-8" />
                Hire on Upwork
              </a>
            </div>

            <div className="flex flex-col items-center gap-4">
              <a 
                href={PERSONAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Iheb on WhatsApp"
                className="px-8 py-4 bg-transparent border border-slate-800 text-slate-400 rounded-2xl font-black text-lg hover:border-blue-500/50 hover:text-white transition-all inline-flex items-center gap-3"
              >
                <MessageSquare className="w-6 h-6" />
                WhatsApp Me
              </a>
              <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.3em]">For quick questions before ordering</p>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      <Footer />
      
      <motion.a 
        href={PERSONAL_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="fixed bottom-8 right-8 z-[100] p-4 bg-slate-900 border border-slate-800 text-slate-400 rounded-full shadow-2xl md:p-5 hover:text-blue-500 hover:border-blue-500 transition-all active:scale-90"
      >
        <MessageSquare className="w-6 h-6 md:w-8 md:h-8" />
      </motion.a>
    </div>
  );
};

export default App;
