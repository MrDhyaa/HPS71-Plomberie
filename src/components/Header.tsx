import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#services', label: 'Services' },
  { href: '#forfaits', label: 'Forfaits' },
  { href: '#a-propos', label: 'À propos' },
  { href: '#temoignages', label: 'Avis clients' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_20px_rgba(0,0,0,0.08)]' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── LOGO ── */}
          <button
            onClick={() => handleNav('#accueil')}
            className="flex items-center gap-3 group"
            aria-label="Accueil HPS71 Plomberie"
          >
            {/* Badge circle */}
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-navy-900 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-sm tracking-tight">HPS</span>
              </div>
              {/* Online dot */}
<span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white status-dot" />
            </div>

            {/* Brand text */}
            <div className="flex flex-col leading-none gap-0.5">
              <div className="flex items-baseline gap-0">
                <span className="font-display font-black text-navy-900 text-[1.1rem]">HPS</span>
                <span className="font-display font-black text-red-500 text-[1.1rem]">71</span>
                <span className="font-display font-black text-navy-900 text-[1.1rem] ml-1.5">Plomberie</span>
              </div>
              <span className="text-[0.6rem] font-bold text-gray-400 uppercase tracking-[0.15em]">
                Plombier · Saône-et-Loire
              </span>
            </div>
          </button>

          {/* ── RIGHT: CALL BUTTON + HAMBURGER ── */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+33605741915"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm"
            >
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span className="hidden sm:inline">Appeler</span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-navy-900 hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {menuOpen
                ? <X className="w-5 h-5" />
                : <Menu className="w-5 h-5" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* ── DROPDOWN NAV ── */}
      <div
        className={`bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ease-out ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors duration-150"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-3">
            <a
              href="tel:+33605741915"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2.5 rounded-full transition-colors text-sm"
            >
              <Phone className="w-3.5 h-3.5" /> 06 05 74 19 15
            </a>
            <a
              href="mailto:HPS71.PRO@outlook.fr"
              className="text-sm text-gray-500 hover:text-navy-900 transition-colors"
            >
              HPS71.PRO@outlook.fr
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
