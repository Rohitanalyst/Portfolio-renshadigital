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
      layer: 'Social',
      title: 'Social Media Marketing',
      desc: 'Audience positioning, campaign ideas and creative systems for the channels where your customers spend time.',
      tags: ['Channel Strategy', 'Campaign Concepts', 'Social Creative', 'Content Planning'],
      num: '01',
    },
    {
      layer: 'Content',
      title: 'Content Marketing',
      desc: 'Product stories, short-form video and visual assets shaped for a clear message and next step.',
      tags: ['Art Direction', 'Product Visuals', 'Short-form Video', 'Campaign Assets'],
      num: '02',
    },
    {
      layer: 'Growth',
      title: 'Performance Marketing',
      desc: 'Paid campaign planning, testing and measurement against the actual business objective.',
      tags: ['Paid Media', 'Landing Pages', 'Creative Testing', 'Reporting'],
      num: '03',
    },
    {
      layer: 'Experience',
      title: 'Websites & Conversion',
      desc: 'Websites, landing pages and lead journeys that make the next action easy to understand.',
      tags: ['Digital Experience', 'UX/UI', 'Lead Capture', 'Conversion'],
      num: '04',
    },
  ];

  return (
    <section id="services" className="shell section-pad" ref={ref}>
      {/* Header */}
      <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-14 md:mb-20">
        <div className="md:col-span-6">
          <p className="eyebrow">Services</p>
          <h2 className="display-lg mt-5">From the first view to the next step.</h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="lead">
            Social, content, paid media and the website experience should tell a consistent story.
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
