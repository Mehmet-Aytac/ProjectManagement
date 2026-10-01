import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _bricolage = Bricolage_Grotesque({ subsets: ['latin'] })
const _jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alex Morgan — Project Leader, Software & Web Design',
  description:
    'Personal site of Alex Morgan, project leader for software and web projects. Case studies, certifications and free project management templates: Gantt chart, OKR, KPI, RACI, WBS and more.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f1f2ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
