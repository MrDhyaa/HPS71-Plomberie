import { Phone, ClipboardList, Wrench, CheckCircle2, Zap } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: "Appelez ou écrivez",
    description: "Contactez-nous par téléphone ou formulaire. Disponibles 24h/24, 7j/7.",
    color: 'bg-red-600',
  },
  {
    number: '02',
    icon: ClipboardList,
    title: "Devis gratuit",
    description: "Diagnostic rapide et devis clair avant toute intervention. Sans surprise.",
    color: 'bg-navy-700',
  },
  {
    number: '03',
    icon: Wrench,
    title: "Intervention",
    description: "Votre plombier certifié arrive équipé et résout le problème efficacement.",
    color: 'bg-red-600',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: "Garantie 2 ans",
    description: "Toutes nos interventions sont garanties 2 ans pièces et main d'oeuvre.",
    color: 'bg-navy-700',
  },
];

export default function HowItWorks() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section id="comment-ca-marche" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-navy-50 border border-navy-100 text-navy-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Notre processus
          </div>
          <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3">
            Comment ça marche ?
          </h2>
          <p className="animate-on-scroll delay-200 text-gray-500 max-w-lg mx-auto">
            Simple, rapide et transparent — de l'appel à la garantie.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" ref={ref}>
          <div className="hidden lg:block absolute top-12 left-[14%] right-[14%] h-px bg-gradient-to-r from-red-200 via-navy-200 to-red-200" />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="animate-on-scroll relative z-10 text-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="inline-flex flex-col items-center mb-5">
                  <div className={`w-24 h-24 rounded-full ${step.color} flex flex-col items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white mb-0.5" />
                    <span className="text-white/60 text-xs font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-navy-900 text-base mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed px-2">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-navy-900 rounded-2xl px-7 py-5 shadow-xl">
            <Zap className="w-7 h-7 text-amber-400 flex-shrink-0" />
            <div className="text-center sm:text-left">
              <p className="font-display font-black text-white">Prêt ? Appelez maintenant</p>
              <p className="text-navy-400/60 text-sm">Devis gratuit · Intervention rapide</p>
            </div>
            <a href="tel:+33605741915"
              className="shine flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all whitespace-nowrap text-sm"
            >
              <Phone className="w-4 h-4" /> 06 05 74 19 15
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
