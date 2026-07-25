import { Check, Star, Crown, Zap } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const plans = [
  {
    name: "ESSENTIEL",
    icon: Check,
    badge: null,
    headerBg: 'bg-navy-900',
    borderColor: 'border-gray-200',
    features: [
      "Entretien simple et inspection générale",
      "Détection préventive des problèmes",
      "Tarifs économiques adaptés",
      "Rapport d'intervention",
    ],
    cta: "Demander un devis",
    ctaClass: "bg-navy-900 hover:bg-navy-800 text-white",
  },
  {
    name: "STANDARD",
    icon: Star,
    badge: "Le plus populaire",
    headerBg: 'bg-red-600',
    borderColor: 'border-red-400',
    featured: true,
    features: [
      "Entretien complet + petites réparations",
      "Nettoyage et contrôle des tuyaux",
      "Service flexible et prioritaire",
      "Rapport complet + photos",
      "Garantie étendue",
    ],
    cta: "Choisir ce forfait",
    ctaClass: "bg-red-600 hover:bg-red-700 text-white shadow-glow-red",
  },
  {
    name: "PREMIUM",
    icon: Crown,
    badge: "Tout inclus",
    headerBg: 'bg-gradient-to-r from-amber-500 to-amber-600',
    borderColor: 'border-amber-400',
    features: [
      "Couverture totale : entretien + réparations + urgences",
      "Inspection avancée de tous les systèmes",
      "Priorité absolue — réponse immédiate",
      "Garantie 2 ans pièces et main d'oeuvre",
      "Technicien dédié + suivi mensuel",
    ],
    cta: "Choisir ce forfait",
    ctaClass: "bg-amber-500 hover:bg-amber-600 text-white",
  },
];

export default function Forfaits() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section id="forfaits" className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nos forfaits
          </div>
          <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3">
            Choisissez votre formule
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-500 max-w-lg mx-auto">
            Devis personnalisé gratuit. Forfaits adaptés à chaque besoin.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-start" ref={ref}>
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`animate-on-scroll bg-white rounded-2xl border-2 ${plan.borderColor} overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 ${'featured' in plan ? 'md:scale-[1.02]' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className={`${plan.headerBg} px-5 py-5 relative overflow-hidden`}>
                  <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-white/10" />
                  <div className="relative">
                    {plan.badge && (
                      <div className="inline-flex items-center gap-1 bg-white/20 text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-2">
                        <Zap className="w-3 h-3" /> {plan.badge}
                      </div>
                    )}
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
                        <Icon className="w-4.5 h-4.5 text-white w-[18px] h-[18px]" />
                      </div>
                      <h3 className="text-white font-display font-black text-lg">{plan.name}</h3>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-5">
                  <ul className="space-y-2.5 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-green-600" />
                        </div>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="tel:+33605741915"
                    className={`shine flex items-center justify-center gap-1.5 ${plan.ctaClass} font-bold py-3 px-5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-sm w-full`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-sm mt-6">
          Tous les forfaits incluent un devis gratuit — contactez-nous au{' '}
          <a href="tel:+33605741915" className="text-red-600 font-semibold hover:underline">06 05 74 19 15</a>
        </p>
      </div>
    </section>
  );
}
