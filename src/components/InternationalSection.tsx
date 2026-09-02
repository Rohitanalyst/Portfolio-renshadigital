'use client';

import React, { useEffect, useRef } from 'react';

export default function InternationalSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );
    if (ref?.current) observer?.observe(ref?.current);
    return () => observer?.disconnect();
  }, []);

  const markets = ['Norway', 'Denmark', 'Ireland', 'Netherlands', 'New Zealand', 'UAE', 'Qatar'];

  return (
    <section className="shell section-pad" ref={ref}>
      <div className="reveal grid gap-10 md:grid-cols-12 md:items-start">
        <div className="md:col-span-5">
          <p className="eyebrow">International Delivery</p>
          <h2 className="display-lg mt-5">
            Remote-first.<br />International delivery.
          </h2>
        </div>
        <div className="md:col-span-6 md:col-start-7 flex flex-col justify-center">
          <p className="lead">
            Based in India. Serving ambitious businesses across international markets.
          </p>
          <p
            className="mt-5 text-[0.95rem] leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            India's deep digital talent pool, combined with a global delivery mindset. The quality of the work matters more than the postcode.
          </p>
        </div>
      </div>

      {/* Market tags */}
      <div
        className="reveal mt-12 flex flex-wrap gap-3"
        style={{ transitionDelay: '80ms' }}
      >
        {markets?.map((market) => (
          <span
            key={market}
            className="inline-block px-4 py-2.5 text-xs font-medium tracking-[0.14em] uppercase"
            style={{
              border: '1px solid var(--hairline)',
              backgroundColor: 'var(--surface)',
              color: 'var(--foreground)',
            }}
          >
            {market}
          </span>
        ))}
      </div>

      <p
        className="reveal mt-6 text-xs"
        style={{ transitionDelay: '160ms', color: 'var(--muted-foreground)' }}
      >
        These are markets Rensha serves and targets. No physical offices are claimed in these locations.
      </p>
    </section>
  );
}
