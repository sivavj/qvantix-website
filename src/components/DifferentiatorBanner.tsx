import React from 'react';

export const DifferentiatorBanner: React.FC = () => {
  return (
    <section className="py-20 bg-slate-100 border-y border-slate-200 text-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
        
        {/* Logo Brand Accent Line */}
        <div className="w-20 h-1.5 bg-[#f6921e] mx-auto rounded-full" />

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto">
          Not technology for technology's sake.{' '}
          <span className="text-[#307e3e]">Technology that moves your business forward.</span>
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
          We focus on business-specific solutions, reliable execution, modern technology, and long-term digital growth.
        </p>

      </div>
    </section>
  );
};
