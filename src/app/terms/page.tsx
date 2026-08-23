import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/qvantixData';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Qvantix Software & Digital Solutions',
  description: 'Terms and conditions for Qvantix Digital & Software Solutions services.',
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Terms & Conditions</h1>
        <p className="text-slate-500 text-sm">Last updated: 2026</p>

        <div className="space-y-6 text-slate-700 text-sm leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Service Scope</h2>
            <p>
              Qvantix provides software engineering, website development, mobile app creation, AI solutions, QA testing, SEO, Google Ads management, and digital marketing services based on individual client Master Service Agreements (MSA) and Statements of Work (SOW).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Intellectual Property</h2>
            <p>
              Upon full payment of agreed project fees, all custom source code, design assets, and digital IP engineered specifically for the client belong entirely to the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Timeline & Delivery Commitments</h2>
            <p>
              Qvantix is committed to completing all work within agreed timelines, subject to timely receipt of client feedback, credentials, and project requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of Tamil Nadu, India. For inquiries, contact{' '}
              <a
                href={`mailto:${COMPANY_INFO.contactPlaceholder.email}`}
                className="text-orange-600 hover:text-orange-700 underline font-mono font-bold"
              >
                {COMPANY_INFO.contactPlaceholder.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
