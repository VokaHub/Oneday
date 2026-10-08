import { useState } from 'react';
import Navbar from './components/Navbar';
import ContactSection from './components/ContactSection';
import PricingComparison from './components/PricingComparison';
import VerificationModal from './components/VerificationModal';
import ApplyModal from './components/ApplyModal';
import TermsModal from './components/TermsModal';
import CommunitySection from './components/CommunitySection';
import { MapPin, ArrowDown, ArrowUpRight } from 'lucide-react';
import {
  IconPagosSeguros,
  IconEmprendimientoVerificado,
  IconCalidadVerificada,
  IconOperacionesGestionadas,
  IconTodoEnUnLugar,
  IconVerificacionOneDay,
  IconProgramasCrecimiento,
  IconRedOneDay,
  IconGestionNegocio,
  IconOportunidadesComerciales,
  IconAsesoriaExperta,
} from './components/DualToneIcons';

export default function App() {
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [selectedHurdle, setSelectedHurdle] = useState<string | undefined>(undefined);

  const WHATSAPP_NUMBER = '50236723524';

  const handleApplyWhatsApp = () => {
    const text = encodeURIComponent('Hola OneDay, quiero aplicar.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleVerifyWhatsApp = () => {
    const text = encodeURIComponent('Hola OneDay, deseo verificar el código de un emprendedor.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleContactWhatsApp = () => {
    const text = encodeURIComponent('Hola OneDay, quisiera ponerme en contacto.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-[#182641] selection:bg-[#182641] selection:text-[#dcf816]">
      {/* Top Navigation Bar */}
      <Navbar
        onOpenApply={() => handleApplyWhatsApp()}
        onOpenVerify={() => handleVerifyWhatsApp()}
      />

      <main>
        {/* SECTION 01: HERO */}
        <section className="hero color-section">
          <div className="section-inner hero-inner">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-semibold text-white/90 mb-5 reveal is-visible">
              <span className="w-2 h-2 rounded-full bg-[#dcf816] animate-pulse"></span>
              <span>Guatemala · Agencia para Emprendedores Verificados</span>
            </div>
            <p className="eyebrow reveal is-visible">¿QUIERES HACER CRECER TU EMPRENDIMIENTO?</p>
            <h1 className="display hero-title reveal is-visible">
              Deja de emprender solo.{' '}
              <span>Sé parte de nuestra agencia para emprendedores verificados en Guatemala.</span>
            </h1>
            <div className="hero-actions reveal flex flex-wrap items-center gap-3 mt-2">
              <a href="#trust" className="flex items-center gap-2 group">
                <span>Vuélvete verificado</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
              <a
                href="#planes"
                className="inline-flex items-center justify-center gap-1.5 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all backdrop-blur-xs"
              >
                <span>Ver membresía (Q250/mes)</span>
                <ArrowUpRight className="w-4 h-4 opacity-75" />
              </a>
            </div>

            {/* Micro Trust Proofs */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 text-xs sm:text-[13px] font-medium text-white/75 pt-6 border-t border-white/10">
              <span className="flex items-center gap-1.5">
                <span className="text-[#dcf816] font-bold">✓</span> Cobros y reservas gestionados
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#dcf816] font-bold">✓</span> Publicidad activa sin inversión
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-[#dcf816] font-bold">✓</span> Insignia y código oficial de verificación
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 02: EDITORIAL INTRO - REPUTATION STATEMENT & GRAVITY TAGS */}
        <section id="editorial" className="white-section editorial-intro border-b border-slate-100">
          <div className="section-inner text-center">
            {/* THE CORE EDITORIAL STATEMENT - CENTERED */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              <p className="statement display reveal text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#182641] text-center">
                La reputación habla más fuerte que mil palabras, pero construirla toma tiempo y, mientras pasa el tiempo,
                pierdes clientes.
              </p>
            </div>

            {/* CONTEXT LABEL */}
            <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 select-none">
              Las dudas que tus clientes tienen en silencio antes de comprar:
            </p>

            {/* GRAVITY TAGS */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-2xl mx-auto">
              <span
                style={{ backgroundColor: '#00bf93' }}
                className="px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-2 select-none hover:scale-105 transition-transform"
              >
                Me van a estafar.
              </span>
              <span
                style={{ backgroundColor: '#4c4dc3' }}
                className="px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 rotate-2 select-none hover:scale-105 transition-transform"
              >
                ¿Por qué tiene tan poquitos seguidores?
              </span>
              <span
                style={{ backgroundColor: '#005057' }}
                className="px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-1 select-none hover:scale-105 transition-transform"
              >
                Su publicidad no se ve profesional.
              </span>
              <span
                style={{ backgroundColor: '#182641' }}
                className="px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 rotate-3 select-none hover:scale-105 transition-transform"
              >
                ¿Aún no tienes un equipo?
              </span>
              <span
                style={{ backgroundColor: '#00bf93' }}
                className="px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-2 select-none hover:scale-105 transition-transform"
              >
                Tiene una buena idea, pero no tiene contactos.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION 03: ¿QUÉ SIGNIFICA ESTAR VERIFICADO POR ONEDAY? (UNIFIED TRUST SECTION) */}
        <section id="trust" className="bg-[#f8fafc] border-b border-slate-200/80 py-16 sm:py-24">
          <div className="section-inner max-w-6xl mx-auto">
            {/* SECTION HEADER */}
            <div className="max-w-3xl mb-10 sm:mb-14">
              <p className="eyebrow text-slate-500 font-bold">¿QUÉ SIGNIFICA ESTAR VERIFICADO POR ONEDAY?</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182641] tracking-tight leading-tight">
                La confianza que tus clientes merecen.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
                Convertimos la desconfianza inicial en una ventaja competitiva inmediata para tu negocio.
              </p>
            </div>

            {/* TRUST CARDS (BALANCED 3 + 2 GRID) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6">
              {/* Trust 1: Pagos Seguros */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#182641]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconPagosSeguros className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Pagos Seguros
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Tus pagos son gestionados a través de OneDay para crear una experiencia más segura y organizada para
                    ambas partes.
                  </p>
                </div>
              </div>

              {/* Trust 2: Emprendimiento Verificado */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#182641]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconEmprendimientoVerificado className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Emprendimiento Verificado
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Cada emprendedor y proyecto pasa por un proceso de revisión antes de convertirse en OneDay Verified.
                  </p>
                </div>
              </div>

              {/* Trust 3: Calidad Verificada */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#182641]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconCalidadVerificada className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Calidad Verificada
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Evaluamos cada proyecto según nuestros criterios de representación para mantener una red en la que se pueda confiar.
                  </p>
                </div>
              </div>

              {/* Trust 4: Operaciones Gestionadas */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#182641]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconOperacionesGestionadas className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Operaciones Gestionadas
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Centralizamos cobros, reservas, agendas y atención al cliente a través de OneDay. El cliente tiene un respaldo formal y seguro, y tú te dedicas a tu negocio sin enredos.
                  </p>
                </div>
              </div>

              {/* Trust 5: Todo en un Solo Lugar */}
              <div className="lg:col-span-3 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-[#182641]/30 hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <IconTodoEnUnLugar className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Todo en un Solo Lugar
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Tus clientes tienen un solo punto de contacto en el que pueden confiar, sin tener que escribirle a 10,000
                    páginas diferentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04: LA AGENCIA PARA EMPRENDEDORES & 6 HERRAMIENTAS DE CRECIMIENTO */}
        <section id="verified" className="white-section py-16 sm:py-24">
          <div className="section-inner max-w-6xl mx-auto">
            {/* SECTION HEADER */}
            <div className="max-w-4xl mb-12 sm:mb-16">
              <p className="eyebrow text-slate-500 font-bold">CRECE CON PERSONAS QUE SE PREOCUPAN POR TU CRECIMIENTO</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#182641] tracking-tight leading-tight mb-4">
                One Day es la primera agencia para emprendedores verificados en Guatemala.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Obtener la verificación One Day te posiciona como emprendedor de confianza frente a nuestra comunidad de clientes potenciales y te da acceso a las herramientas que necesitas para hacer crecer tu negocio y mantener tu independencia.
              </p>
            </div>

            {/* 6 VALUE PILLARS (BALANCED 3x2 GRID) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
              {/* Card 1: Verificación OneDay */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconVerificacionOneDay className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Verificación OneDay
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Es un sello que va a mostrar que tu negocio ha sido revisado por OneDay y cumple con nuestros estándares de confianza y representación.
                  </p>
                </div>
              </div>

              {/* Card 2: Programas de Crecimiento */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconProgramasCrecimiento className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Programas de Crecimiento
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Publicidad activa de tu negocio en todas las plataformas de OneDay y campañas comerciales grupales para generarte ventas sin inversión.
                  </p>
                </div>
              </div>

              {/* Card 3: Red OneDay */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconRedOneDay className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Red OneDay
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Sé parte de una comunidad de profesionales, creadores, espacios y marcas verificadas.
                  </p>
                </div>
              </div>

              {/* Card 4: Gestión de Negocio */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconGestionNegocio className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Gestión de Negocio
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Delega los cobros, reservas, agendas y comunicación con clientes a One Day para que tú solo te dediques a lo que mejor sabes hacer: emprender.
                  </p>
                </div>
              </div>

              {/* Card 5: Oportunidades Comerciales */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconOportunidadesComerciales className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Oportunidades Comerciales
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Buscamos activamente oportunidades comerciales, alianzas y colaboraciones que puedan ayudar a impulsar tu negocio.
                  </p>
                </div>
              </div>

              {/* Card 6: Asesoría Experta */}
              <div className="bg-[#f8fafc] rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-2xs hover:border-[#182641]/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform shadow-2xs">
                    <IconAsesoriaExperta className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Asesoría Experta
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 font-normal leading-relaxed">
                    Un equipo que te asesora durante todo el proceso y te ayuda a tomar mejores decisiones para avanzar con tu negocio.
                  </p>
                </div>
              </div>
            </div>

            {/* SECTION 05: PRICING COMPARISON - NATURAL HIGH-CONVERSION POSITIONING */}
            <div id="planes" className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-slate-200/80">
              <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#182641]/5 text-[#182641] uppercase tracking-wider mb-3">
                  Transparencia de inversión
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#182641] tracking-tight">
                  Todo incluido por solo Q250/mes
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-2 font-normal">
                  Compara lo que gastarías contratando cada servicio de forma individual frente a tener la membresía completa de OneDay.
                </p>
              </div>

              <PricingComparison onApplyWhatsApp={handleApplyWhatsApp} />
            </div>
          </div>
        </section>

        {/* SECTION 06: FUTURE / LA CARRERA DEL FUTURO */}
        <section id="futuro" className="future color-section py-16 sm:py-24">
          <div className="section-inner max-w-5xl mx-auto">
            <p className="eyebrow reveal">LA CARRERA DEL FUTURO</p>
            <h2 className="display reveal text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-8">
              En Guatemala, 1 de cada 4 adultos está iniciando o dirigiendo un negocio nuevo.
            </h2>
            <div className="future-copy reveal border-l-2 border-[#dcf816] pl-5 sm:pl-7 space-y-4 max-w-3xl">
              <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed">
                Creemos en el emprendimiento y en todo lo que puede crear.
              </p>
              <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed">
                OneDay está construido para quienes eligen el emprendimiento como carrera.
              </p>
              <p className="text-base sm:text-xl text-white/95 font-medium leading-relaxed">
                Creemos que quienes eligen este camino merecen la infraestructura, el apoyo y las oportunidades necesarias
                para construirlo y hacerlo crecer.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 07: COMMUNITY & NETWORKING */}
        <CommunitySection onJoinWhatsApp={handleContactWhatsApp} />

        {/* SECTION 08: SIMPLE CONTACT */}
        <ContactSection onContactClick={handleContactWhatsApp} />
      </main>

      {/* QUIET EDITORIAL FOOTER */}
      <footer className="border-t border-zinc-200 py-8 pb-12 sm:py-10 sm:pb-10 px-4 sm:px-8 bg-[#fafbfe] text-zinc-600 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
            <span className="font-extrabold text-[#182641] tracking-tight text-lg" style={{ fontFamily: 'var(--font-display)' }}>
              OneDay
            </span>
            <span className="hidden sm:inline text-zinc-400">·</span>
            <span className="text-xs text-zinc-600 flex items-center justify-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-[#182641] inline shrink-0" />
              <span>Somos de Guatemala, Distrito Miraflores Zona 11.</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-zinc-500 font-semibold">
            <button
              onClick={() => setIsTermsOpen(true)}
              className="hover:text-[#182641] transition-colors py-1"
            >
              Términos y Condiciones
            </button>
            <button
              onClick={handleVerifyWhatsApp}
              className="hover:text-[#182641] transition-colors py-1"
            >
              Verificar Código
            </button>
            <button
              onClick={handleContactWhatsApp}
              className="hover:text-[#182641] transition-colors py-1"
            >
              Contáctanos
            </button>
            <span className="text-zinc-400 py-1">© 2026 OneDay GT</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <VerificationModal isOpen={isVerifyOpen} onClose={() => setIsVerifyOpen(false)} />
      <ApplyModal
        isOpen={isApplyOpen}
        onClose={() => setIsApplyOpen(false)}
        defaultHurdle={selectedHurdle}
      />
      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </div>
  );
}
