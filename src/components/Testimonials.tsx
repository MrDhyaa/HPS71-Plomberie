import { Star, Quote, MapPin } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Marie-Claire Leroux',
    location: 'Mâcon (71)',
    rating: 5,
    text: "Fuite d'eau détectée le soir, intervention en 25 minutes. HPS71 est arrivé équipé, professionnel, prix conforme au devis. Impeccable !",
    service: 'Fuite urgente',
    avatar: 'ML',
    color: 'from-blue-500 to-blue-700',
  },
  {
    name: 'Mr DYAN',
    location: 'Chalon-sur-Saône (71)',
    rating: 5,
    text: "Chauffe-eau remplacé en une journée. Travail soigné, explications claires, nettoyage parfait. Rapport qualité-prix excellent.",
    service: 'Chauffe-eau',
    avatar: 'AD',
    color: 'from-teal-500 to-teal-700',
  },
  {
    name: 'Sophie Martin',
    location: 'Tournus (71)',
    rating: 5,
    text: "Débouchage WC un dimanche soir — disponibles 24h/24 comme promis ! Technicien courtois, problème résolu en 45 minutes.",
    service: 'Débouchage',
    avatar: 'SM',
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Jean-Paul Morel',
    location: 'Louhans (71)',
    rating: 5,
    text: "Rénovation complète de salle de bain avec douche à l'italienne. Délais respectés, budget tenu. Résultat dépasse nos attentes.",
    service: 'Salle de bain',
    avatar: 'JP',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'Isabelle Dupuis',
    location: 'Le Creusot (71)',
    rating: 5,
    text: "VMC double flux installée proprement. Équipe ponctuelle et consciencieuse. Air sain dans toute la maison depuis.",
    service: 'VMC',
    avatar: 'ID',
    color: 'from-green-500 to-green-700',
  },
  {
    name: 'Éric Fontaine',
    location: 'Autun (71)',
    rating: 5,
    text: "Rupture de tuyau à 2h du matin — en 30 minutes HPS71 était là. Un vrai pro, disponible et réactif. Je recommande.",
    service: 'Urgence nuit',
    avatar: 'EF',
    color: 'from-purple-500 to-purple-700',
  },
];

export default function Testimonials() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section id="temoignages" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-amber-50 border border-amber-100 text-amber-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Avis vérifiés
          </div>
          <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3">
            Ce que disent nos clients
          </h2>
          <div className="animate-on-scroll delay-200 inline-flex items-center gap-3 bg-amber-50 border border-amber-100 rounded-xl px-5 py-2.5 mt-2">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
            </div>
            <span className="font-display font-black text-navy-900 text-lg">4.9/5</span>
            <span className="text-gray-500 text-sm">· 2 847 avis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5" ref={ref}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="animate-on-scroll bg-white rounded-2xl p-5 shadow-card hover:shadow-card-hover border border-gray-100 hover:border-amber-100 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-black flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-navy-900 text-sm">{t.name}</p>
                    <div className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin className="w-2.5 h-2.5" /> {t.location}
                    </div>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-amber-100 flex-shrink-0" />
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
              </div>
              <span className="text-xs font-bold bg-navy-50 text-navy-600 px-2 py-0.5 rounded-full w-fit mb-2.5">{t.service}</span>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">"{t.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
