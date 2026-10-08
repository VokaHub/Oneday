import { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

interface ObstacleStageProps {
  onContactClick?: (hurdle?: string) => void;
}

interface ObstacleTag {
  id: number;
  text: string;
  bg: string;
  textColor: string;
  // Natural tumbled rotation
  rotation: number;
}

// 8 punchy hurdles with user's exact requested colors: #00bf93, #0a0f1d (negro), #005057, #4c4dc3
// Rendered settled by gravity, tumbled organically together at the bottom
const OBSTACLES: ObstacleTag[] = [
  { id: 1, text: 'Pocos seguidores', bg: '#00bf93', textColor: '#ffffff', rotation: -3 },
  { id: 2, text: 'Sin presupuesto publicitario', bg: '#0a0f1d', textColor: '#ffffff', rotation: 2 },
  { id: 3, text: 'No sé vender', bg: '#4c4dc3', textColor: '#ffffff', rotation: -2 },
  { id: 4, text: 'Falta de tiempo', bg: '#005057', textColor: '#ffffff', rotation: 3 },
  { id: 5, text: 'Cobrar me quita tiempo', bg: '#00bf93', textColor: '#ffffff', rotation: -1 },
  { id: 6, text: 'Sin equipo ni contactos', bg: '#0a0f1d', textColor: '#ffffff', rotation: 2 },
  { id: 7, text: '¿Cómo empezar a crecer?', bg: '#4c4dc3', textColor: '#ffffff', rotation: -3 },
  { id: 8, text: 'Miedo al fracaso', bg: '#005057', textColor: '#ffffff', rotation: 1 },
];

export default function ObstacleStage({ onContactClick }: ObstacleStageProps) {
  const [selectedHurdle, setSelectedHurdle] = useState<string | null>(null);

  const WHATSAPP_NUMBER = '50236723524';

  const handleContact = (hurdle?: string | null) => {
    const targetHurdle = hurdle || selectedHurdle;
    if (onContactClick) {
      onContactClick(targetHurdle || undefined);
    } else {
      const msg = targetHurdle
        ? `Hola OneDay, quiero resolver este obstáculo en mi emprendimiento: "${targetHurdle}"`
        : 'Hola OneDay, quisiera ponerme en contacto.';
      const text = encodeURIComponent(msg);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
    }
  };

  const handleSelect = (text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedHurdle === text) {
      handleContact(text);
    } else {
      setSelectedHurdle(text);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative">
      {/* SUBTLE AMBIENT GLOW */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 sm:w-[500px] h-60 bg-[#00bf93]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-60 sm:w-80 h-60 bg-[#4c4dc3]/15 blur-3xl pointer-events-none" />

      {/* TOP: MASSIVE CLEAN HEADLINE & ACTION */}
      <div className="relative z-10 flex flex-col items-center text-center mb-8 sm:mb-12">
        {/* ULTRA BOLD CONTACT US */}
        <h2
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase text-white leading-none mb-6 sm:mb-8 select-none"
          style={{ fontFamily: 'var(--font-display, sans-serif)' }}
        >
          CONTACT US
        </h2>

        {/* PRIMARY ACTION BUTTON: 'Escríbenos' / 'Hablemos' (Sin recarga/reload) */}
        <div className="flex items-center w-full sm:w-auto justify-center">
          <button
            type="button"
            onClick={() => handleContact(selectedHurdle)}
            className="w-full sm:w-auto px-8 sm:px-12 py-3.5 sm:py-4 rounded-full bg-[#dcf816] text-[#182641] font-black text-sm sm:text-base hover:bg-[#eafc45] transition-all shadow-xl hover:shadow-[#dcf816]/25 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#182641] fill-[#182641]/10 shrink-0" />
            <span className="truncate">
              {selectedHurdle ? `Resolver "${selectedHurdle}"` : 'Escríbenos'}
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#182641] shrink-0" />
          </button>
        </div>
      </div>

      {/* PILE OF OBSTACLES SETTLED BY GRAVITY TOGETHER AT THE BOTTOM
          Centered, clustered organically, responsive across mobile and desktop */}
      <div
        onClick={() => setSelectedHurdle(null)}
        className="w-full pt-4 pb-2 flex flex-col items-center select-none"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
          {OBSTACLES.map((obs) => {
            const isSelected = selectedHurdle === obs.text;

            return (
              <button
                key={obs.id}
                type="button"
                onClick={(e) => handleSelect(obs.text, e)}
                style={{
                  backgroundColor: obs.bg,
                  color: obs.textColor,
                  transform: `rotate(${obs.rotation}deg) scale(${isSelected ? 1.05 : 1})`,
                }}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] md:text-sm font-bold shadow-md whitespace-nowrap transition-transform duration-150 hover:scale-105 active:scale-95 border border-white/10 cursor-pointer ${
                  isSelected
                    ? 'ring-4 ring-[#dcf816] shadow-xl shadow-[#dcf816]/30 z-20'
                    : 'hover:shadow-lg'
                }`}
              >
                {obs.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
