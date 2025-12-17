
import React from 'react';
import { motion } from 'framer-motion';
import { PACKAGES, PERSONAL_INFO } from '../constants';
import { Check, MessageCircle, Star, Sparkles } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-32">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter">Scale Your <span className="gradient-text">Product</span></h1>
        <p className="text-2xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">
          Predictable outcomes. Fixed milestones. Zero tech headaches.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {PACKAGES.map((pkg, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className={`relative p-12 rounded-[4rem] border transition-all duration-500 ${
              pkg.type === 'full' 
                ? 'border-blue-500 bg-blue-600/5 shadow-[0_0_80px_rgba(59,130,246,0.2)] scale-105 z-10' 
                : 'border-slate-800 bg-slate-900/40'
            }`}
          >
            {pkg.type === 'full' && (
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-3 rounded-[1.5rem] text-sm font-black uppercase tracking-[0.2em] flex items-center gap-3 shadow-2xl shadow-blue-500/50">
                <Star className="w-5 h-5 fill-white" />
                Recommended
              </div>
            )}
            <h3 className="text-4xl font-black text-white mb-3 tracking-tighter">{pkg.name}</h3>
            <div className="mb-10">
              <span className="text-6xl font-black text-white">{pkg.price}</span>
              <p className="text-slate-500 mt-3 font-bold uppercase text-xs tracking-widest">Fixed Pricing</p>
            </div>
            
            <div className="flex items-center gap-4 p-5 bg-slate-950/80 border border-slate-800 rounded-3xl mb-12 text-lg font-black text-slate-200">
              <span className="text-blue-400 uppercase text-xs tracking-widest font-black">Timeline:</span> {pkg.delivery}
            </div>

            <ul className="space-y-6 mb-14">
              {pkg.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-5 text-slate-400">
                  <div className="mt-1 flex-shrink-0 w-7 h-7 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center border border-blue-500/20">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            <a 
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-6 rounded-[2rem] font-black text-2xl text-center transition-all block active:scale-95 shadow-xl ${
                pkg.type === 'full'
                  ? 'bg-blue-600 text-white shadow-blue-500/20 hover:bg-blue-500'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              Start Build
            </a>
          </motion.div>
        ))}
      </div>

      <motion.div 
        whileHover={{ scale: 1.01 }}
        className="mt-32 p-16 md:p-32 bg-slate-900 rounded-[5rem] text-center border border-slate-800 relative overflow-hidden group shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-10 animate-pulse" />
        <h3 className="text-5xl font-black text-white mb-8 tracking-tighter">Have a unique requirement?</h3>
        <p className="text-slate-400 mb-14 max-w-2xl mx-auto text-2xl font-medium leading-relaxed">
          I build custom AI workflows, complex internal dashboards, and multi-tenant marketplaces. Let's design a custom solution for your needs.
        </p>
        <a 
          href={PERSONAL_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-950 font-black text-3xl rounded-[2rem] hover:bg-blue-50 transition-all shadow-2xl active:scale-95"
        >
          <MessageCircle className="w-8 h-8" />
          Get Custom Quote
        </a>
      </motion.div>
    </div>
  );
};

export default Services;
