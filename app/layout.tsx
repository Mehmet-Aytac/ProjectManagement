import type { Metadata, Viewport } from 'next'
import { Bricolage_Grotesque, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const _bricolage = Bricolage_Grotesque({ subsets: ['latin'] })
const _jetbrains = JetBrains_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mehmet Aytaç — Yazılım ve Proje Yönetimi',
  description:
    'Mehmet Aytaç’ın kişisel sitesi. Yazılım temeli, bağımsız proje yönetimi eğitimi, çalışmalar, sertifikalar ve ücretsiz proje yönetimi şablonları.',
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
    <html lang="tr" className="bg-background">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
