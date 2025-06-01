import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CORE Development',
  description: 'Sustainable Development in Africa',
  icons: {
    icon: '/CoreLogo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
