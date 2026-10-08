import { useState } from 'react';
import { Check, User, ShieldCheck } from 'lucide-react';

interface PricingComparisonProps {
  onApplyWhatsApp: () => void;
}

export default function PricingComparison({ onApplyWhatsApp }: PricingComparisonProps) {
  const [mobilePlan, setMobilePlan] = useState<'oneday' | 'solo'>('oneday');

  return (
    <div className="w-full my-6 sm:my-8 max-w-4xl mx-auto text-left">
      {/* MOBILE SWITCH: ON/OFF STYLE PILL */}
      <div className="mb-5 flex md:hidden items-center justify-center">
        <div className="inline-flex p-1 bg-gray-200/80 rounded-full text-xs font-semibold">
          <button
            type="button"
            onClick={() => setMobilePlan('oneday')}
            className={`px-4 py-1.5 rounded-full transition-all ${
              mobilePlan === 'oneday'
                ? 'bg-black text-white shadow-xs'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Membresía OneDay
          </button>
          <button
            type="button"
            onClick={() => setMobilePlan('solo')}
            className={`px-4 py-1.5 rounded-full transition-all ${
              mobilePlan === 'solo'
                ? 'bg-white text-black shadow-xs'
                : 'text-gray-600 hover:text-black'
            }`}
          >
            Hacerlo solo
          </button>
        </div>
      </div>

      {/* OUTER LIGHT GRAY CONTAINER - MINIMALIST TECH */}
      <div className="bg-[#f3f4f6] p-3 sm:p-5 md:p-7 rounded-[28px] sm:rounded-[36px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 items-stretch">
          
          {/* CARD 1: HACERLO SOLO */}
          <div
            className={`bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-gray-200/80 shadow-2xs ${
              mobilePlan === 'oneday' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div>
              {/* TOP ICON BOX */}
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white mb-6">
                <User className="w-5 h-5 text-gray-200" />
              </div>

              {/* TITLE & SUBTITLE */}
              <h4 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2">
                Hacerlo solo
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 mb-6 font-normal leading-relaxed">
                Más de 20 horas semanales perdidas en gestión y cobros, gasto en contrataciones independientes.
              </p>

              {/* PRICE */}
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                  Q4,850
                </span>
                <span className="text-xl font-normal text-gray-400">.00</span>
                <span className="text-xs sm:text-sm text-gray-500 ml-1.5 font-medium">/Mes est.</span>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-gray-100 my-6" />

              {/* SECTION LABEL */}
              <p className="text-xs font-bold text-black mb-4">
                Gastos independientes estimados:
              </p>

              {/* FEATURE LIST */}
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Agencia o freelance: Q2,500 o más / mes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Asistente para chats y cobros (~Q1,200)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Asesoría o mentoría externa (~Q650)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Eventos y networking por separado (~Q500)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-gray-400 shrink-0" />
                  <span>Sin respaldo ni sello de confianza</span>
                </li>
              </ul>
            </div>

            {/* ESPACIO EN BLANCO AL PIE (SIN BOTÓN) */}
            <div className="mt-8 pt-4 hidden md:block">
              {/* Espacio reservado para alineación simétrica en escritorio */}
            </div>
          </div>

          {/* CARD 2: MEMBRESÍA ONEDAY */}
          <div
            className={`bg-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 flex flex-col justify-between border border-gray-200/80 shadow-2xs ${
              mobilePlan === 'solo' ? 'hidden md:flex' : 'flex'
            }`}
          >
            <div>
              {/* TOP ICON BOX */}
              <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white mb-6">
                <ShieldCheck className="w-5 h-5 text-gray-200" />
              </div>

              {/* TITLE */}
              <h4 className="text-xl sm:text-2xl font-bold text-black tracking-tight mb-2">
                Membresía OneDay
              </h4>

              {/* PRICE */}
              <div className="flex items-baseline gap-1 mb-6 mt-3">
                <span className="text-4xl sm:text-5xl font-extrabold text-black tracking-tight">
                  Q250
                </span>
                <span className="text-xl font-normal text-gray-400">.00</span>
                <span className="text-xs sm:text-sm text-gray-500 ml-1.5 font-medium">/Mes</span>
              </div>

              {/* DIVIDER */}
              <div className="border-t border-gray-100 my-6" />

              {/* SECTION LABEL */}
              <p className="text-xs font-bold text-black mb-4">
                Qué incluye:
              </p>

              {/* FEATURE LIST EN ORDEN EXACTO */}
              <ul className="space-y-3 text-xs sm:text-sm text-gray-700">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0" />
                  <span>Insignia y código de verificación oficial</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0" />
                  <span>Acceso a programa de publicidad sin inversión</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0" />
                  <span>Equipo de gestión de chats, agendas y cobros seguros</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0" />
                  <span>Asesoría comercial experta continua</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-black shrink-0" />
                  <span>Acceso a eventos y grupo de comunidad emprendedora</span>
                </li>
              </ul>
            </div>

            {/* ACTION BUTTON */}
            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={onApplyWhatsApp}
                className="w-full py-3.5 px-6 rounded-full bg-black hover:bg-gray-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow-md cursor-pointer text-center active:scale-98"
              >
                Obtener Membresía OneDay
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
