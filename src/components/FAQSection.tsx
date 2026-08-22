'use client';

import React, { useState } from 'react';
import { GENERAL_FAQS, FAQItem } from '@/data/qvantixData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  customFaqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQSection: React.FC<FAQProps> = ({
  customFaqs,
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers regarding Qvantix software development, testing, digital marketing, and project execution.',
}) => {
  const faqs = customFaqs || GENERAL_FAQS;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            {subtitle}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border transition-all shadow-sm ${
                  isOpen ? 'border-orange-500 ring-1 ring-orange-500/20' : 'border-slate-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      className={`w-5 h-5 shrink-0 ${
                        isOpen ? 'text-orange-600' : 'text-slate-400'
                      }`}
                    />
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-orange-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                    <p className="pl-8 font-medium">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
