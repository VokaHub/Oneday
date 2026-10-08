import { X, ShieldCheck, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TermsModal({ isOpen, onClose }: TermsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-zinc-100 max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900" style={{ fontFamily: 'var(--font-display)' }}>
                Términos y Condiciones
              </h3>
              <p className="text-xs text-zinc-500">OneDay Guatemala · Distrito Miraflores, Zona 11</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto py-5 space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed pr-2">
          <section>
            <h4 className="font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              1. Criterios de Verificación OneDay
            </h4>
            <p>
              El sello y código <strong>OneDay Verified</strong> certifican que el emprendimiento ha sido sometido a
              nuestro protocolo de revisión de identidad comercial, buenas prácticas de atención, estándares de calidad
              y canales de cobro seguro en la República de Guatemala.
            </p>
          </section>

          <section>
            <h4 className="font-bold text-zinc-900 mb-1">2. Independencia del Emprendedor</h4>
            <p>
              OneDay actúa como plataforma de aceleración, infraestructura y representación. Los emprendedores
              verificados mantienen el 100% de la propiedad intelectual, control operativo y autonomía sobre sus marcas,
              productos y servicios.
            </p>
          </section>

          <section>
            <h4 className="font-bold text-zinc-900 mb-1">3. Transparencia y Cobros</h4>
            <p>
              Las operaciones facilitadas mediante la infraestructura OneDay son gestionadas de manera transparente,
              garantizando trazabilidad en pagos y reservas tanto para los clientes finales como para el negocio
              verificado.
            </p>
          </section>

          <section>
            <h4 className="font-bold text-zinc-900 mb-1">4. Ubicación y Jurisdicción</h4>
            <p>
              Nuestras oficinas centrales operan desde el <strong>Distrito Miraflores, Zona 11, Ciudad de Guatemala</strong>.
              Cualquier consulta o soporte presencial se gestiona mediante previa cita a través de nuestros canales oficiales.
            </p>
          </section>
        </div>

        <div className="pt-4 border-t border-zinc-100 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-zinc-900 text-white text-xs font-semibold rounded-xl hover:bg-zinc-800 transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
}
