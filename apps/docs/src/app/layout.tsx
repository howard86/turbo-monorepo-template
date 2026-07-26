import './globals.css'

import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description: 'Next.js Tailwind Template',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="h-full" lang="en">
      <body className="bg-white/90">{children}</body>
    </html>
  )
}
