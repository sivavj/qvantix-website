'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES, Service } from '@/data/qvantixData';
import { ArrowRight, CheckCircle2, ChevronRight, Cpu, ShieldCheck } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  return (
    <section id="solutions" className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono">
              SOLUTIONS & SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Solutions built around your business.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Practical digital engineering, artificial intelligence, software testing, search optimization, and creative media built to achieve your revenue goals.
            </p>
          </div>
          <div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border-2 border-[#f6921e] text-[#f6921e] hover:bg-[#f6921e]/10 text-sm font-bold shadow-sm transition-all"
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Desktop Interactive Layout (Hidden on Mobile) */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Vertical Solution Navigation (5 Cols) */}
          <div className="lg:col-span-5 space-y-2">
            {SERVICES.map((service, idx) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  type="button"
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-white border-2 border-[#307e3e] shadow-md text-slate-900 font-bold'
                      : 'bg-slate-100/70 border-slate-200 text-slate-700 hover:bg-white hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                        isSelected ? 'bg-[#307e3e] text-white' : 'bg-slate-200 text-slate-700'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-sm font-semibold">{service.title}</span>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#307e3e] translate-x-1' : 'text-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Solution Detailed View (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-lg space-y-6 hover:border-[#f6921e]">
              
              {/* Solution Banner Image */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#f6921e] bg-slate-900/90 px-3 py-1 rounded-md border border-[#f6921e]/40 backdrop-blur-md">
                    {activeService.category}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {activeService.title}
                </h3>
                <span className="text-xs font-mono text-slate-400 font-medium">QVANTIX SOLUTION DETAILED</span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {activeService.fullDescription}
              </p>

              {/* Capabilities List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Key Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#307e3e] shrink-0 mt-0.5" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Tags */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-800">
                  Technologies Applied:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-lg bg-[#307e3e]/10 border border-[#307e3e]/30 text-xs font-mono text-[#307e3e] flex items-center gap-1.5 font-bold"
                    >
                      <Cpu className="w-3.5 h-3.5 text-[#307e3e]" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Business Benefits */}
              <div className="p-4 rounded-xl bg-[#307e3e]/10 border border-[#307e3e]/30 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#307e3e] font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#307e3e]" />
                  <span>COMMERCIAL VALUE</span>
                </div>
                <p className="text-xs font-semibold text-slate-800 leading-relaxed">
                  {activeService.businessBenefits[0]}
                </p>
              </div>

              {/* CTA Action */}
              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Link
                  href={`/solutions/${activeService.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#307e3e] hover:bg-[#246330] shadow-md shadow-[#307e3e]/20 text-sm transition-all"
                >
                  <span>Explore {activeService.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Mobile Accordion View (Visible on Mobile/Tablet) */}
        <div className="lg:hidden space-y-6">
          {SERVICES.map((service, idx) => (
            <div key={service.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between hover:border-[#f6921e]">
              
              {/* Solution Card Banner Image */}
              <div className="relative aspect-[16/9] w-full bg-slate-900">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-[#f6921e] border border-[#f6921e]/40 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md backdrop-blur-md">
                  0{idx + 1} &bull; {service.category}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm font-medium leading-relaxed">{service.shortDescription}</p>

                <div className="space-y-1.5 pt-2">
                  {service.capabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#307e3e] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex justify-end">
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#307e3e] text-white text-xs font-bold hover:bg-[#246330] transition-colors shadow-sm"
                  >
                    <span>Explore Solution</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
