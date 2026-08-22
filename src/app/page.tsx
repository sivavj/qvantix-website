import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { TrustBar } from '@/components/TrustBar';
import { ProblemSolutionSection } from '@/components/ProblemSolutionSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyQvantixSection } from '@/components/WhyQvantixSection';
import { DifferentiatorBanner } from '@/components/DifferentiatorBanner';
import { ProcessSection } from '@/components/ProcessSection';
import { IndustriesSection } from '@/components/IndustriesSection';
import { TechEcosystemSection } from '@/components/TechEcosystemSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSolutionSection />
      <ServicesSection />
      <WhyQvantixSection />
      <DifferentiatorBanner />
      <ProcessSection />
      <TechEcosystemSection />
      <IndustriesSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
