'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ChevronRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-sm'
        : 'bg-white/80 backdrop-blur-sm py-5 border-b border-slate-100'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo - Official Asset */}
          <Link
            href="/"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-1"
          >
            <div className="relative h-14 sm:h-16 w-44 sm:w-52">
              <Image
                src="/assets/qvlogo.png"
                alt="Qvantix Software & Digital Solutions"
                fill
                priority
                sizes="(max-width: 640px) 176px, 208px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-50 p-1.5 rounded-full border border-slate-200">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${isActive
                    ? 'bg-white text-[#307e3e] shadow-sm border border-[#307e3e]/30 font-bold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5.5 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#f6921e] to-[#307e3e] hover:from-[#d8790c] hover:to-[#246330] shadow-md shadow-[#f6921e]/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#307e3e]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#307e3e]"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 mt-3 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold transition-colors ${isActive
                    ? 'bg-[#307e3e]/10 text-[#307e3e] border border-[#307e3e]/30 font-bold'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#f6921e]" />
                </Link>
              );
            })}
          </nav>
          <div className="pt-3 border-t border-slate-200">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#f6921e] to-[#307e3e] hover:from-[#d8790c] hover:to-[#246330] shadow-md shadow-[#f6921e]/20 transition-all"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
