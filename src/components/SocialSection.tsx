'use client';

import React, { useEffect, useRef } from 'react';

export default function SocialSection() {
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

  const contentTypes = [
    'Campaign creative',
    'Reel concepts',
    'Ad creative',
    'Brand content',
    'Short-form video',
    'Content systems',
  ];

  const portfolioVideos = [
    {
      id: 'P7hJZbjpWeo',
      label: 'Jewellery',
      descriptor: '3D Commercial',
      isShort: true,
    },
    {
      id: 'r2uHxB6XwXc',
      label: 'Footwear',
      descriptor: 'Campaign Film',
      isShort: false,
    },
  ];

  return (
    <section
      ref={ref}
      style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--surface)' }}>

      <div className="shell section-pad">
        {/* Header */}
        <div className="reveal grid gap-8 md:grid-cols-12 md:items-end mb-12 md:mb-16">
          <div className="md:col-span-6">
            <p className="eyebrow">Social & content</p>
            <h2 className="display-lg mt-5">
              Social should create demand, not just fill a calendar.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="lead">
              We build content around positioning, audience psychology and the action the business wants customers to take.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {contentTypes?.map((type) =>
                <span
                  key={type}
                  className="text-xs"
                  style={{ color: 'var(--muted-foreground)' }}>
                  {type}
                  {contentTypes?.indexOf(type) < contentTypes?.length - 1 &&
                    <span className="ml-2 mr-1" aria-hidden="true">·</span>
                  }
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Asymmetric editorial gallery */}
        <div className="reveal grid grid-cols-12 gap-3 md:gap-4" style={{ transitionDelay: '80ms' }}>
          {/* Large feature — left */}
          <div
            className="col-span-12 md:col-span-7 overflow-hidden group"
            style={{ border: '1px solid var(--hairline)' }}>
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_1008f70b7-1783700871450.png"
              alt="Campaign creative for a dental practice showing trust-building visual content and brand positioning"
              width={900}
              height={600}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ display: 'block', aspectRatio: '3/2' }} />
          </div>

          {/* Right column — stacked */}
          <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-3 md:gap-4">
            <div
              className="overflow-hidden group"
              style={{ border: '1px solid var(--hairline)' }}>
              <img
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=85&auto=format"
                alt="Social media creative post showing brand positioning content for a premium service business"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ display: 'block' }} />
            </div>
            <div
              className="overflow-hidden group"
              style={{ border: '1px solid var(--hairline)' }}>
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=85&auto=format"
                alt="Short-form video concept frame for a luxury hospitality brand campaign"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ display: 'block' }} />
            </div>
          </div>

          {/* Bottom row — three equal */}
          <div
            className="col-span-4 overflow-hidden group"
            style={{ border: '1px solid var(--hairline)' }}>
            <img
              src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=85&auto=format"
              alt="Editorial social content showing consistent brand direction for a professional services firm"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ display: 'block', aspectRatio: '1/1' }} />
          </div>
          <div
            className="col-span-4 overflow-hidden group"
            style={{ border: '1px solid var(--hairline)' }}>
            <img
              src="https://img.rocket.new/generatedImages/rocket_gen_img_12fdb43be-1788335957651.png"
              alt="Ad creative for a construction and architecture business targeting high-value clients"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ display: 'block', aspectRatio: '1/1' }} />
          </div>
          <div
            className="col-span-4 overflow-hidden group"
            style={{ border: '1px solid var(--hairline)' }}>
            <img
              src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=85&auto=format"
              alt="Content system overview showing brand consistency across multiple social formats"
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              style={{ display: 'block', aspectRatio: '1/1' }} />
          </div>
        </div>

        {/* Portfolio Video Showcase */}
        <div className="reveal mt-12 md:mt-16" style={{ transitionDelay: '100ms' }}>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p
                className="text-[0.6rem] font-medium uppercase tracking-[0.18em]"
                style={{ color: 'var(--muted-foreground)' }}>
                Portfolio films
              </p>
              <h3 className="mt-2 text-xl font-medium tracking-tight" style={{ color: 'var(--foreground)' }}>
                Commercial work
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {portfolioVideos?.map((video) => (
              <div key={video?.id} className="group">
                {/* Video embed */}
                <div
                  className="overflow-hidden"
                  style={{ border: '1px solid var(--hairline)', position: 'relative' }}>
                  <div style={{ position: 'relative', paddingBottom: video?.isShort ? '177.78%' : '56.25%', height: 0, overflow: 'hidden' }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${video?.id}?rel=0&modestbranding=1&color=white&iv_load_policy=3&showinfo=0`}
                      title={`${video?.label} — ${video?.descriptor}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: 'block',
                      }}
                    />
                  </div>
                </div>

                {/* Label */}
                <div className="mt-3 flex items-baseline gap-3">
                  <span
                    className="text-[0.6rem] font-medium uppercase tracking-[0.18em] px-2 py-0.5"
                    style={{
                      border: '1px solid rgba(194,112,58,0.35)',
                      color: 'var(--accent)',
                    }}>
                    {video?.label}
                  </span>
                  <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    {video?.descriptor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-10" style={{ transitionDelay: '120ms' }}>
          <a
            href="#contact"
            className="link-underline text-sm font-medium"
            style={{ color: 'var(--foreground)' }}>
            Discuss your content strategy
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7 7h10v10" /><path d="M7 17 17 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
