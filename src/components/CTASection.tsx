import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background radial accent - logo green and orange ambient light */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-emerald-600/15 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-orange-500/15 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#307e3e]/20 border border-[#307e3e]/40 text-emerald-300 text-xs font-mono font-bold tracking-widest uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#f6921e]" />
          <span>START A PROJECT</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Let's build the right solution for your business.
        </h2>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Tell us what you're trying to solve. Our engineering and digital strategy teams will help define the right technology approach for your goals.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#f6921e] to-[#307e3e] hover:from-[#d8790c] hover:to-[#246330] shadow-xl shadow-[#f6921e]/25 transition-all duration-200"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>

        {/* Commitments */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Prompt 24-Hour Response</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Business-First Technology</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Tamil Nadu & Global Support</span>
          </div>
        </div>

      </div>
    </section>
  );
};
