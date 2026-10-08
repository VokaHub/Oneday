import { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenApply?: () => void;
  onOpenVerify?: () => void;
}

export default function Navbar({}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-zinc-200/80 py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Wordmark */}
          <a
            href="#"
            className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors flex items-center gap-2 ${
              scrolled ? 'text-[#182641]' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="tracking-tight">OneDay</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#dcf816] inline-block shadow-sm"></span>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
            <a
              href="#verified"
              className={`transition-colors hover:opacity-100 whitespace-nowrap ${
                scrolled ? 'text-[#182641]/75 hover:text-[#182641]' : 'text-white/85 hover:text-white'
              }`}
            >
              Ser parte de OneDay
            </a>
            <a
              href="#futuro"
              className={`transition-colors hover:opacity-100 whitespace-nowrap ${
                scrolled ? 'text-[#182641]/75 hover:text-[#182641]' : 'text-white/85 hover:text-white'
              }`}
            >
              Nuestra misión
            </a>
            <a
              href="#trust"
              className={`transition-colors hover:opacity-100 whitespace-nowrap ${
                scrolled ? 'text-[#182641]/75 hover:text-[#182641]' : 'text-white/85 hover:text-white'
              }`}
            >
              ¿Qué significa estar verificado por OneDay?
            </a>
            <button
              onClick={handleContactWhatsApp}
              className={`transition-colors hover:opacity-100 whitespace-nowrap text-left ${
                scrolled ? 'text-[#182641]/75 hover:text-[#182641]' : 'text-white/85 hover:text-white'
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Zone 3: Primary Actions (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleVerifyWhatsApp}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all flex items-center gap-1.5 ${
                scrolled
                  ? 'border-zinc-300 text-[#182641] hover:bg-zinc-100'
                  : 'border-white/30 text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-3.5 h-3.5 text-[#dcf816]" />
              <span>Verificar Código</span>
            </button>

            <button
              onClick={handleApplyWhatsApp}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1 hover:scale-105 ${
                scrolled
                  ? 'bg-[#182641] text-[#dcf816] hover:bg-[#223559]'
                  : 'bg-[#dcf816] text-[#182641] hover:bg-[#eafc45]'
              }`}
            >
              <span>Aplicar</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={handleApplyWhatsApp}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full transition-all flex items-center gap-1 ${
                scrolled
                  ? 'bg-[#182641] text-[#dcf816]'
                  : 'bg-[#dcf816] text-[#182641]'
              }`}
            >
              <span>Aplicar</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors ${
                scrolled ? 'text-[#182641]' : 'text-white'
              }`}
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-zinc-200 px-5 py-6 shadow-2xl space-y-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-3 font-medium text-[#182641] text-sm">
              <a
                href="#verified"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#182641] transition-colors"
              >
                Ser parte de OneDay
              </a>
              <a
                href="#futuro"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#182641] transition-colors"
              >
                Nuestra misión
              </a>
              <a
                href="#trust"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 hover:text-[#182641] transition-colors"
              >
                ¿Qué significa estar verificado por OneDay?
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleContactWhatsApp();
                }}
                className="py-2 text-left hover:text-[#182641] transition-colors"
              >
                Contacto
              </button>
            </div>

            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleVerifyWhatsApp();
                }}
                className="w-full py-3 px-4 text-xs font-bold rounded-full border border-zinc-300 text-[#182641] flex items-center justify-center gap-2 hover:bg-zinc-50"
              >
                <Search className="w-4 h-4 text-[#182641]" />
                Verificar Código
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleApplyWhatsApp();
                }}
                className="w-full py-3 px-4 text-xs font-bold rounded-full bg-[#dcf816] text-[#182641] flex items-center justify-center gap-2 hover:bg-[#eafc45]"
              >
                Aplicar ahora
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
