import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '@/data/qvantixData';
import { TechArchitectureGraphic } from './TechArchitectureGraphic';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white bg-radial-light overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-700 text-xs font-bold font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-orange-600" />
              <span>{COMPANY_INFO.eyebrow}</span>
            </div>

            {/* Benefit Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Technology built around the way{' '}
              <span className="text-orange-gradient">your business works.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              {COMPANY_INFO.heroSubheadline}
            </p>

            {/* Capability Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Custom Software & Business ERPs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>Website & Mobile App Engineering</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>AI & Machine Learning Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0" />
                <span>SEO, Google Ads & Digital Marketing</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-600 shadow-lg shadow-orange-500/25 transition-all duration-200 focus:ring-2 focus:ring-orange-500"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-300 transition-all"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Trust Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Engineered for startups, small businesses, and growing companies across Tamil Nadu & beyond.</span>
            </div>

          </div>

          {/* Right Visual Architecture */}
          <div className="lg:col-span-5 flex justify-center">
            <TechArchitectureGraphic />
          </div>

        </div>
      </div>
    </section>
  );
};
