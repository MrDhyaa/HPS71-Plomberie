import { useState } from 'react';
import { Check, Clock, Shield, Zap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function QuoteSection() {
  const [form, setForm] = useState({ phone: '', service: '', urgency: 'normal' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { ref } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget as HTMLFormElement));
      const res = await fetch('https://formsubmit.co/ajax/HPS71.PRO@outlook.fr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) setStatus('success');
      else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="devis" className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="animate-on-scroll">
          <div className="relative bg-navy-950 rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-hero-pattern opacity-100" />
            <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-red-950/20 to-transparent" />

            <div className="relative grid lg:grid-cols-2 gap-0">
              {/* Left */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-red-600/15 border border-red-500/25 text-red-400 text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest w-fit">
                  <Zap className="w-3.5 h-3.5" /> Devis express
                </div>
                <h2 className="font-display font-black text-2xl lg:text-3xl text-white mb-4 leading-tight">
                  Devis en <span className="text-gradient">moins de 5 min</span>
                </h2>
                <div className="space-y-3">
                  {[
                    { icon: Check, text: "Devis gratuit et sans engagement" },
                    { icon: Clock, text: "Réponse en moins de 5 minutes" },
                    { icon: Shield, text: "Garantie 2 ans pièces et main d'oeuvre" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-2.5 text-navy-200 text-sm">
                      <div className="w-5 h-5 rounded-full bg-red-600/25 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-red-400" />
                      </div>
                      {text}
                    </div>
                  ))}
                </div>
              </div>

              {/* Right form */}
              <div className="bg-white rounded-r-3xl lg:rounded-l-none rounded-b-3xl lg:rounded-b-3xl p-8">
                {status !== 'success' ? (
<form
  action="https://formsubmit.co/HPS71.PRO@outlook.fr"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-3.5"
>
  <input type="hidden" name="_subject" value="Nouvelle demande HPS71" />
<input type="hidden" name="_captcha" value="false" />
<input type="hidden" name="_template" value="table" />
  <h3 className="font-display font-black text-navy-900 text-lg mb-1">Votre demande</h3>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Téléphone *</label>
                      <input type="tel" name="phone" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="06 00 00 00 00" required
                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-1.5">Service</label>
                      <select name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                        className="w-full border-2 border-gray-100 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-red-500 bg-gray-50 focus:bg-white transition-colors"
                      >
                        <option value="">Choisir...</option>
                        <option>Urgence</option>
                        <option>Débouchage</option>
                        <option>Chauffage</option>
                        <option>Ventilation / VMC</option>
                        <option>Rénovation</option>
                        <option>Entretien</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        {[{ val: 'urgent', label: 'Urgence' }, { val: 'normal', label: 'Planifié' }].map((opt) => (
                          <button key={opt.val} type="button"
                            onClick={() => setForm({ ...form, urgency: opt.val })}
                            className={`py-2.5 rounded-xl border-2 text-sm font-bold transition-all ${form.urgency === opt.val ? 'bg-red-600 border-red-600 text-white' : 'border-gray-200 text-gray-600 hover:border-red-300 bg-gray-50'}`}
                          >
                            {opt.label}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="urgency" value={form.urgency} />
                    </div>
                    {status === 'error' && (
                      <p className="text-sm text-red-600 font-semibold text-center bg-red-50 border border-red-100 rounded-xl py-2 px-3">
                        Une erreur est survenue. Réessayez ou appelez le 06 05 74 19 15.
                      </p>
                    )}
                    <button type="submit"
                      disabled={status === 'submitting'}
                      className="shine w-full bg-red-600 hover:bg-red-700 text-white font-black py-3.5 rounded-xl transition-all shadow-glow-red hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'submitting' ? 'Envoi en cours...' : 'Demander mon devis gratuit'}
                    </button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center py-6">
                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check className="w-7 h-7 text-green-600" />
                    </div>
                    <h3 className="font-display font-black text-lg text-navy-900 mb-1">Demande reçue !</h3>
                    <p className="text-gray-500 text-sm">Un plombier vous rappelle en moins de 5 minutes.</p>
                    <button onClick={() => setStatus('idle')} className="mt-4 text-sm text-red-600 hover:underline font-semibold">
                      Nouvelle demande
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
