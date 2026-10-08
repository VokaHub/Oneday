import { useState } from 'react';
import { X, Search, CheckCircle2, AlertCircle, Copy, Check, ShieldCheck, MapPin, Calendar, UserCheck } from 'lucide-react';
import { SAMPLE_BUSINESSES, VerifiedBusiness } from '../data/verifiedBusinesses';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCode?: string;
}

export default function VerificationModal({ isOpen, onClose, initialCode = 'OD-GT-2026' }: VerificationModalProps) {
  const [codeInput, setCodeInput] = useState(initialCode);
  const [result, setResult] = useState<VerifiedBusiness | null>(SAMPLE_BUSINESSES[initialCode] || null);
  const [searched, setSearched] = useState(true);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (codeToSearch: string) => {
    const cleaned = codeToSearch.trim().toUpperCase();
    setCodeInput(cleaned);
    setSearched(true);
    if (SAMPLE_BUSINESSES[cleaned]) {
      setResult(SAMPLE_BUSINESSES[cleaned]);
    } else {
      setResult(null);
    }
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative border border-zinc-100 animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-[#1A2742] hover:bg-zinc-100 transition-colors"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-2xl bg-zinc-100 text-[#0F172A] flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0F172A]" style={{ fontFamily: 'var(--font-display)' }}>
              Verificador OneDay
            </h3>
            <p className="text-xs text-zinc-500">Registro Oficial de Emprendedores Verificados en Guatemala</p>
          </div>
        </div>

        {/* Search input form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch(codeInput);
          }}
          className="mt-5 mb-3"
        >
          <div className="relative">
            <input
              type="text"
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Ingresa el código (ej. OD-GT-2026)"
              className="w-full pl-4 pr-28 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-[#182641] font-mono text-sm uppercase placeholder:normal-case placeholder:font-sans focus:outline-none focus:border-[#182641] focus:bg-white focus:ring-2 focus:ring-[#182641]/20 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-[#dcf816] text-[#182641] rounded-xl text-xs font-bold hover:bg-[#eafc45] transition-colors flex items-center gap-1.5 border border-black/10"
            >
              <Search className="w-3.5 h-3.5 text-[#182641]" />
              Verificar
            </button>
          </div>
        </form>

        {/* Quick sample chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-6 text-xs">
          <span className="text-zinc-400">Códigos de prueba:</span>
          {Object.keys(SAMPLE_BUSINESSES).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => handleSearch(code)}
              className={`px-2.5 py-1 rounded-lg font-mono transition-colors ${
                codeInput.toUpperCase() === code
                  ? 'bg-[#182641] text-[#dcf816] font-bold'
                  : 'bg-zinc-100 text-[#182641]/80 hover:bg-zinc-200'
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Result view */}
        {result ? (
          <div className="border-2 border-[#10192d] bg-white rounded-2xl p-5 sm:p-6 relative overflow-hidden">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-[#ccff00] text-[#10192d] border border-[#10192d] mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>ONEDAY VERIFIED VIGENTE</span>
                </div>
                <h4 className="text-xl font-black text-[#10192d]" style={{ fontFamily: 'var(--font-display)' }}>
                  {result.name}
                </h4>
                <p className="text-xs text-zinc-500 font-bold">{result.category}</p>
              </div>

              <div className="text-right">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block font-mono">ID Oficial</span>
                <span className="text-xs font-mono font-black text-[#1a2742]">{result.code}</span>
              </div>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed mb-4 font-medium">{result.description}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t-2 border-zinc-100 text-xs text-zinc-700 font-semibold">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#1a2742] stroke-[2] shrink-0" />
                <span className="truncate">{result.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-3.5 h-3.5 text-[#1a2742] stroke-[2] shrink-0" />
                <span className="truncate">{result.owner}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-[#1a2742] stroke-[2] shrink-0" />
                <span>Verificado desde {result.since}</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#1a2742] stroke-[2] shrink-0" />
                <span className="text-[#1a2742] font-black">Estándar OneDay Cumplido</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t-2 border-zinc-100">
              <p className="text-[11px] font-black text-zinc-500 uppercase tracking-wider mb-2">
                Criterios de Verificación Aprobados:
              </p>
              <ul className="space-y-1">
                {result.evaluatedItems.map((item, idx) => (
                  <li key={idx} className="text-xs text-[#1a2742] font-bold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#e0ff01] border border-[#1a2742] shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 pt-3 flex items-center justify-between border-t border-zinc-100">
              <button
                type="button"
                onClick={() => handleCopyCode(result.code)}
                className="text-xs text-zinc-600 hover:text-[#1a2742] font-bold flex items-center gap-1 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> : <Copy className="w-3.5 h-3.5 stroke-[2]" />}
                <span>{copied ? 'Código copiado' : 'Copiar código'}</span>
              </button>

              <span className="text-[11px] text-zinc-400 font-bold">Verificado por OneDay Guatemala</span>
            </div>
          </div>
        ) : (
          searched && (
            <div className="border border-amber-200 bg-amber-50/60 rounded-2xl p-6 text-center">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <h4 className="text-sm font-bold text-[#1A2742] mb-1">Código no registrado o en revisión</h4>
              <p className="text-xs text-zinc-600 max-w-sm mx-auto leading-relaxed">
                El código <strong className="font-mono">{codeInput}</strong> no corresponde a un negocio con verificación activa actual.
                Puedes probar uno de los códigos de muestra arriba o solicitar tu propia verificación.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
