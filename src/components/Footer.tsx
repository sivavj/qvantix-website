import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/data/qvantixData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block p-1 bg-white rounded-lg">
              <div className="relative h-10 w-36">
                <Image
                  src="/assets/logo.png"
                  alt="Qvantix Software & Digital Solutions"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Qvantix is a software and digital solutions company helping businesses, startups, and growing brands turn ideas into practical, scalable digital solutions.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-orange-400 font-mono">
              <CheckCircle2 className="w-4 h-4 text-orange-500" />
              <span>{COMPANY_INFO.manifesto}</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-orange-400 transition-colors">
                  About Qvantix
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Solutions & Services
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-orange-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Key Solutions */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Core Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="text-slate-400 hover:text-orange-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/solutions"
                  className="text-orange-400 hover:text-orange-300 text-xs font-semibold flex items-center gap-1"
                >
                  View All Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white font-mono">
              Contact Qvantix
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-1" />
                <span>{COMPANY_INFO.contactPlaceholder.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono text-xs text-slate-300">
                  {COMPANY_INFO.contactPlaceholder.email}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="font-mono text-xs text-slate-300">
                  {COMPANY_INFO.contactPlaceholder.phone}
                </span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2 rounded bg-orange-600 hover:bg-orange-700 text-white shadow transition-all"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Qvantix Digital & Software Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="flex items-center gap-1 text-slate-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Enterprise IT Security
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
