import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const galleryImages = [
  { url: 'https://images.pexels.com/photos/7746091/pexels-photo-7746091.jpeg?_gl=1*jmob9e*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjc2NTUkbzIkZzEkdDE3ODQxMjc5OTQkajMyJGwwJGgw', caption: "Douche à l'italienne", tag: 'Salle de bain', tagColor: 'bg-teal-600' },
  { url: 'https://images.pexels.com/photos/27134985/pexels-photo-27134985.jpeg?_gl=1*mme1d4*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjc2NTUkbzIkZzEkdDE3ODQxMjgyOTAkajU5JGwwJGgw', caption: "Technicien Climatisation", tag: 'Climatisation', tagColor: 'bg-blue-600' },
  { url: 'https://images.pexels.com/photos/12034871/pexels-photo-12034871.jpeg?_gl=1*hxbmcq*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjM5MzYkbzEkZzEkdDE3ODQxMjQ3NzUkajE4JGwwJGgw', caption: "Installation chauffe-eau", tag: 'Chauffage', tagColor: 'bg-orange-600' },
  { url: 'https://images.pexels.com/photos/8266859/pexels-photo-8266859.jpeg?_gl=1*1wmheq5*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjc2NTUkbzIkZzEkdDE3ODQxMjc2NTYkajU5JGwwJGgw', caption: "Robinetterie haut de gamme", tag: 'Robinetterie', tagColor: 'bg-purple-600' },
  { url: 'https://images.pexels.com/photos/8146317/pexels-photo-8146317.jpeg?_gl=1*1y9ry37*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjM5MzYkbzEkZzEkdDE3ODQxMjM5ODIkajE0JGwwJGgw', caption: "Plomberie cuisine", tag: 'Cuisine', tagColor: 'bg-green-600' },
  { url: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?_gl=1*1v6oxio*_ga*MTQ1MzYwMDA3Mi4xNzg0MTIzOTM3*_ga_8JE65Q40S6*czE3ODQxMjc2NTUkbzIkZzEkdDE3ODQxMjgxNTgkajU5JGwwJGgw', caption: "Intervention dépannage", tag: 'Dépannage', tagColor: 'bg-red-600' },
];

export default function Gallery() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section id="galerie" className="py-16 lg:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-navy-50 border border-navy-100 text-navy-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Nos réalisations
          </div>
          <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3">
            Galerie de travaux
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-500 max-w-lg mx-auto">
            Quelques-unes de nos réalisations en Saône-et-Loire.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4" ref={ref}>
          {galleryImages.map((item, i) => (
            <div
              key={item.caption}
              className="animate-on-scroll group relative overflow-hidden rounded-xl shadow-sm cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms`, aspectRatio: '4/3' }}
            >
              <img
                src={item.url}
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-2.5 left-2.5">
                <span className={`${item.tagColor} text-white text-xs font-bold px-2.5 py-1 rounded-full shadow`}>{item.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3.5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-semibold text-sm">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
