import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import MarketingProof from '@/components/MarketingProof';
import PortfolioFilms from '@/components/PortfolioFilms';
import SelectedWork from '@/components/SelectedWork';
import CreativeCampaigns from '@/components/CreativeCampaigns';
import CapabilitiesSection from '@/components/CapabilitiesSection';
import ProcessSection from '@/components/ProcessSection';
import WhyRensha from '@/components/WhyRensha';
import FinalCTA from '@/components/FinalCTA';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main id="main" className="pt-16 md:pt-20">
        <HeroSection />
        <MarketingProof />
        <CreativeCampaigns />
        <PortfolioFilms />
        <SelectedWork />
        <CapabilitiesSection />
        <ProcessSection />
        <WhyRensha />
        <FinalCTA />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
