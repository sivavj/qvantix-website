import React from 'react';
import { INDUSTRIES } from '@/data/qvantixData';
import { Building2, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export const IndustriesSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
              SECTOR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Built for the way different industries work.
            </h2>
            <p className="text-slate-600 text-base">
              Custom software, web engineering, and search optimization tailored to high-growth sectors.
            </p>
          </div>
          <div>
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-50 border border-slate-300 text-slate-800 hover:text-orange-600 text-sm font-bold transition-all shadow-sm"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="light-card light-card-hover rounded-2xl p-7 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                    {ind.name}
                  </h3>
                </div>

                {/* Challenge */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider block">
                    SECTOR CHALLENGE
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {ind.challenge}
                  </p>
                </div>

                {/* Qvantix Capability */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-orange-700 font-bold uppercase tracking-wider block">
                    QVANTIX CAPABILITY
                  </span>
                  <p className="text-xs text-slate-900 font-semibold leading-relaxed">
                    {ind.qvantixCapability}
                  </p>
                </div>

                {/* Delivered Solutions */}
                <div className="space-y-1.5 pt-2">
                  {ind.keySolutions.map((sol, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 group-hover:translate-x-1 transition-transform"
                >
                  <span>Explore Solutions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
