import { useEffect, useMemo, useState } from "react"
import ProjectCard from "../ui/ProjectCard"
import ProjectDetail from "../ui/Projetdetail"
import Window from "../ui/Window"
import { projects as allProjects } from "../../data/projects"

const categories = ["Audiovisuel", "Branding", "Photographie", "Print", "Programmation", "Web-design"] as const
type Cat = typeof categories[number] | "Tout"

const categoryCounts = Object.fromEntries(
  categories.map(c => [c, allProjects.filter(p => p.categories?.includes(c)).length])
) as Record<Cat, number>

export default function CatalogueFilter() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [cat, setCat] = useState<Cat>("Tout")

  // Hash URL → détail projet
  useEffect(() => {
    const id = window.location.hash.replace("#", "")
    if (id) setActiveId(id)
    const onHash = () => {
      const hid = window.location.hash.replace("#", "")
      setActiveId(hid || null)
    }
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  useEffect(() => {
    if (activeId) {
      if (window.location.hash.replace("#", "") !== activeId) {
        window.history.pushState(null, "", `#${activeId}`)
      }
    } else if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search)
    }
  }, [activeId])

  // Filtre depuis sessionStorage (venant de /main)
  useEffect(() => {
    const wanted = sessionStorage.getItem("wantedCat")
    if (wanted && categories.includes(wanted as any)) {
      setCat(wanted as Cat)
      setActiveId(null)
    }
    sessionStorage.removeItem("wantedCat")
  }, [])

  const projects = useMemo(() => {
    if (cat === "Tout") return allProjects
    return allProjects.filter(p => p.categories?.includes(cat))
  }, [cat])

  const active = activeId
    ? projects.find(p => p.id === activeId) || allProjects.find(p => p.id === activeId) || null
    : null

  const visibleCount = projects.length

  return (
    <Window
      title="Mes projets"
      titleClassName="bg-blue-900"
      tailleTitle="text-base"
      className="flex-1 min-h-0 flex flex-col overflow-hidden"
    >
      {/* Layout : sidebar gauche + contenu droit */}
      <div className="flex-1 min-h-0 flex overflow-hidden">

        {/* Sidebar catégories */}
        <div className="w-36 md:w-44 flex-shrink-0 flex flex-col overflow-hidden shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white">
          <div className="px-2 py-1.5 bg-gray-200 border-b border-gray-400 text-xs font-bold uppercase tracking-wide text-gray-600 no-select flex-shrink-0">
            Catégories
          </div>
          <div className="flex-1 overflow-y-auto">
            {/* Tout */}
            <button
              onClick={() => { setCat("Tout"); setActiveId(null) }}
              className={[
                "w-full flex items-center justify-between px-3 py-2 text-xs md:text-sm border-b border-gray-100 transition-colors no-select text-left group",
                cat === "Tout"
                  ? "bg-blue-900 text-white"
                  : "hover:bg-blue-900 hover:text-white",
              ].join(" ")}
            >
              <span className="flex items-center gap-1.5">
                <span className={["opacity-40 group-hover:opacity-100 text-xs", cat === "Tout" ? "opacity-100" : ""].join(" ")}>▶</span>
                Tout voir
              </span>
              <span className={["text-xs no-select", cat === "Tout" ? "text-white/70" : "text-gray-400 group-hover:text-white/60"].join(" ")}>
                {allProjects.length}
              </span>
            </button>

            {/* Catégories */}
            {categories.map((c, idx) => (
              <button
                key={c}
                onClick={() => { setCat(c); setActiveId(null) }}
                style={{ animationDelay: `${idx * 40}ms` }}
                className={[
                  "w-full flex items-center justify-between px-3 py-2 text-xs md:text-sm border-b border-gray-100 last:border-0 transition-colors no-select text-left group animate-stagger-fade-in",
                  cat === c
                    ? "bg-blue-900 text-white"
                    : "hover:bg-blue-900 hover:text-white",
                ].join(" ")}
              >
                <span className="flex items-center gap-1.5">
                  <span className={["opacity-40 group-hover:opacity-100 text-xs", cat === c ? "opacity-100" : ""].join(" ")}>▶</span>
                  {c}
                </span>
                <span className={["text-xs no-select", cat === c ? "text-white/70" : "text-gray-400 group-hover:text-white/60"].join(" ")}>
                  {categoryCounts[c] ?? 0}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Séparateur */}
        <div className="w-1 flex-shrink-0 bg-[#808080] shadow-[1px_0_0_#fff]" />

        {/* Contenu principal */}
        <div className="flex-1 min-h-0 flex flex-col overflow-hidden">
          {!active ? (
            <>
              {/* Grille de projets */}
              <div className="flex-1 min-h-0 overflow-y-auto p-3">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {projects.map((p, idx) => (
                    <div key={p.id} style={{ animationDelay: `${idx * 60}ms` }} className="animate-stagger-fade-in">
                      <ProjectCard
                        title={p.title}
                        image={p.image}
                        onClick={() => setActiveId(p.id)}
                        className="aspect-square"
                      />
                    </div>
                  ))}
                </div>
              </div>
              {/* Barre de statut */}
              <div className="flex-shrink-0 flex gap-1 p-1.5 pt-0">
                <span className="flex-1 text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
                  {visibleCount} projet{visibleCount > 1 ? "s" : ""}{cat !== "Tout" ? ` — ${cat}` : ""}
                </span>
              </div>
            </>
          ) : (
            <div className="flex-1 min-h-0 overflow-y-auto p-3">
              <ProjectDetail project={active} onClose={() => setActiveId(null)} />
            </div>
          )}
        </div>
      </div>
    </Window>
  )
}
