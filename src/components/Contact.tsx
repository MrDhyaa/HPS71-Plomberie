```tsx id="8g5t2p"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Check,
  MessageSquare,
} from 'lucide-react';
import { useState } from 'react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

const contactCards = [
  {
    icon: Phone,
    label: 'Téléphone & WhatsApp',
    value: '06 05 74 19 15',
    href: 'tel:+33605741915',
    iconBg: 'bg-red-600',
    cardBg: 'bg-red-50 border-red-100',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'HPS71.PRO@outlook.fr',
    href: 'mailto:HPS71.PRO@outlook.fr',
    iconBg: 'bg-blue-600',
    cardBg: 'bg-blue-50 border-blue-100',
  },
  {
    icon: MapPin,
    label: 'Zone d’intervention',
    value: 'Saône-et-Loire (71)',
    href: '#zones-intervention',
    iconBg: 'bg-green-600',
    cardBg: 'bg-green-50 border-green-100',
  },
  {
    icon: Clock,
    label: 'Disponibilité',
    value: '24h/24 — 7j/7',
    href: '#faq',
    iconBg: 'bg-amber-500',
    cardBg: 'bg-amber-50 border-amber-100',
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');

  const { ref } = useScrollAnimationMultiple();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const data = Object.fromEntries(new FormData(e.currentTarget));

      const res = await fetch(
        'https://formsubmit.co/ajax/HPS71.PRO@outlook.fr',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (res.ok) {
        setStatus('success');
        setForm({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-20 bg-slate-50"
      aria-labelledby="contact-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10" ref={ref}>
          <div className="animate-on-scroll inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
            Contactez-nous
          </div>

          <h2
            id="contact-title"
            className="animate-on-scroll delay-100 font-display font-black text-3xl sm:text-4xl text-navy-900 mb-3"
          >
            Contactez votre plombier en Saône-et-Loire
          </h2>

          <p className="animate-on-scroll delay-200 text-gray-500 max-w-lg mx-auto text-sm">
            Besoin d’un dépannage ou d’un devis pour vos travaux de plomberie,
            chauffage ou climatisation ? Contactez HPS71 au{' '}
            <a
              href="tel:+33605741915"
              aria-label="Appeler HPS71 au 06 05 74 19 15"
              className="text-red-600 font-bold hover:underline"
            >
              06 05 74 19 15
            </a>
            .
          </p>
        </div>

        <div
          className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start"
          ref={ref}
        >
          {/* Sidebar */}
          <div className="animate-on-scroll lg:col-span-2 space-y-3">
            {contactCards.map((card) => {
              const Icon = card.icon;

              return (
                <a
                  key={card.label}
                  href={card.href}
                  aria-label={`${card.label} : ${card.value}`}
                  className={`flex items-center gap-3.5 bg-white rounded-xl p-4 border ${card.cardBg} hover:shadow-card transition-all duration-200 group`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform shadow-md`}
                    aria-hidden="true"
                  >
                    <Icon className="w-[18px] h-[18px] text-white" />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                      {card.label}
                    </p>

                    <p className="font-black text-navy-900 text-sm mt-0.5">
                      {card.value}
                    </p>
                  </div>
                </a>
              );
            })}

            {/* WhatsApp */}
            <a
              href="https://wa.me/33605741915?text=Bonjour%20HPS71%2C%20je%20souhaite%20obtenir%20des%20informations%20ou%20un%20devis."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter HPS71 directement sur WhatsApp"
              className="shine flex items-center gap-3.5 rounded-xl p-4 transition-all hover:shadow-lg hover:-translate-y-0.5 w-full"
              style={{ backgroundColor: '#25D366' }}
            >
              <div
                className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <MessageSquare className="w-5 h-5 text-white" />
              </div>

              <div>
                <p className="text-green-100 text-xs font-bold uppercase tracking-wider">
                  WhatsApp Direct
                </p>

                <p className="text-white font-black text-sm mt-0.5">
                  Contactez-nous maintenant
                </p>
              </div>
            </a>
          </div>

          {/* Form */}
          <div className="animate-on-scroll delay-200 lg:col-span-3 bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
            <div className="bg-navy-900 px-6 py-5">
              <h3 className="font-display font-black text-white text-lg">
                Demander un devis
              </h3>

              <p className="text-navy-200/50 text-xs mt-1">
                Décrivez votre besoin et nous vous recontacterons rapidement.
              </p>
            </div>

            <div className="p-6">
              {status !== 'success' ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-3.5"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="Nouvelle demande - Formulaire de contact HPS71"
                  />

                  <input
                    type="hidden"
                    name="_captcha"
                    value="false"
                  />

                  <input
                    type="hidden"
                    name="_template"
                    value="table"
                  />

                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                      >
                        Nom *
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        autoComplete="name"
                        required
                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                      >
                        Téléphone *
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="06 00 00 00 00"
                        autoComplete="tel"
                        required
                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jean@exemple.fr"
                      autoComplete="email"
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                    >
                      Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                    >
                      <option value="">
                        Choisir un service...
                      </option>

                      <option value="Urgence plomberie">
                        Urgence plomberie (fuite, dégât des eaux)
                      </option>

                      <option value="Débouchage">
                        Débouchage de canalisations
                      </option>

                      <option value="Chauffage et chaudière">
                        Chauffage & chaudière
                      </option>

                      <option value="Climatisation">
                        Climatisation
                      </option>

                      <option value="Rénovation salle de bain">
                        Rénovation de salle de bain
                      </option>

                      <option value="Plomberie et maintenance">
                        Plomberie & maintenance
                      </option>

                      <option value="Autre">
                        Autre demande
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Décrivez votre problème ou votre besoin..."
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-sm text-red-600 font-semibold text-center bg-red-50 border border-red-100 rounded-xl py-2 px-3">
                      Une erreur est survenue. Réessayez ou appelez le
                      06 05 74 19 15.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="shine w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-xl transition-all duration-200 shadow-glow-red hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <Send
                      className="w-4 h-4"
                      aria-hidden="true"
                    />

                    {status === 'submitting'
                      ? 'Envoi en cours...'
                      : 'Envoyer ma demande'}
                  </button>
                </form>
              ) : (
                <div className="py-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Check
                      className="w-8 h-8 text-green-600"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="font-display font-black text-xl text-navy-900 mb-2">
                    Votre demande a bien été envoyée
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Nous vous recontacterons rapidement.
                  </p>

                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-red-600 hover:underline font-semibold"
                  >
                    Envoyer une nouvelle demande
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```
