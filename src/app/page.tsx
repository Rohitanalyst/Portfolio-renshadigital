import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustStrip from '@/components/TrustStrip';
import SelectedWork from '@/components/SelectedWork';
import CommercialThinking from '@/components/CommercialThinking';
import WebsitesSection from '@/components/WebsitesSection';
import SocialSection from '@/components/SocialSection';
import ConceptsSection from '@/components/ConceptsSection';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyRensha from '@/components/WhyRensha';
import IndustriesSection from '@/components/IndustriesSection';
import InternationalSection from '@/components/InternationalSection';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Sticky Navigation */}
      <Navigation />

      {/* Main content — offset for fixed nav */}
      <main id="main" className="pt-16 md:pt-20">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Selected Work */}
        <SelectedWork />

        {/* 4. Commercial Thinking */}
        <CommercialThinking />

        {/* 5. Websites & Conversion */}
        <WebsitesSection />

        {/* 6. Social & Content */}
        <SocialSection />

        {/* 7. Rensha Concepts */}
        <ConceptsSection />

        {/* 8. Capabilities */}
        <CapabilitiesSection />

        {/* 9. Process */}
        <ProcessSection />

        {/* 10. Why Rensha */}
        <WhyRensha />

        {/* 11. Industries */}
        <IndustriesSection />

        {/* 12. International */}
        <InternationalSection />

        {/* 13. Final CTA */}
        <FinalCTA />

        {/* 14. Contact Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
