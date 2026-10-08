'use client';

import React, { useEffect, useRef } from 'react';

export default function FinalCTA() {
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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{ backgroundColor: 'var(--ink)', color: 'var(--ink-foreground)' }}
    >
      <div className="shell section-pad">
        <div className="reveal max-w-5xl">
          <p className="eyebrow" style={{ color: 'rgba(242,239,233,0.4)' }}>
            Start a conversation
          </p>
          <h2 className="display-xl mt-6">
            Let's find the biggest opportunity in your digital journey.
          </h2>
          <p
            className="mt-8 max-w-2xl text-[1.1rem] leading-relaxed"
            style={{ color: 'rgba(242,239,233,0.6)' }}
          >
            Tell us what you're building, where customers are getting stuck and where you want to go next.
          </p>
        </div>

        {/* Primary CTA — visually dominant */}
        <div className="reveal mt-12 md:mt-14" style={{ transitionDelay: '80ms' }}>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium tracking-tight transition-all duration-300"
              style={{
                backgroundColor: 'var(--ink-foreground)',
                color: 'var(--ink)',
                minWidth: '220px',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--accent)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent-foreground)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--ink-foreground)';
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink)';
              }}
            >
              Book a Discovery Call
            </a>
            <a href="#work" className="btn-ghost-ink">
              View Selected Work
            </a>
          </div>
          <p
            className="mt-5 text-sm"
            style={{ color: 'rgba(242,239,233,0.4)' }}
          >
            20-minute conversation. No generic sales presentation.
          </p>
        </div>

        {/* Contact links */}
        <div
          className="reveal mt-14 flex flex-wrap gap-x-10 gap-y-4 pt-8 text-sm"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            transitionDelay: '160ms',
          }}
        >
          <a
            href="mailto:rohit@renshadigital.in"
            className="link-underline"
            style={{ color: 'var(--ink-foreground)' }}
          >
            rohit@renshadigital.in
          </a>
          <a
            href="https://www.linkedin.com/company/rensha-digital"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline"
            style={{ color: 'var(--ink-foreground)' }}
          >
            LinkedIn
          </a>
          <a
            href="https://wa.me/917042705236"
            target="_blank"
            rel="noreferrer noopener"
            className="link-underline"
            style={{ color: 'var(--ink-foreground)' }}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
