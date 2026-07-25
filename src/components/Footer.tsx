import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const cols = [
  {
    title: 'Navigation',
    items: [
      { href: '#accueil', label: 'Accueil' },
      { href: '#services', label: 'Services' },
      { href: '#forfaits', label: 'Forfaits' },
      { href: '#a-propos', label: 'À propos' },
      { href: '#temoignages', label: 'Avis clients' },
      { href: '#faq', label: 'FAQ' },
      { href: '#contact', label: 'Contact' },
    ],
  },
  {
    title: 'Nos Services',
    items: [
      { label: 'Fuites & Urgences' },
      { label: 'Débouchage' },
      { label: 'Chauffage & Chaudière' },
      { label: 'Climatisation' },
      { label: 'Salle de bain' },
      { label: 'Cuisine' },
      { label: 'Entretien & Contrats' },
    ],
  },
];

export default function Footer() {
  const nav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-white">
      {/* Emergency banner */}
      <div className="bg-gradient-to-r from-red-800 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-black text-white text-xl lg:text-2xl mb-1">Urgence ? Appelez maintenant !</h2>
            <p className="text-red-100/80 text-sm">Disponible 24h/24 — 7j/7 — Intervention rapide Saône-et-Loire</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="tel:+33605741915"
              className="flex items-center gap-2 bg-white text-red-600 font-black px-7 py-3 rounded-xl hover:bg-red-50 transition-colors shadow-lg"
            >
              <Phone className="w-4 h-4" /> 06 05 74 19 15
            </a>
            <a href="https://wa.me/33605741915" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center shadow-glow-red">
                <span className="text-white font-black text-sm">HPS</span>
              </div>
              <div>
                <div className="font-display font-black text-white text-sm tracking-wide uppercase">HPS71</div>
                <div className="font-display font-black text-red-400 text-xs tracking-[0.2em] uppercase">Plomberie</div>
              </div>
            </div>
            <p className="text-navy-300/55 text-sm leading-relaxed mb-5">
              Artisan plombier de confiance en Saône-et-Loire depuis 2009. Rapidité de réponse et excellence d’exécution.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Twitter, label: 'Twitter' },
                { icon: Linkedin, label: 'LinkedIn' },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/8 hover:bg-red-600 flex items-center justify-center transition-all duration-200"
                >
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation + Services */}
          {cols.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {'href' in item ? (
                      <button onClick={() => nav(item.href)}
                        className="text-navy-300/55 hover:text-white text-sm transition-colors"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <span className="text-navy-300/55 text-sm">{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-xs uppercase tracking-widest mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:+33605741915" className="flex items-center gap-2 text-navy-300/55 hover:text-white text-sm transition-colors">
                <Phone className="w-3.5 h-3.5 text-red-400 flex-shrink-0" /> 06 05 74 19 15
              </a>
              <a href="mailto:HPS71.PRO@outlook.fr" className="flex items-center gap-2 text-navy-300/55 hover:text-white text-sm transition-colors break-all">
                <Mail className="w-3.5 h-3.5 text-red-400 flex-shrink-0" /> HPS71.PRO@outlook.fr
              </a>
              <div className="flex items-center gap-2 text-navy-300/55 text-sm">
                <MapPin className="w-3.5 h-3.5 text-red-400 flex-shrink-0" /> Saône-et-Loire (71)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
         <p className="text-navy-400/45 text-xs">
  &copy; {new Date().getFullYear()} HPS71 Plomberie — Designer by:{' '}
  <a
    href="https://x.com/MrDhyaa"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:text-blue-300 transition-colors font-semibold"
  >
    @MrDhyaa
  </a>
  . Anouar Dia'a Eddine Benlamri. Tous droits réservés.
</p>
          <div className="flex items-center gap-4 text-navy-400/45 text-xs">
            <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
