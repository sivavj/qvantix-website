import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/qvantixData';
import { CheckCircle2, ShieldCheck, Target, Eye, HeartHandshake } from 'lucide-react';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Qvantix | Digital & Software Solutions Partner',
  description:
    'Learn about Qvantix Digital & Software Solutions — our vision, mission, core commitments, and business-first technology approach.',
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 bg-white relative">
      {/* Header with Overlay Banner Background */}
      <section className="relative py-28 md:py-36 overflow-hidden border-b border-slate-800 text-white flex items-center justify-center">
        {/* Background Banner Image - Vivid & Visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/about-banner.png"
            alt="About Qvantix Software & Digital Solutions Banner Background"
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
            ABOUT QVANTIX
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Building Digital Solutions That Move Businesses Forward
          </h1>
          <p className="text-slate-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow">
            Qvantix is a digital and software solutions company in Tamil Nadu helping businesses, startups, and growing brands turn ideas into practical digital solutions.
          </p>
        </div>
      </section>

      {/* Main Approach */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#307e3e]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Qvantix Digital & Software Solutions in Tamil Nadu
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                We help businesses turn their goals into practical digital solutions through custom software development, website and mobile app development, AI & ML solutions, software testing, SEO, digital marketing, graphic design, and logo design. Our team combines technology, strategy, and creativity to build business-focused digital solutions in Tamil Nadu that improve online presence, streamline operations, and support long-term growth.
              </p>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                By bringing technical expertise and creative thinking together, we help businesses overcome digital challenges and turn their ideas into solutions that deliver real value. We focus on business-specific solutions, reliable execution, modern technology, and long-term digital growth.
              </p>
              
              <div className="p-4 rounded-xl bg-[#307e3e]/10 border border-[#307e3e]/30 font-mono text-sm text-[#307e3e] flex items-center gap-3 font-bold">
                <ShieldCheck className="w-5 h-5 text-[#307e3e] shrink-0" />
                <span>{COMPANY_INFO.quotes?.whoWeAre || 'Your Vision. Our Technology. Built to Grow.'}</span>
              </div>
            </div>

            {/* Commitments Box */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <HeartHandshake className="w-6 h-6 text-[#307e3e]" />
                  <h3 className="text-xl font-bold text-slate-900">Our Core Commitments</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  {COMPANY_INFO.commitments.map((com, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#307e3e] shrink-0 mt-0.5" />
                      <span>{com}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-sm hover:border-[#f6921e]">
              <div className="w-12 h-12 rounded-xl bg-[#307e3e]/10 border border-[#307e3e]/30 flex items-center justify-center text-[#307e3e]">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#307e3e] font-bold uppercase tracking-widest block">
                OUR VISION
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Long-Term Value & Trusted Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-sm hover:border-[#f6921e]">
              <div className="w-12 h-12 rounded-xl bg-[#307e3e]/10 border border-[#307e3e]/30 flex items-center justify-center text-[#307e3e]">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#307e3e] font-bold uppercase tracking-widest block">
                OUR MISSION
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Understanding First, Delivering Impact</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {COMPANY_INFO.mission}
              </p>
            </div>

          </div>
        </div>
      </section>

      <CTASection />

    </div>
  );
}
