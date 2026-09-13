'use client';

import React, { useEffect, useRef, useState } from 'react';

interface FormData {
  name: string;
  company: string;
  email: string;
  website: string;
  country: string;
  helpWith: string;
  services: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const ref = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    website: '',
    country: '',
    helpWith: '',
    services: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project Enquiry from ${encodeURIComponent(formData.name)} — ${encodeURIComponent(formData.company)}`;
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nWebsite: ${formData.website}\nCountry: ${formData.country}\nService: ${formData.services}\nBudget: ${formData.budget}\n\nWhat they need help with:\n${formData.helpWith}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:rohit@renshadigital.in?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    fontSize: '0.9rem',
    backgroundColor: 'var(--background)',
    border: '1px solid var(--input)',
    borderRadius: 'var(--radius)',
    color: 'var(--foreground)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'Inter, sans-serif',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.8rem',
    fontWeight: 500,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'var(--muted-foreground)',
    marginBottom: '0.5rem',
  };

  const serviceOptions = ['Website', 'Conversion', 'Social', 'Growth', 'Other'];
  const budgets = ['€1k–€3k', '€3k–€7k', '€7k–€15k', '€15k+'];

  return (
    <section id="contact" ref={ref} className="shell section-pad">
      <div className="grid gap-16 lg:grid-cols-12">
        {/* Left */}
        <div className="reveal lg:col-span-4">
          <p className="eyebrow">Get in touch</p>
          <h2 className="display-lg mt-5">
            There is probably a better version of your digital customer journey.
          </h2>
          <p className="lead mt-6">
            Tell us what you're building, where customers are getting stuck and where you want to go next.
          </p>
          <div className="mt-10 space-y-4 text-sm" style={{ color: 'var(--muted-foreground)' }}>
            <a
              href="mailto:rohit@renshadigital.in"
              className="link-underline block"
              style={{ color: 'var(--foreground)' }}
            >
              rohit@renshadigital.in
            </a>
            <a
              href="https://www.linkedin.com/company/rensha-digital"
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline block"
              style={{ color: 'var(--foreground)' }}
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/917042705236"
              target="_blank"
              rel="noreferrer noopener"
              className="link-underline block"
              style={{ color: 'var(--foreground)' }}
            >
              WhatsApp
            </a>
          </div>
        </div>

        {/* Right form */}
        <div className="reveal lg:col-span-7 lg:col-start-6" style={{ transitionDelay: '80ms' }}>
          {submitted ? (
            <div
              className="flex flex-col items-start gap-4 py-12"
              style={{ borderTop: '1px solid var(--hairline)' }}
            >
              <p
                className="text-xs font-medium uppercase tracking-[0.15em]"
                style={{ color: 'var(--accent)' }}
              >
                Message sent
              </p>
              <h3 className="text-2xl font-medium tracking-tight" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Your email client should have opened.
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted-foreground)' }}>
                If it didn't open automatically, send your enquiry directly to{' '}
                <a
                  href="mailto:rohit@renshadigital.in"
                  className="link-underline"
                  style={{ color: 'var(--foreground)' }}
                >
                  rohit@renshadigital.in
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 text-sm underline underline-offset-4"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" style={labelStyle}>
                    Name <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  />
                </div>
                <div>
                  <label htmlFor="company" style={labelStyle}>
                    Company <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" style={labelStyle}>
                    Email <span style={{ color: 'var(--accent)' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  />
                </div>
                <div>
                  <label htmlFor="website" style={labelStyle}>Website</label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://"
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="country" style={labelStyle}>Country</label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Norway, UAE, Ireland..."
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  />
                </div>
                <div>
                  <label htmlFor="services" style={labelStyle}>What do you need help with?</label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                    onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Approximate Budget (optional)</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, budget: b }))}
                      className="px-4 py-2.5 text-sm transition-all duration-200"
                      style={{
                        border: '1px solid',
                        borderRadius: 'var(--radius)',
                        borderColor: formData.budget === b ? 'var(--accent)' : 'var(--input)',
                        backgroundColor: formData.budget === b ? 'var(--accent)' : 'transparent',
                        color:
                          formData.budget === b
                            ? 'var(--accent-foreground)'
                            : 'var(--muted-foreground)',
                        cursor: 'pointer',
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" style={labelStyle}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project, goals and timeline..."
                  style={{ ...inputStyle, resize: 'vertical' }}
                  onFocus={(e) => (e.target.style.borderColor = 'var(--accent)')}
                  onBlur={(e) => (e.target.style.borderColor = 'var(--input)')}
                />
              </div>

              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
              </button>

              <p className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
                Submitting will open your email client addressed to rohit@renshadigital.in
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
