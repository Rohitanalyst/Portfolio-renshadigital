'use client';

import React, { useState, useEffect } from 'react';

export default function Navigation({ isHome = true }: { isHome?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: isHome ? '#work' : '/#work' },
    { label: 'Services', href: isHome ? '#services' : '/#services' },
    { label: 'Concepts', href: isHome ? '#concepts' : '/#concepts' },
    { label: 'Process', href: isHome ? '#process' : '/#process' },
    { label: 'About', href: isHome ? '#about' : '/#about' },
    { label: 'Contact', href: isHome ? '#contact' : '/#contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-hairline bg-background/90 backdrop-blur-sm' :'border-b border-transparent'
      }`}
    >
      <div className="shell flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a
          href={isHome ? '#' : '/'}
          aria-label="Rensha Digital — home"
          className="font-display text-[0.95rem] font-semibold tracking-tight"
          style={{ color: 'var(--foreground)' }}
        >
          Rensha
          <span style={{ color: 'var(--accent)' }}>.</span>
          <span
            className="ml-1.5 font-sans text-[0.62rem] font-medium uppercase tracking-[0.2em]"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Digital
          </span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks?.map((link) => (
            <a
              key={link?.label}
              href={link?.href}
              className="link-underline text-sm transition-colors hover:text-foreground"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="hidden sm:inline-flex btn-primary"
          >
            Start a Project
          </a>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden"
            style={{ color: 'var(--foreground)' }}
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="border-t lg:hidden"
          style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--background)' }}
        >
          <nav className="shell flex flex-col gap-0 py-4">
            {navLinks?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-sm font-medium"
                style={{ color: 'var(--muted-foreground)', borderBottom: '1px solid var(--hairline)' }}
              >
                {link?.label}
              </a>
            ))}
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={() => setMobileOpen(false)}
              className="btn-primary mt-4 w-full justify-center"
            >
              Start a Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
