import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const PROCESS_STEPS_5 = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understand Business Objectives',
    description: 'We analyze your business goals, target audience, operational workflows, and software requirements.',
    deliverables: ['Requirement Analysis', 'Feasibility Assessment', 'Scope Roadmap'],
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Define Solution Architecture',
    description: 'We map out the system architecture, database structure, user experience wireframes, and project timeline.',
    deliverables: ['System Blueprint', 'UX Architecture', 'Milestone Schedule'],
  },
  {
    number: '03',
    title: 'DESIGN',
    subtitle: 'Intuitive Experience Creation',
    description: 'We design modern, responsive interfaces, vector brand identity, and clean visual components.',
    deliverables: ['UI/UX Prototypes', 'Design System Standards', 'Brand Assets'],
  },
  {
    number: '04',
    title: 'BUILD',
    subtitle: 'Develop, Integrate & Test',
    description: 'Our software engineers build clean, maintainable code alongside automated and manual QA testing.',
    deliverables: ['Clean Source Code', 'QA Audit Report', 'API Integration'],
  },
  {
    number: '05',
    title: 'LAUNCH & SCALE',
    subtitle: 'Deploy, Optimize & Support',
    description: 'We launch your solution into production environments with continuous optimization and ongoing support.',
    deliverables: ['Production Rollout', 'Performance Monitoring', 'Ongoing Growth'],
  },
];

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-mono">
            OUR PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From idea to implementation.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A structured, 5-step delivery timeline ensuring clarity, quality, and on-time execution.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {PROCESS_STEPS_5.map((step, idx) => (
            <div
              key={step.number}
              className={`light-card light-card-hover rounded-2xl p-6 flex flex-col justify-between space-y-4 relative border-t-4 ${
                idx % 2 === 0 ? 'border-t-[#307e3e]' : 'border-t-[#f6921e]'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#307e3e] text-white font-mono font-bold text-xs flex items-center justify-center shadow-sm">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-slate-500">
                    PHASE {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 tracking-wide">
                  {step.title}
                </h3>

                <p className={`text-xs font-semibold font-mono ${
                  idx % 2 === 0 ? 'text-[#307e3e]' : 'text-[#f6921e]'
                }`}>
                  {step.subtitle}
                </p>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                  Key Deliverables:
                </span>
                <div className="space-y-1">
                  {step.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center gap-1.5 text-[11px] text-slate-700 font-medium">
                      <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${
                        idx % 2 === 0 ? 'text-[#307e3e]' : 'text-[#f6921e]'
                      }`} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#307e3e] hover:bg-[#246330] px-6 py-3 rounded-xl shadow-md shadow-[#307e3e]/20 transition-all"
          >
            <span>Start Your Project Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
