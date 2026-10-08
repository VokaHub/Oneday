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
            <p className="eyebrow reveal is-visible">¿QUIERES HACER CRECER TU EMPRENDIMIENTO?</p>
            <h1 className="display hero-title reveal is-visible">
              Deja de emprender solo.{' '}
              <span>Sé parte de nuestra agencia para emprendedores verificados en Guatemala.</span>
            </h1>
            <div className="hero-actions reveal">
              <a href="#trust" className="flex items-center gap-2 group">
                <span>Vuélvete verificado</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 02: EDITORIAL INTRO - REPUTATION STATEMENT & GRAVITY TAGS */}
        <section id="editorial" className="white-section editorial-intro">
          <div className="section-inner text-center">
            {/* THE CORE EDITORIAL STATEMENT - CENTERED */}
            <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
              <p className="statement display reveal text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#182641] text-center">
                La reputación habla más fuerte que mil palabras, pero construirla toma tiempo y, mientras pasa el tiempo,
                pierdes clientes.
              </p>
            </div>

            {/* GRAVITY TAGS PLACED BELOW THE TEXT */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
              <span
                style={{ backgroundColor: '#00bf93' }}
                className="px-3.5 sm:px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-2 select-none hover:scale-105 transition-transform"
              >
                Me van a estafar.
              </span>
              <span
                style={{ backgroundColor: '#4c4dc3' }}
                className="px-3.5 sm:px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 rotate-2 select-none hover:scale-105 transition-transform"
              >
                ¿Por qué tiene tan poquitos seguidores?
              </span>
              <span
                style={{ backgroundColor: '#005057' }}
                className="px-3.5 sm:px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-1 select-none hover:scale-105 transition-transform"
              >
                Su publicidad no se ve profesional.
              </span>
              <span
                style={{ backgroundColor: '#182641' }}
                className="px-3.5 sm:px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 rotate-3 select-none hover:scale-105 transition-transform"
              >
                ¿Aún no tienes un equipo?
              </span>
              <span
                style={{ backgroundColor: '#00bf93' }}
                className="px-3.5 sm:px-4 py-2 rounded-full shadow-sm text-xs sm:text-[13px] font-bold text-white border border-black/5 -rotate-2 select-none hover:scale-105 transition-transform"
              >
                Tiene una buena idea, pero no tiene contactos.
              </span>
            </div>
          </div>
        </section>

        {/* TRUST INTRO (COLOR SECTION) - NOW ANSWERS THE REPUTATION NEED DIRECTLY */}
        <section id="trust" className="trust-intro color-section">
          <div className="section-inner">
            <p className="eyebrow reveal">¿QUÉ SIGNIFICA ESTAR VERIFICADO POR ONEDAY?</p>
            <h2 className="display reveal">La confianza que tus clientes merecen.</h2>
          </div>
        </section>

        {/* TRUST POINTS (WHITE SECTION - UNBOXED EDITORIAL FORMAT) */}
        <section className="white-section trust-cards">
          <div className="section-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12">
              {/* Trust 1: Pagos Seguros */}
              <div className="flex flex-col items-start reveal group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconPagosSeguros className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Pagos Seguros
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Tus pagos son gestionados a través de OneDay para crear una experiencia más segura y organizada para
                    ambas partes.
                  </p>
                </div>
              </div>

              {/* Trust 2: Emprendimiento Verificado */}
              <div className="flex flex-col items-start reveal delay-1 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconEmprendimientoVerificado className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Emprendimiento Verificado
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Cada emprendedor y proyecto pasa por un proceso de revisión antes de convertirse en OneDay Verified.
                  </p>
                </div>
              </div>

              {/* Trust 3: Calidad Verificada */}
              <div className="flex flex-col items-start reveal delay-2 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconCalidadVerificada className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Calidad Verificada
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Evaluamos cada proyecto según nuestros criterios de representación para mantener una red en la que se pueda confiar.
                  </p>
                </div>
              </div>

              {/* Trust 4: Operaciones Gestionadas */}
              <div className="flex flex-col items-start reveal delay-0 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconOperacionesGestionadas className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Operaciones Gestionadas
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Centralizamos cobros, reservas, agendas y atención al cliente a través de OneDay. El cliente tiene un respaldo formal y seguro, y tú te dedicas a tu negocio sin enredos.
                  </p>
                </div>
              </div>

              {/* Trust 5: Todo en un Solo Lugar */}
              <div className="flex flex-col items-start reveal delay-1 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconTodoEnUnLugar className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Todo en un Solo Lugar
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Tus clientes tienen un solo punto de contacto en el que pueden confiar, sin tener que escribirle a 10,000
                    páginas diferentes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GROWTH INTRO (COLOR SECTION) - NOW LEADS INTO THE AGENCY INFRASTRUCTURE */}
        <section id="growth" className="growth-intro color-section">
          <div className="section-inner text-left">
            <p className="eyebrow reveal">CRECE CON PERSONAS QUE SE PREOCUPAN POR TU CRECIMIENTO</p>
            <h2 className="display reveal max-w-4xl">One Day es la primera agencia para emprendedores verificados en Guatemala.</h2>
          </div>
        </section>

        {/* GET ONEDAY VERIFIED / FEATURES (UNBOXED EDITORIAL FORMAT) */}
        <section id="verified" className="white-section features">
          <div className="section-inner">
            <div className="section-heading reveal mb-6 sm:mb-8">
              <p className="eyebrow">OBTÉN LA VERIFICACIÓN ONEDAY</p>
              <p>
                Obtener la verificación One Day te posiciona como emprendedor de confianza frente a nuestra comunidad de clientes potenciales y te da acceso a las herramientas que necesitas para hacer crecer tu negocio y mantener tu independencia.
              </p>
            </div>

            {/* GOOGLE WORKSPACE STYLE COMPARISON CARDS (Q250/mes vs Hacerlo por tu cuenta) */}
            <PricingComparison onApplyWhatsApp={handleApplyWhatsApp} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-12 gap-y-8 sm:gap-y-12 mt-12 sm:mt-16">
              {/* Card 1: Verificación OneDay */}
              <div className="flex flex-col items-start reveal delay-0 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconVerificacionOneDay className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Verificación OneDay
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Es un sello que va a mostrar que tu negocio ha sido revisado por OneDay y cumple con nuestros estándares de confianza y representación.
                  </p>
                </div>
              </div>

              {/* Card 2: Programas de Crecimiento */}
              <div className="flex flex-col items-start reveal delay-1 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconProgramasCrecimiento className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Programas de Crecimiento
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Publicidad en todas nuestras plataformas sin inversión para ayudarte a conseguir clientes y ventas reales.
                  </p>
                </div>
              </div>

              {/* Card 3: Red OneDay */}
              <div className="flex flex-col items-start reveal delay-2 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconRedOneDay className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Red OneDay
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Sé parte de una comunidad de profesionales, creadores, espacios y marcas verificadas.
                  </p>
                </div>
              </div>

              {/* Card 4: Gestión de Negocio */}
              <div className="flex flex-col items-start reveal delay-0 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconGestionNegocio className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Gestión de Negocio
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Delega los cobros, reservas, agendas y comunicación con clientes a One Day para que tú solo te dediques a lo que mejor sabes hacer: emprender.
                  </p>
                </div>
              </div>

              {/* Card 5: Oportunidades Comerciales */}
              <div className="flex flex-col items-start reveal delay-1 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconOportunidadesComerciales className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Oportunidades Comerciales
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Buscamos activamente oportunidades comerciales, alianzas y colaboraciones que puedan ayudar a impulsar tu negocio.
                  </p>
                </div>
              </div>

              {/* Card 6: Asesoría Experta */}
              <div className="flex flex-col items-start reveal delay-2 group">
                <div className="mb-3.5 sm:mb-4 flex items-center justify-start">
                  <IconAsesoriaExperta className="w-11 h-11 sm:w-12 sm:h-12 transition-transform group-hover:scale-105" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#182641] tracking-tight leading-snug mb-2">
                    Asesoría Experta
                  </h3>
                  <p className="text-[15px] sm:text-base text-slate-600 font-normal leading-relaxed">
                    Un equipo que te asesora durante todo el proceso y te ayuda a tomar mejores decisiones para avanzar con tu
                    negocio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FUTURE (COLOR SECTION) */}
        <section id="futuro" className="future color-section">
          <div className="section-inner">
            <p className="eyebrow reveal">LA CARRERA DEL FUTURO</p>
            <h2 className="display reveal">
              En Guatemala, 1 de cada 4 adultos está iniciando o dirigiendo un negocio nuevo.
            </h2>
            <div className="future-copy reveal">
              <p>Creemos en el emprendimiento y en todo lo que puede crear.</p>
              <p>OneDay está construido para quienes eligen el emprendimiento como carrera.</p>
              <p>
                Creemos que quienes eligen este camino merecen la infraestructura, el apoyo y las oportunidades necesarias
                para construirlo y hacerlo crecer.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION: COMMUNITY & NETWORKING */}
        <CommunitySection onJoinWhatsApp={handleContactWhatsApp} />

        {/* SECTION: SIMPLE CONTACT */}
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
