import React from 'react';
import { Metadata } from 'next';
import { COMPANY_INFO } from '@/data/qvantixData';

export const metadata: Metadata = {
  title: 'Privacy Policy | Qvantix Software & Digital Solutions',
  description: 'Privacy policy for Qvantix Digital & Software Solutions website visitors and clients.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h1 className="text-3xl font-extrabold text-slate-900">Privacy Policy</h1>
        <p className="text-slate-500 text-sm">Last updated: 2026</p>

        <div className="space-y-6 text-slate-700 text-sm leading-relaxed bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              Qvantix Digital & Software Solutions collects personal and corporate details (such as name, work email, phone number, and project descriptions) voluntarily submitted via our website inquiry forms to provide consultations and project quotes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">2. Use of Information</h2>
            <p>
              We use collected information strictly to analyze your technical requirements, respond to commercial enquiries, deliver project proposals, and maintain business communication. We do not sell or monetize client data.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">3. Data Protection & Security</h2>
            <p>
              We implement industry-standard encryption, SSL protection, and secure server access protocols to safeguard all client correspondence and project documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-slate-900">4. Contact Us</h2>
            <p>
              For any privacy or data protection inquiries, contact Qvantix Digital & Software Solutions at{' '}
              <span className="text-orange-600 font-mono font-bold">{COMPANY_INFO.contactPlaceholder.email}</span>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
