import { useState } from "react"
import type { Project, DetailedSectionPoints } from "../../types/projects"
import { useFocusTrap } from "../../hooks/useFocusTrap"

/**
 * Gabarit unique de présentation d'un projet (layout « agence »).
 * Desktop : fenêtre gauche fixe (sticky) avec les infos, fenêtre droite qui
 * défile avec les images. Mobile : les deux fenêtres s'empilent.
 * Toutes les sections de detailedDescription sont gérées, ainsi que la vidéo.
 */

type Props = { project: Project }

function isPoints(s: unknown): s is DetailedSectionPoints {
  return !!s && typeof s === "object" && "points" in (s as object)
}

function Section({ title, children, delay }: { title: string; children: React.ReactNode; delay: number }) {
  return (
    <section className="animate-stagger-fade-in" style={{ animationDelay: `${delay}ms` }}>
      <h2 className="text-base font-bold mb-2 pb-1.5 border-b-2 border-gray-200">{title}</h2>
      {children}
    </section>
  )
}

function PointsList({ points }: { points: DetailedSectionPoints["points"] }) {
  return (
    <ul className="space-y-2.5 pl-1">
      {points.map((point, i) =>
        typeof point === "string" ? (
          <li key={i} className="flex gap-2.5 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span>
            {point}
          </li>
        ) : (
          <li key={i} className="flex gap-2.5 text-sm text-gray-700">
            <span className="text-gray-400 mt-0.5 flex-shrink-0">▶</span>
            <span>
              <span className="font-semibold">{point.title} : </span>
              {point.content}
            </span>
          </li>
        )
      )}
    </ul>
  )
}

