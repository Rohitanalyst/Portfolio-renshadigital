'use client';

import React, { useEffect, useRef } from 'react';

export default function WebsitesSection() {
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

  const capabilities = [
  'Responsive',
  'Conversion-led',
  'Performance',
  'Connected'];


  return (
    <section className="shell section-pad" ref={ref}>
      {/* Header */}
      <div className="reveal grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-6">
          <p className="eyebrow">Websites & conversion</p>
          <h2 className="display-lg mt-5">Websites built to move people forward.</h2>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <p className="lead">
            From first impression to enquiry, every interaction should reduce friction and increase confidence.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {capabilities?.map((cap) =>
            <span
              key={cap}
              className="px-3 py-1.5 text-xs font-medium tracking-wide uppercase"
              style={{
                border: '1px solid var(--hairline)',
                color: 'var(--muted-foreground)',
                letterSpacing: '0.1em'
              }}>
              
                {cap}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Large visual */}
      <div className="reveal mt-12 md:mt-16" style={{ transitionDelay: '60ms' }}>
        <div
          className="overflow-hidden"
          style={{ border: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}>
          
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_137e07aee-1788335957739.png"
            alt="Desktop landing page, mobile service page and enquiry form interfaces designed for conversion"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ display: 'block' }} />
          
        </div>
      </div>

      {/* Secondary visual row */}
      <div
        className="reveal mt-4 grid grid-cols-2 gap-4 md:grid-cols-3"
        style={{ transitionDelay: '100ms' }}>
        
        <div
          className="overflow-hidden col-span-2 md:col-span-2"
          style={{ border: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}>
          
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_11369e997-1788339522450.png"
            alt="Construction website landing page showing a project portfolio and qualification flow"
            width={900}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ display: 'block', aspectRatio: '16/9' }} />
          
        </div>
        <div
          className="overflow-hidden"
          style={{ border: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}>
          
          <img
            src="https://img.rocket.new/generatedImages/rocket_gen_img_16280ac41-1772078444827.png"
            alt="Mobile dental website showing a consultation booking flow on a smartphone"
            width={400}
            height={500}
            loading="lazy"
            decoding="async"
            className="w-full object-cover"
            style={{ display: 'block', aspectRatio: '4/5' }} />
          
        </div>
      </div>

      {/* Bottom link */}
      <div className="reveal mt-10" style={{ transitionDelay: '120ms' }}>
        <a
          href="#contact"
          className="link-underline text-sm font-medium"
          style={{ color: 'var(--foreground)' }}>
          
          Discuss your website project
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M7 7h10v10" /><path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </section>);

}