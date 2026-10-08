'use client';

import { useEffect } from 'react';
import Image from 'next/image';

type MediaItem = {
  src: string;
  alt: string;
  type?: 'image' | 'video';
};

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  media: MediaItem[];
};

const projects: Project[] = [
  {
    id: 'creative-appliances',
    title: 'Kitchen Appliance Creative Series',
    category: 'Product Photography & Ad Creative',
    description:
      'Product, lifestyle and feature-led creative directions for a home-appliance launch.',
    media: [
      { src: '/creative/appliances/01.webp', alt: 'Juicer and mixer product concept in a bright kitchen' },
      { src: '/creative/appliances/02.webp', alt: 'Juicer and mixer premium product concept' },
      { src: '/creative/appliances/03.webp', alt: 'Countertop oven lifestyle concept' },
      { src: '/creative/appliances/04.webp', alt: 'Air fryer lifestyle concept at a dinner party' },
      { src: '/creative/appliances/05.webp', alt: 'Kettle feature-led ad creative concept' },
      { src: '/creative/appliances/06.webp', alt: 'Air fryer luxury campaign concept' },
      { src: '/creative/appliances/07.mp4', alt: 'Kitchen appliance motion concept', type: 'video' },
    ],
  },
  {
    id: 'creative-jewellery',
    title: 'Blue-Heart Jewellery Campaign',
    category: 'Product Photography & Social Creative',
    description:
      'An ad layout, product images and motion concept for a jewellery collection built around a blue-heart pendant.',
    media: [
      { src: '/creative/jewellery/01.webp', alt: 'Blue-heart pendant campaign ad concept' },
      { src: '/creative/jewellery/02.webp', alt: 'Blue-heart pendant product concept on navy background' },
      { src: '/creative/jewellery/03.webp', alt: 'Blue-heart pendant presented in a jewellery box' },
      { src: '/creative/jewellery/04.webp', alt: 'Blue-heart pendant on a jewellery bust' },
      { src: '/creative/jewellery/05.webp', alt: 'Blue-heart pendant product concept on marble' },
      { src: '/creative/jewellery/06.mp4', alt: 'Blue-heart pendant motion concept', type: 'video' },
    ],
  },
  {
    id: 'creative-scooter-lifestyle',
    title: 'Scooter Lifestyle Campaign',
    category: 'Lifestyle Product Visuals',
    description:
      'Three campaign scenes exploring rider-led storytelling, colour and location for a modern scooter brand.',
    media: [
      { src: '/creative/scooter-lifestyle/01.webp', alt: 'Scooter lifestyle creative with a rider outside a modern building' },
      { src: '/creative/scooter-lifestyle/02.webp', alt: 'Orange scooter lifestyle creative' },
      { src: '/creative/scooter-lifestyle/03.webp', alt: 'Colourful scooter lifestyle campaign creative' },
    ],
  },
  {
    id: 'creative-scooter-studio',
    title: 'Scooter Studio Campaign',
    category: 'Product Launch Visuals',
    description:
      'A four-part product campaign exploring hero imagery, model range, campaign styling and colour variants.',
    media: [
      { src: '/creative/scooter-studio/01.webp', alt: 'White scooter studio hero concept' },
      { src: '/creative/scooter-studio/02.webp', alt: 'Scooter model range studio concept' },
      { src: '/creative/scooter-studio/03.webp', alt: 'Scooter launch campaign concept' },
      { src: '/creative/scooter-studio/04.webp', alt: 'Pink scooter colour-variant concept' },
    ],
  },
  {
    id: 'creative-axiora',
    title: 'AXIORA Earbud Creative Series',
    category: 'Product Campaign & Carousel Design',
    description:
      'A five-frame social carousel designed to introduce a premium earbud concept through product and lifestyle storytelling.',
    media: [
      { src: '/creative/axiora/01.webp', alt: 'AXIORA earbud carousel creative one' },
      { src: '/creative/axiora/02.webp', alt: 'AXIORA earbud carousel creative two' },
      { src: '/creative/axiora/03.webp', alt: 'AXIORA earbud carousel creative three' },
      { src: '/creative/axiora/04.webp', alt: 'AXIORA earbud carousel creative four' },
      { src: '/creative/axiora/05.webp', alt: 'AXIORA earbud carousel creative five' },
    ],
  },
  {
    id: 'creative-sunglasses',
    title: 'Sunglasses Lifestyle Campaign',
    category: 'Fashion Product Photography',
    description:
      'A sunlit fashion direction combining product details, editorial styling and luxury lifestyle imagery.',
    media: [
      { src: '/creative/sunglasses/01.webp', alt: 'Sunglasses lifestyle image in a vintage car' },
      { src: '/creative/sunglasses/02.webp', alt: 'Sunglasses product image on a vintage car' },
      { src: '/creative/sunglasses/03.webp', alt: 'Close-up sunglasses fashion image' },
      { src: '/creative/sunglasses/04.webp', alt: 'Sunglasses fashion image from a low angle' },
      { src: '/creative/sunglasses/05.webp', alt: 'Sunglasses detail image held by a model' },
      { src: '/creative/sunglasses/06.webp', alt: 'Sunglasses product image on a vintage car' },
    ],
  },
];

export default function CreativeCampaigns() {
  useEffect(() => {
    const openLinkedProject = () => {
      const id = window.location.hash.slice(1);
      if (!id.startsWith('creative-')) return;
      const project = document.getElementById(id);
      if (project instanceof HTMLDetailsElement) project.open = true;
    };
    openLinkedProject();
    window.addEventListener('hashchange', openLinkedProject);
    return () => window.removeEventListener('hashchange', openLinkedProject);
  }, []);

  return (
    <section id="creative-work" className="bg-[#24211d] px-6 py-20 text-[#f5f0e8] md:px-10 md:py-28 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="premium-kicker mb-5 text-[#c9ad80]">Creative portfolio</p>
        <div className="mb-12 max-w-3xl">
          <h2 className="premium-section-title">A concept should feel <em>ready to see.</em></h2>
          <p className="mt-6 text-base leading-8 text-[#c7beb2] md:text-lg">
            Explore independent product and campaign concepts across stills, carousels and motion. These are creative examples, not client projects or measured campaign results.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <details id={project.id} key={project.title} className="group overflow-hidden border border-[#595044] bg-white/[0.035]">
              <summary className="cursor-pointer list-none">
                <div className="relative aspect-[4/5] overflow-hidden bg-stone-900">
                  <Image
                    src={project.media[0].src}
                    alt={project.media[0].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="premium-kicker text-[#c9ad80]">{project.category}</p>
                  <h3 className="mt-3 font-serif text-3xl font-normal">{project.title}</h3>
                  <p className="mt-3 leading-7 text-[#c7beb2]">{project.description}</p>
                  <span className="mt-5 inline-block border-b border-[#c9ad80] pb-1 text-sm text-white group-open:hidden">View project ↗</span>
                  <span className="mt-5 hidden border-b border-[#c9ad80] pb-1 text-sm text-white group-open:inline-block">Close project</span>
                </div>
              </summary>
              <div className="grid gap-3 border-t border-white/10 p-4 sm:grid-cols-2">
                {project.media.slice(1).map((item) => (
                  <div key={item.src} className="relative aspect-[4/5] overflow-hidden bg-stone-900 sm:even:aspect-square">
                    {item.type === 'video' ? (
                      <video controls preload="metadata" className="h-full w-full object-cover">
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support this video.
                      </video>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 16vw"
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
