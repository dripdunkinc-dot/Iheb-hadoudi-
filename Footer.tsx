
import React from 'react';
import { PERSONAL_INFO } from '../constants';
// Added MessageSquare to the import list
import { Heart, Linkedin, Twitter, ShoppingCart, Briefcase, ShieldCheck, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-white tracking-tighter uppercase mb-2">Iheb Hadoudi</h2>
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">{PERSONAL_INFO.role}</p>
          </div>
          
          <div className="flex gap-4">
            <a href={PERSONAL_INFO.fiverrLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-500 hover:text-[#1dbf73] transition-all">
              <ShoppingCart className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.upworkLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-500 hover:text-blue-500 transition-all">
              <Briefcase className="w-5 h-5" />
            </a>
            <a href={PERSONAL_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-500 hover:text-emerald-500 transition-all">
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] gap-8 border-t border-slate-900 pt-12">
          <p>© {new Date().getFullYear()} IHEB HADOUDI. Building the future of startups.</p>
          <div className="flex items-center gap-2">
            Trusted freelance platforms for secure projects
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-50"><ShieldCheck className="w-3 h-3" /> Verified Expert</span>
            <span className="opacity-50 font-black uppercase tracking-widest">Global Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
