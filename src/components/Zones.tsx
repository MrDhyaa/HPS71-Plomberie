import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const zones = [
  { city: 'Mâcon', time: '< 20 min' },
  { city: 'Chalon-s-Saône', time: '< 25 min' },
  { city: 'Tournus', time: '< 25 min' },
  { city: 'Louhans', time: '< 30 min' },
  { city: 'Autun', time: '< 35 min' },
  { city: 'Le Creusot', time: '< 35 min' },
  { city: 'Montceau', time: '< 40 min' },
  { city: 'Cluny', time: '< 30 min' },
];

export default function Zones() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section className="py-14 lg:py-16 bg-navy-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center" ref={ref}>

          {/* LEFT */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-red-600/15 border border-red-500/25 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              Zones d'intervention
            </div>

            <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-white mb-4">
              Saône-et-Loire,
              <br />
              <span className="text-gradient">
                partout pour vous
              </span>
            </h2>

            <p className="animate-on-scroll delay-200 text-navy-300/60 leading-relaxed mb-6 text-sm">
              Techniciens disponibles 24h/24 dans tout le département 71 pour une intervention rapide où que vous soyez.
            </p>

            <div className="animate-on-scroll delay-300 space-y-2.5 mb-6">
              {[
                "Urgences en moins de 30 minutes",
                "Couverture de tout le département 71",
                "Service 7j/7, 24h/24",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-navy-200 text-sm"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="animate-on-scroll delay-400">
              <a
                href="tel:+33605741915"
                className="shine inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-glow-red hover:-translate-y-0.5 text-sm"
              >
                <Phone className="w-4 h-4" />
                Vérifier votre zone
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>

            <div className="grid grid-cols-4 gap-2.5" ref={ref}>
              {zones.map((zone, i) => (
                <div
                  key={zone.city}
                  className="animate-on-scroll glass-dark rounded-xl p-3 text-center hover:bg-white/10 border border-white/5 transition-all duration-200 group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <MapPin className="w-4 h-4 text-red-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform" />

                  <div className="font-bold text-white text-xs">
                    {zone.city}
                  </div>

                  <div className="text-green-400 text-xs font-bold mt-1">
                    {zone.time}
                  </div>
                </div>
              ))}

              {/* BOX Déplacement */}
              <div className="animate-on-scroll col-span-4 mt-3 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-600/20 to-red-900/10 p-5">
                <div className="flex items-start gap-3">

                  <div className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-base mb-2">
                      Déplacements jusqu'à 75 km et plus
                    </h3>

                    <p className="text-navy-200/80 text-sm leading-relaxed">
                      Nous intervenons également jusqu'à
                      <span className="text-white font-bold">
                        {" "}75 km et plus{" "}
                      </span>
                      selon la nature de votre demande, afin d'offrir un service rapide,
                      fiable et professionnel partout où nos clients nous accordent leur confiance.
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}