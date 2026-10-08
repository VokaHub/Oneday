import { ArrowUpRight } from 'lucide-react';

interface CommunitySectionProps {
  onJoinWhatsApp?: () => void;
}

export default function CommunitySection({}: CommunitySectionProps) {
  const INSTAGRAM_URL = 'https://instagram.com/oneday.gt';
  const COMMUNITY_IMAGE_URL = 'https://res.cloudinary.com/uelrhbi7/image/upload/v1790938082/WhatsApp_Image_2026-09-30_at_2.19.09_PM.jpg';

  return (
    <section id="comunidad" className="white-section border-t border-zinc-100">
      <div className="section-inner max-w-4xl mx-auto text-center">
        {/* Simple & Clean Header */}
        <div className="max-w-2xl mx-auto mb-5 sm:mb-7">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#182641] tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ¿Eres emprendedor en Guatemala? <span className="text-[#182641] underline decoration-[#dcf816] decoration-4">Únete a la comunidad.</span>
          </h2>
        </div>

        {/* Featured Community Real Photo */}
        <div className="mb-6 sm:mb-8 max-w-3xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-200/80 shadow-lg bg-zinc-50">
          <img
            src={COMMUNITY_IMAGE_URL}
            alt="Comunidad de Emprendedores OneDay Guatemala"
            className="w-full h-auto max-h-[360px] sm:max-h-[460px] object-cover object-center transform transition-transform duration-500 hover:scale-[1.01]"
            loading="lazy"
          />
        </div>

        {/* Action Button: Clean 'Unirme a la comunidad' linking directly to Instagram oneday.gt */}
        <div className="flex justify-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#dcf816] text-[#182641] font-bold text-sm hover:bg-[#eafc45] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
          >
            <span>Unirme a la comunidad</span>
            <ArrowUpRight className="w-4 h-4 text-[#182641] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
