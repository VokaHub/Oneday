export interface VerifiedBusiness {
  code: string;
  name: string;
  category: string;
  location: string;
  since: string;
  status: 'Verificado' | 'En Proceso' | 'No Encontrado';
  description: string;
  owner: string;
  badgeType: 'Gold' | 'Standard';
  evaluatedItems: string[];
}

export const SAMPLE_BUSINESSES: Record<string, VerifiedBusiness> = {
  'OD-GT-2026': {
    code: 'OD-GT-2026',
    name: 'Café Antigua de Altura',
    category: 'Gastronomía y Café Especial',
    location: 'Antigua Guatemala, Sacatepéquez',
    since: 'Febrero 2026',
    status: 'Verificado',
    description: 'Productores de café arábica de origen ético cultivado en las laderas del Volcán de Agua con procesos sostenibles y exportación.',
    owner: 'Rodrigo Méndez & Sofía Castillo',
    badgeType: 'Gold',
    evaluatedItems: [
      'Identidad comercial comprobada',
      'Cumplimiento de estándares de calidad artesanal',
      'Protocolos de pago seguro OneDay activos',
      'Atención y tiempos de respuesta garantizados',
    ],
  },
  'OD-GT-7721': {
    code: 'OD-GT-7721',
    name: 'Textiles Maya Nawal',
    category: 'Moda y Artesanía Textil',
    location: 'San Juan La Laguna, Sololá',
    since: 'Enero 2026',
    status: 'Verificado',
    description: 'Cooperativa textil de mujeres tejedoras en telar de cintura con tintes naturales y diseños contemporáneos.',
    owner: 'Elena Yax & Colectivo Ixchel',
    badgeType: 'Gold',
    evaluatedItems: [
      'Autenticidad de origen garantizada',
      'Comercio justo e impacto comunitario medido',
      'Sistema de envíos nacionales verificado',
      'Garantía de satisfacción y soporte OneDay',
    ],
  },
  'OD-GT-9084': {
    code: 'OD-GT-9084',
    name: 'K’iche Gourmet Studio',
    category: 'Panadería y Pastelería de Autor',
    location: 'Zona 14, Ciudad de Guatemala',
    since: 'Marzo 2026',
    status: 'Verificado',
    description: 'Pastelería francesa con ingredientes 100% guatemaltecos, cardamomo de Alta Verapaz y cacao silvestre de Petén.',
    owner: 'Chef Marcela Morales',
    badgeType: 'Gold',
    evaluatedItems: [
      'Licencia sanitaria y buenas prácticas de manufactura',
      'Pasarela de cobros verificada por OneDay',
      'Gestión de agendas y catering digitalizada',
      'Estándar de calidad gastronómica validado',
    ],
  },
  'OD-GT-3310': {
    code: 'OD-GT-3310',
    name: 'Estudio Botánica Urbana',
    category: 'Diseño Floral y Paisajismo',
    location: 'Zona 10, Ciudad de Guatemala',
    since: 'Noviembre 2025',
    status: 'Verificado',
    description: 'Estudio de paisajismo residencial y eventos corporativos con flora nativa guatemalteca y macetería en barro.',
    owner: 'Carlos Alvarado',
    badgeType: 'Standard',
    evaluatedItems: [
      'Portafolio de proyectos auditado',
      'Contratos y políticas de reembolso transparentes',
      'Integración operativa en OneDay',
    ],
  },
};
