'use client';

import React, { useEffect, useRef } from 'react';

export default function CommercialThinking() {
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
      { threshold: 0.1 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const stages = [
    { label: 'Attention', desc: 'Reached, but not by the people who can buy.' },
    { label: 'Trust', desc: 'Interest without evidence of competence.' },
    { label: 'Interest', desc: 'Value understood, relevance unclear.' },
    { label: 'Enquiry', desc: 'Intent lost to friction and effort.' },
    { label: 'Booking', desc: 'Enquiry made, no reply fast enough.' },
    { label: 'Customer', desc: 'Won once, with no reason to return.' },
  ];

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'var(--ink)', color: 'var(--ink-foreground)' }}
    >
      <div className="shell section-pad">
        {/* Header */}
        <div className="reveal max-w-3xl">
          <p className="eyebrow" style={{ color: 'rgba(242,239,233,0.4)' }}>
            Commercial thinking
          </p>
          <h2
            className="display-lg mt-6"
            style={{ color: 'rgba(242,239,233,0.45)' }}
          >
            A better-looking website isn't the goal.
          </h2>
          <p className="display-lg mt-2">
            A better-performing customer journey is.
          </p>
        </div>

        {/* Framework */}
        <div className="reveal mt-16 md:mt-20" style={{ transitionDelay: '80ms' }}>
          <div
            className="grid md:grid-cols-6 gap-px"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          >
            {stages?.map((stage, i) => (
              <div
                key={stage?.label}
                className="flex flex-col p-6 md:p-8"
                style={{ backgroundColor: 'var(--ink)' }}
              >
                <span
                  className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(242,239,233,0.3)' }}
                >
                  {String(i + 1)?.padStart(2, '0')}
                </span>
                <span
                  className="mt-4 text-2xl md:text-3xl font-medium tracking-tight"
                  style={{ fontFamily: 'Manrope, sans-serif', lineHeight: 1.1 }}
                >
                  {stage?.label}
                </span>
                <p
                  className="mt-3 text-sm leading-relaxed"
                  style={{ color: 'rgba(242,239,233,0.45)' }}
                >
                  {stage?.desc}
                </p>
                {i < stages?.length - 1 && (
                  <span
                    className="mt-5 text-lg hidden md:block"
                    style={{ color: 'rgba(242,239,233,0.2)' }}
                    aria-hidden="true"
                  >
                    ↓
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Supporting copy */}
        <div
          className="reveal mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          style={{ transitionDelay: '160ms' }}
        >
          <p
            className="max-w-xl text-[1.05rem] leading-relaxed"
            style={{ color: 'rgba(242,239,233,0.55)' }}
          >
            We look for friction at every stage of the journey — and fix the stage that is actually costing the business customers, not the stage that is easiest to redesign.
          </p>
          <a
            href="#contact"
            className="shrink-0 text-sm font-medium link-underline"
            style={{ color: 'var(--ink-foreground)' }}
          >
            Discuss your journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
