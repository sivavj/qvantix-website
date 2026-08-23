'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Image as ImageIcon, Cpu } from 'lucide-react';
import { COMPANY_INFO } from '@/data/qvantixData';
import { TechArchitectureGraphic } from './TechArchitectureGraphic';

export const HeroSection: React.FC = () => {
  const [activeView, setActiveView] = useState<'illustration' | 'interactive'>('illustration');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white bg-radial-light overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-400/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#307e3e]/10 border border-[#307e3e]/30 text-[#307e3e] text-xs font-bold font-mono tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#f6921e]" />
              <span>{COMPANY_INFO.eyebrow}</span>
            </div>

            {/* Benefit Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Looking for a reliable software development and digital solutions company in{' '}
              <span className="text-brand-gradient">Tamil Nadu?</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              Qvantix helps startups, small businesses, and growing companies build practical digital solutions tailored to their business goals — combining technology and creativity to achieve sustainable growth.
            </p>

            {/* Capability Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#307e3e] shrink-0" />
                <span>Custom Software & Website Development</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f6921e] shrink-0" />
                <span>Mobile Apps & Software Testing (QA)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#307e3e] shrink-0" />
                <span>AI & Machine Learning Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#f6921e] shrink-0" />
                <span>SEO, Google Ads & Digital Marketing</span>
              </div>
            </div>

            {/* Dual CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#307e3e] to-[#246330] hover:from-[#246330] hover:to-[#1e5229] shadow-lg shadow-[#307e3e]/25 transition-all duration-200 focus:ring-2 focus:ring-[#307e3e]"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-bold text-[#d8790c] bg-white hover:bg-[#f6921e]/10 border-2 border-[#f6921e] shadow-sm transition-all"
              >
                <span>Explore Solutions</span>
              </Link>
            </div>

            {/* Trust Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#307e3e]" />
              <span>Engineered for startups, small businesses, and growing companies across Tamil Nadu & beyond.</span>
            </div>

          </div>

          {/* Right Visual Container */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            
            {/* View Switcher */}
            <div className="mb-4 inline-flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200 shadow-xs">
              <button
                type="button"
                onClick={() => setActiveView('illustration')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                  activeView === 'illustration'
                    ? 'bg-[#307e3e] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>3D Visual</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveView('interactive')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-mono transition-all flex items-center gap-1.5 ${
                  activeView === 'interactive'
                    ? 'bg-[#307e3e] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                <span>Tech Stack</span>
              </button>
            </div>

            {activeView === 'illustration' ? (
              <div className="relative w-full max-w-lg group">
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#307e3e] to-[#f6921e] rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
                
                {/* Main Card */}
                <div className="relative bg-white border border-slate-200 rounded-2xl p-2.5 shadow-2xl overflow-hidden">
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-100">
                    <Image
                      src="/assets/hero-3d.jpg"
                      alt="Qvantix Digital & Software Solutions 3D Visual Illustration"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 512px"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Overlay Badge */}
                  <div className="p-3 bg-white/90 backdrop-blur-md rounded-xl mt-2 border border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold text-[#f6921e] uppercase tracking-widest block">
                        DIGITAL & SOFTWARE SOLUTIONS
                      </span>
                      <span className="text-xs font-extrabold text-slate-900">
                        Tailored Technology Ecosystem
                      </span>
                    </div>
                    <span className="px-2 py-1 rounded bg-[#307e3e]/10 text-[10px] font-mono font-bold text-[#307e3e] border border-[#307e3e]/30">
                      3D ARCHITECTURE
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <TechArchitectureGraphic />
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
