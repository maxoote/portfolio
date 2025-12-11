import type { Project } from "../../types/projects"
import { useState } from "react"

type Props = { project: Project; onClose: () => void }
export default function ProjectDetail({ project, onClose }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (i: number) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)

  const prevImage = () => {
    if (lightboxIndex === null || !project.gallery) return
    setLightboxIndex((lightboxIndex - 1 + project.gallery.length) % project.gallery.length)
  }
  const nextImage = () => {
    if (lightboxIndex === null || !project.gallery) return
    setLightboxIndex((lightboxIndex + 1) % project.gallery.length)
  }

  return (
    <div className="w-full shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-gray-200 p-4">
      <div className="flex items-center justify-between mb-3 bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] p-2">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <button
          onClick={onClose}
          className="p-2 px-3.5 text-2xl bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
        >
          ✕
        </button>
      </div>

      <div className="w-full aspect-[16/3] overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      </div>

      {project.url ? (
        <div className="mt-4">
          <a
            href={project.url}
            className="underline font-semibold"
            target="_blank"
            rel="noreferrer"
          >
            Voir le projet
          </a>
        </div>
      ) : null}

      {project.detailedDescription ? (
        <div className="mt-6 text-left space-y-6">
          {/*
      Ce code vérifie pour chaque section si elle existe avant de tenter de l'afficher.
      Cela évite les erreurs si un projet n'a que certaines sections.
    */}

          {/* Section de type Contenu Simple (paragraphe) */}
          {project.detailedDescription.context && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.context.title}</h4>
              <p className="leading-relaxed">{project.detailedDescription.context.content}</p>
            </div>
          )}

          {/* Section de type Liste de Points */}
          {project.detailedDescription.role && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.role.title}</h4>
              {project.detailedDescription.role.intro && (
                <p className="leading-relaxed italic mb-3">{project.detailedDescription.role.intro}</p>
              )}
              <ul className="list-disc list-inside space-y-2">
                {project.detailedDescription.role.points.map((point, index) => {
                  // Ici, on vérifie si le 'point' est un simple texte ou un objet détaillé
                  if (typeof point === 'string') {
                    return <li key={index}>{point}</li>;
                  }
                  return (
                    <li key={index}>
                      <span className="font-semibold">{point.title}:</span> {point.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Section de type Apprentissages Clés (liste) */}
          {project.detailedDescription.keyLearnings && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.keyLearnings.title}</h4>
              <ul className="list-disc list-inside space-y-2">
                {project.detailedDescription.keyLearnings.points.map((point, index) => (
                  typeof point === 'string'
                    ? <li key={index}>{point}</li>
                    : <li key={index}><span className="font-semibold">{point.title}:</span> {point.content}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Section de type Apprentissage Critique (paragraphe) */}
          {project.detailedDescription.criticalLearning && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.criticalLearning.title}</h4>
              <p className="leading-relaxed">{project.detailedDescription.criticalLearning.content}</p>
            </div>
          )}

          {/* Section Vision (paragraphe) */}
          {project.detailedDescription.vision && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.vision.title}</h4>
              <p className="leading-relaxed">{project.detailedDescription.vision.content}</p>
            </div>
          )}

          {/* Section Compétences (peut être paragraphe ou liste) */}
          {project.detailedDescription.competencesDemontrees && (
            <div className="description-section">
              <h4 className="text-xl font-bold mb-2">{project.detailedDescription.competencesDemontrees.title}</h4>
              {'points' in project.detailedDescription.competencesDemontrees ? (
                // Si c'est une liste de points
                <ul className="list-disc list-inside space-y-2">
                  {project.detailedDescription.competencesDemontrees.points.map((point, index) => (
                    typeof point === 'string'
                      ? <li key={index}>{point}</li>
                      : <li key={index}><span className="font-semibold">{point.title}:</span> {point.content}</li>
                  ))}
                </ul>
              ) : (
                // Si c'est un simple paragraphe
                <p className="leading-relaxed">{project.detailedDescription.competencesDemontrees.content}</p>
              )}
            </div>
          )}

        </div>
      ) : project.description ? (
        // Fallback pour les projets qui ont encore l'ancienne description
        <p className="mt-3 leading-relaxed">{project.description}</p>
      ) : null}
      {project.videoUrl ? (

        <div className="mt-6">

          <video src={project.videoUrl} controls className="w-full h-auto" />

        </div>

      ) : null}



      {project.gallery && project.gallery.length ? (
        <div className="mt-6">
          <h4 className="text-xl font-semibold mb-3">Galerie</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {project.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}

                className="w-60 h-32 md:h-full max-h-60 overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] z-50 flex justify-center"
              >
                <img src={src} alt="" className=" object-fill p-1 h-full" />
              </button>
            ))}

          </div>

        </div>

      ) : null}

      {project.tags && project.tags.length ? (
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map(t => (
            <li
              key={t}
              className="px-2 py-1 bg-white border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:bg-gray-400 "
            >
              {t}
            </li>
          ))}
        </ul>
      ) : null}

      {project.categories && project.categories.length ? (
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-2">Catégories</h4>
          <ul className="flex flex-wrap gap-2">
            {project.categories.map(c => (
              <li
                key={c}
                className="px-2 py-1 bg-white border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {/* Lightbox */}
      {lightboxIndex !== null && project.gallery && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={closeLightbox}
  >
    <div
      className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 lg:top-3 lg:right-3 relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center box-border gap-5"
      onClick={e => e.stopPropagation()}
    >
      <div className="flex items-center justify-between px-3 py-2 gap-2 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-yellow-500 w-full">
        <span className="font-semibold text-lg">Menu</span>
      </div>

      <button
        onClick={prevImage}
        className="absolute left-2 text-white text-3xl px-3 py-2 bg-black/40 rounded-full"
      >
        ‹
      </button>
      <img
        src={project.gallery[lightboxIndex]}
        alt=""
        className="w-auto max-h-[80vh] mx-auto rounded shadow-lg"
      />
      <button
        onClick={nextImage}
        className="absolute right-2 text-white text-3xl px-3 py-2 bg-black/40 rounded-full"
      >
        ›
      </button>
      <button
        onClick={closeLightbox}
        className="absolute top-2 right-2 bg-black/60 text-white px-3 py-1 rounded"
      >
        ✕
      </button>
    </div>
  </div>
)}
    </div>
  )
}
