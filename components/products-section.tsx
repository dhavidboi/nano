"use client"

import { useState } from "react"
import { Sun, Thermometer, Shield, Eye, Wrench, Lock, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// ─── TIPOS ────────────────────────────────────────────────────────────────────

type FilmProduct = {
  type: "film"
  code: string
  visibleLight: string
  irRejection: string
  uvRejection: string
  tser: string
  thickness: string
  description: string
  scratchResistant?: string
  sc?: string
}

type AccessoryProduct = {
  type: "accessory"
  name: string
  description: string
  category: string
  icon: "wrench" | "shield" | "film"
  image: string
  imageAlt: string
}

type Product = FilmProduct | AccessoryProduct

type ProductCategory = {
  id: string
  label: string
  icon: React.ElementType
  description: string
  products: Product[]
}

// ─── DATOS ────────────────────────────────────────────────────────────────────

const laminas: FilmProduct[] = [
  {
    type: "film",
    code: "AK05",
    visibleLight: "5%",
    irRejection: "73%",
    uvRejection: "100%",
    tser: "85.6%",
    thickness: "4MIL",
    description: "Máxima privacidad",
  },
  {
    type: "film",
    code: "AK20",
    visibleLight: "15%",
    irRejection: "56%",
    uvRejection: "100%",
    tser: "72.6%",
    thickness: "4MIL",
    description: "Balance ideal",
  },
  {
    type: "film",
    code: "AK35",
    visibleLight: "34%",
    irRejection: "44%",
    uvRejection: "99%",
    tser: "61%",
    thickness: "4MIL",
    description: "Mayor claridad",
  },
  {
    type: "film",
    code: "BK05",
    visibleLight: "5%",
    irRejection: "69%",
    uvRejection: "98.7%",
    tser: "85.3%",
    thickness: "4MIL",
    description: "HD + Privacidad",
    scratchResistant: "3H",
    sc: "0.169",
  },
  {
    type: "film",
    code: "BK20",
    visibleLight: "17.1%",
    irRejection: "52.2%",
    uvRejection: "95.1%",
    tser: "71.9%",
    thickness: "4MIL",
    description: "Visibilidad óptima",
    scratchResistant: "3H",
    sc: "0.323",
  },
  {
    type: "film",
    code: "BK35",
    visibleLight: "30.4%",
    irRejection: "39.5%",
    uvRejection: "89.2%",
    tser: "59.3%",
    thickness: "4MIL",
    description: "Claridad máxima",
    scratchResistant: "3H",
    sc: "0.468",
  },
]

const accesoriosInstalacion: AccessoryProduct[] = [
  {
    type: "accessory",
    name: "Espátula de moldeado",
    description: "Herramienta profesional para instalación de películas y láminas. Moldeado preciso sin dañar la superficie.",
    category: "Instalación",
    icon: "wrench",
    image: "/images/espatula-moldeado.jpg",
    imageAlt: "Espátula profesional para instalación de láminas de seguridad",
  },
  {
    type: "accessory",
    name: "Espátula rectangular con tela antirayas",
    description: "Espátula compacta con recubrimiento de tela especial para evitar rayaduras durante la instalación.",
    category: "Instalación",
    icon: "wrench",
    image: "/images/espatula-tela.jpg",
    imageAlt: "Espátula rectangular con tela antirayas para láminas",
  },
  {
    type: "accessory",
    name: "Espátulas escurridoras de agua",
    description: "Disponibles en versión simple y doble filo. La doble cubre más área en cada pasada; la simple llega a bordes y zonas curvas. Venta individual",
    category: "Instalación",
    icon: "wrench",
    image: "/images/escurridores.jpg",
    imageAlt: "Espátula ergonómica para instalación de láminas vehiculares",
  },
  {
  type: "accessory",
  name: "Espátula grande de moldeado interno",
  description: "Diseñada para moldear películas en superficies amplias del interior del vehículo. Su tamaño permite mayor presión uniforme y menos pasadas, reduciendo el tiempo de instalación.",
  category: "Instalación",
  icon: "wrench",
  image: "/images/espatulas-grandes.jpg",
  imageAlt: "Espátula grande de moldeado interno para instalación de películas vehiculares",
  },
  {
  type: "accessory",
  name: "Espátula limpiadora de láminas con mango",
  description: "Mango ergonómico que facilita la limpieza de láminas instaladas sin rayarlas. Ideal para mantenimiento posterior a la instalación y para remover suciedad en el filo de los vidrios.",
  category: "Instalación",
  icon: "wrench",
  image: "/images/espatula-mango.jpg",
  imageAlt: "Espátula con mango limpiadora de láminas de seguridad vehicular",
  },
  {
  type: "accessory",
  name: "Espátula limpiadora de láminas rectangular",
  description: "Forma rectangular de borde recto para limpiar superficies planas con una sola pasada. Remueve residuos de agua y polvo sin dañar la lámina instalada.",
  category: "Instalación",
  icon: "wrench",
  image: "/images/espatula-horizontal.jpg",
  imageAlt: "Espátula rectangular limpiadora de láminas de seguridad automotriz",
  },
  {
    type: "accessory",
    name: "Cinta nano antideslizante – Estribo",
    description: "Protección adhesiva para estribos de vehículo. Superficie nano antideslizante que resiste el desgaste diario.",
    category: "Protección",
    icon: "film",
    image: "/images/nano-estribo.jpg",
    imageAlt: "Cinta nano antideslizante para estribo de vehículo",
  },
  {
    type: "accessory",
    name: "Nano carbón transparente – Filo de puerta",
    description: "Lámina protectora transparente para el filo de puertas. Evita rayones y golpes sin alterar la apariencia.",
    category: "Protección",
    icon: "film",
    image: "/images/nano-filos.jpg",
    imageAlt: "Protector nano carbón transparente para filo de puerta de auto",
  },
  {
  type: "accessory",
  name: "Cinta antideslizante protectora de estribo tipo lija",
  description: "Rollo de 7 cm × 5 metros con textura tipo lija que previene resbalones y protege el estribo del desgaste diario. Adhesivo permanente resistente al agua, polvo y sol intenso.",
  category: "Protección",
  icon: "film",
  image: "/images/cinta-lija.jpg",
  imageAlt: "Cinta antideslizante protectora de estribo tipo lija 7cm x 5 metros",
  },
]

const seguridadVehicular: AccessoryProduct[] = [
  {
    type: "accessory",
    name: "Seguro para brazo",
    description: "Sistema de fijación para brazos y computadoras de vehículo. Instalación segura y desmontaje rápido.",
    category: "Seguridad",
    icon: "shield",
    image: "/images/seguros-computadoras.jpg",
    imageAlt: "Seguro antirrobo para brazo de pantalla vehicular",
  },
  {
    type: "accessory",
    name: "Seguro para computadora vehicular",
    description: "Mecanismo antirrobo para computadoras y equipos electrónicos instalados en vehículos.",
    category: "Seguridad",
    icon: "shield",
    image: "/images/seguro-computador.jpg",
    imageAlt: "Seguro antirrobo para computadora vehicular",
  },
  {
    type: "accessory",
    name: "Tuercas cónicas para computadora y brazos",
    description: "Tuercas cónicas de alta resistencia para asegurar computadoras y brazos de pluma universal.",
    category: "Fijación",
    icon: "shield",
    image: "/images/tuerca.jpg",
    imageAlt: "Tuercas cónicas de seguridad para fijación vehicular",
  },
  {
    type: "accessory",
    name: "Pernos de seguridad para computadoras",
    description: "Pernos de acero de alta resistencia en dos medidas (largo y corto). Ideales para fijar paneles, soportes y computadoras vehiculares.",
    category: "Seguridad",
    icon: "shield",
    image: "/images/pernos-aseguradores.jpg",
    imageAlt: "Pernos de seguridad para computadora y soportes vehiculares",
  },
]

const categories: ProductCategory[] = [
  {
    id: "laminas",
    label: "Láminas de Seguridad",
    icon: Sun,
    description: "Películas de control solar de alta tecnología para vehículos",
    products: laminas,
  },
  {
    id: "accesorios",
    label: "Accesorios de Instalación",
    icon: Wrench,
    description: "Herramientas y protectores para una instalación profesional",
    products: accesoriosInstalacion,
  },
  {
    id: "seguridad",
    label: "Seguridad Vehicular",
    icon: Lock,
    description: "Sistemas de fijación y protección para equipos de vehículo",
    products: seguridadVehicular,
  },
]

// ─── FILMS VIEW ───────────────────────────────────────────────────────────────

function FilmsView({ products }: { products: FilmProduct[] }) {
  const [activeSeries, setActiveSeries] = useState<"ak" | "bk">("ak")
  const currentSeries = products.filter((p) =>
    activeSeries === "ak" ? p.code.startsWith("AK") : p.code.startsWith("BK")
  )
  const isBK = activeSeries === "bk"

  const filmFeatures = [
    { icon: Eye, label: "Alta Definición" },
    { icon: Thermometer, label: "Aislamiento Térmico" },
    { icon: Sun, label: "Protección UV" },
    { icon: Shield, label: "Privacidad" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
        {filmFeatures.map((f, i) => (
          <div key={i} className="flex items-center gap-1.5 text-muted-foreground">
            <f.icon className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">{f.label}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 sm:gap-4">
        {["ak", "bk"].map((s) => (
          <button
            key={s}
            onClick={() => setActiveSeries(s as "ak" | "bk")}
            className={cn(
              "px-5 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300",
              activeSeries === s
                ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
            )}
          >
            {s.toUpperCase()}-Series
          </button>
        ))}
      </div>

      <Card className="border-border bg-card overflow-hidden">
        <CardContent className="p-0">
          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-accent">
                  {["Código", "Luz Visible", "Rechazo IR", "Rechazo UV", "TSER"].map((h) => (
                    <th key={h} className="px-6 py-4 text-left first:text-left text-center text-sm font-semibold text-accent-foreground">
                      {h}
                    </th>
                  ))}
                  {isBK && (
                    <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                      Resistencia
                    </th>
                  )}
                  <th className="px-6 py-4 text-center text-sm font-semibold text-accent-foreground">
                    Grosor
                  </th>
                </tr>
              </thead>
              <tbody key={activeSeries}>
                {currentSeries.map((p, i) => (
                  <tr
                    key={p.code}
                    className={cn(
                      "border-b border-border transition-all duration-300 hover:bg-accent/10",
                      i % 2 === 0 ? "bg-card" : "bg-secondary/30"
                    )}
                  >
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-12 h-6 rounded bg-gradient-to-r from-foreground/80 to-foreground/40"
                          style={{ opacity: 1 - parseInt(p.visibleLight) / 100 }}
                        />
                        <div>
                          <p className="font-semibold text-foreground">{p.code}</p>
                          <p className="text-xs text-muted-foreground">{p.description}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-lg font-bold text-foreground">{p.visibleLight}</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-lg font-bold text-foreground">{p.irRejection}</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-lg font-bold text-accent">{p.uvRejection}</span>
                    </td>
                    <td className="px-6 py-5 text-center">
                      <span className="text-lg font-bold text-foreground">{p.tser}</span>
                    </td>
                    {isBK && (
                      <td className="px-6 py-5 text-center">
                        <span className="text-lg font-bold text-foreground">{p.scratchResistant}</span>
                      </td>
                    )}
                    <td className="px-6 py-5 text-center">
                      <span className="text-sm font-medium text-muted-foreground">{p.thickness}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden divide-y divide-border">
            {currentSeries.map((p) => (
              <div key={p.code} className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className="w-10 h-5 rounded bg-gradient-to-r from-foreground/80 to-foreground/40 flex-shrink-0"
                    style={{ opacity: 1 - parseInt(p.visibleLight) / 100 }}
                  />
                  <div>
                    <p className="font-bold text-base text-foreground">{p.code}</p>
                    <p className="text-xs text-muted-foreground">{p.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { label: "Luz", value: p.visibleLight, accent: false },
                    { label: "IR", value: p.irRejection, accent: false },
                    { label: "UV", value: p.uvRejection, accent: true },
                    { label: "TSER", value: p.tser, accent: false },
                  ].map(({ label, value, accent }) => (
                    <div key={label} className="bg-secondary rounded-md p-2 text-center">
                      <p className="text-[10px] text-muted-foreground mb-0.5">{label}</p>
                      <p className={cn("text-sm font-bold", accent ? "text-accent" : "text-foreground")}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legend */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { label: "Rechazo UV", sub: "Protección ultravioleta", accent: true },
          { label: "Rechazo IR", sub: "Reducción de calor", accent: false },
          { label: "TSER", sub: "Rechazo total solar", accent: false },
          { label: "Luz Visible", sub: "Luz que atraviesa", accent: false },
        ].map(({ label, sub, accent }) => (
          <div key={label} className="bg-card rounded-lg p-3 md:p-4 border border-border text-center">
            <p className={cn("font-semibold text-sm mb-0.5", accent ? "text-accent" : "text-foreground")}>{label}</p>
            <p className="text-xs text-muted-foreground">{sub}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─── ACCESSORIES VIEW ─────────────────────────────────────────────────────────

const accessoryIconMap = {
  wrench: Wrench,
  shield: Shield,
  film: Sun,
}

function AccessoriesView({ products }: { products: AccessoryProduct[] }) {
  const grouped = products.reduce<Record<string, AccessoryProduct[]>>((acc, p) => {
    acc[p.category] = acc[p.category] ? [...acc[p.category], p] : [p]
    return acc
  }, {})

  return (
    <div className="space-y-10">
      {Object.entries(grouped).map(([category, items]) => (
        <div key={category}>
          {/* Category divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-accent px-2">
              {category}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* Product grid */}
          <div className={cn(
            "grid gap-4",
            items.length === 1
              ? "grid-cols-1 max-w-sm mx-auto"
              : items.length === 2
              ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          )}>
            {items.map((product) => {
              const Icon = accessoryIconMap[product.icon]
              return (
                <div
                  key={product.name}
                  className="group bg-card border border-border rounded-xl overflow-hidden hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-0.5 transition-all duration-300"
                >
                  {/* Image area */}
                  <div className="relative h-44 overflow-hidden bg-secondary">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-background/80 backdrop-blur-sm text-accent text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-full border border-accent/20">
                        <Icon className="w-3 h-3" />
                        {category}
                      </span>
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="p-4">
                    <h3 className="font-semibold text-sm text-foreground leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="text-center pt-2">
        <p className="text-xs text-muted-foreground">
          ¿Necesitas un producto específico?{" "}
          <a href="#contacto" className="text-accent hover:underline inline-flex items-center gap-0.5 font-medium">
            Consúltanos <ChevronRight className="w-3 h-3" />
          </a>
        </p>
      </div>
    </div>
  )
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState("laminas")
  const current = categories.find((c) => c.id === activeCategory)!
  const isFilms = activeCategory === "laminas"

  return (
    <section id="productos" className="py-16 md:py-24 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <p className="text-accent text-xs sm:text-sm font-medium tracking-wider uppercase mb-3 md:mb-4">
            Nuestros Productos
          </p>
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            Catálogo completo
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Láminas premium, herramientas de instalación y accesorios de seguridad vehicular.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-8 md:mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300",
                  isActive
                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80 border border-border"
                )}
              >
                <Icon className="w-4 h-4 flex-shrink-0" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Category description */}
        <p className="text-center text-xs text-muted-foreground mb-6 -mt-4">
          {current.description}
        </p>

        {/* Content */}
        {isFilms ? (
          <FilmsView products={current.products as FilmProduct[]} />
        ) : (
          <AccessoriesView products={current.products as AccessoryProduct[]} />
        )}
      </div>
    </section>
  )
}