export default function ProjectDetailPage({ project }: Props) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // La couverture est affichée en tête : on la retire de la galerie
  // si elle y figure aussi, pour éviter le doublon.
  const coverSrc = (project.image as any)?.src ?? project.image
  const gallery = (project.gallery ?? []).filter(
    g => (((g as any)?.src ?? g) !== coverSrc)
  )

  const closeLightbox = () => setLightboxIndex(null)
  const prevImage = () => {
    if (lightboxIndex === null || !gallery.length) return
    setLightboxIndex((lightboxIndex - 1 + gallery.length) % gallery.length)
  }
  const nextImage = () => {
    if (lightboxIndex === null || !gallery.length) return
    setLightboxIndex((lightboxIndex + 1) % gallery.length)
  }

  const modalRef = useFocusTrap(lightboxIndex !== null, closeLightbox, prevImage, nextImage)

  const dd = project.detailedDescription

  return (
    <div className="lg:grid lg:grid-cols-[400px_1fr] lg:items-start gap-6 space-y-6 lg:space-y-0">

      {/* ============ FENÊTRE GAUCHE : infos (sticky sur desktop) ============ */}
      <div className="lg:sticky lg:top-6 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 animate-fade-in">
        {/* Barre de titre */}
        <div className="mb-2 flex items-center justify-between bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] px-3 py-2">
          <h1 className="text-sm md:text-base font-bold text-white leading-tight truncate">{project.title}</h1>
          <div className="flex gap-1 flex-shrink-0 ml-3">
            <span aria-hidden="true" className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select">—</span>
            <a
              href="/catalogue"
              className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select hover:bg-red-600 hover:text-white transition-colors"
              aria-label="Retour au catalogue"
            >✕</a>
          </div>
        </div>

        {/* Contenu : défile en interne si plus haut que l'écran */}
        <div className="shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white p-5 md:p-6 space-y-7 lg:max-h-[calc(100vh-7.5rem)] lg:overflow-y-auto">

          {/* Catégories + tags */}
          {(project.categories?.length || project.tags?.length) && (
            <div className="flex flex-wrap gap-2 animate-stagger-fade-in" style={{ animationDelay: "80ms" }}>
              {project.categories?.map(c => (
                <span key={c} className="px-2.5 py-0.5 bg-blue-900 text-white text-xs font-semibold shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_#000]">{c}</span>
              ))}
              {project.tags?.map(t => (
                <span key={t} className="px-2.5 py-0.5 bg-gray-100 shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_#808080] text-xs font-semibold text-gray-700">{t}</span>
              ))}
            </div>
          )}

          {/* Lien externe */}
          {project.url && (
            <div className="animate-stagger-fade-in" style={{ animationDelay: "110ms" }}>
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

          {dd?.context && (
            <Section title={dd.context.title} delay={140}>
              <p className="leading-relaxed text-sm text-gray-700">{dd.context.content}</p>
            </Section>
          )}

          {dd?.role && (
            <Section title={dd.role.title} delay={180}>
              {dd.role.intro && <p className="leading-relaxed italic text-sm text-gray-500 mb-3">{dd.role.intro}</p>}
              <PointsList points={dd.role.points} />
            </Section>
          )}

          {dd?.keyLearnings && (
            <Section title={dd.keyLearnings.title} delay={220}>
              {dd.keyLearnings.intro && <p className="leading-relaxed italic text-sm text-gray-500 mb-3">{dd.keyLearnings.intro}</p>}
              <PointsList points={dd.keyLearnings.points} />
            </Section>
          )}

          {dd?.criticalLearning && (
            <Section title={dd.criticalLearning.title} delay={260}>
              <p className="leading-relaxed text-sm text-gray-700">{dd.criticalLearning.content}</p>
            </Section>
          )}

          {dd?.vision && (
            <Section title={dd.vision.title} delay={300}>
              <p className="leading-relaxed text-sm text-gray-700">{dd.vision.content}</p>
            </Section>
          )}

          {dd?.competencesDemontrees && (
            <Section
              title={dd.competencesDemontrees.title}
              delay={340}
            >
              {isPoints(dd.competencesDemontrees)
                ? <PointsList points={dd.competencesDemontrees.points} />
                : <p className="leading-relaxed text-sm text-gray-700">{dd.competencesDemontrees.content}</p>}
            </Section>
          )}

          {/* CTA */}
          <div className="pt-1 animate-stagger-fade-in" style={{ animationDelay: "380ms" }}>
            <div className="shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-gray-50 px-4 py-4 text-center">
              <p className="font-bold text-sm text-gray-900 mb-2">Ce projet vous intéresse ?</p>
              <a
                href="/contact"
                className="inline-block px-5 py-1.5 font-bold text-sm text-white bg-red-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:bg-red-700 transition-colors no-select active:shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff]"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>

        {/* Barre de statut */}
        <div className="mt-1.5 flex gap-1">
          <span className="flex-1 text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select truncate">{project.title}</span>
          {project.categories?.[0] && (
            <span className="text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">{project.categories[0]}</span>
          )}
        </div>
      </div>

      {/* ============ FENÊTRE DROITE : visuels (défile avec la page) ============ */}
      <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 animate-fade-in" style={{ animationDelay: "120ms" }}>
        {/* Barre de titre */}
        <div className="mb-2 flex items-center justify-between bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] px-3 py-1.5">
          <span className="font-semibold text-xs text-white no-select">galerie.exe</span>
          <span aria-hidden="true" className="p-0.5 px-1.5 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select">✕</span>
        </div>

        <div className="shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] bg-white p-3 md:p-4 space-y-3 md:space-y-4">

          {/* Image de couverture */}
          <img
            src={(project.image as any)?.src ?? project.image}
            alt={project.title}
            className="w-full h-auto animate-image-fade-in"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* Vidéo éventuelle */}
          {project.videoUrl && (
            <video src={project.videoUrl} controls className="w-full h-auto" preload="metadata" />
          )}

          {/* Galerie : images empilées pleine largeur */}
          {gallery.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="block w-full overflow-hidden shadow-[inset_1px_1px_0_0_#fff,inset_-1px_-1px_0_0_#808080] hover:opacity-95 transition-opacity"
              aria-label={`Agrandir l'image ${i + 1}`}
            >
              <img
                src={(src as any)?.src ?? src}
                alt={`${project.title} ${i + 1}`}
                className="w-full h-auto animate-image-fade-in"
                loading={i < 2 ? "eager" : "lazy"}
                decoding="async"
              />
            </button>
          ))}
        </div>

        {/* Barre de statut */}
        <div className="mt-1.5 flex gap-1">
          <span className="flex-1 text-xs px-2 py-0.5 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
            {gallery.length + 1} visuel{gallery.length ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ============ Lightbox ============ */}
      {lightboxIndex !== null && gallery.length > 0 && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 animate-fade-in"
          onClick={closeLightbox}
        >
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Galerie : image ${lightboxIndex + 1} sur ${gallery.length}`}
            className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 relative max-w-5xl max-h-[90vh] flex flex-col gap-2 m-4 animate-image-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-3 py-1.5 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-blue-900">
              <span className="font-semibold text-xs no-select">Image {lightboxIndex + 1} / {gallery.length}</span>
              <button
                onClick={closeLightbox}
                aria-label="Fermer la galerie"
                className="p-0.5 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-black text-xs no-select hover:bg-red-600 hover:text-white transition-colors"
              >✕</button>
            </div>
            <div className="relative flex items-center">
              <button onClick={prevImage} className="absolute left-2 z-10 text-white text-3xl px-3 py-2 bg-black/50 hover:bg-black/70 transition-colors" aria-label="Précédent">‹</button>
              <img
                src={(gallery[lightboxIndex] as any)?.src ?? gallery[lightboxIndex]}
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
