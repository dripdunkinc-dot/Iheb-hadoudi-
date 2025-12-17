
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Rocket, Target, Lightbulb, Zap, TrendingUp, ShieldCheck } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative inline-block mb-12">
            <div className="absolute inset-0 bg-blue-600 rounded-[4rem] blur-[40px] opacity-20 animate-pulse"></div>
            <img 
              src="https://picsum.photos/seed/iheb-dev/800/800" 
              alt={PERSONAL_INFO.name} 
              className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-[4rem] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 border border-slate-800"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-900/50">
              <Zap className="w-10 h-10 fill-white" />
            </div>
          </div>
          <h1 className="text-5xl font-black text-white mb-8 tracking-tighter">I'm Iheb Hadoudi.</h1>
          <p className="text-2xl text-slate-400 leading-relaxed mb-8 font-medium">
            Founder-First Developer. I build products that sell, not just code that runs.
          </p>
          <p className="text-slate-500 leading-relaxed mb-12 text-lg">
            Based in Tunisia, working globally. I’ve spent years mastering the intersection of business strategy and no-code engineering. My goal is to make technical hurdles disappear so you can focus on what matters: <strong>Growth.</strong>
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-800 transition-colors">
              <TrendingUp className="w-8 h-8 text-blue-400 mb-6" />
              <h4 className="font-black text-white mb-2 uppercase text-xs tracking-widest">Scalability</h4>
              <p className="text-sm text-slate-400">Built to handle thousands of users from Day 1.</p>
            </div>
            <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-800 transition-colors">
              <ShieldCheck className="w-8 h-8 text-blue-400 mb-6" />
              <h4 className="font-black text-white mb-2 uppercase text-xs tracking-widest">Reliability</h4>
              <p className="text-sm text-slate-400">Rigorous testing cycles for bug-free launches.</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 bg-slate-900 p-12 md:p-20 rounded-[4rem] border border-slate-800 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px]"></div>
          <h2 className="text-4xl font-black text-white mb-12 tracking-tight">The 14-Day Blueprint</h2>
          <ul className="space-y-12 relative">
            <li className="flex items-start gap-6 group">
              <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">1</span>
              <div>
                <h4 className="text-2xl font-black text-white mb-3">Discovery & Logic</h4>
                <p className="text-slate-500 leading-relaxed">Deep dive into your user flows. We map every click before we build.</p>
              </div>
            </li>
            <li className="flex items-start gap-6 group">
              <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">2</span>
              <div>
                <h4 className="text-2xl font-black text-white mb-3">Rapid Prototyping</h4>
                <p className="text-slate-500 leading-relaxed">The engine room. Building robust databases and complex workflows.</p>
              </div>
            </li>
            <li className="flex items-start gap-6 group">
              <span className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 text-blue-400 flex items-center justify-center font-black text-xl group-hover:bg-blue-600 group-hover:text-white transition-all">3</span>
              <div>
                <h4 className="text-2xl font-black text-white mb-3">Polish & Launch</h4>
                <p className="text-slate-500 leading-relaxed">UI/UX refinement and production deployment. We hit 'Go Live'.</p>
              </div>
            </li>
          </ul>
          
          <div className="mt-20 pt-12 border-t border-slate-800 text-center">
            <p className="italic text-slate-400 text-xl mb-6">"Stop thinking. Start shipping. I'll handle the 'How'."</p>
            <a 
              href={PERSONAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-black text-lg hover:text-blue-300 transition-colors uppercase tracking-widest"
            >
              Let's build your legacy →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
