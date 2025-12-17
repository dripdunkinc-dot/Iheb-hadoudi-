
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Clock, CheckCircle2, Layout, Zap, ExternalLink, User } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-32">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-8 text-white tracking-tighter uppercase"
        >
          Real <span className="gradient-text">MVPs</span>
        </motion.h1>
        <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
          Execution is the only thing that matters. Here are products currently serving real users, built in record time.
        </p>
      </div>

      <div className="space-y-48">
        {PROJECTS.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-blue-600/20 rounded-[3rem] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl border border-slate-800 bg-slate-900">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full object-cover aspect-[4/3] group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-6 left-6 flex gap-3">
                  <div className="bg-slate-950/90 backdrop-blur-md px-6 py-3 rounded-2xl text-blue-400 font-black text-sm border border-slate-800">
                    {project.type}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div className="flex flex-wrap gap-3">
                {project.tools.map(tool => (
                  <span key={tool} className="px-5 py-2 bg-blue-600/10 text-blue-400 border border-blue-500/20 rounded-xl text-xs font-black uppercase tracking-widest">{tool}</span>
                ))}
              </div>
              
              <div>
                <h2 className="text-5xl font-black text-white tracking-tighter mb-4">{project.name}</h2>
                <div className="flex items-center gap-3 text-slate-500 font-bold text-lg">
                  <User className="w-5 h-5" />
                  {project.client}
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-1.5 h-auto bg-red-500/50 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-black text-slate-300 uppercase text-xs tracking-[0.2em] mb-2">The Challenge</h4>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">{project.problem}</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-1.5 h-auto bg-blue-500/50 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-black text-slate-300 uppercase text-xs tracking-[0.2em] mb-2">The Solution</h4>
                    <p className="text-xl text-slate-400 leading-relaxed font-medium">{project.solution}</p>
                  </div>
                </div>

                <div className="p-10 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-[3rem] shadow-xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 text-blue-500/20 group-hover:scale-125 transition-transform duration-500">
                    <CheckCircle2 className="w-20 h-20" />
                  </div>
                  <h4 className="font-black text-emerald-400 uppercase text-xs tracking-[0.2em] mb-4">Launch Result</h4>
                  <p className="text-2xl text-slate-100 font-black leading-tight mb-4">{project.outcome}</p>
                  <div className="inline-flex items-center gap-2 text-slate-500 font-bold">
                    <Clock className="w-5 h-5" /> Built in {project.buildTime}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mt-48 text-center p-16 md:p-32 bg-slate-900 border border-slate-800 rounded-[5rem] relative overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter">Your Startup Next?</h2>
        <p className="mb-14 text-slate-400 text-2xl max-w-2xl mx-auto font-medium">I help serious founders launch serious products. Secure your development slot today.</p>
        <a 
          href="https://wa.me/21620200524" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="px-16 py-8 bg-blue-600 text-white rounded-[2.5rem] font-black text-3xl shadow-2xl hover:bg-blue-500 transition-all inline-block active:scale-95"
        >
          Book Your Call
        </a>
      </motion.div>
    </div>
  );
};

export default Portfolio;
