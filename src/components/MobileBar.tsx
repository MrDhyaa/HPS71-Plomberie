import { Phone, MessageSquare, ClipboardList } from 'lucide-react';

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href="tel:+33605741915"
          className="flex flex-col items-center justify-center gap-1 py-3.5 px-2 bg-red-600 hover:bg-red-700 transition-colors"
        >
          <Phone className="w-5 h-5 text-white" />
          <span className="text-white text-xs font-bold">Appeler</span>
        </a>
        <a
          href="https://wa.me/33605741915?text=Bonjour%20PLOMBIER%20SERVICE%2C%20je%20souhaite%20un%20devis%20gratuit."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 py-3.5 px-2 transition-colors"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageSquare className="w-5 h-5 text-white" />
          <span className="text-white text-xs font-bold">WhatsApp</span>
        </a>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center justify-center gap-1 py-3.5 px-2 bg-navy-900 hover:bg-navy-800 transition-colors"
        >
          <ClipboardList className="w-5 h-5 text-white" />
          <span className="text-white text-xs font-bold">Devis</span>
        </button>
      </div>
    </div>
  );
}
