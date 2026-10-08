import React from 'react';

interface IconProps {
  className?: string;
}

// Color constants matching user prompt
const COLOR_BLACK = '#182641'; // Deep black / navy outline
const COLOR_BLUE = '#97b9ff';  // Soft sky periwinkle blue accent

/**
 * 1. Pagos Seguros
 * Linear credit card with security chip & verified check badge
 */
export const IconPagosSeguros: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Black credit card outline */}
    <rect x="3" y="7" width="30" height="20" rx="4" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 13.5H33" stroke={COLOR_BLACK} strokeWidth="2.2" />
    {/* Microchip in #97b9ff */}
    <rect x="7" y="18" width="6" height="5" rx="1.2" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="1.6" />
    <path d="M10 18V23" stroke={COLOR_BLACK} strokeWidth="1.2" />
    {/* Soft blue security check badge */}
    <circle cx="26" cy="22" r="5" fill="#ffffff" stroke={COLOR_BLACK} strokeWidth="2" />
    <circle cx="26" cy="22" r="3.2" fill={COLOR_BLUE} />
    <path d="M24.2 22L25.4 23.2L27.8 20.8" stroke={COLOR_BLACK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    {/* Decorative spark */}
    <path d="M28 4L28.8 5.6L30.5 6.4L28.8 7.2L28 8.8L27.2 7.2L25.5 6.4L27.2 5.6Z" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 2. Emprendimiento Verificado
 * Verified scalloped seal with dual-tone checkmark and star sparkles
 */
export const IconEmprendimientoVerificado: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Outer verified badge seal */}
    <path
      d="M18 3L22.1 5.4L26.8 5.8L29.3 9.9L32.8 13.1L32.4 17.8L34 22.3L31.1 26L30.1 30.6L25.6 32L22.6 35.7L18 34.6L13.4 35.7L10.4 32L5.9 30.6L4.9 26L2 22.3L3.6 17.8L3.2 13.1L6.7 9.9L9.2 5.8L13.9 5.4L18 3Z"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Secondary inner ring in #97b9ff */}
    <circle cx="18" cy="19.5" r="9" stroke={COLOR_BLUE} strokeWidth="2" strokeDasharray="3 3" />
    {/* Big verified checkmark */}
    <path
      d="M12.5 19.5L16.2 23.2L23.8 15.6"
      stroke={COLOR_BLACK}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="16.2" cy="23.2" r="1.5" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 3. Calidad Verificada
 * Precision diamond with brilliant blue facets and quality star
 */
export const IconCalidadVerificada: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Diamond contour in black */}
    <path
      d="M9 11L18 3L27 11L18 33L9 11Z"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Facet lines */}
    <path d="M9 11H27" stroke={COLOR_BLACK} strokeWidth="2.2" />
    <path d="M14.5 11L18 33L21.5 11" stroke={COLOR_BLACK} strokeWidth="1.8" />
    <path d="M14.5 11L18 3L21.5 11" stroke={COLOR_BLUE} strokeWidth="2" fill={COLOR_BLUE} fillOpacity="0.25" />
    {/* Sparkle star in #97b9ff */}
    <path d="M30 6L31 8.5L33.5 9.5L31 10.5L30 13L29 10.5L26.5 9.5L29 8.5Z" fill={COLOR_BLUE} />
    <path d="M5 24L5.6 25.5L7 26L5.6 26.5L5 28L4.4 26.5L3 26L4.4 25.5Z" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 4. Operaciones Gestionadas
 * Organized checklist calendar with toggle switches and checked milestones
 */
export const IconOperacionesGestionadas: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Clipboard / calendar tablet */}
    <rect x="5" y="7" width="26" height="24" rx="4" stroke={COLOR_BLACK} strokeWidth="2.2" />
    {/* Top binder clips */}
    <path d="M11 4V8M25 4V8" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M5 13H31" stroke={COLOR_BLACK} strokeWidth="2" />
    {/* Checklist items in #97b9ff */}
    <circle cx="11" cy="19" r="2.2" fill={COLOR_BLUE} />
    <path d="M16 19H26" stroke={COLOR_BLACK} strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="25" r="2.2" fill={COLOR_BLUE} />
    <path d="M16 25H23" stroke={COLOR_BLACK} strokeWidth="2" strokeLinecap="round" />
    {/* Toggle indicator in top corner */}
    <rect x="23" y="8" width="6" height="3" rx="1.5" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 5. Todo en un Solo Lugar
 * Unified core hub with orbital convergence nodes and central focal point
 */
export const IconTodoEnUnLugar: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Outer boundary corners */}
    <path d="M4 11V6C4 4.9 4.9 4 6 4H11" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M25 4H30C31.1 4 32 4.9 32 6V11" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M32 25V30C32 31.1 31.1 32 30 32H25" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M11 32H6C4.9 32 4 31.1 4 30V25" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    {/* Orbital ring */}
    <circle cx="18" cy="18" r="9" stroke={COLOR_BLACK} strokeWidth="2" strokeDasharray="4 3" />
    {/* Blue accent crosshairs & central core */}
    <path d="M18 10V14M18 22V26M10 18H14M22 18H26" stroke={COLOR_BLUE} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="18" cy="18" r="4" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="2" />
  </svg>
);

/**
 * 6. Verificación OneDay (Official Sello)
 * Protective crest shield with official verified star emblem
 */
