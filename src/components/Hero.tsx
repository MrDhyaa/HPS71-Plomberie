import { useState, useEffect } from 'react';
import { Phone, ChevronRight, Shield, Clock, Droplets, Flame, Wind, Zap } from 'lucide-react';

const serviceIcons = [
  {
    label: 'Plomberie',
    Icon: Droplets,
    gradient: 'from-sky-400 to-blue-600',
    glow: 'shadow-[0_0_18px_4px_rgba(56,189,248,0.45)]',
    hoverGlow: 'hover:shadow-[0_0_26px_8px_rgba(56,189,248,0.6)]',
    highlight: 'from-white/40 to-transparent',
  },
  {
    label: 'Chauffage',
    Icon: Flame,
    gradient: 'from-orange-400 to-orange-600',
    glow: 'shadow-[0_0_18px_4px_rgba(251,146,60,0.45)]',
    hoverGlow: 'hover:shadow-[0_0_26px_8px_rgba(251,146,60,0.6)]',
    highlight: 'from-white/40 to-transparent',
  },
  {
    label: 'Climatisation',
    Icon: Wind,
    gradient: 'from-emerald-400 to-green-600',
    glow: 'shadow-[0_0_18px_4px_rgba(52,211,153,0.45)]',
    hoverGlow: 'hover:shadow-[0_0_26px_8px_rgba(52,211,153,0.6)]',
    highlight: 'from-white/40 to-transparent',
  },
  {
    label: 'Urgence',
    Icon: Zap,
    gradient: 'from-red-400 to-red-600',
    glow: 'shadow-[0_0_18px_4px_rgba(248,113,113,0.45)]',
    hoverGlow: 'hover:shadow-[0_0_26px_8px_rgba(248,113,113,0.6)]',
    highlight: 'from-white/40 to-transparent',
  },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center bg-navy-950 overflow-hidden"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-[#0a1628]" />
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-950/15 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── LEFT: TEXT ── */}
          <div>
            {/* Availability badge */}
            <div
              className={`transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '0ms' }}
            >
              <div className="inline-flex items-center gap-2 bg-navy-800/80 border border-navy-600/40 text-white/80 text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                Disponible maintenant · 24h/24
              </div>
            </div>

            {/* Headline */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '120ms' }}
            >
              <h1 className="font-display font-black text-white leading-[1.06] mb-6">
                <span className="text-4xl sm:text-5xl xl:text-[3.6rem] block">Un expert en plomberie,</span>
                <span className="text-4xl sm:text-5xl xl:text-[3.6rem] block">chauffage et climatisation</span>
                <span className="text-4xl sm:text-5xl xl:text-[3.6rem] block">vous rappellera en moins de</span>
                <span className="text-5xl sm:text-6xl xl:text-[4.2rem] block text-red-500 leading-tight">5 minutes</span>
              </h1>

              {/* Service icon pills */}
              <div className="flex items-center gap-5 sm:gap-7 mb-6">
                {serviceIcons.map(({ label, Icon, gradient, glow, hoverGlow, highlight }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 group">
                    <div
                      className={`relative w-11 h-11 rounded-full bg-gradient-to-br ${gradient} ${glow} ${hoverGlow} transition-all duration-300 hover:scale-110 cursor-default flex items-center justify-center overflow-hidden`}
                    >
                      {/* gloss highlight */}
                      <span className={`absolute top-0.5 left-1.5 w-5 h-4 rounded-full bg-gradient-to-b ${highlight} blur-[1px] opacity-80`} />
                      <Icon className="w-5 h-5 text-white drop-shadow relative z-10" strokeWidth={2.2} />
                    </div>
                    <span className="text-white/70 text-[10px] font-semibold tracking-wide uppercase leading-none group-hover:text-white transition-colors duration-200">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-navy-300/75 text-lg leading-relaxed mb-8 max-w-md">
                Laissez votre numéro, un artisan HPS71 vous contacte pour évaluer votre problème et vous donner un tarif clair par téléphone.
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-3 mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '280ms' }}
            >
              <a
                href="tel:+33605741915"
                className="shine flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white font-black px-7 py-4 rounded-2xl transition-all duration-200 shadow-glow-red hover:-translate-y-0.5 text-[1.05rem] animate-pulse-ring"
              >
                <Phone className="w-5 h-5 phone-ring flex-shrink-0" />
                Appeler 06 05 74 19 15
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center gap-2 border-2 border-white/20 hover:border-white/40 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-200 hover:bg-white/5 text-[1.05rem]"
              >
                Demander un devis
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Stats row */}
            <div
              className={`flex flex-wrap gap-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '360ms' }}
            >
              {[
                { value: '30 min', label: 'Intervention' },
                { value: '24/7', label: 'Disponible' },
                { value: '100%', label: 'Garanti' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-start">
                  <span className="font-display font-black text-white text-2xl leading-none">{stat.value}</span>
                  <span className="text-navy-400/60 text-xs mt-1 uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: PLUMBER IMAGE ── */}
          <div
            className={`relative flex justify-center lg:justify-end transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '160ms' }}
          >
            {/* Glow */}
            <div className="absolute inset-4 bg-red-600/10 rounded-3xl blur-3xl" />

            <div className="relative w-full max-w-md lg:max-w-full">
              {/* Artisan certifié badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl shadow-lg border border-white/20">
                <Shield className="w-4 h-4 text-red-600 flex-shrink-0" />
                <span className="text-navy-900 text-sm font-bold">Artisan certifié</span>
              </div>

              {/* Response time badge */}
              <div className="absolute bottom-6 right-4 z-20 glass-dark px-4 py-3 rounded-2xl shadow-xl border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-black">Rappel en 5 min</p>
                    <p className="text-green-400 text-xs">Disponible maintenant</p>
                  </div>
                </div>
              </div>

              {/* Main image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[3/4] w-full max-h-[520px]">
                <img
                  src={new URL('../assets/images/WhatsApp_Image_2026-07-10_at_17.09.17_(1).jpeg', import.meta.url).href}
                  alt="Plombier professionnel HPS71 Plomberie"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/60 to-transparent rounded-b-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0 48L120 42C240 36 480 24 720 22C960 20 1200 28 1320 32L1440 36V48H0Z" fill="#f8fafc" />
        </svg>
      </div>
    </section>
  );
}
