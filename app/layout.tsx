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
  title: 'NanoWindowsFilm | Láminas de Seguridad, Accesorios y Protección Vehicular en Guayaquil',
  description: 'Venta de láminas de seguridad automotriz, accesorios de instalación y seguridad vehicular en Guayaquil, Samborondón y Durán. Espátulas profesionales, cintas nano antideslizantes, seguros para computadoras y brazos. Series AK y BK con protección UV hasta 100%.',
  generator: 'v0.app',

  keywords: [
    // Láminas — términos ya posicionados
    "láminas de sol Guayaquil",
    "polarizado de autos Guayaquil",
    "láminas de seguridad Samborondón",
    "control solar vehículos Ecuador",
    "NanoWindowsFilm Guayaquil",
    "Series AK", "Series BK",
    // Accesorios instalación — poca competencia local
    "espátulas instalación láminas Guayaquil",
    "herramientas polarizado autos Ecuador",
    "cinta antideslizante estribo auto Guayaquil",
    "protector filo puerta auto Ecuador",
    "nano carbón transparente puerta vehículo",
    // Seguridad vehicular
    "seguros computadora vehicular Guayaquil",
    "brazos pluma pantalla auto Ecuador",
    "tuercas cónicas computadora vehículo",
    "pernos seguridad pantalla auto Guayaquil",
    "accesorios seguridad automotriz Ecuador",
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
    title: 'NanoWindowsFilm | Láminas, Accesorios y Seguridad Vehicular en Guayaquil',
    description: 'Todo para proteger tu vehículo en Guayaquil: láminas de seguridad Series AK/BK, espátulas de instalación, cintas nano antideslizantes y sistemas de fijación para computadoras vehiculares.',
    url: 'https://www.nanowindowsfilm.com',
    siteName: 'NanoWindowsFilm',
    locale: 'es_EC',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NanoWindowsFilm – Láminas de seguridad y accesorios automotrices en Guayaquil, Ecuador',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NanoWindowsFilm | Láminas y Accesorios Automotrices en Guayaquil',
    description: 'Láminas de seguridad, espátulas profesionales, cintas nano antideslizantes y seguros vehiculares. Cobertura en Guayaquil, Samborondón y Durán.',
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
