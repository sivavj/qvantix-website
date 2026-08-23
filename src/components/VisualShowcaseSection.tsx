import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const SHOWCASE_ITEMS = [
  {
    id: 'software-engineering',
    title: 'Custom Software & Web Engineering',
    category: 'SOFTWARE & WEB',
    image: '/assets/software-dev-3d.jpg',
    description:
      'Bespoke software platforms, responsive web applications, and internal enterprise tools built around your operational workflows in Tamil Nadu.',
    tags: ['React / Next.js', 'Python / Node.js', 'Cloud ERPs', 'REST & GraphQL APIs'],
    link: '/solutions/custom-software',
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning Systems',
    category: 'INTELLIGENCE & AI',
    image: '/assets/ai-ml-3d.jpg',
    description:
      'Smart automation, AI video creation, intelligent document OCR extraction, predictive analytics, and automated customer chatbots.',
    tags: ['AI Chatbots', 'AI Video', 'Predictive Models', 'Process Automation'],
    link: '/solutions/ai-ml-solutions',
  },
  {
    id: 'digital-growth',
    title: 'Digital Marketing & Search Growth',
    category: 'DIGITAL GROWTH',
    image: '/assets/digital-growth-3d.jpg',
    description:
      'High-converting Google Ads campaigns, technical SEO ranking strategies, local search optimization, and creative brand positioning.',
    tags: ['Google Ads PPC', 'Technical SEO', 'Local Search', 'Brand Strategy'],
    link: '/solutions/digital-marketing',
  },
];

export const VisualShowcaseSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f6921e]/10 border border-[#f6921e]/30 text-[#f6921e] text-xs font-mono font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#f6921e]" />
            <span>VISUAL CAPABILITY SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Designed for impact. Engineered for growth.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore how Qvantix combines software engineering, artificial intelligence, and digital growth into practical visual solutions.
          </p>
        </div>

        {/* 3 Visual Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SHOWCASE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:border-[#f6921e] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* 3D Image Banner */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-[#f6921e]/30 text-[10px] font-mono font-bold text-[#d8790c]">
                    {item.category}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#307e3e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-medium">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-[11px] font-mono text-slate-700 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action CTA */}
              <div className="p-6 pt-0 border-t border-slate-100/50 mt-4">
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#f6921e] hover:text-[#d8790c] transition-colors group/link"
                >
                  <span>Explore {item.title}</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
