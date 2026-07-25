import { useRef, useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: "Intervenez-vous vraiment 24h/24 et 7j/7 ?",
    answer: "Oui, notre service d'urgence est disponible 24h/24, 7j/7, y compris les week-ends et jours fériés. Un plombier est toujours joignable pour les situations urgentes.",
  },
  {
    question: "Combien de temps pour arriver chez moi ?",
    answer: "Pour les urgences, nous intervenons en moins de 30 minutes dans les zones couvertes de Saône-et-Loire. Pour les travaux planifiés, un rendez-vous est fixé sous 24 à 48h selon vos disponibilités.",
  },
  {
    question: "Le devis est-il gratuit ?",
    answer: "Oui, le devis est toujours gratuit et sans engagement. Le tarif est annoncé par téléphone avant tout déplacement.",
  },
  {
    question: "Les travaux sont-ils garantis ?",
    answer: "Oui, toutes nos interventions sont garanties 2 ans pièces et main d'œuvre. Les travaux de rénovation importants bénéficient également de la garantie décennale.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les espèces, chèques, virements bancaires et paiements par carte. Un échelonnement peut être envisagé pour les travaux importants.",
  },
  {
    question: "Quelles sont vos zones d'intervention ?",
    answer: "Nous couvrons tout le département Saône-et-Loire (71) : Mâcon, Chalon-sur-Saône, Tournus, Louhans, Autun, Le Creusot, Montceau-les-Mines et toutes les communes alentour.",
  },
  {
    question: "Vos plombiers sont-ils certifiés ?",
    answer: "Oui. HPS71 fondateur et son équipe sont artisans certifiés avec plus de 15 ans d'expérience, titulaires d'une garantie décennale et d'une RC Pro à jour.",
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function AccordionItem({ question, answer, isOpen, onToggle, index }: AccordionItemProps) {
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
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle(); } }}
        className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 rounded-2xl"
      >
        <span className={`font-bold text-base pr-6 transition-colors duration-200 ${isOpen ? 'text-navy-800' : 'text-navy-900'}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-red-500 transition-transform duration-300 ease-out ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        />
      </button>

      {/* Height-based animation using scrollHeight */}
      <div
        id={id}
        role="region"
        aria-labelledby={triggerId}
        ref={contentRef}
        style={{
          height: isOpen ? contentRef.current?.scrollHeight ?? 'auto' : 0,
          overflow: 'hidden',
          transition: 'height 320ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div className="px-6 pb-5 pt-0">
          <div className="h-px bg-gray-100 mb-4" />
          <p className="text-gray-500 text-sm leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);
  const { ref } = useScrollAnimation();

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-16 lg:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10" ref={ref}>
          <p className="animate-on-scroll text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">
            Questions fréquentes
          </p>
          <h2 className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900">
            On répond à vos questions
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
          <p className="text-gray-400 text-sm mb-5">D'autres questions ?</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+33605741915"
              className="shine flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-glow-red text-sm"
            >
              <Phone className="w-4 h-4" /> Appelez le 06 05 74 19 15
            </a>
            <a
              href="https://wa.me/33605741915"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-bold px-7 py-3.5 rounded-xl transition-all text-white text-sm"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