export const IconVerificacionOneDay: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Shield outline */}
    <path
      d="M18 4L31 8V17C31 24.5 25.5 30.5 18 33C10.5 30.5 5 24.5 5 17V8L18 4Z"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Blue inner highlight shield */}
    <path
      d="M18 8L27 11V17C27 22.2 23.2 26.8 18 29"
      stroke={COLOR_BLUE}
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Big checkmark in center */}
    <path
      d="M12.5 18.5L16.2 22.2L23.8 14.6"
      stroke={COLOR_BLACK}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Star spark top right */}
    <path d="M29 3L29.6 4.4L31 5L29.6 5.6L29 7L28.4 5.6L27 5L28.4 4.4Z" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 7. Programas de Crecimiento
 * Ascending bar staircase with dynamic upward trajectory arrow in blue
 */
export const IconProgramasCrecimiento: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Base axis & ascending bars */}
    <path d="M4 31H32" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    <rect x="6" y="22" width="5" height="9" rx="1.5" stroke={COLOR_BLACK} strokeWidth="2" />
    <rect x="15" y="15" width="5" height="16" rx="1.5" stroke={COLOR_BLACK} strokeWidth="2" />
    <rect x="24" y="8" width="5" height="23" rx="1.5" stroke={COLOR_BLACK} strokeWidth="2" />
    {/* Dynamic soaring blue arrow */}
    <path
      d="M6 18L14 11L21 16L30 5"
      stroke={COLOR_BLUE}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 5H30V11"
      stroke={COLOR_BLUE}
      strokeWidth="2.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="30" cy="5" r="2" fill={COLOR_BLACK} />
  </svg>
);

/**
 * 8. Red OneDay
 * Connected peer network with user avatars and interactive blue links
 */
export const IconRedOneDay: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Main central user node */}
    <circle cx="18" cy="11" r="5" stroke={COLOR_BLACK} strokeWidth="2.2" />
    <path d="M10 26C10 22 13.5 19 18 19C22.5 19 26 22 26 26" stroke={COLOR_BLACK} strokeWidth="2.2" strokeLinecap="round" />
    {/* Connecting network lines in #97b9ff */}
    <path d="M7 16L13 13M23 13L29 16M18 26V31" stroke={COLOR_BLUE} strokeWidth="2" strokeDasharray="3 2" />
    {/* Satellite connection nodes */}
    <circle cx="6" cy="17" r="3" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="1.8" />
    <circle cx="30" cy="17" r="3" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="1.8" />
    <circle cx="18" cy="31" r="2.5" fill={COLOR_BLUE} />
  </svg>
);

/**
 * 9. Gestión de Negocio
 * Business briefing suitcase & control dashboard sliders
 */
export const IconGestionNegocio: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Briefcase frame */}
    <rect x="4" y="10" width="28" height="20" rx="4" stroke={COLOR_BLACK} strokeWidth="2.2" />
    <path d="M13 10V6C13 4.9 13.9 4 15 4H21C22.1 4 23 4.9 23 6V10" stroke={COLOR_BLACK} strokeWidth="2" strokeLinecap="round" />
    {/* Dashboard slider tracks */}
    <path d="M9 17H27" stroke={COLOR_BLACK} strokeWidth="1.8" strokeLinecap="round" />
    <path d="M9 24H27" stroke={COLOR_BLACK} strokeWidth="1.8" strokeLinecap="round" />
    {/* Blue active toggle knobs */}
    <circle cx="14" cy="17" r="3" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="1.8" />
    <circle cx="22" cy="24" r="3" fill={COLOR_BLUE} stroke={COLOR_BLACK} strokeWidth="1.8" />
    <path d="M4 15H32" stroke={COLOR_BLUE} strokeWidth="1.2" strokeOpacity="0.4" />
  </svg>
);

/**
 * 10. Oportunidades Comerciales
 * Collaborative handshake with radiance beacon star of opportunity
 */
export const IconOportunidadesComerciales: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Handshake line work */}
    <path
      d="M3 17L9 12L16 17L13 22L7 20L3 17Z"
      stroke={COLOR_BLACK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33 17L27 12L20 17L23 22L29 20L33 17Z"
      stroke={COLOR_BLACK}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17L19 14.5C20.5 13.5 22.5 14 23.5 15.5L24 16.5"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <path
      d="M13 22L16.5 25C17.8 26.2 19.8 26 21 24.8L23 22"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Opportunity radiance spark in #97b9ff */}
    <path d="M18 4L19.2 7.2L22.5 8.5L19.2 9.8L18 13L16.8 9.8L13.5 8.5L16.8 7.2Z" fill={COLOR_BLUE} />
    <circle cx="18" cy="8.5" r="1.5" fill={COLOR_BLACK} />
  </svg>
);

/**
 * 11. Asesoría Experta
 * Dialogue conversation bubble with idea lightbulb filament & insight spark
 */
export const IconAsesoriaExperta: React.FC<IconProps> = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    {/* Speech balloon */}
    <path
      d="M5 16C5 9.4 10.4 4 17 4H19C25.6 4 31 9.4 31 16C31 22.6 25.6 28 19 28H15L8 32V26.2C6.1 23.6 5 20 5 16Z"
      stroke={COLOR_BLACK}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Inside lightbulb filament in #97b9ff */}
    <path
      d="M15 13C15 11.3 16.3 10 18 10C19.7 10 21 11.3 21 13C21 14.2 20.2 15.2 19.5 16H16.5C15.8 15.2 15 14.2 15 13Z"
      stroke={COLOR_BLUE}
      strokeWidth="2"
      fill={COLOR_BLUE}
      fillOpacity="0.2"
    />
    <path d="M16.5 19H19.5" stroke={COLOR_BLACK} strokeWidth="2" strokeLinecap="round" />
    {/* Insight sparkle rays */}
    <path d="M18 6V7.5M12 10L13.2 11M24 10L22.8 11" stroke={COLOR_BLUE} strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);
