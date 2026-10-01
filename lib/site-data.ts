// Edit this file to personalise the whole site.

export const profile = {
  name: 'Mehmet Aytaç',
  role: 'Project Leader',
  tagline: 'Yazılım, web tasarımı ve projeleri ayakta tutan planlar',
  location: 'Türkiye · Uzaktan çalışmaya açık',
  email: 'E-posta adresinizi ekleyin',
  links: {
    linkedin: 'https://www.linkedin.com/in/your-handle',
    github: 'https://github.com/your-handle',
  },
  availability: 'Yeni projelere açığım',
  revision: 'Rev. 2026.10',
  intro:
    "Temelim yazılım. Proje yönetimi eğitimimi herhangi bir sektöre bağlı olmadan, harici olarak aldım. Henüz iki alanda da profesyonel iş deneyimim yok; bu site, öğrendiklerimi, geliştirdiğim çalışmaları ve proje yönetimi için hazırladığım araçları şeffaf biçimde paylaşma alanım.",
}

export const charter = [
  {
    label: 'Amaç',
    value:
      'Fikirleri anlaşılır, kullanılabilir ve planlı çalışmalara dönüştürmek.',
  },
  {
    label: 'Kapsam',
    value:
      'Yazılım ve web çalışmaları. Araştırma, planlama, teslim ve devir süreçlerine dair öğrendiklerimi ve ürettiklerimi paylaşmak.',
  },
  {
    label: 'Yaklaşım',
    value: 'Öğrenmeye, açık iletişime, görünür planlara ve ölçülebilir çıktılara dayalı bir yaklaşım.',
  },
  {
    label: 'Şeffaflık',
    value: 'Profesyonel iş deneyimim olmadığını açıkça belirtiyor; bu siteyi öğrenme ve üretim sürecimi görünür kılmak için kullanıyorum.',
  },
]

export type CareerRow = {
  role: string
  org: string
  start: number
  end: number | null
}

export const careerTimeline: { start: number; end: number; rows: CareerRow[]; milestones: { label: string; at: number }[] } = {
  start: 2026,
  end: 2027,
  rows: [
    { role: 'Yazılım temeli', org: 'Kişisel öğrenme', start: 2026, end: null },
    { role: 'Proje yönetimi eğitimi', org: 'Bağımsız eğitim', start: 2026, end: null },
  ],
  milestones: [],
}

export type ProjectCategory = 'Software' | 'Web design'

export type Project = {
  code: string
  title: string
  category: ProjectCategory
  client: string
  role: string
  period: string
  summary: string
  outcome: string
  stack: string[]
  image: string
  imageAlt: string
  url?: string
}

export const projects: Project[] = [
  {
    code: 'D-2.1',
    title: 'Fleetline — logistics tracking platform',
    category: 'Software',
    client: 'Regional logistics company',
role: 'Yazılım temeli · Proje yönetimi eğitimi',
    period: '2024 – 2025 · 11 months',
    summary:
      'Replaced three spreadsheets and a phone tree with a live dashboard for 400+ vehicles. Led a team of seven across two time zones, ran discovery with dispatchers, and kept the rollout depot-by-depot to limit risk.',
    outcome: 'Delivered 2 weeks ahead of baseline; dispatch calls dropped by about a third.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Mapbox', 'Jira'],
    image: '/images/project-logistics.png',
    imageAlt: 'Fleetline dashboard with a map of vehicle routes and a shipment status table',
  },
  {
    code: 'D-2.2',
    title: 'Klinik+ — appointment booking app',
    category: 'Software',
    client: 'Private clinic network',
    role: 'Project Manager & UX lead',
    period: '2023 · 7 months',
    summary:
      'Mobile booking for 12 clinics. I owned the schedule and budget, and personally ran the usability tests that reshaped the booking flow from six steps to three.',
    outcome: 'Online bookings went from 18% to 54% of all appointments within the first quarter.',
    stack: ['React Native', 'Firebase', 'Figma', 'Scrum'],
    image: '/images/project-clinic.png',
    imageAlt: 'Three phone screens of a clinic booking app showing a calendar, doctor list and confirmation',
  },
  {
    code: 'D-2.3',
    title: 'Ember & Oak — roastery storefront',
    category: 'Web design',
    client: 'Independent coffee roaster',
    role: 'Designer & developer',
    period: '2022 · 6 weeks',
    summary:
      'A side project for a local roaster: brand-led web design, product photography direction and a lightweight online shop the owners can update themselves.',
    outcome: 'Launched before the holiday season; online orders became a steady second revenue line.',
    stack: ['Figma', 'Next.js', 'Shopify', 'Tailwind CSS'],
    image: '/images/project-coffee.png',
    imageAlt: 'Coffee roastery landing page with coffee bag product photo and large headline',
  },
  {
    code: 'D-2.4',
    title: 'Portfolio Hub — internal PMO tool',
    category: 'Web design',
    client: 'Meridian Group PMO',
    role: 'Product owner & UI designer',
    period: '2025 · 4 months',
    summary:
      'Designed an internal portal where 30+ projects report status in one consistent format. Built on the same templates you can download below.',
    outcome: 'Monthly portfolio reporting went from two days of chasing to one automated view.',
    stack: ['Figma', 'Vue', 'Power BI', 'Kanban'],
    image: '/images/project-portal.png',
    imageAlt: 'Project portfolio tool with a kanban board and sidebar navigation',
  },
]

