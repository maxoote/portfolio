import { useState } from "react"
import type { Project } from "../../types/projects"

type Props = { project: Project }

export default function ProjectDetailPage({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const prevImage = () => {
    if (lightboxIndex === null || !project.gallery?.length) return
    setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length)
  }
  const nextImage = () => {
    if (lightboxIndex === null || !project.gallery?.length) return
    setLightboxIndex((lightboxIndex + 1) % project.gallery.length)
  }

  return (
    <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 animate-fade-in">

      {/* Barre de titre */}
      <div className="mb-2 flex items-center justify-between bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] px-3 py-2">
        <h1 className="text-base font-bold text-white leading-tight">{project.title}</h1>
        <div className="flex gap-1 flex-shrink-0 ml-4">
          <span className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select">—</span>
          <span className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select">□</span>
          <a
            href="/catalogue"
            className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select hover:bg-red-600 hover:text-white transition-colors"
            aria-label="Retour au catalogue"
          >✕</a>
        </div>
      </div>

      {/* Contenu principal dans un panneau enfoncé */}
      <div className="shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white">

        {/* Image hero */}
        <div className="w-full aspect-[16/7] overflow-hidden animate-image-fade-in">
          <img
            src={(project.image as any)?.src ?? project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Corps du contenu */}
        <div className="p-6 md:p-10 space-y-10">

          {/* Lien externe */}
          {project.url && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
              <a
                href={project.url}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#808080] font-semibold text-sm hover:bg-gray-200 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                🌐 Voir le projet en ligne →
              </a>
            </div>
          )}

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="animate-stagger-fade-in flex flex-wrap gap-2" style={{ animationDelay: "120ms" }}>
              {project.tags.map(t => (
                <span key={t} className="px-3 py-1 bg-gray-100 shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_#808080] text-xs font-semibold text-gray-700">
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Descriptions */}
          {project.detailedDescription && (
            <div className="space-y-10">

              {project.detailedDescription.context && (
                <section className="animate-stagger-fade-in" style={{ animationDelay: "150ms" }}>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">{project.detailedDescription.context.title}</h2>
                  <p className="leading-relaxed text-gray-700">{project.detailedDescription.context.content}</p>
                </section>
              )}

              {project.detailedDescription.role && (
                <section className="animate-stagger-fade-in" style={{ animationDelay: "200ms" }}>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">{project.detailedDescription.role.title}</h2>
                  <p className="leading-relaxed italic text-gray-500 mb-5">{project.detailedDescription.role.intro}</p>
                  <ul className="space-y-3 pl-2">
                    {project.detailedDescription.role.points.map((point, i) => (
                      typeof point === "string"
                        ? <li key={i} className="flex gap-3 text-gray-700"><span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span>{point}</li>
                        : <li key={i} className="flex gap-3 text-gray-700"><span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span><span><span className="font-semibold">{(point as any).title} : </span>{(point as any).content}</span></li>
                    ))}
                  </ul>
                </section>
              )}

              {project.detailedDescription.keyLearnings && (
                <section className="animate-stagger-fade-in" style={{ animationDelay: "250ms" }}>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">{project.detailedDescription.keyLearnings.title}</h2>
                  <ul className="space-y-3 pl-2">
                    {project.detailedDescription.keyLearnings.points.map((point, i) => (
                      typeof point === "string"
                        ? <li key={i} className="flex gap-3 text-gray-700"><span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span>{point}</li>
                        : <li key={i} className="flex gap-3 text-gray-700"><span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span><span><span className="font-semibold">{(point as any).title} : </span>{(point as any).content}</span></li>
                    ))}
                  </ul>
                </section>
              )}

              {project.detailedDescription.vision && (
                <section className="animate-stagger-fade-in" style={{ animationDelay: "300ms" }}>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">{project.detailedDescription.vision.title}</h2>
                  <p className="leading-relaxed text-gray-700">{project.detailedDescription.vision.content}</p>
                </section>
              )}

              {project.detailedDescription.competencesDemontrees && (
                <section className="animate-stagger-fade-in" style={{ animationDelay: "350ms" }}>
                  <h2 className="text-lg font-bold mb-4 pb-2 border-b-2 border-gray-200">{project.detailedDescription.competencesDemontrees.title}</h2>
                  <p className="leading-relaxed text-gray-700">{project.detailedDescription.competencesDemontrees.content}</p>
                </section>
              )}

            </div>
          )}

          {/* Galerie */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="animate-stagger-fade-in" style={{ animationDelay: "400ms" }}>
              <h2 className="text-lg font-bold mb-5 pb-2 border-b-2 border-gray-200">Galerie</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {project.gallery.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    className="aspect-square overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#808080] hover:scale-[1.02] hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,4px_4px_0_0_rgba(0,0,0,0.25)] transition-all duration-200"
                  >
                    <img
                      src={(src as any)?.src ?? src}
                      alt={`${project.title} ${i + 1}`}
                      className="object-cover w-full h-full animate-image-fade-in"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>

      {/* Barre de statut */}
      <div className="mt-1.5 flex gap-1">
        <span className="flex-1 text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
          {project.title}
        </span>
        {project.categories && (
          <span className="text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
            {project.categories[0]}
          </span>
        )}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 relative max-w-5xl max-h-[90vh] flex flex-col gap-2 m-4 animate-image-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-1.5 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-blue-900">
              <span className="font-semibold text-xs no-select">Image {lightboxIndex + 1} / {project.gallery.length}</span>
              <button
                onClick={() => setLightboxIndex(null)}
                className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select hover:bg-red-600 hover:text-white transition-colors"
              >✕</button>
            </div>
            <div className="relative flex items-center">
              <button onClick={prevImage} className="absolute left-2 z-10 text-white text-3xl px-3 py-2 bg-black/50 hover:bg-black/70 transition-colors" aria-label="Précédent">‹</button>
              <img
                src={(project.gallery[lightboxIndex] as any)?.src ?? project.gallery[lightboxIndex]}
                alt={`Image ${lightboxIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain"
              />
              <button onClick={nextImage} className="absolute right-2 z-10 text-white text-3xl px-3 py-2 bg-black/50 hover:bg-black/70 transition-colors" aria-label="Suivant">›</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
