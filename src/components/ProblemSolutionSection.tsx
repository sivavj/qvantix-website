import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const BUSINESS_PROBLEMS = [
  {
    id: 'complex-processes',
    title: 'COMPLEX PROCESSES',
    problem: 'Disconnected systems and manual workflows slow your team down.',
    impact: 'Forcing rigid or fragmented tools leads to manual data re-entry, operational bottlenecks, and frustrated staff.',
    solution: 'Qvantix engineers custom business software and ERP integrations tailored specifically around your workflow.',
  },
  {
    id: 'outdated-tech',
    title: 'OUTDATED TECHNOLOGY',
    problem: 'Legacy software prevents your business from adapting quickly.',
    impact: 'Slow, unmaintained systems create security risks and prevent you from offering modern digital features.',
    solution: 'Qvantix modernizes software architectures and builds fast, secure, cloud-native web applications.',
  },
  {
    id: 'poor-digital-exp',
    title: 'POOR DIGITAL EXPERIENCE',
    problem: 'Customers expect faster, simpler digital interactions.',
    impact: 'A clunky website or poorly designed mobile experience causes prospects to abandon inquiries for competitors.',
    solution: 'Qvantix creates high-speed, intuitive web and mobile solutions optimized for search rankings and lead conversion.',
  },
  {
    id: 'scaling-challenges',
    title: 'SCALING CHALLENGES',
    problem: 'Technology must grow seamlessly alongside your business.',
    impact: 'Templates and brittle plugins break as user traffic and transaction volume increase.',
    solution: 'Qvantix delivers scalable custom software, AI automation, and quality assurance testing built for sustainable growth.',
  },
];

export const ProblemSolutionSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono">
            THE BUSINESS CHALLENGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Technology should solve business problems —{' '}
            <span className="text-[#307e3e]">not create more of them.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium">
            Many companies struggle with bloated software, disconnected vendors, or websites that fail to convert visitors into inquiries. Qvantix bridges technology and business growth.
          </p>
        </div>

        {/* 4 Problem Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BUSINESS_PROBLEMS.map((item) => (
            <div
              key={item.id}
              className="light-card light-card-hover rounded-2xl p-7 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#f6921e]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded border text-[#f6921e] bg-[#f6921e]/10 border-[#f6921e]/30">
                    {item.title}
                  </span>
                  <AlertTriangle className="w-5 h-5 text-[#f6921e]" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-snug">
                  {item.problem}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {item.impact}
                </p>

                {/* Divider line */}
                <div className="border-t border-slate-100 my-3" />

                {/* Solution Box */}
                <div className="flex items-start gap-3 bg-[#307e3e]/10 border border-[#307e3e]/30 rounded-xl p-4">
                  <CheckCircle2 className="w-5 h-5 text-[#307e3e] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#307e3e] block">
                      HOW QVANTIX SOLVES THIS
                    </span>
                    <p className="text-sm font-semibold text-slate-800 mt-0.5">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#f6921e] hover:text-[#d8790c] transition-colors"
          >
            <span>Facing one of these challenges? Let's discuss a tailored solution</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
