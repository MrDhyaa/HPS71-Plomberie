```tsx
import { useRef, useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: "Intervenez-vous en urgence 24h/24 et 7j/7 ?",
    answer:
      "Oui, HPS71 propose un service d'urgence disponible 24h/24 et 7j/7 pour les situations urgentes de plomberie, selon la zone d'intervention et la disponibilité d'un technicien.",
  },
  {
    question: "Dans quelles villes intervenez-vous en Saône-et-Loire ?",
    answer:
      "Nous intervenons dans plusieurs villes de Saône-et-Loire, notamment à Mâcon, Chalon-sur-Saône, Tournus, Louhans, Autun, Le Creusot, Montceau-les-Mines, Cluny et dans les communes environnantes. Contactez-nous pour vérifier la disponibilité dans votre secteur.",
  },
  {
    question: "Quels problèmes de plomberie pouvez-vous dépanner ?",
    answer:
      "Nous intervenons notamment pour les fuites d'eau, problèmes de canalisations, débouchage de WC et d'éviers, problèmes de robinetterie et autres urgences de plomberie. La nature de l'intervention dépend du problème rencontré.",
  },
  {
    question: "Proposez-vous également des services de chauffage et de climatisation ?",
    answer:
      "Oui. HPS71 propose également des prestations liées au chauffage et à la climatisation, notamment pour l'installation, l'entretien et le dépannage des équipements selon la nature de votre besoin.",
  },
  {
    question: "Le devis est-il gratuit et sans engagement ?",
    answer:
      "Les modalités de devis dépendent de la nature et de la complexité de l'intervention. Contactez-nous par téléphone pour expliquer votre besoin et connaître les conditions applicables à votre demande.",
  },
  {
    question: "Combien de temps faut-il pour une intervention ?",
    answer:
      "Le délai d'intervention dépend de votre localisation, de l'urgence de la situation et de la disponibilité d'un technicien. Pour connaître le délai estimé dans votre secteur, contactez directement HPS71.",
  },
  {
    question: "Comment savoir si vous intervenez dans ma commune ?",
    answer:
      "Si votre commune se situe en Saône-et-Loire ou dans les environs, contactez-nous par téléphone. Nous vous confirmerons rapidement si votre secteur est couvert et si une intervention est possible.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const id = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div
      className={`rounded-2xl border transition-all duration-300 ${
        isOpen
          ? 'border-gray-200 shadow-md bg-white'
          : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
      }`}
    >
      <button
        id={triggerId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 rounded-2xl"
      >
        <span
          className={`font-bold text-base pr-6 transition-colors duration-200 ${
            isOpen ? 'text-navy-800' : 'text-navy-900'
          }`}
        >
          {question}
        </span>

        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-red-500 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Accessible accordion content */}
      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        ref={contentRef}
        style={{
          height: isOpen
            ? contentRef.current?.scrollHeight ?? 'auto'
            : 0,
          overflow: 'hidden',
          transition: 'height 320ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="h-px bg-gray-100 mb-4" />

          <p className="text-gray-500 text-sm leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const { ref } = useScrollAnimation();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="py-16 lg:py-20 bg-white"
      aria-labelledby="faq-title"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10" ref={ref}>
          <p className="animate-on-scroll text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Questions fréquentes
          </p>

          <h2
            id="faq-title"
            className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900"
          >
            Questions fréquentes sur nos services de plomberie
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-5">
            Une question sur votre intervention ?
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+33605741915"
              aria-label="Appeler HPS71 au 06 05 74 19 15"
              className="shine flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-glow-red text-sm"
            >
              <Phone
                className="w-4 h-4"
                aria-hidden="true"
              />
              Appelez le 06 05 74 19 15
            </a>

            <a
              href="https://wa.me/33605741915"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter HPS71 sur WhatsApp"
              className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-white text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle
                className="w-4 h-4"
                aria-hidden="true"
              />
              Contacter sur WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
```
