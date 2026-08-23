import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPANY_INFO } from '@/data/qvantixData';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Qvantix | Software & Digital Solutions Company',
    template: '%s | Qvantix Software & Digital Solutions',
  },
  description:
    'Qvantix helps startups, small businesses, and growing enterprises build practical digital solutions spanning custom software, mobile apps, web development, AI & ML, software testing, SEO, Google Ads, and digital marketing.',
  keywords: [
    'Qvantix',
    'Software Solutions Company Tamil Nadu',
    'Custom Software Development',
    'Website Development',
    'Mobile App Development',
    'AI ML Solutions',
    'Software Testing QA',
    'SEO Services',
    'Google Ads Marketing',
    'Digital Marketing Agency',
  ],
  authors: [{ name: 'Qvantix' }],
  creator: 'Qvantix Digital & Software Solutions',
  metadataBase: new URL('https://qvantix.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://qvantix.com',
    title: 'Qvantix | Software & Digital Solutions Company',
    description:
      'Turn complex business challenges into practical, scalable digital solutions with Qvantix. Custom software, mobile apps, web development, AI, SEO, and digital marketing.',
    siteName: 'Qvantix',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Qvantix | Software & Digital Solutions',
    description:
      'Business-focused software, mobile applications, AI automation, SEO, and digital marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/assets/logo.png', type: 'image/png' }
    ],
    shortcut: ['/assets/logo.png'],
    apple: [
      { url: '/assets/logo.png', type: 'image/png' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Qvantix',
    legalName: COMPANY_INFO.fullName,
    url: 'https://qvantix.com',
    logo: 'https://qvantix.com/assets/logo.png',
    description: COMPANY_INFO.heroSubheadline,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: COMPANY_INFO.contactPlaceholder.email,
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png?v=2" type="image/png" />
        <link rel="shortcut icon" href="/assets/logo.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/logo.png?v=2" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
