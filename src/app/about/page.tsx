import React from 'react';
import { Metadata } from 'next';
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
      
      {/* Header */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
            ABOUT QVANTIX
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Building Digital Solutions That Move Businesses Forward
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Qvantix is a software and digital solutions company helping businesses, startups, and growing brands turn ideas into practical, scalable digital solutions.
          </p>
        </div>
      </section>

      {/* Main Approach */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-orange-600">
                WHO WE ARE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Technical Expertise United with Strategic Thinking
              </h2>
              <p className="text-slate-600 text-base leading-relaxed font-medium">
                At Qvantix, our approach is simple — understand your business, identify the right digital opportunity, and build solutions that create real value. We bring together software development, website & mobile app development, AI & ML, software testing, digital marketing, and creative design under one roof.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you're launching a new business, upgrading existing technology, or looking to generate more customers online, we focus on delivering solutions that are simple, practical, reliable, and ready for the future.
              </p>
              
              <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 font-mono text-sm text-orange-800 flex items-center gap-3 font-semibold">
                <ShieldCheck className="w-5 h-5 text-orange-600 shrink-0" />
                <span>Your Vision. Our Technology. Built to Grow.</span>
              </div>
            </div>

            {/* Commitments Box */}
            <div className="lg:col-span-6">
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-6 shadow-sm">
                <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                  <HeartHandshake className="w-6 h-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-slate-900">Our Core Commitments</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-700 font-medium">
                  {COMPANY_INFO.commitments.map((com, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
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
            <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-widest block">
                OUR VISION
              </span>
              <h3 className="text-2xl font-bold text-slate-900">Long-Term Value & Trusted Partnership</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {COMPANY_INFO.vision}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 border border-slate-200 space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-orange-600 font-bold uppercase tracking-widest block">
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
