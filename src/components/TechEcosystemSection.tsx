import React from 'react';
import { TECH_ECOSYSTEM } from '@/data/qvantixData';
import { Cpu, CheckCircle2 } from 'lucide-react';

export const TechEcosystemSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
            CAPABILITIES & INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology that works behind the scenes.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We utilize proven engineering frameworks, intelligent automation engines, and search marketing capabilities.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_ECOSYSTEM.map((eco) => (
            <div
              key={eco.category}
              className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm hover:border-orange-500/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-slate-900 font-mono">
                  {eco.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {eco.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-800 hover:border-orange-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
