'use client';

import { useState } from 'react';

export default function Navigation({ isHome = true }: { isHome?: boolean }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefix = isHome ? '' : '/';
  const navLinks = [
    { label: 'Evidence', href: prefix + '#evidence' },
    { label: 'Campaigns', href: prefix + '#creative-work' },
    { label: 'Work', href: prefix + '#work' },
    { label: 'Services', href: prefix + '#services' },
    { label: 'Contact', href: prefix + '#contact' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#24211d]/95 text-[#f5f0e8] backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
        <a href={isHome ? '#' : '/'} aria-label="Rensha Digital home" className="shrink-0 font-serif text-2xl tracking-tight">
          Rensha<span className="text-[#c9ad80]">.</span><span className="ml-2 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.26em] text-[#b9b0a3]">Digital</span>
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => <a key={link.label} href={link.href} className="text-xs uppercase tracking-[0.1em] text-[#cfc7bb] transition-colors hover:text-white">{link.label}</a>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={prefix + '#contact'} className="hidden border border-[#bda47e] px-5 py-2.5 text-xs uppercase tracking-[0.12em] text-[#e8d6b9] transition-colors hover:bg-[#bda47e] hover:text-[#24211d] sm:inline-flex">Start a conversation ↗</a>
          <button type="button" aria-expanded={mobileOpen} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} onClick={() => setMobileOpen(!mobileOpen)} className="flex h-11 w-11 items-center justify-center text-2xl lg:hidden">{mobileOpen ? '×' : '☰'}</button>
        </div>
      </div>
      {mobileOpen && <nav aria-label="Mobile" className="shell flex flex-col border-t border-white/10 py-3 lg:hidden">
        {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="border-b border-white/10 py-3 text-sm text-[#e9e0d4]">{link.label}</a>)}
      </nav>}
    </header>
  );
}
