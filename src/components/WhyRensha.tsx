'use client';

import React, { useEffect, useRef } from 'react';

export default function WhyRensha() {
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
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const principles = [
    {
      title: 'Strategy before production.',
      desc: 'Start with the business problem, not the deliverable. Every project begins with understanding what the business actually needs to improve.',
    },
    {
      title: 'Conversion over decoration.',
      desc: 'Design should help people understand, trust and act. Good-looking work that does not move people forward is not good work.',
    },
    {
      title: 'One connected system.',
      desc: 'Website, advertising, content, CRM and automation should work together. Disconnected tools create disconnected customer experiences.',
    },
    {
      title: 'Direct collaboration.',
      desc: 'Work directly with decision-makers and keep communication clear. No account managers between the client and the people doing the work.',
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="shell section-pad"
    >
      {/* Header */}
      <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-14 md:mb-20">
        <div className="md:col-span-5">
          <p className="eyebrow">The difference</p>
          <h2 className="display-lg mt-5">Why Rensha</h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="lead">
            Four principles that shape how every project is approached, not a list of features.
          </p>
        </div>
      </div>

      {/* Principles — large statement list */}
      <ol className="space-y-0">
        {principles?.map((p, i) => (
          <li
            key={p?.title}
            className="reveal hairline-top py-10 md:py-12 grid gap-4 md:grid-cols-12 md:items-start"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="md:col-span-1">
              <span
                className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
                style={{ color: 'var(--accent)' }}
              >
                {String(i + 1)?.padStart(2, '0')}
              </span>
            </div>
            <div className="md:col-span-11 grid gap-4 md:grid-cols-2 md:gap-12">
              <h3
                className="text-2xl md:text-3xl font-medium tracking-tight leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {p?.title}
              </h3>
              <p
                className="text-[1rem] leading-relaxed"
                style={{ color: 'var(--muted-foreground)' }}
              >
                {p?.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
