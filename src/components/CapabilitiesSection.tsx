'use client';

import React, { useEffect, useRef } from 'react';

export default function CapabilitiesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const layers = [
    {
      layer: 'Core',
      title: 'Websites & Conversion',
      desc: 'Websites, landing pages, conversion architecture and digital experiences.',
      tags: ['Digital Experience', 'UX/UI', 'Conversion Optimisation', 'Landing Pages'],
      num: '01',
    },
    {
      layer: 'Growth',
      title: 'Paid Acquisition & Social',
      desc: 'Paid advertising, lead generation, social content and campaign creative.',
      tags: ['Paid Media', 'Lead Generation', 'Social Content', 'Campaign Creative'],
      num: '02',
    },
    {
      layer: 'Systems',
      title: 'CRM & AI Automation',
      desc: 'Lead capture, CRM, follow-up systems and AI-assisted marketing automation.',
      tags: ['Lead Capture', 'CRM Workflows', 'AI Follow-up', 'Marketing Automation'],
      num: '03',
    },
  ];

  return (
    <section id="services" className="shell section-pad" ref={ref}>
      {/* Header */}
      <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-14 md:mb-20">
        <div className="md:col-span-6">
          <p className="eyebrow">Services</p>
          <h2 className="display-lg mt-5">Built around the customer journey.</h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="lead">
            Website → Traffic → Leads → Follow-up → Customer. Three connected layers, one commercial system.
          </p>
        </div>
      </div>

      {/* Three layers — large typography list */}
      <ol className="space-y-0">
        {layers?.map((layer, i) => (
          <li
            key={layer?.title}
            className="reveal hairline-top py-10 md:py-12"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-start">
              {/* Number + layer */}
              <div className="md:col-span-2 flex md:flex-col gap-4 md:gap-2">
                <span
                  className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                  style={{ color: 'var(--accent)' }}
                >
                  {layer?.num}
                </span>
                <span
                  className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {layer?.layer}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3
                  className="text-3xl md:text-4xl font-medium tracking-tight leading-tight"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {layer?.title}
                </h3>
              </div>

              {/* Description + tags */}
              <div className="md:col-span-5 md:col-start-8">
                <p
                  className="text-[1rem] leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {layer?.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {layer?.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs"
                      style={{
                        border: '1px solid var(--hairline)',
                        color: 'var(--muted-foreground)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>

      {/* Bottom CTA */}
      <div className="reveal hairline-top pt-10 mt-2" style={{ transitionDelay: '180ms' }}>
        <a
          href="#contact"
          className="link-underline text-sm font-medium"
          style={{ color: 'var(--foreground)' }}
        >
          Discuss your project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
