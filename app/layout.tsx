import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Docs — OpenScan',
    template: '%s — OpenScan Docs',
  },
  description: 'Official documentation for OpenScan. Learn how it works, self-host, compare features, and understand our privacy policy.',
}

export const viewport = {
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
