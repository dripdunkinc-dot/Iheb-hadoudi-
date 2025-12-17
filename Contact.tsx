
import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { MessageSquare, Send, Mail, Briefcase, ExternalLink, Calendar } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter uppercase"
          >
            Launch <span className="text-blue-500">Now</span>
          </motion.h1>
          <p className="text-2xl text-slate-400 mb-20 font-medium leading-relaxed">
            I respond fastest on WhatsApp. Let's discuss your MVP architecture today and start building tomorrow.
          </p>

          <div className="space-y-8">
            <motion.a 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-10 p-12 bg-blue-600 text-white rounded-[3.5rem] shadow-2xl shadow-blue-900/40 transition-all group relative overflow-hidden pulse-glow"
            >
              <div className="p-6 bg-white/20 rounded-3xl group-hover:rotate-12 transition-transform">
                <MessageSquare className="w-12 h-12 fill-white" />
              </div>
              <div>
                <h4 className="text-3xl font-black uppercase tracking-tighter">WhatsApp Iheb</h4>
                <p className="text-blue-100 font-bold text-lg opacity-90">Usually replies in <span className="text-white underline">minutes</span></p>
              </div>
            </motion.a>

            <motion.a 
              whileHover={{ scale: 1.03 }}
              href={PERSONAL_INFO.callBookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-10 p-12 bg-slate-900 border border-slate-800 text-white rounded-[3.5rem] shadow-xl hover:border-blue-500/50 transition-all group"
            >
              <div className="p-6 bg-blue-500/10 text-blue-400 rounded-3xl group-hover:scale-110 transition-transform">
                <Calendar className="w-12 h-12" />
              </div>
              <div>
                <h4 className="text-3xl font-black uppercase tracking-tighter">Book a Discovery Call</h4>
                <p className="text-slate-500 font-bold text-lg">Reserve a 15-min strategy slot</p>
              </div>
            </motion.a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-6 p-10 bg-slate-900/50 border border-slate-800 rounded-[2.5rem]">
                <div className="p-4 bg-indigo-500/10 text-indigo-400 rounded-2xl">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Email</h4>
                  <p className="text-white font-bold text-lg">iheb@mvpbuilder.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-10 bg-slate-900/50 border border-slate-800 rounded-[2.5rem]">
                <div className="p-4 bg-purple-500/10 text-purple-400 rounded-2xl">
                  <Briefcase className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Marketplace</h4>
                  <p className="text-white font-bold text-lg flex items-center gap-2">Verified Expert <ExternalLink className="w-4 h-4" /></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-900 p-12 md:p-20 rounded-[5rem] border border-slate-800 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none">
             <Send className="w-64 h-64" />
          </div>
          <h2 className="text-4xl font-black text-white mb-10 tracking-tight">Project Inquiry</h2>
          <form className="space-y-10 relative">
            <div className="grid grid-cols-1 gap-10">
              <div className="group">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4 group-focus-within:text-blue-400 transition-colors">Founder Name</label>
                <input 
                  type="text" 
                  placeholder="Steve Jobs"
                  className="w-full px-8 py-6 bg-slate-950 border border-slate-800 text-white rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-800 font-bold text-xl"
                />
              </div>
              <div className="group">
                <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4 group-focus-within:text-blue-400 transition-colors">Founder Email</label>
                <input 
                  type="email" 
                  placeholder="steve@apple.com"
                  className="w-full px-8 py-6 bg-slate-950 border border-slate-800 text-white rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-800 font-bold text-xl"
                />
              </div>
            </div>

            <div className="group">
              <label className="block text-xs font-black text-slate-500 uppercase tracking-widest mb-4 group-focus-within:text-blue-400 transition-colors">Startup Vision</label>
              <textarea 
                rows={5}
                placeholder="Briefly describe what you're building..."
                className="w-full px-8 py-6 bg-slate-950 border border-slate-800 text-white rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-800 font-bold text-xl"
              />
            </div>

            <button 
              type="button"
              onClick={() => alert("Form submitted! We'll talk soon.")}
              className="w-full py-8 bg-white text-slate-950 rounded-[2rem] font-black text-2xl flex items-center justify-center gap-4 hover:bg-blue-50 active:scale-95 transition-all shadow-2xl"
            >
              Send Brief
              <Send className="w-7 h-7" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
