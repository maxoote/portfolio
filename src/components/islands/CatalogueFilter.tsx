import { useEffect, useMemo, useState } from "react"
import { projects as allProjects } from "../../data/projects"

/**
 * Page « Mes projets » : barre de filtres en haut + grille de grandes
 * cartes-fenêtres. La page défile normalement (pas de scroll interne).
 * Cliquer une carte navigue vers /projects/[slug].
 * Les anciennes URLs /catalogue#slug redirigent vers la page dédiée.
 */

const categories = ["Audiovisuel", "Branding", "Photographie", "Print", "Programmation", "Web-design"] as const
type Cat = typeof categories[number] | "Tout"

const categoryCounts = Object.fromEntries(
  categories.map(c => [c, allProjects.filter(p => p.categories?.includes(c)).length])
) as Record<Cat, number>

export default function CatalogueFilter() {
  const [cat, setCat] = useState<Cat>("Tout")

  // Rétrocompatibilité : les anciennes URLs #slug ouvrent la page dédiée
  useEffect(() => {
    const id = window.location.hash.replace("#", "")
    if (id && allProjects.some(p => p.id === id)) {
      window.location.replace(`/projects/${id}`)
    }
  }, [])

  // Filtre demandé depuis /main (sessionStorage)
  useEffect(() => {
    const wanted = sessionStorage.getItem("wantedCat")
    if (wanted && categories.includes(wanted as any)) {
      setCat(wanted as Cat)
    }
    sessionStorage.removeItem("wantedCat")
  }, [])

  const projects = useMemo(() => {
    if (cat === "Tout") return allProjects
    return allProjects.filter(p => p.categories?.includes(cat))
  }, [cat])

  const chip = (active: boolean) =>
    [
      "px-3 py-1.5 text-xs md:text-sm font-semibold no-select transition-colors",
      active
        ? "bg-blue-900 text-white shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff]"
        : "bg-gray-300 text-gray-800 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:bg-gray-400 active:shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff]",
    ].join(" ")

  return (
    <div className="space-y-6">

      {/* ===== Barre d'outils : titre + filtres ===== */}
      <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 animate-fade-in">
        <div className="mb-2 flex items-center justify-between text-white px-3 py-2 bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
          <h1 className="font-semibold text-base no-select">Mes projets</h1>
          <span aria-hidden="true" className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select">✕</span>
        </div>
        <div className="shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white px-3 py-3">
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setCat("Tout")} className={chip(cat === "Tout")}>
              Tout voir <span className="opacity-60">({allProjects.length})</span>
            </button>
            {categories.map(c => (
              <button key={c} onClick={() => setCat(c)} className={chip(cat === c)}>
                {c} <span className="opacity-60">({categoryCounts[c] ?? 0})</span>
              </button>
            ))}
          </div>
        </div>
        <div className="mt-1.5 flex gap-1">
          <span className="flex-1 text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
            {projects.length} projet{projects.length > 1 ? "s" : ""}{cat !== "Tout" ? ` — ${cat}` : ""}
          </span>
        </div>
      </div>

      {/* ===== Grille de cartes-fenêtres ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
        {projects.map((p, idx) => (
          <a
            key={p.id}
            href={`/projects/${p.id}`}
            style={{ animationDelay: `${Math.min(idx * 50, 400)}ms` }}
            className="group block shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,6px_6px_0_0_rgba(0,0,0,0.4)] bg-gray-300 p-1.5 animate-stagger-fade-in transition-transform duration-200 ease-out hover:-translate-y-1 hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_10px_0_0_rgba(0,0,0,0.45)]"
          >
            {/* Barre de titre de la carte */}
            <div className="mb-1.5 flex items-center justify-between px-2.5 py-1.5 bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
              <span className="text-white text-xs font-semibold truncate no-select">{p.title}</span>
              <span aria-hidden="true" className="ml-2 p-0.5 px-1.5 bg-gray-400 shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_#000] text-black text-[10px] no-select flex-shrink-0">✕</span>
            </div>

            {/* Visuel */}
            <div className="relative aspect-[4/3] overflow-hidden shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white">
              <img
                src={(p.image as any)?.src ?? p.image}
                alt={p.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                loading={idx < 6 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>

            {/* Barre de statut : catégories */}
            <div className="mt-1.5 flex gap-1">
              <span className="flex-1 text-[11px] px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select truncate">
                {p.categories?.join(" · ") ?? "Projet"}
              </span>
              <span className="text-[11px] px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select group-hover:bg-blue-900 group-hover:text-white transition-colors">
                Ouvrir →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
