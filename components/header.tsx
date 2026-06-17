"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* SEO: Si es la página principal, el logo puede llevar un h1 oculto o una etiqueta fuerte para branding */}
          <Link href="/" className="flex items-center gap-2" aria-label="NanoWindowsFilm - Inicio">
            <span className="font-sans text-xl md:text-2xl font-bold tracking-tight text-foreground">
              Nano<span className="text-accent">Windows</span>Film
            </span>
          </Link>

          {/* Menú de navegación de escritorio */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            <a 
              href="#servicios" 
              onClick={(e) => handleSmoothScroll(e, "#servicios")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Servicios
            </a>
            <a 
              href="#productos" 
              onClick={(e) => handleSmoothScroll(e, "#productos")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Productos
            </a>
            <a 
              href="#beneficios" 
              onClick={(e) => handleSmoothScroll(e, "#beneficios")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Beneficios
            </a>
            <a 
              href="#contacto" 
              onClick={(e) => handleSmoothScroll(e, "#contacto")}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Contacto
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild>
              <a 
                href="#contacto" 
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
                className="flex items-center gap-2"
                title="Solicitar cotización de películas de control solar"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Móvil */}
      <div 
        className={`md:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {/* SEO: Añadido aria-label para diferenciar el nav móvil */}
        <nav className="container mx-auto px-4 py-4 flex flex-col gap-4" aria-label="Navegación móvil">
          <a 
            href="#servicios" 
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, "#servicios")}
          >
            Servicios
          </a>
          <a 
            href="#productos" 
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, "#productos")}
          >
            Productos
          </a>
          <a 
            href="#beneficios" 
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, "#beneficios")}
          >
            Beneficios
          </a>
          <a 
            href="#contacto" 
            className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-300"
            onClick={(e) => handleSmoothScroll(e, "#contacto")}
          >
            Contacto
          </a>
          <Button asChild className="w-full mt-2">
            <a 
              href="#contacto" 
              onClick={(e) => handleSmoothScroll(e, "#contacto")}
              className="flex items-center justify-center gap-2"
              title="Solicitar cotización de películas de control solar"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Cotizar Ahora
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}