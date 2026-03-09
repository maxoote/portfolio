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
    <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-gray-200 p-4 animate-fade-in">
      {/* En-tête */}
      <div className="flex items-center justify-between mb-3 bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] p-2">
        <h1 className="text-2xl font-bold text-white">{project.title}</h1>
        <a
          href="/catalogue"
          className="p-2 px-3.5 text-2xl bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 hover:bg-gray-500 hover:scale-110"
          aria-label="Retour au catalogue"
        >
          ✕
        </a>
      </div>

      {/* Image hero */}
      <div className="w-full aspect-[16/3] overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-image-fade-in">
        <img src={(project.image as any)?.src ?? project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {/* Lien externe */}
      {project.url && (
        <div className="mt-4 animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
          <a href={project.url} className="underline font-semibold hover:text-blue-600 transition-colors" target="_blank" rel="noreferrer">
            Voir le projet
          </a>
        </div>
      )}

      {/* Descriptions */}
      {project.detailedDescription && (
        <div className="mt-6 text-left space-y-6">
          {project.detailedDescription.context && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "150ms" }}>
              <h2 className="text-xl font-bold mb-2">{project.detailedDescription.context.title}</h2>
              <p className="leading-relaxed">{project.detailedDescription.context.content}</p>
            </div>
          )}
          {project.detailedDescription.role && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="text-xl font-bold mb-2">{project.detailedDescription.role.title}</h2>
              <p className="leading-relaxed italic mb-3">{project.detailedDescription.role.intro}</p>
              <ul className="list-disc list-inside space-y-2">
                {project.detailedDescription.role.points.map((point, i) => (
                  typeof point === "string"
                    ? <li key={i}>{point}</li>
                    : <li key={i}><span className="font-semibold">{(point as any).title}:</span> {(point as any).content}</li>
                ))}
              </ul>
            </div>
          )}
          {project.detailedDescription.keyLearnings && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "250ms" }}>
              <h2 className="text-xl font-bold mb-2">{project.detailedDescription.keyLearnings.title}</h2>
              <ul className="list-disc list-inside space-y-2">
                {project.detailedDescription.keyLearnings.points.map((point, i) => (
                  typeof point === "string"
                    ? <li key={i}>{point}</li>
                    : <li key={i}><span className="font-semibold">{(point as any).title}:</span> {(point as any).content}</li>
                ))}
              </ul>
            </div>
          )}
          {project.detailedDescription.vision && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "350ms" }}>
              <h2 className="text-xl font-bold mb-2">{project.detailedDescription.vision.title}</h2>
              <p className="leading-relaxed">{project.detailedDescription.vision.content}</p>
            </div>
          )}
          {project.detailedDescription.competencesDemontrees && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "400ms" }}>
              <h2 className="text-xl font-bold mb-2">{project.detailedDescription.competencesDemontrees.title}</h2>
              <p className="leading-relaxed">{project.detailedDescription.competencesDemontrees.content}</p>
            </div>
          )}
        </div>
      )}

      {/* Galerie */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="mt-6 animate-stagger-fade-in" style={{ animationDelay: "500ms" }}>
          <h3 className="text-xl font-semibold mb-3">Galerie</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="w-full h-32 md:h-full max-h-60 overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:scale-105 transition-all duration-250"
              >
                <img src={(src as any)?.src ?? src} alt={`${project.title} ${i + 1}`} className="object-cover w-full h-full p-1 animate-image-fade-in" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <ul className="mt-6 flex flex-wrap gap-2 animate-stagger-fade-in" style={{ animationDelay: "550ms" }}>
          {project.tags.map(t => (
            <li key={t} className="px-2 py-1 bg-white border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-sm">
              {t}
            </li>
          ))}
        </ul>
      )}

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 relative max-w-5xl max-h-[90vh] flex flex-col items-center gap-4 animate-image-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-2 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-yellow-500 w-full">
              <span className="font-semibold">Image {lightboxIndex + 1} / {project.gallery.length}</span>
              <button onClick={() => setLightboxIndex(null)} className="bg-gray-400 px-2 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">✕</button>
            </div>
            <div className="relative flex items-center">
              <button onClick={prevImage} className="absolute left-2 z-10 text-white text-3xl px-3 py-2 bg-black/40 hover:bg-black/60" aria-label="Précédent">‹</button>
              <img
                src={(project.gallery[lightboxIndex] as any)?.src ?? project.gallery[lightboxIndex]}
                alt={`Image ${lightboxIndex + 1}`}
                className="max-h-[75vh] max-w-full object-contain"
              />
              <button onClick={nextImage} className="absolute right-2 z-10 text-white text-3xl px-3 py-2 bg-black/40 hover:bg-black/60" aria-label="Suivant">›</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
