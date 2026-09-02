'use client';

import React, { useEffect, useRef } from 'react';

export default function ProcessSection() {
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

  const steps = [
    { num: '01', title: 'Diagnose', desc: 'Understand the business, customer and digital friction.' },
    { num: '02', title: 'Strategise', desc: 'Define the opportunity and customer journey.' },
    { num: '03', title: 'Design', desc: 'Create the visual and UX direction.' },
    { num: '04', title: 'Build', desc: 'Develop the experience and connect the necessary systems.' },
    { num: '05', title: 'Optimise', desc: 'Measure, learn and improve.' },
  ];

  return (
    <section
      id="process"
      ref={ref}
      style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}
    >
      <div className="shell section-pad">
        {/* Header */}
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-14 md:mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow">Process</p>
            <h2 className="display-lg mt-5">Five steps, no mystery.</h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="lead">
              A systematic approach that starts with the business problem and ends with a measurable improvement.
            </p>
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Connector line */}
          <div
            className="relative mb-0"
            style={{ borderTop: '1px solid var(--hairline)' }}
          >
            <div className="grid grid-cols-5">
              {steps?.map((step, i) => (
                <div
                  key={step?.title}
                  className="reveal relative pt-8 pr-8"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {/* Step dot on line */}
                  <div
                    className="absolute -top-[5px] left-0 h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: i === 0 ? 'var(--accent)' : 'var(--hairline)', border: '2px solid var(--background)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                    style={{ color: 'var(--accent)' }}
                  >
                    {step?.num}
                  </span>
                  <h3
                    className="mt-3 text-xl font-medium tracking-tight"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {step?.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {step?.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden">
          <ol className="relative space-y-0 pl-6" style={{ borderLeft: '1px solid var(--hairline)' }}>
            {steps?.map((step, i) => (
              <li
                key={step?.title}
                className="reveal relative pb-10 last:pb-0"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Dot */}
                <div
                  className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: i === 0 ? 'var(--accent)' : 'var(--hairline)', border: '2px solid var(--background)' }}
                  aria-hidden="true"
                />
                <span
                  className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                  style={{ color: 'var(--accent)' }}
                >
                  {step?.num}
                </span>
                <h3
                  className="mt-2 text-xl font-medium tracking-tight"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {step?.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {step?.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
