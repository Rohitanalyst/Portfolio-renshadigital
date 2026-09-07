'use client';

import React, { useEffect, useRef } from 'react';

interface ConceptCardProps {
  title: string;
  industry: string;
  services: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  delay?: number;
}

function ConceptCard({ title, industry, services, description, imageUrl, imageAlt, delay = 0 }: ConceptCardProps) {
  return (
    <article
      className="reveal group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        href={title === 'Premium Dental' ? '/concepts/premium-dental' : '#concepts'}
        className="block focus-visible:outline-none"
        aria-label={`View concept: ${title}`}
      >
        {/* Image */}
        <div
          className="overflow-hidden"
          style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--hairline)' }}
        >
          <img
            src={imageUrl}
            alt={imageAlt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.025]"
            style={{ display: 'block', aspectRatio: '3/2' }}
          />
        </div>

        {/* Meta */}
        <div className="mt-6">
          <span
            className="inline-block text-[0.55rem] font-medium uppercase tracking-[0.18em] px-2.5 py-1"
            style={{
              border: '1px solid rgba(194,112,58,0.35)',
              color: 'var(--accent)',
            }}
          >
            Concept / Speculative Project
          </span>
          <h3 className="display-md mt-4">{title}</h3>
          <p className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            {industry} · {services}
          </p>
          <p
            className="mt-4 text-[1rem] leading-relaxed max-w-lg"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {description}
          </p>
          <span
            className="link-underline mt-5 inline-flex text-sm font-medium"
            style={{ color: 'var(--foreground)' }}
          >
            View Concept
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </span>
        </div>
      </a>
    </article>
  );
}

export default function SelectedWork() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const concepts: ConceptCardProps[] = [
    {
      title: 'Premium Dental',
      industry: 'Dental & Healthcare',
      services: 'Digital Experience · Conversion · Mobile UX',
      description: 'A patient journey that explains treatment, qualifies interest and makes booking a consultation the easiest next step.',
      imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_11049059d-1772204368831.png',
      imageAlt: 'Concept dental clinic website shown on desktop and mobile with treatment discovery and consultation booking',
    },
    {
      title: 'Luxury Construction',
      industry: 'Construction & Architecture',
      services: 'Digital Experience · Lead Qualification · Visual Storytelling',
      description: 'A portfolio-led experience that filters serious projects from casual enquiries before a call is ever booked.',
      imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_18c0c0f1a-1785157923990.png',
      imageAlt: 'Concept construction and architecture website on tablet and mobile showing a project portfolio and feasibility enquiry flow',
      delay: 80,
    },
    {
      title: 'Luxury Hospitality',
      industry: 'Luxury Hospitality & Tourism',
      services: 'Digital Experience · Booking Journey · Content Direction',
      description: 'Discovery, experiences and direct booking designed so guests have no reason to leave for an aggregator.',
      imageUrl: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ceca7ff8-1767781546613.png',
      imageAlt: 'Concept boutique hotel website on desktop and two mobile screens showing experience discovery and a booking journey',
      delay: 160,
    },
  ];

  return (
    <section id="work" className="shell section-pad" ref={ref}>
      {/* Header */}
      <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="eyebrow">Portfolio</p>
          <h2 className="display-lg mt-5">Selected Work</h2>
          <p className="lead mt-5 max-w-xl">
            Websites, digital experiences, campaigns and growth concepts built around real business objectives.
          </p>
        </div>
      </div>

      {/* Actual Work — Intentional placeholder */}
      <div className="reveal mt-14" style={{ transitionDelay: '60ms' }}>
        <div
          className="border-b pb-5 mb-10"
          style={{ borderColor: 'var(--hairline)' }}
        >
          <p
            className="text-[0.55rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Client Work
          </p>
        </div>
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-10 px-8 md:px-12"
          style={{
            border: '1px solid var(--hairline)',
            backgroundColor: 'var(--surface)',
          }}
        >
          <div>
            <p
              className="text-xl font-medium tracking-tight"
              style={{ fontFamily: 'Manrope, sans-serif', color: 'var(--foreground)' }}
            >
              Client work coming soon.
            </p>
            <p className="mt-3 text-[0.95rem] max-w-lg leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
              Selected client work is currently being prepared. Until then, explore Rensha Concepts to see how we approach digital experiences across high-value industries.
            </p>
          </div>
          <a
            href="#concepts"
            className="shrink-0 btn-secondary"
            style={{ whiteSpace: 'nowrap' }}
          >
            Explore Concepts
          </a>
        </div>
      </div>

      {/* Rensha Concepts */}
      <div className="reveal mt-20" style={{ transitionDelay: '80ms' }}>
        <div
          className="border-b pb-5 mb-12"
          style={{ borderColor: 'var(--hairline)' }}
        >
          <p
            className="text-[0.55rem] font-medium uppercase tracking-[0.18em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Rensha Concepts
          </p>
          <p className="mt-2 text-[0.95rem] max-w-2xl leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
            Speculative projects created to demonstrate strategic thinking and execution capability. Every project below is clearly labelled.
          </p>
        </div>
        <div className="grid gap-20 md:gap-24 lg:grid-cols-2 lg:gap-x-14">
          {concepts.map((concept) => (
            <ConceptCard key={concept.title} {...concept} />
          ))}
        </div>
      </div>
    </section>
  );
}