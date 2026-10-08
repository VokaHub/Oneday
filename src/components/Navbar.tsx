import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenApply?: () => void;
  onOpenVerify?: () => void;
}

export default function Navbar({}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const WHATSAPP_NUMBER = '50236723524';

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
            className={`text-xl sm:text-2xl font-extrabold tracking-tight transition-colors flex items-center ${
              scrolled ? 'text-[#182641]' : 'text-white'
            }`}
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="tracking-tight">OneDay</span>
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
          </nav>

          {/* Zone 3: Primary Action (Desktop) */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={handleContactWhatsApp}
              className={`px-5 py-2 text-xs font-bold rounded-full transition-all shadow-sm hover:shadow-md flex items-center gap-1.5 cursor-pointer ${
                scrolled
                  ? 'bg-[#182641] text-[#dcf816] hover:bg-[#223559]'
                  : 'bg-[#dcf816] text-[#182641] hover:bg-[#eafc45]'
              }`}
            >
              <span>Contacto</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile menu trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
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
            </div>

            <div className="pt-4 border-t border-zinc-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleContactWhatsApp();
                }}
                className="w-full py-3 px-4 text-xs font-bold rounded-full bg-[#dcf816] text-[#182641] flex items-center justify-center gap-2 hover:bg-[#eafc45] cursor-pointer"
              >
                <span>Contacto</span>
                <ArrowUpRight className="w-4 h-4 text-[#182641]" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
