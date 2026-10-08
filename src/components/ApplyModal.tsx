import React, { useState } from 'react';
import { X, Send, CheckCircle, Shield, FileText, Download, Check, ArrowRight, MessageCircle, Mail } from 'lucide-react';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultHurdle?: string;
}

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [downloadedCommitment, setDownloadedCommitment] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    businessDescription: '',
    portfolioLink: '',
    selectedChallenges: [] as string[],
    otherChallenge: '',
    acceptedTerms: true,
  });

  if (!isOpen) return null;

  const WHATSAPP_NUMBER = '50236723524';
  const CONTACT_EMAIL = 'info@vokahub.com';

  const CHALLENGE_OPTIONS = [
    {
      id: 'reputation',
      label: 'Falta de reputación o confianza de clientes (pocos seguidores, dudas al pagar)',
      service: 'Verificación OneDay',
    },
    {
      id: 'growth',
      label: 'Sin presupuesto inicial para publicidad y adquisición de clientes',
      service: 'Programas de Crecimiento',
    },
    {
      id: 'network',
      label: 'Falta de contactos, alianzas comerciales y red de profesionales',
      service: 'Red OneDay',
    },
    {
      id: 'management',
      label: 'Cuello de botella operativo (cobros, reservas y agendas me quitan todo el tiempo)',
      service: 'Gestión de Negocio',
    },
    {
      id: 'opportunities',
      label: 'Falta de oportunidades comerciales y canales de venta estructurados',
      service: 'Oportunidades Comerciales',
    },
    {
      id: 'support',
      label: 'Soledad y falta de un equipo experimentado que me asesore',
      service: 'Asesoría Experta',
    },
    {
      id: 'other',
      label: 'Otro reto particular',
      service: 'Evaluación personalizada',
    },
  ];

  const toggleChallenge = (label: string) => {
    setFormData((prev) => {
      const exists = prev.selectedChallenges.includes(label);
      return {
        ...prev,
        selectedChallenges: exists
          ? prev.selectedChallenges.filter((item) => item !== label)
          : [...prev.selectedChallenges, label],
      };
    });
  };

  const handleQuickWhatsAppApply = () => {
    const text = encodeURIComponent('Hola OneDay, quiero aplicar al 36723524.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
  };

  const handleDownloadCommitment = () => {
    const commitmentText = `========================================================================
ACUERDO INSTITUCIONAL Y CARTA DE COMPROMISO DE POSTULACIÓN
AGENCIA PARA EMPRENDEDORES ONEDAY GUATEMALA
WhatsApp Oficial: +502 3672-3524
Distrito Miraflores, Zona 11, Ciudad de Guatemala
========================================================================

Por medio del presente documento, el postulante declara su voluntad de 
someter su emprendimiento o proyecto al proceso de selección, revisión 
y admisión oficial de OneDay Guatemala.

1. PROCESO DE ADMISIÓN
- Fase 1: Aplicación formal mediante expediente digital.
- Fase 2: Revisión por el comité de representación y cumplimiento.
- Fase 3: Resolución de admisión (las plazas están sujetas a cupo y criterios de calidad).
- Fase 4: Otorgamiento de Verificación OneDay e integración a la infraestructura operativa.

2. COMPROMISOS DEL EMPRENDEDOR POSTULANTE
a) Integridad comercial: Entregar productos y servicios legítimos, veraces y de alta calidad.
b) Transparencia operativa: Respetar los canales de cobro y reservas protegidos por OneDay.
c) Ética y reputación: Proteger la confianza de los consumidores guatemaltecos.

Fecha de emisión: ${new Date().toLocaleDateString('es-GT')}
========================================================================`;

    const blob = new Blob([commitmentText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Carta_Compromiso_OneDay_Guatemala.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setDownloadedCommitment(true);
  };

  const getFormattedDataMessage = () => {
    return `Hola OneDay! Quiero aplicar a la agencia para emprendedores.

*Mis Datos de Postulación:*
• Nombre: ${formData.fullName || 'No especificado'}
• Teléfono: ${formData.phone || 'No especificado'}
• Proyecto: ${formData.businessDescription || 'No especificado'}
• Portafolio/Redes: ${formData.portfolioLink || 'No especificado'}
• Retos principales: ${formData.selectedChallenges.length > 0 ? formData.selectedChallenges.join(', ') : 'No especificado'}`;
  };

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(getFormattedDataMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    setSubmitted(true);
  };

  const handleSendViaEmail = () => {
    const subject = encodeURIComponent(`Postulación OneDay - ${formData.fullName || 'Nuevo Emprendedor'}`);
    const body = encodeURIComponent(getFormattedDataMessage());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-5">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-zinc-200 animate-in fade-in zoom-in-95 duration-200 my-6">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors z-20"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              ¡Datos Enviados Exitosamente!
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-md mx-auto mb-6">
              Tus datos han sido dirigidos a nuestro equipo al WhatsApp <strong>3672-3524</strong>. En breve recibirás confirmación y los siguientes pasos para tu admisión.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleQuickWhatsAppApply}
                className="py-3 px-6 rounded-full bg-[#00BF93] text-white font-semibold text-sm hover:bg-[#00a881] transition-colors flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir Chat de WhatsApp (3672-3524)</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-3 px-6 rounded-full bg-zinc-100 text-zinc-700 font-semibold text-sm hover:bg-zinc-200 transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* DIRECT WHATSAPP ACTION BUTTON */}
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide block">
                  Aplicación Inmediata por WhatsApp
                </span>
                <p className="text-xs text-zinc-600">
                  Envía directamente <strong>"Quiero aplicar"</strong> a nuestro WhatsApp oficial: <strong>3672-3524</strong>
                </p>
              </div>

              <button
                type="button"
                onClick={handleQuickWhatsAppApply}
                className="shrink-0 px-5 py-2.5 rounded-full bg-[#00BF93] text-white text-xs font-bold hover:bg-[#00a881] transition-all flex items-center justify-center gap-1.5 shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quiero aplicar al 36723524</span>
              </button>
            </div>

            {/* PROCESS HEADER */}
            <div className="mb-5 border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2.5 mb-1.5">
                <div className="w-8 h-8 rounded-xl bg-[#4848C0] text-white flex items-center justify-center font-bold">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1A2742]" style={{ fontFamily: 'var(--font-display)' }}>
                    O envía los datos de tu emprendimiento:
                  </h3>
                  <p className="text-xs text-zinc-500">Expediente de postulación para revisión del comité</p>
                </div>
              </div>
            </div>

            {/* FORM */}
            <form onSubmit={handleSendViaWhatsApp} className="space-y-4 text-left">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Morales"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#4848C0] focus:ring-2 focus:ring-[#4848C0]/15"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-700 mb-1">
                    Número de teléfono / WhatsApp (+502) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Ej. 5555-4321"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#4848C0] focus:ring-2 focus:ring-[#4848C0]/15"
                  />
                </div>
              </div>

              {/* Row 2: Business description */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Breve explicación de tu emprendimiento o proyecto *
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="¿Qué vendes o qué servicio ofreces? ¿Quiénes son tus clientes?"
                  value={formData.businessDescription}
                  onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#4848C0] focus:ring-2 focus:ring-[#4848C0]/15 resize-none"
                />
              </div>

              {/* Row 3: Link to CV, Portfolio, or Social Media */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1">
                  Link a CV, Portafolio, Catálogo o Redes Sociales (Opcional)
                </label>
                <input
                  type="text"
                  placeholder="https://instagram.com/tu_marca o link a portafolio"
                  value={formData.portfolioLink}
                  onChange={(e) => setFormData({ ...formData, portfolioLink: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#4848C0] focus:ring-2 focus:ring-[#4848C0]/15"
                />
              </div>

              {/* Row 4: Multiple choice challenges */}
              <div>
                <label className="block text-xs font-bold text-zinc-700 mb-1.5">
                  ¿Cuáles son tus mayores retos en este momento? (Selecciona los que apliquen)
                </label>
                <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
                  {CHALLENGE_OPTIONS.map((opt) => {
                    const isChecked = formData.selectedChallenges.includes(opt.label);
                    return (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => toggleChallenge(opt.label)}
                        className={`w-full text-left p-2 rounded-xl border text-xs flex items-start gap-2.5 transition-all ${
                          isChecked
                            ? 'bg-blue-50/80 border-[#4848C0] text-[#1A2742]'
                            : 'bg-zinc-50/60 border-zinc-200 text-zinc-700 hover:bg-zinc-100/70'
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                            isChecked ? 'bg-[#4848C0] text-white' : 'border border-zinc-300 bg-white'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold leading-tight">{opt.label}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* DUAL ACTION BUTTONS: SEND VIA WHATSAPP (3672-3524) OR VIA EMAIL */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-3 px-6 rounded-full bg-[#dcf816] text-[#182641] font-bold text-xs sm:text-sm hover:bg-[#eafc45] transition-all flex items-center justify-center gap-2 shadow-lg shadow-black/15"
                >
                  <MessageCircle className="w-4 h-4 text-[#182641]" />
                  <span>Enviar datos a WhatsApp (3672-3524)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaEmail}
                  className="w-full sm:w-auto py-3 px-5 rounded-full bg-zinc-100 text-zinc-800 font-bold text-xs sm:text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-zinc-500" />
                  <span>O por Correo</span>
                </button>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-zinc-100 text-[11px] text-zinc-500">
                <span>WhatsApp Oficial: +502 3672-3524</span>
                <button
                  type="button"
                  onClick={handleDownloadCommitment}
                  className="hover:underline flex items-center gap-1 text-[#4848C0]"
                >
                  <Download className="w-3 h-3" />
                  <span>Descargar Carta Compromiso</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
