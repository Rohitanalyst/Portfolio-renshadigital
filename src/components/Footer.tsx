'use client';

import React from 'react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer style={{ backgroundColor: 'var(--ink)', color: 'var(--ink-foreground)' }}>
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <p
              className="text-2xl tracking-tight"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}
            >
              Rensha<span style={{ color: 'var(--accent)' }}>.</span> Digital
            </p>
            <p
              className="mt-3 text-xs font-medium uppercase tracking-[0.16em]"
              style={{ color: 'rgba(242,239,233,0.35)' }}
            >
              Strategy · Design · Development · Growth
            </p>
            <p
              className="mt-6 max-w-xs text-sm leading-relaxed"
              style={{ color: 'rgba(242,239,233,0.55)' }}
            >
              Digital experiences that turn attention into customers.
            </p>
            <p
              className="mt-4 text-sm leading-relaxed"
              style={{ color: 'rgba(242,239,233,0.4)' }}
            >
              Based in India. Serving ambitious businesses across international markets.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-3 md:col-start-6">
            <h2
              className="eyebrow"
              style={{ color: 'rgba(242,239,233,0.4)' }}
            >
              Navigate
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { label: 'Work', href: '#work' },
                { label: 'Services', href: '#services' },
                { label: 'Concepts', href: '#concepts' },
                { label: 'Process', href: '#process' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="link-underline"
                    style={{ color: 'rgba(242,239,233,0.65)' }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'var(--ink-foreground)')
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        'rgba(242,239,233,0.65)')
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-3 md:col-start-10">
            <h2
              className="eyebrow"
              style={{ color: 'rgba(242,239,233,0.4)' }}
            >
              Contact
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:rohit@renshadigital.in"
                  className="link-underline"
                  style={{ color: 'rgba(242,239,233,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-foreground)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(242,239,233,0.65)')
                  }
                >
                  rohit@renshadigital.in
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/rensha-digital"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline"
                  style={{ color: 'rgba(242,239,233,0.65)' }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--ink-foreground)')
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(242,239,233,0.65)')
                  }
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 flex flex-col gap-3 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            color: 'rgba(242,239,233,0.35)',
          }}
        >
          <p>&copy; {currentYear} Rensha Digital</p>
          <p>Concept projects are labelled as speculative work throughout this site.</p>
        </div>
      </div>
    </footer>
  );
}
