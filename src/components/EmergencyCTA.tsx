import { Phone, Zap } from 'lucide-react';
import { useScrollAnimationMultiple } from '../hooks/useScrollAnimation';

export default function EmergencyCTA() {
  const { ref } = useScrollAnimationMultiple();

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl px-6 py-14 sm:py-16 sm:px-12 text-center"
          style={{
            background: 'linear-gradient(135deg, #c0392b 0%, #e53935 40%, #f05a5a 100%)',
          }}
        >
          {/* Radial light accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 70% at 65% 40%, rgba(255,130,130,0.22) 0%, transparent 65%)',
            }}
          />

          <div className="relative flex flex-col items-center gap-0">
            {/* Lightning bolt badge */}
            <div className="animate-on-scroll mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.30)' }}
              >
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Headline */}
            <h2 className="animate-on-scroll delay-100 font-display font-black text-white text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight mb-4 max-w-2xl">
              Fuite, dégât des eaux, panne ?&nbsp;Un plombier
              <br />chez vous sous 30&nbsp;minutes.
            </h2>

            {/* City subtitle */}
            <p className="animate-on-scroll delay-200 text-white/75 text-sm sm:text-base mb-10 tracking-wide">
              Mâcon · Chalon-sur-Saône · Tournus · Cluny · Le Creusot · toute la Saône-et-Loire.
            </p>

            {/* Phone pill button — single, white, large */}
            <div className="animate-on-scroll delay-300">
              <a
                href="tel:+33605741915"
                className="group inline-flex items-center gap-3 bg-white text-red-600 font-bold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:bg-red-50"
              >
                <Phone
                  className="w-5 h-5 text-red-500 transition-transform duration-200 group-hover:scale-110"
                  strokeWidth={2.5}
                />
                06 05 74 19 15
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
