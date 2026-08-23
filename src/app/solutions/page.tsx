import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { SERVICES } from '@/data/qvantixData';
import { CheckCircle2, ChevronRight, Cpu } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Digital & Software Solutions Directory | Qvantix',
  description:
    'Explore Qvantix software & digital capabilities: Custom Software, Website & Mobile Apps, AI & ML, Software Testing QA, SEO, Google Ads, Digital Marketing, Graphic Design, and Motion Graphics.',
};

export default function SolutionsDirectoryPage() {
  return (
    <div className="pt-28 pb-20 bg-white relative">
      {/* Header with Overlay Banner Background */}
      <section className="relative py-28 md:py-36 overflow-hidden border-b border-slate-800 text-white flex items-center justify-center">
        {/* Background Banner Image - Vivid & Visible */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/solutions-banner.png"
            alt="Qvantix Digital & Software Solutions Directory Banner Background"
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
          <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono px-4 py-1.5 rounded-full bg-slate-900/80 border border-[#f6921e]/50 backdrop-blur-md inline-block shadow-lg">
            OUR CAPABILITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Digital & Software Solutions Directory
          </h1>
          <p className="text-slate-100 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-semibold drop-shadow">
            One team providing end-to-end custom software engineering, artificial intelligence, software testing, search engine optimization, paid ad campaigns, and creative design.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="light-card light-card-hover rounded-2xl p-8 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded border text-[#d8790c] bg-[#f6921e]/10 border-[#f6921e]/30">
                      SOLUTION {index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-medium">
                      {service.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 group-hover:text-[#307e3e] transition-colors">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {service.fullDescription}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-slate-800 font-bold uppercase tracking-wider block">
                      Key Capabilities:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.capabilities.slice(0, 4).map((cap, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-[#307e3e]" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] font-mono text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#307e3e] hover:bg-[#246330] text-white text-xs font-bold transition-all shrink-0"
                  >
                    <span>View Details</span>
                    <ChevronRight className="w-4 h-4" />
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
