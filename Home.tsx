
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, Sparkles, Box, Layout, Database, Layers } from 'lucide-react';
import { PERSONAL_INFO, TRUST_HIGHLIGHTS, SERVICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 pb-20 relative">
      {/* Animated Background Layers */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-cyan-600/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Floating Tool Icons */}
        <div className="absolute left-10 top-40 hidden xl:block animate-float opacity-40">
           <div className="p-4 glass-card rounded-2xl text-blue-400"><Box className="w-8 h-8" /></div>
        </div>
        <div className="absolute right-10 top-60 hidden xl:block animate-float-delayed opacity-40">
           <div className="p-4 glass-card rounded-2xl text-purple-400"><Layers className="w-8 h-8" /></div>
        </div>
        <div className="absolute left-20 bottom-20 hidden xl:block animate-float-delayed opacity-40">
           <div className="p-4 glass-card rounded-2xl text-cyan-400"><Database className="w-8 h-8" /></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-8"
        >
          <Sparkles className="w-4 h-4" />
          Ship Your Startup MVP in 7–14 Days
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[1]"
        >
          I Build Startup <span className="gradient-text">MVPs Fast</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed"
        >
          Stop over-engineering. Transform your vision into a scalable product using expert no-code. Fast, affordable, and built to win.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-6 mb-24"
        >
          <a 
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-12 py-6 bg-blue-600 text-white rounded-3xl font-black text-2xl shadow-2xl shadow-blue-500/20 hover:bg-blue-500 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4"
          >
            <MessageSquare className="w-7 h-7" />
            Chat on WhatsApp
          </a>
          <Link 
            to="/portfolio"
            className="px-12 py-6 bg-slate-900 border border-slate-800 text-white rounded-3xl font-black text-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all flex items-center justify-center gap-4 shadow-xl"
          >
            View Real Work
            <ArrowRight className="w-6 h-6" />
          </Link>
        </motion.div>

        {/* Trust Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-16 border-y border-slate-800/50 relative">
          {TRUST_HIGHLIGHTS.map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl text-blue-400">
                {item.icon}
              </div>
              <span className="font-bold text-slate-300 tracking-tight">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tighter">Everything You Need</h2>
          <p className="text-slate-500 text-xl max-w-2xl mx-auto font-medium">I handle the tech so you can focus on the business strategy.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-10 glass-card rounded-[3rem] border-slate-800/50 hover:border-blue-500/30 transition-all group"
            >
              <div className="text-blue-400 mb-8 group-hover:text-cyan-400 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">{service.title}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Floating CTA */}
      <section className="mx-4 sm:mx-6 lg:mx-auto max-w-7xl">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.2)]"
        >
          <div className="absolute inset-0 bg-white/5 opacity-0 hover:opacity-100 transition-opacity"></div>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Turn Your Idea into a Product.</h2>
          <p className="text-blue-100 text-2xl max-w-2xl mx-auto mb-14 font-medium leading-relaxed">
            The market is moving. Don't let your vision be just a note in your phone.
          </p>
          <a 
            href={PERSONAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer" 
            className="px-14 py-7 bg-white text-blue-600 rounded-[2rem] font-black text-3xl shadow-2xl hover:bg-slate-50 active:scale-95 transition-all inline-block"
          >
            Chat with Iheb Now
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
