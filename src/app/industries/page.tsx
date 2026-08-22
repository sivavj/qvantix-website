import React from 'react';
import { Metadata } from 'next';
import { INDUSTRIES } from '@/data/qvantixData';
import { Building2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Industries We Serve | Qvantix Software & Digital Solutions',
  description:
    'Discover how Qvantix delivers custom software, web platforms, AI, and digital growth solutions tailored for Healthcare, Retail, Finance, Education, Manufacturing, and SaaS sectors.',
};

export default function IndustriesPage() {
  return (
    <div className="pt-28 pb-20 bg-white relative">
      
      {/* Header */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200 text-center space-y-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
            SECTOR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Industries We Serve Across Tamil Nadu & Global Markets
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tailored digital capabilities engineered to solve specific operational, regulatory, and growth challenges in key industries.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((ind) => (
              <div
                key={ind.id}
                className="light-card light-card-hover rounded-2xl p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{ind.name}</h2>
                  </div>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block">
                      Sector Challenge
                    </span>
                    <p className="text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-200 font-medium">
                      {ind.challenge}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-orange-700 font-bold uppercase tracking-wider block">
                      Qvantix Capability
                    </span>
                    <p className="text-sm text-slate-900 font-semibold">
                      {ind.qvantixCapability}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider block">
                      Delivered Solutions:
                    </span>
                    {ind.keySolutions.map((sol, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-orange-600 shrink-0" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 py-3 px-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow transition-all"
                  >
                    <span>Discuss {ind.name} Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection />

    </div>
  );
}