export type Certification = {
  name: string
  issuer: string
  year: string
  credentialId: string
  url: string
  status: 'Active' | 'Lifetime'
}

export const certifications: Certification[] = [
  {
    name: 'Project Management Professional (PMP)',
    issuer: 'Project Management Institute',
    year: '2021',
    credentialId: 'PMP-3021847',
    url: 'https://www.pmi.org/certifications/certification-resources/registry',
    status: 'Active',
  },
  {
    name: 'PMI Agile Certified Practitioner (PMI-ACP)',
    issuer: 'Project Management Institute',
    year: '2025',
    credentialId: 'ACP-4410923',
    url: 'https://www.pmi.org/certifications/certification-resources/registry',
    status: 'Active',
  },
  {
    name: 'PRINCE2 Practitioner',
    issuer: 'PeopleCert / AXELOS',
    year: '2023',
    credentialId: 'P2P-GR657311',
    url: 'https://www.peoplecert.org',
    status: 'Active',
  },
  {
    name: 'Professional Scrum Master I (PSM I)',
    issuer: 'Scrum.org',
    year: '2019',
    credentialId: 'PSM-I-882104',
    url: 'https://www.scrum.org/certification-list',
    status: 'Lifetime',
  },
  {
    name: 'Google UX Design Certificate',
    issuer: 'Google / Coursera',
    year: '2018',
    credentialId: 'GUX-7HK29QZ',
    url: 'https://www.coursera.org',
    status: 'Lifetime',
  },
]

export type TemplateKind = 'gantt' | 'okr' | 'kpi' | 'raci' | 'wbs' | 'risk' | 'charter'

export type ProjectTemplate = {
  code: string
  kind: TemplateKind
  title: string
  description: string
  format: string
  file: string
  includes: string[]
}

export const templates: ProjectTemplate[] = [
  {
    code: '4.1',
    kind: 'gantt',
    title: 'Gantt chart',
    description: 'Phases, tasks, owners, dates, dependencies and milestones — ready to import into Excel, Google Sheets or MS Project.',
    format: 'CSV',
    file: '/templates/gantt-chart-template.csv',
    includes: ['5 phases', 'Dependencies', 'Milestone flags'],
  },
  {
    code: '4.2',
    kind: 'okr',
    title: 'OKR planner',
    description: 'Quarterly objectives with measurable key results, baselines, targets and a confidence score for honest check-ins.',
    format: 'CSV',
    file: '/templates/okr-template.csv',
    includes: ['Baseline → target', 'Confidence 1–10', 'Initiatives'],
  },
  {
    code: '4.3',
    kind: 'kpi',
    title: 'KPI dashboard',
    description: 'SPI, CPI, budget variance and more — each with a formula, owner and green / amber / red thresholds.',
    format: 'CSV',
    file: '/templates/kpi-dashboard-template.csv',
    includes: ['8 core KPIs', 'RAG thresholds', 'Formulas'],
  },
  {
    code: '4.4',
    kind: 'raci',
    title: 'RACI matrix',
    description: 'Who is Responsible, Accountable, Consulted and Informed for each deliverable. Ends the "I thought you had it" conversation.',
    format: 'CSV',
    file: '/templates/raci-matrix-template.csv',
    includes: ['11 activities', '7 roles', 'Legend'],
  },
  {
    code: '4.5',
    kind: 'wbs',
    title: 'Work breakdown structure',
    description: 'A three-level WBS with codes, owners, hour estimates and acceptance criteria for every work package.',
    format: 'CSV',
    file: '/templates/wbs-template.csv',
    includes: ['3 levels', 'Estimates', 'Acceptance criteria'],
  },
  {
    code: '4.6',
    kind: 'risk',
    title: 'Risk register',
    description: 'Probability × impact scoring, response strategies and owners, with worked examples you can overwrite.',
    format: 'CSV',
    file: '/templates/risk-register-template.csv',
    includes: ['P × I scoring', 'Response plans', 'Examples'],
  },
  {
    code: '4.7',
    kind: 'charter',
    title: 'Project charter',
    description: 'A one-page charter: purpose, SMART objectives, scope, milestones, stakeholders and the sign-off table.',
    format: 'Markdown',
    file: '/templates/project-charter-template.md',
    includes: ['11 sections', 'Sign-off table', 'Paste into Word / Notion'],
  },
]
