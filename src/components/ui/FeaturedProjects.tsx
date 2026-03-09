import { useMemo } from "react"
import { projects } from "../../data/projects"
import Window from "./Window"

type Props = {
  projectIds: string[]
}

export default function FeaturedProjects({ projectIds }: Props) {
  const featured = useMemo(() => {
    const byId = Object.fromEntries(projects.map(p => [p.id, p]))
    return projectIds.map(id => byId[id]).filter(Boolean)
  }, [projectIds])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {featured.map((project, idx) => (
        <div
          key={project.id}
          className="animate-stagger-fade-in hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          <Window
            title={project.title}
            titleClassName="bg-blue-900"
            tailleTitle="text-base md:text-lg"
            className="h-full flex flex-col"
          >
            <div className="flex flex-col h-full">
              <a
                href={`#${project.id}`}
                className="block flex-1 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 hover:scale-110"
                />
              </a>
              <div className="p-3 bg-white border-t-2 border-gray-400">
                <p className="text-xs md:text-sm font-semibold text-blue-900">
                  {project.categories?.[0] || "Projet"}
                </p>
                <p className="text-sm md:text-base font-bold text-gray-800 mt-1">
                  {project.title}
                </p>
              </div>
            </div>
          </Window>
        </div>
      ))}
    </div>
  )
}
