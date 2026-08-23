'use client';

import React, { useState } from 'react';
import { SERVICES, COMPANY_INFO } from '@/data/qvantixData';
import { Send, CheckCircle2, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: SERVICES[0].title,
    budget: 'Under ₹5 Lakhs / $6k',
    timeline: 'Immediate (1-2 Months)',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp redirection
    const messageText = `*New Website Consultation Enquiry - Qvantix*

*Name:* ${formData.name}
*Company:* ${formData.company || 'N/A'}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'N/A'}
*Service Requested:* ${formData.service}
*Estimated Budget:* ${formData.budget}
*Project Timeline:* ${formData.timeline}

*Project Details / Requirements:*
${formData.message || 'No additional details provided.'}`;

    const whatsappUrl = `https://wa.me/916380648132?text=${encodeURIComponent(messageText)}`;
    
    // Open WhatsApp chat in new window/tab
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      {/* Left Info Panel */}
      <div className="lg:col-span-5 space-y-8">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-600 font-mono">
            LET'S TALK
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Start a Conversation with Qvantix
          </h1>
          <p className="text-slate-600 text-base leading-relaxed font-medium">
            Tell us what you're trying to solve. We'll analyze your requirements and help define the right technology approach for your business.
          </p>
        </div>

        {/* Contact Info Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-6 shadow-sm">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-mono border-b border-slate-200 pb-3">
            Company Contact Information
          </h3>

          <ul className="space-y-4 text-sm text-slate-700">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">LOCATION</span>
                <span className="font-bold text-slate-900">{COMPANY_INFO.contactPlaceholder.location}</span>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">OFFICIAL ENQUIRIES</span>
                <a
                  href={`mailto:${COMPANY_INFO.contactPlaceholder.email}`}
                  className="font-mono text-xs font-bold text-orange-700 hover:text-orange-600 hover:underline transition-colors"
                >
                  {COMPANY_INFO.contactPlaceholder.email}
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-mono block">PHONE & WHATSAPP</span>
                <a
                  href={`tel:${COMPANY_INFO.contactPlaceholder.telPhone || '+916380648132'}`}
                  className="font-mono text-xs font-bold text-slate-900 hover:text-orange-600 transition-colors block"
                >
                  {COMPANY_INFO.contactPlaceholder.phone}
                </a>
                <a
                  href={`https://wa.me/916380648132`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono font-semibold text-emerald-600 hover:text-emerald-700 inline-flex items-center gap-1 mt-0.5"
                >
                  <span>Chat on WhatsApp →</span>
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Commitments Box */}
        <div className="p-6 rounded-2xl bg-orange-50 border border-orange-200 space-y-3">
          <div className="flex items-center gap-2 text-orange-800 text-xs font-bold font-mono">
            <ShieldCheck className="w-4 h-4 text-orange-600" />
            <span>OUR CONSULTATION COMMITMENT</span>
          </div>
          <ul className="space-y-2 text-xs text-slate-800 font-medium">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Response within 24 business hours</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Strict project confidentiality</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
              <span>Tailored solution architecture roadmap</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Right Form Card */}
      <div className="lg:col-span-7">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Enquiry Received</h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto font-medium">
                Thank you for contacting Qvantix Digital & Software Solutions. Our technical team is reviewing your project requirements and will respond promptly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-lg bg-slate-100 text-xs font-bold text-slate-800 hover:bg-slate-200"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Full Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Kumar"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-2">
                  <label htmlFor="company" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Apex Enterprises"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Email Address */}
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="anand@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  />
                </div>

              </div>

              {/* Primary Service Selection */}
              <div className="space-y-2">
                <label htmlFor="service" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Primary Solution Required *
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.category})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Budget Range */}
                <div className="space-y-2">
                  <label htmlFor="budget" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  >
                    <option value="Under ₹5 Lakhs">Under ₹5 Lakhs / $6k</option>
                    <option value="₹5 Lakhs - ₹15 Lakhs">₹5 Lakhs - ₹15 Lakhs</option>
                    <option value="₹15 Lakhs - ₹30 Lakhs">₹15 Lakhs - ₹30 Lakhs</option>
                    <option value="₹30 Lakhs+ Enterprise">₹30 Lakhs+ Enterprise</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                    Target Project Timeline
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                  >
                    <option value="Immediate">Immediate (1-2 Months)</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="Exploratory / Flexible">Exploratory / Flexible</option>
                  </select>
                </div>

              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold text-slate-800 uppercase tracking-wider font-mono">
                  Project Description & Business Goals *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, target users, or operational goals..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white"
                />
              </div>

              {/* Submit CTA Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-white bg-orange-600 hover:bg-orange-700 shadow-lg shadow-orange-600/20 transition-all duration-200 focus:ring-2 focus:ring-orange-500"
              >
                <span>Send Enquiry</span>
                <Send className="w-4 h-4" />
              </button>

              <p className="text-center text-xs text-slate-500 font-medium">
                We protect your privacy. No spam. Strictly commercial solutions.
              </p>

            </form>
          )}

        </div>
      </div>

    </div>
  );
};
