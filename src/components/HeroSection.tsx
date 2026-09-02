'use client';

import React, { useEffect, useRef } from 'react';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef?.current;
    if (!el) return;
    const reveals = el?.querySelectorAll('.reveal');
    reveals?.forEach((r, i) => {
      setTimeout(() => r?.classList?.add('visible'), 80 + i * 130);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden pb-0 pt-28 md:pt-36">
      
      <div className="shell">
        {/* Top content */}
        <div className="max-w-4xl">
          <p className="reveal eyebrow">Strategy · Design · Development · Growth</p>
          <h1 className="reveal display-xl mt-7 max-w-3xl" style={{ transitionDelay: '80ms' }}>
            Digital experiences that turn attention into customers.
          </h1>
          <p className="reveal lead mt-8 max-w-2xl" style={{ transitionDelay: '160ms', fontSize: '1.2rem' }}>
            Websites, conversion systems and social experiences designed around how modern businesses actually win customers.
          </p>
          <div className="reveal mt-10 flex flex-wrap gap-4" style={{ transitionDelay: '240ms' }}>
            <a href="#work" className="btn-primary" style={{ padding: '1rem 1.75rem', fontSize: '0.9rem' }}>
              View Selected Work
            </a>
            <a href="#contact" className="btn-secondary" style={{ padding: '1rem 1.75rem', fontSize: '0.9rem' }}>
              Start a Project
            </a>
          </div>
        </div>

        {/* Hero visual — layered editorial composition */}
        <div
          className="reveal relative mt-16 md:mt-20"
          style={{ transitionDelay: '200ms' }}>
          
          {/* Main desktop screen */}
          <div
            className="relative overflow-hidden"
            style={{
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--hairline)'
            }}>
            
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_138b98b41-1788339522151.png"
              alt="Premium website interface showing a conversion-focused digital experience designed by Rensha Digital"
              width={1600}
              height={900}
              className="w-full object-cover"
              style={{ display: 'block', maxHeight: '72vh', objectPosition: 'top' }}
              loading="eager"
              decoding="async" />
            
            {/* Overlay gradient at bottom */}
            <div
              className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
              style={{
                background: 'linear-gradient(to top, var(--background) 0%, transparent 100%)'
              }}
              aria-hidden="true" />
            
          </div>

          {/* Floating mobile overlay — bottom right */}
          <div
            className="absolute hidden md:block"
            style={{
              bottom: '2.5rem',
              right: '2rem',
              width: '14%',
              minWidth: '120px',
              border: '1px solid var(--hairline)',
              backgroundColor: 'var(--surface)',
              boxShadow: '0 8px 40px rgba(28,26,23,0.12)'
            }}>
            
            <img
              src="https://images.unsplash.com/photo-1612298968918-daae41e26d37"
              alt="Mobile website interface showing a premium dental concept on a smartphone screen"
              width={300}
              height={540}
              loading="lazy"
              decoding="async"
              className="w-full object-cover"
              style={{ display: 'block' }} />
            
          </div>

          {/* Floating detail card — bottom left */}
          <div
            className="absolute hidden lg:flex flex-col gap-1"
            style={{
              bottom: '2.5rem',
              left: '2rem',
              backgroundColor: 'var(--ink)',
              color: 'var(--ink-foreground)',
              padding: '1rem 1.25rem',
              minWidth: '200px'
            }}>
            
            <p
              className="text-[0.55rem] font-medium uppercase tracking-[0.2em]"
              style={{ color: 'rgba(242,239,233,0.45)' }}>
              
              Rensha Digital
            </p>
            <p
              className="text-sm font-medium tracking-tight mt-1"
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              
              Attention → Customer
            </p>
            <p
              className="text-[0.75rem] mt-0.5"
              style={{ color: 'rgba(242,239,233,0.55)' }}>
              
              Strategy · Design · Conversion
            </p>
          </div>
        </div>
      </div>
    </section>);

}