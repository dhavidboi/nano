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

// SEO: Objeto metadata expandido para máxima indexación y compatibilidad social
export const metadata: Metadata = {
  // 1. Añadimos la ciudad al título principal de forma atractiva
  title: 'NanoWindowsFilm | Láminas de Seguridad Premium para Vehículos en Guayaquil',
  
  // 2. Modificamos la descripción para captar búsquedas locales
  description: 'Venta e instalación de láminas de seguridad de alta calidad en Guayaquil, Durán y Samborondón. Protección UV, control de temperatura y privacidad (Series AK/BK).',
  generator: 'v0.app',
  
  // 3. Agregamos keywords de intención de búsqueda local
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

  // Configuración para que Google indexe y siga los enlaces de tu web
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

  // Open Graph: Así se verá tu web al compartir el link en redes o apps de mensajería
  openGraph: {
    title: 'NanoWindowsFilm | Láminas de Seguridad Premium',
    description: 'Protección UV, control de temperatura y privacidad para tu vehículo con nuestras Series AK y BK.',
    url: 'https://www.nanowindowsfilm.com',
    siteName: 'NanoWindowsFilm',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Asegúrate de colocar una imagen de 1200x630px en tu carpeta /public
        width: 1200,
        height: 630,
        alt: 'Láminas de eguridad premium NanoWindowsFilm instaladas en un vehículo',
      },
    ],
  },

  // Twitter Card: Optimización para X (antiguo Twitter)
  twitter: {
    card: 'summary_large_image',
    title: 'NanoWindowsFilm | Láminas de Seguridad Premium',
    description: 'Venta de láminas de Seguridad de alta calidad. Protección UV y control de temperatura para tu auto.',
    images: ['/og-image.jpg'],
  },

  // Configuración de Favicons (Mantenida intacta)
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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