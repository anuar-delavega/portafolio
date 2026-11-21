export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'meta.title': 'Anuar De La Vega — Delivery Manager & AI Builder',
    'meta.description':
      'Portafolio de Anuar De La Vega: 18+ años liderando delivery de tecnología y productos construidos con IA — portales financieros, CRMs, apps macOS y automatización.',
    'nav.projects': 'Proyectos',
    'nav.about': 'Perfil',
    'nav.contact': 'Contacto',
    'theme.toggle': 'Cambiar tema',
    'hero.eyebrow': 'Delivery Manager · Senior Technical PM · AI Builder',
    'hero.title': 'Lidero la entrega de plataformas críticas — y construyo producto con IA.',
    'hero.lead':
      '18+ años en fintech, seguros y plataformas empresariales. Hoy combino gobierno de delivery con desarrollo propio: aplicaciones completas, de la especificación a producción, usando Claude Code como copiloto.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Hablemos',
    'stats.years': 'años en delivery',
    'stats.projects': 'proyectos propios',
    'stats.commits': 'commits en 2026',
    'stats.production': 'en producción',
    'projects.title': 'Proyectos',
    'projects.lead':
      'Aplicaciones diseñadas, construidas y operadas de punta a punta: especificación, arquitectura, seguridad, despliegue y documentación.',
    'projects.featured': 'Destacados',
    'projects.more': 'Más proyectos',
    'projects.view': 'Ver caso',
    'filter.all': 'Todos',
    'category.product': 'Producto web',
    'category.tool': 'App de escritorio',
    'category.automation': 'Automatización',
    'category.web': 'Sitio web',
    'status.production': 'En producción',
    'status.local': 'App local',
    'status.prototype': 'Prototipo',
    'project.role': 'Rol',
    'project.period': 'Periodo',
    'project.stack': 'Stack',
    'project.highlights': 'Lo más relevante',
    'project.demo': 'Ver demo',
    'project.repo': 'Código en GitHub',
    'project.private': 'Código privado — demo disponible bajo solicitud',
    'project.back': 'Todos los proyectos',
    'project.next': 'Siguiente proyecto',
    'about.title': 'Perfil',
    'about.p1':
      'Soy Partner Account Delivery Manager en Fadata, a cargo de la implementación de la plataforma core de seguros INSIS para Zurich México. Antes lideré iniciativas fintech en KEO World (blockchain, stablecoins, PCI DSS) y equipos ágiles globales en Thomson Reuters.',
    'about.p2':
      'En paralelo construyo software propio. Me interesa cerrar la brecha entre quien gestiona la entrega y quien la ejecuta: entender la arquitectura, la seguridad y el costo real de cada decisión técnica.',
    'about.skills': 'Cómo trabajo',
    'about.s1.t': 'Delivery y gobierno',
    'about.s1.d': 'Steering committees, RAID, KPIs, control de cambios, equipos multinacionales.',
    'about.s2.t': 'Ágil a escala',
    'about.s2.d': 'Scrum, Kanban y SAFe; coaching de equipos y reducción de lead time.',
    'about.s3.t': 'Construcción con IA',
    'about.s3.d': 'Claude Code, agentes, automatización con N8N, RAG y flujos multicanal.',
    'about.s4.t': 'Seguridad primero',
    'about.s4.d': 'Aislamiento de datos por usuario, RLS, secretos fuera del código, revisiones de seguridad.',
    'contact.title': '¿Construimos algo juntos?',
    'contact.lead': 'Abierto a roles de Delivery / Program Management y a colaboraciones en producto con IA.',
    'footer.built': 'Hecho con Astro. Código y contenido por Anuar De La Vega.',
  },
  en: {
    'meta.title': 'Anuar De La Vega — Delivery Manager & AI Builder',
    'meta.description':
      'Portfolio of Anuar De La Vega: 18+ years leading technology delivery, plus AI-built products — finance portals, CRMs, macOS apps and automation.',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'theme.toggle': 'Toggle theme',
    'hero.eyebrow': 'Delivery Manager · Senior Technical PM · AI Builder',
    'hero.title': 'I lead delivery of mission-critical platforms — and I build products with AI.',
    'hero.lead':
      '18+ years across fintech, insurance and enterprise platforms. Today I pair delivery governance with hands-on building: full applications, from spec to production, with Claude Code as my copilot.',
    'hero.cta.projects': 'See projects',
    'hero.cta.contact': "Let's talk",
    'stats.years': 'years in delivery',
    'stats.projects': 'personal projects',
    'stats.commits': 'commits in 2026',
    'stats.production': 'in production',
    'projects.title': 'Projects',
    'projects.lead':
      'Applications designed, built and run end to end: specification, architecture, security, deployment and documentation.',
    'projects.featured': 'Featured',
    'projects.more': 'More projects',
    'projects.view': 'View case',
    'filter.all': 'All',
    'category.product': 'Web product',
    'category.tool': 'Desktop app',
    'category.automation': 'Automation',
    'category.web': 'Website',
    'status.production': 'In production',
    'status.local': 'Local app',
    'status.prototype': 'Prototype',
    'project.role': 'Role',
    'project.period': 'Period',
    'project.stack': 'Stack',
    'project.highlights': 'Highlights',
    'project.demo': 'Live demo',
    'project.repo': 'Code on GitHub',
    'project.private': 'Private code — demo available on request',
    'project.back': 'All projects',
    'project.next': 'Next project',
    'about.title': 'About',
    'about.p1':
      "I'm a Partner Account Delivery Manager at Fadata, owning the implementation of the INSIS core insurance platform for Zurich Mexico. Before that I led fintech initiatives at KEO World (blockchain, stablecoins, PCI DSS) and global agile teams at Thomson Reuters.",
    'about.p2':
      'Alongside that, I build my own software. I care about closing the gap between managing delivery and doing it: understanding the architecture, the security and the real cost of every technical decision.',
    'about.skills': 'How I work',
    'about.s1.t': 'Delivery & governance',
    'about.s1.d': 'Steering committees, RAID, KPIs, change control, multinational teams.',
    'about.s2.t': 'Agile at scale',
    'about.s2.d': 'Scrum, Kanban and SAFe; team coaching and lead-time reduction.',
    'about.s3.t': 'Building with AI',
    'about.s3.d': 'Claude Code, agents, N8N automation, RAG and multichannel flows.',
    'about.s4.t': 'Security first',
    'about.s4.d': 'Per-user data isolation, RLS, secrets out of code, security reviews.',
    'contact.title': 'Shall we build something together?',
    'contact.lead': 'Open to Delivery / Program Management roles and AI product collaborations.',
    'footer.built': 'Built with Astro. Code and content by Anuar De La Vega.',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];

export function useT(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Ruta de detalle de proyecto por idioma. */
export const projectsSegment: Record<Lang, string> = { es: 'proyectos', en: 'projects' };
