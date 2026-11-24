const films = [
  {
    title: 'Jewellery 3D commercial',
    description: 'A vertical product film concept built around jewellery detail and motion.',
    id: 'P7hJZbjpWeo',
    format: 'Vertical film',
    portrait: true,
  },
  {
    title: 'Footwear campaign film',
    description: 'A landscape film concept exploring pace, product and campaign mood.',
    id: 'r2uHxB6XwXc',
    format: 'Landscape film',
    portrait: false,
  },
];

export default function PortfolioFilms() {
  return (
    <section id="portfolio-films" className="bg-[#28241f] py-20 text-[#f3eee6] md:py-28">
      <div className="shell">
        <div className="grid gap-6 border-b border-white/20 pb-9 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <div>
            <p className="premium-kicker text-[#c9ad80]">Portfolio films</p>
            <h2 className="premium-section-title mt-5 max-w-3xl text-[#f3eee6]">
              Product stories <em>in motion.</em>
            </h2>
          </div>
          <p className="max-w-md leading-7 text-[#c7beb2] lg:justify-self-end">
            Three independent film concepts. Watch the heater reel here, alongside the jewellery and footwear films on YouTube.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          {films.map((film) => (
            <article key={film.id} className="bg-[#37312a] p-5 md:p-7">
              <div className={film.portrait ? 'mx-auto w-full max-w-[340px]' : 'w-full'}>
                <div className={film.portrait ? 'aspect-[9/16] overflow-hidden bg-black' : 'aspect-video overflow-hidden bg-black'}>
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${film.id}`}
                    title={`${film.title}, independent concept video`}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
                <div>
                  <p className="premium-kicker text-[#c9ad80]">{film.format} · Independent concept</p>
                  <h3 className="mt-3 font-serif text-3xl">{film.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#c7beb2]">{film.description}</p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${film.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-[#c9ad80] pb-1 text-sm text-[#e8d6b9]"
                >
                  Watch on YouTube <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
        <article className="mt-6 grid gap-6 bg-[#37312a] p-5 md:grid-cols-[minmax(0,280px)_1fr] md:items-center md:gap-10 md:p-7">
          <div className="mx-auto aspect-[9/16] w-full max-w-[280px] overflow-hidden bg-black">
            <video
              controls
              preload="none"
              playsInline
              poster="/creative/heater/03-morning.webp"
              className="h-full w-full object-cover"
              aria-label="Winter heater campaign narrated video concept"
            >
              <source src="/creative/heater/05-reel.mp4" type="video/mp4" />
              Your browser does not support this video.
            </video>
          </div>
          <div>
            <p className="premium-kicker text-[#c9ad80]">Vertical film · Independent concept</p>
            <h3 className="mt-3 font-serif text-3xl md:text-4xl">Winter Heater Campaign</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-[#c7beb2]">
              A narrated product reel built from warm lifestyle scenes and heater visuals.
            </p>
            <a href="#creative-winter-heater" className="mt-6 inline-flex items-center gap-2 border-b border-[#c9ad80] pb-1 text-sm text-[#e8d6b9]">
              Explore the full campaign <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
