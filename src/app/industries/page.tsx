import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
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
      {/* Header with Overlay Banner Background */}
      <section className="relative py-28 md:py-36 overflow-hidden border-b border-slate-800 text-white flex items-center justify-center">
        {/* Background Banner Image - Vivid & Visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/industries-banner.png"
            alt="Industries Served by Qvantix Software & Digital Solutions Banner Background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Light Overlay Gradient so image is brightly visible & text is sharp */}
          <div className="absolute inset-0 bg-slate-950/45 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-slate-950/30" />
        </div>

        {/* Text Overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#f6921e]/50 backdrop-blur-md inline-block shadow-lg">
            SECTOR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Industries We Serve Across Tamil Nadu & Global Markets
          </h1>
          <p className="text-slate-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow">
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
                className="light-card light-card-hover rounded-2xl p-8 space-y-6 flex flex-col justify-between hover:border-[#307e3e]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl border flex items-center justify-center bg-[#307e3e]/10 border-[#307e3e]/30 text-[#307e3e]">
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
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block text-[#307e3e]">
                      Qvantix Capability
                    </span>
                    <p className="text-sm text-slate-900 font-semibold leading-relaxed">
                      {ind.qvantixCapability}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider block">
                      Delivered Solutions:
                    </span>
                    {ind.keySolutions.map((sol, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#307e3e]" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full gap-2 py-3 px-4 rounded-xl bg-[#307e3e] hover:bg-[#246330] text-white font-bold text-xs shadow transition-all"
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
