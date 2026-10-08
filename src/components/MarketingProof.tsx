import Image from 'next/image';

const examples = [
  {
    number: '01',
    discipline: 'Social media marketing',
    title: 'A campaign system, not a single post.',
    description: 'The AXIORA five-frame carousel shows one product story carried across a social format. The full sequence is available in the creative gallery.',
    evidence: 'Five-frame carousel · independent concept',
    image: '/creative/axiora/01.webp',
    alt: 'First frame of the AXIORA earbud social carousel concept',
    href: '#creative-axiora',
    link: 'View the carousel',
  },
  {
    number: '02',
    discipline: 'Content marketing',
    title: 'An idea carried from stills into motion.',
    description: 'The Blue-Heart Jewellery series includes a campaign layout, product imagery and a motion piece. It shows art direction and content production across formats.',
    evidence: 'Images and motion · independent concept',
    image: '/creative/jewellery/02.webp',
    alt: 'Blue-heart jewellery product creative from an independent concept series',
    href: '#creative-jewellery',
    link: 'Explore the series',
  },
];

export default function MarketingProof() {
  return (
    <section id="evidence" className="bg-[#f3eee6] py-20 text-[#24211d] md:py-28">
      <div className="shell">
        <div className="grid gap-8 border-b border-[#cfc5b7] pb-10 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <p className="premium-kicker text-[#866b49]">Evidence, with context</p>
            <h2 className="premium-section-title mt-5 max-w-3xl">See the work.<br /><em>Know what it proves.</em></h2>
          </div>
          <p className="max-w-md text-base leading-8 text-[#686158] lg:justify-self-end">
            These examples show creative direction and production. They are independent concepts, not client campaigns or evidence of reach, leads or return on ad spend.
          </p>
        </div>

        <div className="mt-11 grid gap-6 lg:grid-cols-2">
          {examples.map((item) => (
            <article key={item.number} className="group bg-[#e8e0d4]">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#d3c5b5]">
                <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              </div>
              <div className="p-6 md:p-9">
                <div className="flex items-center justify-between gap-4 border-b border-[#c7bbab] pb-5">
                  <span className="premium-kicker text-[#866b49]">{item.discipline}</span>
                  <span className="font-serif text-2xl text-[#9b866a]">{item.number}</span>
                </div>
                <h3 className="mt-7 max-w-md font-serif text-3xl leading-[1.12] md:text-4xl">{item.title}</h3>
                <p className="mt-4 max-w-lg leading-7 text-[#686158]">{item.description}</p>
                <p className="mt-7 text-xs uppercase tracking-[0.11em] text-[#866b49]">{item.evidence}</p>
                <a href={item.href} className="mt-5 inline-flex items-center gap-2 border-b border-[#24211d] pb-1 text-sm font-medium">{item.link} <span aria-hidden="true">↗</span></a>
              </div>
            </article>
          ))}
        </div>

        <article className="mt-6 overflow-hidden bg-[#28241f] text-[#f3eee6]">
          <div className="grid lg:grid-cols-[1fr_0.85fr]">
            <div className="p-7 md:p-11">
              <p className="premium-kicker text-[#c9ad80]">03 · Performance marketing approach</p>
              <h3 className="mt-6 max-w-lg font-serif text-4xl leading-[1.08] md:text-5xl">Creative to test. Results to earn.</h3>
              <p className="mt-5 max-w-lg leading-8 text-[#c7beb2]">
                The appliance visual is an independent ad creative concept. It shows a possible message and format, not a live paid campaign. No campaign performance results are available to publish yet.
              </p>
              <a href="#creative-appliances" className="mt-7 inline-flex items-center gap-2 border-b border-[#c9ad80] pb-1 text-sm text-[#e8d6b9]">See the ad creative series <span aria-hidden="true">↗</span></a>
            </div>
            <div className="relative min-h-[340px] bg-[#a99d8b] md:min-h-[460px]">
              <Image src="/creative/appliances/05.webp" alt="Independent kettle advertising creative concept by Rensha Digital" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              <span className="absolute bottom-4 left-4 bg-[#28241f]/95 px-4 py-2 text-xs uppercase tracking-[0.12em] text-[#eee6d8]">Independent concept · no campaign results</span>
            </div>
          </div>
          <div className="grid border-t border-[#51483c] sm:grid-cols-3">
            {[
              ['01', 'Set the goal', 'Define the audience, offer and action to measure.'],
              ['02', 'Test the creative', 'Compare messages and formats in a live campaign.'],
              ['03', 'Report the result', 'Use platform data and a stated date range.'],
            ].map(([number, label, description]) => (
              <div key={number} className="border-b border-[#51483c] p-6 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:p-8">
                <span className="premium-kicker text-[#c9ad80]">{number}</span>
                <h4 className="mt-4 text-lg font-medium text-[#eee6d8]">{label}</h4>
                <p className="mt-2 text-sm leading-6 text-[#a9a095]">{description}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
