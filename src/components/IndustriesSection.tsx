'use client';

import React, { useEffect, useRef } from 'react';

interface Industry {
  title: string;
  desc: string;
  delay?: number;
}

export default function IndustriesSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 50);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const industries: Industry[] = [
    {
      title: 'Dental & Healthcare',
      desc: 'Build trust quickly and turn high-intent visitors into qualified consultations.',
    },
    {
      title: 'Construction & Architecture',
      desc: 'Portfolio-led digital experiences for high-value build work.',
      delay: 40,
    },
    {
      title: 'Hospitality & Tourism',
      desc: 'Direct booking experiences that outperform the aggregators.',
      delay: 80,
    },
    {
      title: 'Professional Services',
      desc: 'Credibility-first websites for advisory and expert firms.',
      delay: 120,
    },
    {
      title: 'Startups & Scaleups',
      desc: 'Conversion-focused digital foundations that grow with the business.',
      delay: 160,
    },
  ];

  return (
    <section
      ref={ref}
      style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}
    >
      <div className="shell section-pad">
        {/* Header */}
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-12 md:mb-16">
          <div className="md:col-span-5">
            <p className="eyebrow">Areas of focus</p>
            <h2 className="display-lg mt-5">Industries we understand.</h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="lead">
              High-value industries where digital experience directly affects customer acquisition and revenue.
            </p>
          </div>
        </div>

        {/* Clean list */}
        <ul className="space-y-0">
          {industries.map((ind, i) => (
            <li
              key={ind.title}
              className="reveal hairline-top py-7 grid gap-4 md:grid-cols-12 md:items-center"
              style={{ transitionDelay: `${ind.delay || 0}ms` }}
            >
              <div className="md:col-span-1">
                <span
                  className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3
                  className="text-xl font-medium tracking-tight"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {ind.title}
                </h3>
              </div>
              <div className="md:col-span-5 md:col-start-7">
                <p className="text-[0.95rem] leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                  {ind.desc}
                </p>
              </div>
              <div className="md:col-span-1 md:col-start-12 flex justify-end">
                <a
                  href="#contact"
                  className="link-underline text-sm"
                  style={{ color: 'var(--muted-foreground)' }}
                  aria-label={`Enquire about ${ind.title}`}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 7h10v10" /><path d="M7 17 17 7" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
