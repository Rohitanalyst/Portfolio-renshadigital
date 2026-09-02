'use client';

import React, { useEffect, useRef } from 'react';

export default function TrustStrip() {
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

  return (
    <section
      ref={ref}
      style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}
    >
      <div className="shell py-16 md:py-24">
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-start">
          <h2 className="display-md md:col-span-5">
            Not more digital noise. Better digital journeys.
          </h2>
          <p
            className="md:col-span-6 md:col-start-7"
            style={{ fontSize: '1.1rem', lineHeight: '1.75', color: 'var(--muted-foreground)' }}
          >
            We identify where attention is being lost, where customers hesitate and where the digital experience can work harder.
          </p>
        </div>
      </div>
    </section>
  );
}
