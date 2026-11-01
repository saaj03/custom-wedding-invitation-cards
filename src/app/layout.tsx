import type { Metadata } from 'next'
import { weddingConfig } from '@/config/wedding'
import './globals.css'

export const metadata: Metadata = {
  title: weddingConfig.seo.title,
  description: weddingConfig.seo.description,
  openGraph: {
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    images: [weddingConfig.seo.ogImage],
    type: 'website',
    url: weddingConfig.invitationUrl,
  },
  twitter: {
    card: 'summary_large_image',
    title: weddingConfig.seo.title,
    description: weddingConfig.seo.description,
    images: [weddingConfig.seo.ogImage],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Great+Vibes&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#FDF8F0" />
      </head>
      <body className="bg-cream-50 overflow-x-hidden">{children}</body>
    </html>
  )
}
