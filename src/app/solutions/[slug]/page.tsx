import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/data/qvantixData';
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu } from 'lucide-react';
import Link from 'next/link';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) {
    return {
      title: 'Service Not Found | Qvantix',
    };
  }

  return {
    title: `${service.title} | Qvantix Solutions`,
    description: service.shortDescription,
    openGraph: {
      title: `${service.title} — Qvantix Digital & Software Solutions`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    provider: {
      '@type': 'Organization',
      name: 'Qvantix',
    },
    description: service.fullDescription,
    serviceType: service.category,
    areaServed: 'Tamil Nadu, India',
  };

  return (
    <div className="pt-28 pb-20 bg-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Header */}
      <section className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6921e]/10 border border-[#f6921e]/30 text-[#f6921e] text-xs font-mono font-bold">
            <span>{service.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {service.title}
          </h1>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
            {service.tagline}
          </p>

          {/* Solution Banner Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-xl border border-slate-200">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-[#307e3e] hover:bg-[#246330] shadow-md shadow-[#307e3e]/20 transition-all text-sm"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Description & Capabilities */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-extrabold text-slate-900">Overview & Approach</h2>
                <p className="text-slate-600 text-base leading-relaxed font-medium">
                  {service.fullDescription}
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-slate-900">Core Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.capabilities.map((cap, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#307e3e] shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-800 font-semibold">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Commercial Benefits */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-slate-900">Commercial Value</h3>
                <div className="space-y-2">
                  {service.businessBenefits.map((ben, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#307e3e]/10 border border-[#307e3e]/30 text-xs text-slate-900 font-bold">
                      <ShieldCheck className="w-4 h-4 text-[#307e3e] shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Tech Stack Box */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-6 shadow-sm">
                <h3 className="text-xs font-bold text-slate-900 font-mono uppercase tracking-wider border-b border-slate-200 pb-3">
                  Technologies Applied
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-[#307e3e]/10 border border-[#307e3e]/30 text-xs font-mono text-[#307e3e] flex items-center gap-1.5 font-bold shadow-xs">
                      <Cpu className="w-3.5 h-3.5 text-[#307e3e]" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    Ready to implement {service.title} for your company? Contact Qvantix to receive a structured consultation.
                  </p>
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-bold text-white bg-[#307e3e] hover:bg-[#246330] text-sm transition-all shadow-md shadow-[#307e3e]/20"
                  >
                    <span>Talk to an Expert</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {service.faq && service.faq.length > 0 && (
        <FAQSection customFaqs={service.faq} title={`${service.title} FAQ`} />
      )}

      <CTASection />

    </div>
  );
}
