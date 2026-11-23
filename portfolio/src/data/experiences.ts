export interface Experience {
  id: string
  period: string
  company: string
  title: string
  highlight: string
  description: string
}

export const experiences: Experience[] = [
  {
    id: 'seo-web',
    period: '2024 — 2025',
    company: 'Startup · Zaragoza',
    title: 'SEO en',
    highlight: 'Web',
    description: 'Auditorías técnicas, estrategia de contenidos y mejora del posicionamiento orgánico.',
  },
  {
    id: 'marketing-programacion',
    period: '2024',
    company: 'Piensa en Web · Zaragoza',
    title: 'Marketing y',
    highlight: 'programación',
    description: 'Desarrollo de webs para clientes y campañas de marketing digital.',
  },
]