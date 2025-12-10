import { useEffect, useMemo, useState } from "react"
import ProjectCard from "./ui/ProjectCard"
import ProjectDetail from "./ui/Projetdetail"
import MenuWindow from "./MenuWindow"
import Window from "./ui/Window"
import { projects as allProjects } from "../data/projects"

const categories = ["Audiovisuel", "Branding", "Photographie", "Print", "Programmation", "Web-design"] as const
type Cat = typeof categories[number] | "Tout"

export default function Catalogue() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [cat, setCat] = useState<Cat>("Tout")

  // Gestion de l’ancre (#id)
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
    } else {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname + window.location.search)
      }
    }
  }, [activeId])

  // Si on vient du carrousel → applique le filtre
  useEffect(() => {
    const wanted = sessionStorage.getItem("wantedCat")
    if (wanted) {
      if (categories.includes(wanted as any)) {
        setCat(wanted as Cat)
        setActiveId(null)
      }
      sessionStorage.removeItem("wantedCat")
    }
  }, [])

  const projects = useMemo(() => {
    if (cat === "Tout") return allProjects
    return allProjects.filter(p => p.categories?.includes(cat))
  }, [cat])

  const active = activeId
    ? projects.find(p => p.id === activeId) || allProjects.find(p => p.id === activeId) || null
    : null

  return (
    <section className="min-h-dvh  bg-[url('./assets/fondprojet.png')] bg-cover bg-repeat py-6">
      <div className="mx-auto max-w-7xl px-4 lg:h-screen">
        <MenuWindow />
        <Window
          title="Mes projets"
          titleClassName="bg-blue-900"
          tailleTitle="text-2xl"
          className="mt-4 h-[88vh] flex flex-col overflow-hidden"
        >
          {/* Filtres */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-4">
            {categories.map(c => (
              <button
                key={c}
                onClick={() => {
                  setCat(c)
                  setActiveId(null)
                }}
                className={[
                  "px-3 py-1 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]",
                  cat === c ? "bg-gray-500 text-white font-bold" : "bg-white",
                ].join(" ")}
              >
                {c}
              </button>
            ))}
            <button
              onClick={() => {
                setCat("Tout")
                setActiveId(null)
              }}
              className={[
                "px-3 py-1 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]",
                cat === "Tout" ? "bg-gray-500 text-white font-bold" : "bg-white",
              ].join(" ")}
            >
              Tout
            </button>
          </div>

          {/* Contenu */}
<div className="px-3 pb-3 flex-1 min-h-0 overflow-y-auto">
  {!active ? (
    // Si aucun projet n'est actif, on affiche la grille
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {projects.map(p => (
        <ProjectCard
          key={p.id}
          title={p.title}
          image={p.image}
          onClick={() => setActiveId(p.id)}
          className="aspect-square"
        />
      ))}
    </div>
  ) : (
    // Sinon, on affiche UNIQUEMENT le détail du projet actif
    <ProjectDetail project={active} onClose={() => setActiveId(null)} />
  )}

          </div>
        </Window>
      </div>
    </section>

  )
}
