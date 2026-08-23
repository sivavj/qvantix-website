import React from 'react';
import { WHY_QVANTIX, COMPANY_INFO } from '@/data/qvantixData';
import { Target, Layers, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const WhyQvantixSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Target className="w-6 h-6 text-[#f6921e]" />;
      case 1:
        return <Layers className="w-6 h-6 text-[#307e3e]" />;
      case 2:
        return <Clock className="w-6 h-6 text-[#f6921e]" />;
      case 3:
        return <ShieldCheck className="w-6 h-6 text-[#307e3e]" />;
      default:
        return <Target className="w-6 h-6 text-[#f6921e]" />;
    }
  };

  return (
    <section className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono">
              THE QVANTIX ADVANTAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why businesses choose Qvantix
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              We combine custom software engineering, strategic thinking, and creative media into a single execution team.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="p-4 rounded-xl bg-[#f6921e]/10 border border-[#f6921e]/30 inline-block text-left shadow-sm">
              <span className="text-xs font-mono text-[#d8790c] font-bold block mb-1">
                OUR CORE BELIEF
              </span>
              <p className="text-sm font-bold text-slate-900 italic">
                "{COMPANY_INFO.manifesto}"
              </p>
            </div>
          </div>
        </div>

        {/* 4 Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_QVANTIX.map((item, idx) => (
            <div
              key={item.number}
              className="light-card light-card-hover rounded-2xl p-7 flex flex-col justify-between space-y-6 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="text-3xl font-black font-mono text-slate-300">
                    {item.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-mono font-bold text-[#f6921e] flex items-center gap-1">
                  <span>Standard of Execution</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#307e3e] hover:bg-[#246330] text-white font-bold text-sm shadow transition-all"
          >
            <span>Learn More About Our Company & Mission</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
};
