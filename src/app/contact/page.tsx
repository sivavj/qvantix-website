import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Qvantix | Let\'s Talk Software & Digital Solutions',
  description:
    'Start a conversation with Qvantix Digital & Software Solutions. Discuss custom software development, mobile apps, web design, AI, SEO, or paid ad campaigns.',
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ContactForm />
      </div>
    </div>
  );
}
