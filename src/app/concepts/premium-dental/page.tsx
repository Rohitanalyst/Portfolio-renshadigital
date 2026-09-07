import type { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Premium Dental Concept | Rensha Digital',
  description:
    'A speculative dental and healthcare website concept by Rensha Digital, focused on trust, patient experience and consultation conversion.',
  openGraph: {
    title: 'Premium Dental Concept | Rensha Digital',
    description:
      'A speculative dental and healthcare website concept by Rensha Digital, focused on trust, patient experience and consultation conversion.',
    type: 'website',
  },
};

const experienceAreas = [
  'Trust-first visual design',
  'Treatment discovery',
  'Patient journey & UX',
  'Consultation conversion',
  'Mobile experience',
  'Lead generation',
];

const showcaseItems = [
  {
    src: '/assets/concepts/premium-dental/advanced-dental-hero.webp',
    alt: 'Desktop homepage hero from the Advanced Dental concept',
    label: '01 / Desktop homepage',
    description:
      'A clear opening message, treatment-led positioning and immediate consultation paths.',
    className: 'lg:col-span-2',
  },
  {
    src: '/assets/concepts/premium-dental/advanced-dental-treatments.webp',
    alt: 'Advanced Dental treatment discovery section showing three treatment areas',
    label: '02 / Treatment discovery',
    description: 'Treatment options are made easy to scan, compare and act on.',
    className: '',
  },
  {
    src: '/assets/concepts/premium-dental/advanced-dental-trust.webp',
    alt: 'Advanced Dental trust section pairing patient imagery with care principles',
    label: '03 / Trust and care',
    description:
      'The experience gives the patient room to understand the care approach before enquiring.',
    className: '',
  },
  {
    src: '/assets/concepts/premium-dental/advanced-dental-consultation.webp',
    alt: 'Advanced Dental consultation section with a request form',
    label: '04 / Consultation conversion',
    description:
      'The next step is visible, direct and designed around a low-friction consultation request.',
    className: 'lg:col-span-2',
  },
  {
    src: '/assets/concepts/premium-dental/advanced-dental-mobile.webp',
    alt: 'Advanced Dental concept homepage shown at a mobile viewport',
    label: '05 / Mobile experience',
    description: 'The same trust-first hierarchy is carried into a compact mobile experience.',
    className: 'lg:col-span-2',
  },
];

function ArrowUpRight() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function PremiumDentalPage() {
  return (
    <>
      <Navigation isHome={false} />

      <main id="main" className="pt-16 md:pt-20">
        <section className="shell section-pad">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <Link
              href="/#concepts"
              className="link-underline text-sm"
              style={{ color: 'var(--foreground)' }}
            >
              <span aria-hidden="true">←</span>
              Back to Concepts
            </Link>
            <span className="concept-badge">Speculative Project</span>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow">Rensha Concept</p>
              <h1 className="display-xl mt-5 max-w-4xl">Premium Dental</h1>
            </div>
            <div className="lg:col-span-5 lg:pt-14">
              <p
                className="text-sm font-medium uppercase tracking-[0.16em]"
                style={{ color: 'var(--muted-foreground)' }}
              >
                Dental &amp; Healthcare
              </p>
              <p className="lead mt-6 max-w-xl">
                A conversion-focused digital experience for a modern dental practice, designed to
                build trust, present treatments clearly, and turn website visitors into consultation
                enquiries.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-y"
          style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)' }}
        >
          <div className="shell section-pad">
            <div className="max-w-3xl">
              <p className="eyebrow">Strategic thinking</p>
              <h2 className="display-lg mt-5">Designed around the patient journey.</h2>
            </div>

            <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
              <div className="border-t pt-5" style={{ borderColor: 'var(--hairline)' }}>
                <p className="eyebrow">Problem</p>
                <p
                  className="mt-4 max-w-xl text-[1rem] leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Dental websites need to establish trust quickly while making treatments easy to
                  understand and the next step obvious.
                </p>
              </div>
              <div className="border-t pt-5" style={{ borderColor: 'var(--hairline)' }}>
                <p className="eyebrow">Approach</p>
                <p
                  className="mt-4 max-w-xl text-[1rem] leading-relaxed"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  Create a premium, trust-first digital experience that combines clear treatment
                  discovery, strong visual hierarchy, mobile usability and a direct path toward
                  consultation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="shell section-pad">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Key experience areas</p>
              <h2 className="display-lg mt-5">A clearer path from curiosity to consultation.</h2>
            </div>
            <div className="lg:col-span-7">
              <div
                className="grid border-t md:grid-cols-2"
                style={{ borderColor: 'var(--hairline)' }}
              >
                {experienceAreas.map((area) => (
                  <div
                    key={area}
                    className="border-b py-5 text-[1rem]"
                    style={{ borderColor: 'var(--hairline)' }}
                  >
                    <span
                      className="mr-3 inline-block h-px w-5 align-middle"
                      style={{ backgroundColor: 'var(--accent)' }}
                      aria-hidden="true"
                    />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className="border-y"
          style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--surface)' }}
        >
          <div className="shell section-pad">
            <div className="max-w-3xl">
              <p className="eyebrow">Visual showcase</p>
              <h2 className="display-lg mt-5">A concept built to make care feel clearer.</h2>
              <p className="lead mt-5 max-w-2xl">
                Selected screens from the actual Advanced Dental concept. These visuals demonstrate
                the intended experience direction and are presented as speculative portfolio work.
              </p>
            </div>

            <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
              {showcaseItems.map((item) => (
                <figure key={item.label} className={item.className}>
                  <div
                    className="overflow-hidden border"
                    style={{ borderColor: 'var(--hairline)', backgroundColor: 'var(--background)' }}
                  >
                    <img
                      src={item.src}
                      alt={item.alt}
                      width={893}
                      height={768}
                      loading={item.label === '01 / Desktop homepage' ? 'eager' : 'lazy'}
                      decoding="async"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption className="mt-5 max-w-xl">
                    <p className="eyebrow">{item.label}</p>
                    <p
                      className="mt-2 text-[0.95rem] leading-relaxed"
                      style={{ color: 'var(--muted-foreground)' }}
                    >
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="shell section-pad">
          <div
            className="grid gap-8 px-7 py-10 md:grid-cols-12 md:items-center md:px-12 md:py-14"
            style={{ backgroundColor: 'var(--ink)', color: 'var(--ink-foreground)' }}
          >
            <div className="md:col-span-8">
              <p className="eyebrow" style={{ color: 'rgba(242,239,233,0.5)' }}>
                Rensha Concept
              </p>
              <h2 className="display-lg mt-5">See the concept in action.</h2>
              <p
                className="mt-5 max-w-2xl text-[1rem] leading-relaxed"
                style={{ color: 'rgba(242,239,233,0.62)' }}
              >
                Explore the live Advanced Dental concept to see the complete patient journey,
                treatment discovery and consultation experience.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <a
                href="https://advdental-hz8xf99u.manus.space/"
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost-ink mt-2 w-full md:w-auto"
              >
                VIEW LIVE CONCEPT
                <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="shell pb-20 md:pb-28">
          <Link
            href="/#concepts"
            className="link-underline text-sm"
            style={{ color: 'var(--foreground)' }}
          >
            <span aria-hidden="true">←</span>
            Back to Concepts
          </Link>
        </section>
      </main>

      <Footer isHome={false} />
    </>
  );
}
