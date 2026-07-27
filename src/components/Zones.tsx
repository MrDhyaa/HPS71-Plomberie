```tsx
import { MapPin, CheckCircle2, Phone } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const zones = [
  { city: 'Mâcon', time: '< 20 min' },
  { city: 'Chalon-sur-Saône', time: '< 25 min' },
  { city: 'Tournus', time: '< 25 min' },
  { city: 'Louhans', time: '< 30 min' },
  { city: 'Autun', time: '< 35 min' },
  { city: 'Le Creusot', time: '< 35 min' },
  { city: 'Montceau-les-Mines', time: '< 40 min' },
  { city: 'Cluny', time: '< 30 min' },
];

export default function Zones() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section
      id="zones-intervention"
      className="py-14 lg:py-16 bg-navy-950 relative overflow-hidden"
      aria-labelledby="zones-title"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="grid lg:grid-cols-2 gap-10 items-center"
          ref={ref}
        >

          {/* LEFT */}
          <div>
            <div className="animate-on-scroll inline-flex items-center gap-2 bg-red-600/15 border border-red-500/25 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Zones d'intervention
            </div>

            <h2
              id="zones-title"
              className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-white mb-4"
            >
              Plombier en Saône-et-Loire
              <br />
              <span className="text-gradient">
                dans tout le département 71
              </span>
            </h2>

            <p className="animate-on-scroll delay-200 text-navy-300/60 leading-relaxed mb-6 text-sm">
              HPS71 intervient pour vos besoins en plomberie, chauffage et
              climatisation dans plusieurs villes de Saône-et-Loire. Contactez-nous
              pour vérifier la disponibilité d'un technicien près de chez vous.
            </p>

            <div className="animate-on-scroll delay-300 space-y-2.5 mb-6">
              {[
                "Intervention rapide selon votre localisation",
                "Déplacements dans plusieurs villes du département 71",
                "Service disponible 7j/7, 24h/24",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 text-navy-200 text-sm"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-green-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>

            <div className="animate-on-scroll delay-400">
              <a
                href="tel:+33605741915"
                aria-label="Appeler HPS71 pour vérifier la disponibilité dans votre zone"
                className="shine inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-glow-red hover:-translate-y-0.5 text-sm"
              >
                <Phone
                  className="w-4 h-4"
                  aria-hidden="true"
                />
                Vérifier votre zone
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              className="grid grid-cols-4 gap-2.5"
              ref={ref}
              aria-label="Principales villes desservies en Saône-et-Loire"
            >
              {zones.map((zone, i) => (
                <div
                  key={zone.city}
                  className="animate-on-scroll glass-dark rounded-xl p-3 text-center hover:bg-white/10 border border-white/5 transition-all duration-200 group"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <MapPin
                    className="w-4 h-4 text-red-400 mx-auto mb-1.5 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />

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

                  <div
                    className="w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0"
                    aria-hidden="true"
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <h3 className="text-white font-bold text-base mb-2">
                      Déplacements en Saône-et-Loire et au-delà
                    </h3>

                    <p className="text-navy-200/80 text-sm leading-relaxed">
                      Nous intervenons également jusqu'à
                      <span className="text-white font-bold">
                        {" "}75 km et plus{" "}
                      </span>
                      selon la nature de votre demande et votre localisation,
                      afin de vous proposer un service rapide, fiable et
                      professionnel.
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
```
