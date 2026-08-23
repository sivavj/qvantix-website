import React from 'react';
import { Layers, Clock, Cpu, Zap } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-[#f6921e] block">
              BUILT FOR AMBITIOUS BUSINESSES
            </span>
            <p className="text-sm font-semibold text-slate-900 mt-0.5">
              Practical digital solutions combining technology, strategy, and creative execution.
            </p>
          </div>

          {/* Credibility Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full md:w-auto">
            
            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Cpu className="w-4 h-4 text-[#f6921e] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Custom Software</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Layers className="w-4 h-4 text-[#f6921e] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Web & Mobile</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Clock className="w-4 h-4 text-[#f6921e] shrink-0" />
              <span className="text-xs font-bold text-slate-800">Agreed Timelines</span>
            </div>

            <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-[#f6921e] shrink-0" />
              <span className="text-xs font-bold text-slate-800">AI & Growth SEO</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
