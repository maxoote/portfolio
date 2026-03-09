import { useEffect, useMemo, useState } from "react"
import ProjectCard from "../ui/ProjectCard"
import ProjectDetail from "../ui/Projetdetail"
import Window from "../ui/Window"
import { projects as allProjects } from "../../data/projects"

const categories = ["Audiovisuel", "Branding", "Photographie", "Print", "Programmation", "Web-design"] as const
type Cat = typeof categories[number] | "Tout"

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

  return (
    <Window
      title="Mes projets"
      titleClassName="bg-blue-900"
      tailleTitle="text-2xl"
      className="flex-1 min-h-0 flex flex-col overflow-hidden"
    >
      {/* Filtres */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 p-3 pb-0">
        {categories.map((c, idx) => (
          <button
            key={c}
            onClick={() => { setCat(c); setActiveId(null) }}
            style={{ animationDelay: `${idx * 50}ms` }}
            className={[
              "px-3 py-1 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-250 ease-out hover:scale-110 active:shadow-[inset_-2px_-2px_0_0_#fff,inset_2px_2px_0_0_#000] animate-stagger-fade-in",
              cat === c ? "bg-gray-500 text-white font-bold" : "bg-white hover:bg-gray-100",
            ].join(" ")}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => { setCat("Tout"); setActiveId(null) }}
          style={{ animationDelay: `${categories.length * 50}ms` }}
          className={[
            "px-3 py-1 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-250 ease-out hover:scale-110 active:shadow-[inset_-2px_-2px_0_0_#fff,inset_2px_2px_0_0_#000] animate-stagger-fade-in",
            cat === "Tout" ? "bg-gray-500 text-white font-bold" : "bg-white hover:bg-gray-100",
          ].join(" ")}
        >
          Tout
        </button>
      </div>

      {/* Contenu */}
      <div className="px-3 pb-3 flex-1 min-h-0 overflow-y-auto mt-3">
        {!active ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {projects.map((p, idx) => (
              <div key={p.id} style={{ animationDelay: `${idx * 75}ms` }} className="animate-stagger-fade-in">
                <ProjectCard
                  title={p.title}
                  image={p.image}
                  onClick={() => setActiveId(p.id)}
                  className="aspect-square"
                />
              </div>
            ))}
          </div>
        ) : (
          <ProjectDetail project={active} onClose={() => setActiveId(null)} />
        )}
      </div>
    </Window>
  )
}
