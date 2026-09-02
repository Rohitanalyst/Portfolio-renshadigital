'use client';

import React, { useEffect, useRef } from 'react';

interface ConceptItem {
  title: string;
  industry: string;
  problem: string;
  approach: string;
  features: string[];
  imageUrl: string;
  imageAlt: string;
  delay?: number;
}

export default function ConceptsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 70);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const concepts: ConceptItem[] = [
  {
    title: 'Premium Dental',
    industry: 'Dental & Healthcare',
    problem: 'High-intent patients arrive on a generic website and leave without booking.',
    approach: 'A patient journey that explains treatment, qualifies interest and makes booking a consultation the easiest next step.',
    features: ['Treatment discovery', 'Patient qualification', 'Consultation booking', 'Trust-first visual design'],
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_11049059d-1772204368831.png',
    imageAlt: 'Concept dental clinic website shown on desktop and mobile with treatment discovery and consultation booking flow'
  },
  {
    title: 'Luxury Construction',
    industry: 'Construction & Architecture',
    problem: 'A premium build firm attracts enquiries from the wrong clients, wasting time on unqualified leads.',
    approach: 'A portfolio-led experience that filters serious projects from casual enquiries before a call is ever booked.',
    features: ['Project portfolio', 'Qualification flow', 'Budget feasibility journey', 'Consultation CTA'],
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_18c0c0f1a-1785157923990.png',
    imageAlt: 'Concept construction and architecture website on tablet and mobile showing a project portfolio and feasibility enquiry flow',
    delay: 70
  },
  {
    title: 'Luxury Hospitality',
    industry: 'Luxury Hospitality & Tourism',
    problem: 'Guests discover the property through aggregators and book elsewhere, reducing margin.',
    approach: 'Discovery, experiences and direct booking designed so guests have no reason to leave for an aggregator.',
    features: ['Property discovery', 'Experience showcase', 'Direct booking journey', 'Enquiry conversion'],
    imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ceca7ff8-1767781546613.png',
    imageAlt: 'Concept boutique hotel website on desktop and two mobile screens showing experience discovery and a booking journey',
    delay: 140
  }];


  return (
    <section
      id="concepts"
      ref={ref}
      style={{ backgroundColor: 'var(--surface)', borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)' }}>
      
      <div className="shell section-pad">
        {/* Header */}
        <div className="reveal max-w-3xl">
          <p className="eyebrow">Speculative</p>
          <h2 className="display-lg mt-5">Rensha Concepts</h2>
          <p className="lead mt-5 max-w-xl">
            Selected speculative projects exploring how we would approach digital growth challenges in high-value industries.
          </p>
        </div>

        {/* Concepts list */}
        <div className="mt-16 md:mt-20 space-y-20 md:space-y-28">
          {concepts.map((concept, idx) =>
          <article
            key={concept.title}
            className="reveal"
            style={{ transitionDelay: `${concept.delay || 0}ms` }}>
            
              <div className={`grid gap-10 lg:grid-cols-12 lg:gap-14 ${idx % 2 === 1 ? 'lg:[direction:rtl]' : ''}`}>
                {/* Image */}
                <div className="lg:col-span-7 group overflow-hidden" style={{ direction: 'ltr', border: '1px solid var(--hairline)' }}>
                  <img
                  src={concept.imageUrl}
                  alt={concept.imageAlt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02]"
                  style={{ display: 'block', aspectRatio: '3/2' }} />
                
                </div>

                {/* Content */}
                <div className="lg:col-span-5 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                  <span
                  className="inline-block text-[0.55rem] font-medium uppercase tracking-[0.18em] px-2.5 py-1 self-start"
                  style={{
                    border: '1px solid rgba(194,112,58,0.35)',
                    color: 'var(--accent)'
                  }}>
                  
                    Concept / Speculative Project
                  </span>
                  <p className="mt-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {concept.industry}
                  </p>
                  <h3 className="display-md mt-2">{concept.title}</h3>

                  <div className="mt-6 space-y-4">
                    <div>
                      <p
                      className="text-[0.6rem] font-medium uppercase tracking-[0.16em]"
                      style={{ color: 'var(--muted-foreground)' }}>
                      
                        The problem
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {concept.problem}
                      </p>
                    </div>
                    <div>
                      <p
                      className="text-[0.6rem] font-medium uppercase tracking-[0.16em]"
                      style={{ color: 'var(--muted-foreground)' }}>
                      
                        The approach
                      </p>
                      <p className="mt-2 text-[0.95rem] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                        {concept.approach}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {concept.features.map((f) =>
                  <li key={f} className="flex gap-3 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                        <span
                      className="mt-2.5 h-px w-4 shrink-0"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden="true" />
                    
                        {f}
                      </li>
                  )}
                  </ul>

                  <a
                  href="#contact"
                  className="link-underline mt-8 text-sm font-medium self-start"
                  style={{ color: 'var(--foreground)' }}>
                  
                    View Concept
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}