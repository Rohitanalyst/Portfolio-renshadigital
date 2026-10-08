import Image from 'next/image';

const concepts = [
  {
    title: 'Premium Dental',
    category: 'Website & conversion concept',
    description: 'Treatment discovery, patient qualification and a clearer path to a consultation.',
    image: '/assets/concepts/premium-dental/advanced-dental-hero.webp',
    alt: 'Premium Dental website concept hero section',
    href: '/concepts/premium-dental',
    action: 'View concept',
  },
  {
    title: 'Luxury Construction',
    category: 'Digital experience concept',
    description: 'A portfolio-led enquiry flow designed around the information a prospective client needs before getting in touch.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18c0c0f1a-1785157923990.png',
    alt: 'Construction and architecture website concept on tablet and mobile',
    href: '#contact',
    action: 'Discuss a similar project',
  },
  {
    title: 'Luxury Hospitality',
    category: 'Booking journey concept',
    description: 'A concept for presenting a property, its experiences and a direct booking path.',
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1ceca7ff8-1767781546613.png',
    alt: 'Boutique hotel website concept on desktop and mobile',
    href: '#contact',
    action: 'Discuss a similar project',
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="bg-[#f8f5ef] py-20 text-[#24211d] md:py-28">
      <div className="shell">
        <div className="grid gap-8 border-b border-[#d7cfc4] pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="premium-kicker text-[#866b49]">Selected concepts</p>
            <h2 className="premium-section-title mt-5">A closer look at <em>the thinking.</em></h2>
          </div>
          <p className="max-w-md leading-8 text-[#686158] lg:justify-self-end">
            These projects show proposed customer journeys and visual direction. They are speculative work, with no client or performance results claimed.
          </p>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          {concepts.map((concept, index) => (
            <article key={concept.title} className="group">
              <a href={concept.href} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#866b49]">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#e4ddd2]">
                  <Image src={concept.image} alt={concept.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                </div>
                <div className="mt-6 flex items-center justify-between border-b border-[#d7cfc4] pb-4">
                  <p className="premium-kicker text-[#866b49]">{concept.category}</p>
                  <span className="font-serif text-2xl text-[#9b866a]">0{index + 1}</span>
                </div>
                <h3 className="mt-5 font-serif text-3xl leading-tight">{concept.title}</h3>
                <p className="mt-3 min-h-[4.5rem] leading-7 text-[#686158]">{concept.description}</p>
                <span className="mt-5 inline-flex gap-2 border-b border-[#24211d] pb-1 text-sm font-medium">{concept.action} <span aria-hidden="true">↗</span></span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
