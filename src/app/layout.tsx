import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/index.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Rensha Digital | Websites, Digital Growth & Conversion',
  description: 'Rensha Digital creates conversion-focused websites, social experiences and digital growth systems for ambitious businesses and startups.',
  authors: [{ name: 'Rensha Digital' }],
  openGraph: {
    title: 'Rensha Digital | Websites, Digital Growth & Conversion',
    description: 'Digital experiences that turn attention into customers. Strategy, design, development and growth for international businesses.',
    url: 'https://renshadigital.com',
    siteName: 'Rensha Digital',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rensha Digital | Websites, Digital Growth & Conversion',
    description: 'Digital experiences that turn attention into customers. Strategy, design, development and growth for international businesses.',
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rensha Digital',
              description: 'Digital growth studio combining strategy, design, development and growth marketing for international businesses.',
              areaServed: ['Europe', 'Middle East', 'New Zealand', 'UAE', 'Qatar'],
              address: { '@type': 'PostalAddress', addressCountry: 'IN' },
            }),
          }}
        />

      <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Frenshadigi5553back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.20" />
      <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></head>
      <body>
        {children}
      </body>
    </html>
  );
}
