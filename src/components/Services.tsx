```tsx
import { Wrench, Droplets, Flame, ShowerHead, Wind, Hammer } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Droplets,
    title: "Fuite d'eau & urgence plomberie",
    description:
      "Intervention rapide 24h/24 pour les fuites d'eau, ruptures de canalisation et dégâts des eaux en Saône-et-Loire.",
    image:
      'https://i0.wp.com/plombiergisors.com/wp-content/uploads/2024/07/plombier-gisors-debouchage-canalisation-2.webp?resize=1536%2C1024&ssl=1',
    iconColor: 'bg-blue-500',
    tag: 'Urgence plomberie',
  },
  {
    icon: Wrench,
    title: "Débouchage de canalisations",
    description:
      "Débouchage de WC, lavabo, évier et canalisations. Intervention rapide avec solutions adaptées à chaque problème.",
    image:
      'https://maesdebouchage.be/wp-content/uploads/2026/05/meilleur-service-debouchage-lavaboa-a-bruxelles.jpg',
    iconColor: 'bg-red-500',
    tag: 'Dépannage',
  },
  {
    icon: Flame,
    title: "Chauffage & dépannage chaudière",
    description:
      "Installation et dépannage de systèmes de chauffage, chaudières gaz, fioul, pompes à chaleur et planchers chauffants.",
    image:
      'https://images.pexels.com/photos/3855483/pexels-photo-3855483.jpeg?_gl=1*125lf3d*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxNDkyNDAkbzMkZzEkdDE3ODQxNTAwOTYkajE4JGwwJGgw',
    iconColor: 'bg-orange-500',
    tag: 'Chauffage',
  },
  {
    icon: ShowerHead,
    title: "Rénovation de salle de bain",
    description:
      "Rénovation et installation de salle de bain : douche à l'italienne, baignoire, robinetterie et équipements sanitaires.",
    image:
      'https://images.pexels.com/photos/7031878/pexels-photo-7031878.jpeg?_gl=1*878hnr*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxNDk4NjckajU5JGwwJGgw',
    iconColor: 'bg-teal-500',
    tag: 'Rénovation',
  },
  {
    icon: Wind,
    title: "Installation & dépannage climatisation",
    description:
      "Installation, entretien et dépannage de systèmes de climatisation pour les logements et locaux professionnels.",
    image:
      'https://www.planete-air.eu/img/cms/comment%20installer%20une%20climatisation%20r%C3%A9versible.jpeg',
    iconColor: 'bg-cyan-500',
    tag: 'Climatisation',
  },
  {
    icon: Hammer,
    title: "Plomberie & maintenance",
    description:
      "Installation et maintenance de la plomberie : éviers, lave-vaisselle, robinetterie et équipements de cuisine.",
    image:
      'https://as2.ftcdn.net/v2/jpg/02/78/57/59/1000_F_278575920_mkLIYv32ZJH7j4IqI1jWVEX6zyVXiXsK.jpg',
    iconColor: 'bg-green-500',
    tag: 'Maintenance',
  },
];

export default function Services() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section
      id="services"
      className="py-16 lg:py-20 bg-slate-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nos prestations
          </div>

          <h2
            id="services-title"
            className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3"
          >
            Plomberie, chauffage & climatisation en Saône-et-Loire
          </h2>

          <p className="animate-on-scroll delay-200 text-gray-500 max-w-xl mx-auto">
            Urgence plomberie, dépannage, chauffage, climatisation et rénovation :
            HPS71 vous accompagne pour vos travaux et interventions en Saône-et-Loire.
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
          ref={ref}
        >
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="animate-on-scroll group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover border border-gray-100 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - HPS71 en Saône-et-Loire`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <div className="absolute top-2.5 right-2.5">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  <div
                    className={`absolute bottom-2.5 left-2.5 w-9 h-9 rounded-xl ${service.iconColor} flex items-center justify-center shadow-lg`}
                    aria-hidden="true"
                  >
                    <Icon className="w-[18px] h-[18px] text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-display font-bold text-navy-900 text-sm mb-1.5">
                    {service.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="h-0.5 bg-gradient-to-r from-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```
