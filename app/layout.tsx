import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: 'NanoWindowsFilm | Láminas de Seguridad Premium para Vehículos en Guayaquil',
  description: 'Venta e instalación de láminas de seguridad de alta calidad en Guayaquil, Durán y Samborondón. Protección UV, control de temperatura y privacidad (Series AK/BK).',
  generator: 'v0.app',
  
  keywords: [
    "láminas de sol Guayaquil", 
    "polarizado de autos Guayaquil", 
    "láminas de seguridad Samborondón",
    "control solar vehículos Ecuador", 
    "NanoWindowsFilm Guayaquil",
    "Series AK", 
    "Series BK"
  ],
  
  metadataBase: new URL('https://www.nanowindowsfilm.com'),

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    title: 'NanoWindowsFilm | Láminas de Seguridad Premium',
    description: 'Protección UV, control de temperatura y privacidad para tu vehicle con nuestras Series AK y BK.',
    url: 'https://www.nanowindowsfilm.com',
    siteName: 'NanoWindowsFilm',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Láminas de seguridad premium NanoWindowsFilm instaladas en un vehículo',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NanoWindowsFilm | Láminas de Seguridad Premium',
    description: 'Venta de láminas de Seguridad de alta calidad. Protección UV y control de temperatura para tu auto.',
    images: ['/og-image.jpg'],
  },

  icons: {
    icon: [
      {
        url: '/icon-light-32x32.svg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.svg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}