import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="premium-hero relative overflow-hidden text-[#f5f0e8]">
      <div className="shell grid min-h-[710px] gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="premium-kicker text-[#c9ad80]">Independent digital growth studio · Rensha Digital</p>
          <h1 className="premium-title mt-9 max-w-[780px]">
            Make the first impression <em>worth staying for.</em>
          </h1>
          <p className="mt-9 max-w-xl text-base leading-8 text-[#c9c4bb] md:text-lg">
            Campaign creative, content and digital experiences built around a clear customer journey. Explore the work, the thinking behind it and the evidence available today.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#work" className="premium-button">Explore the work <span aria-hidden="true">↗</span></a>
            <a href="#evidence" className="premium-text-link">See what the work proves <span aria-hidden="true">↓</span></a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs uppercase tracking-[0.14em] text-[#aea89e]">
            <span>Social media</span><span>Content</span><span>Performance marketing</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[570px] lg:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#393229]">
            <Image src="/creative/sunglasses/01.webp" alt="Sunglasses lifestyle campaign concept by Rensha Digital" fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b19]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-5 text-white">
              <div>
                <span className="premium-kicker !text-[0.6rem] text-white/75">Featured independent concept</span>
                <p className="mt-2 font-serif text-3xl leading-none">Sunglasses lifestyle</p>
              </div>
              <a href="#creative-work" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 text-lg" aria-label="Explore creative concepts">↗</a>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-5 hidden border border-[#a78e6b]/45 bg-[#28241f] px-5 py-4 text-[#eee6d8] shadow-2xl md:block">
            <p className="premium-kicker !text-[0.57rem] text-[#c9ad80]">What you are viewing</p>
            <p className="mt-1 text-sm">Concept work, clearly identified</p>
          </div>
        </div>
      </div>
    </section>
  );
}
