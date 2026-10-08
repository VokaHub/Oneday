import { ArrowUpRight } from 'lucide-react';

interface ContactSectionProps {
  onContactClick?: () => void;
}

export default function ContactSection({ onContactClick }: ContactSectionProps) {
  const WHATSAPP_NUMBER = '50236723524';

  const handleClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const text = encodeURIComponent('Hola OneDay, quisiera ponerme en contacto.');
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="contact" className="w-full bg-[#182641] text-white py-10 sm:py-12 px-4 sm:px-8 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
        <h2
          className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
          style={{ fontFamily: 'var(--font-display, sans-serif)' }}
        >
          Contáctanos
        </h2>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#dcf816] text-[#182641] font-bold text-sm hover:bg-[#eafc45] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 cursor-pointer"
        >
          <span>Escríbenos</span>
          <ArrowUpRight className="w-4 h-4 text-[#182641]" />
        </button>
      </div>
    </section>
  );
}
