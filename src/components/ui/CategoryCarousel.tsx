import { useEffect, useMemo, useRef, useState } from "react"
import { useNav } from "../../navigation"
import { projects as allProjects } from "../../data/projects"

// --- Typage strict des catégories
const CATEGORIES = ["Audiovisuel","Branding","Photographie","Print","Programmation","Web-design"] as const
export type Category = typeof CATEGORIES[number]

// Slide avec image personnalisée
type Slide = { cat: Category; cover: string }

type Props = {
  // Soit tu passes tes slides (cat + image dédiée) :
  slides?: Slide[]
  // …ou on déduit depuis la liste (ordre par défaut)
  categories?: readonly Category[]
  interval?: number
  aspectClassName?: string
}

export default function CategoryCarousel({
  slides,
  categories = CATEGORIES,
  interval = 4000,
  aspectClassName = "aspect-[16/9]",
}: Props) {
  const { goTo } = useNav()
  const [i, setI] = useState(0)
  const [progress, setProgress] = useState(0)
  const raf = useRef<number | null>(null)

  // Si slides non fournis → fabriquer depuis data (fallback image = 1er projet de la cat)
  const autoSlides = useMemo<Slide[]>(() => {
    return categories.map((cat) => {
      const items = allProjects.filter(p => p.categories?.includes(cat))
      return { cat, cover: items[0]?.image ?? "" }
    })
  }, [categories])

  const slidesFinal: Slide[] = slides?.length ? slides : autoSlides
  const total = slidesFinal.length
  const current = slidesFinal[i]

  // Autoplay + barre de progression
  useEffect(() => {
    let start = performance.now()
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / interval)
      setProgress(p)
      if (p >= 1) {
        start = now
        setI(prev => (prev + 1) % total)
        setProgress(0)
      }
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [interval, total])


  // Active le filtre dans Catalogue
  const openCatalogueWithCat = (cat: Category) => {
    sessionStorage.setItem("wantedCat", cat) // lu côté Catalogue
    goTo("catalogue")
  }

  // Compter les projets par catégorie (pour l’étiquette)
  const count = useMemo(() => {
    const map = new Map<Category, number>()
    const ensure = (cat: Category) => {
      if (!map.has(cat)) {
        map.set(cat, allProjects.filter(p => p.categories?.includes(cat)).length)
      }
    }
    categories.forEach(ensure)
    if (slides?.length) slides.forEach(s => ensure(s.cat))
    return map
  }, [categories, slides])

  return (
    <div className={`relative w-full ${aspectClassName} overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-gray-200`}>
      {/* Image */}
      {current?.cover ? (
        <img src={current.cover} alt={current.cat} className="absolute inset-0 w-full h-full object-cover" />
      ) : (
        <div className="absolute inset-0 grid place-items-center text-sm">Aucune image</div>
      )}

      {/* Dégradé lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-black/20" />

      {/* Titre + nb projets — haut gauche */}
      <div className="absolute top-2 left-2 flex gap-2">
        <div className="px-2 py-1 bg-white/80 backdrop-blur-sm text-sm md:text-base font-bold border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
          {current?.cat}
        </div>
        <div className="px-2 py-1 bg-white/80 backdrop-blur-sm text-xs md:text-sm border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
          {count.get(current?.cat)! ?? 0} projet{(count.get(current?.cat)! ?? 0) > 1 ? "s" : ""}
        </div>
      </div>

      {/* Indice — haut droit */}
      <div className="absolute top-2 right-2 px-2 py-1 bg-white/80 backdrop-blur-sm text-xs md:text-sm font-semibold border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
        {i + 1}/{total}
      </div>

      

      {/* Progress + dots */}
      <div className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-2">
        <div className="w-48 md:w-64 h-1.5 bg-white/60 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] overflow-hidden">
          <div className="h-full bg-gray-700" style={{ width: `${progress * 100}%` }} />
        </div>
        <div className="flex gap-1.5">
         
        </div>
      </div>

      

      {/* Clique plein cadre = ouvre le catalogue filtré */}
      <button
        className="absolute inset-0"
        aria-label={current ? `Ouvrir la catégorie ${current.cat}` : "Ouvrir la catégorie"}
        onClick={() => current && openCatalogueWithCat(current.cat)}
      />
    </div>
  )
}
