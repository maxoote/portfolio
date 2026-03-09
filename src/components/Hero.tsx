import type { HeroData } from "../types/hero"
import Window from "./ui/Window"
import MenuWindow from "./MenuWindow"
import FeaturedProjects from "./ui/FeaturedProjects"
import ValuePropositions from "./ui/ValuePropositions"
import { useNav } from "../navigation"
import portrait from "../assets/photoprofil.png"

type Props = { data: HeroData }

export default function Hero({ data }: Props) {
  const { goTo } = useNav()
  const {
    name,
    tagline,
    status,
    location,
    badges,
    featuredProjects = [],
    valueProps = [],
    ctas = [],
  } = data

  return (
    <section
      className="py-4 min-h-dvh bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-center bg-cover"
      aria-label="Section de présentation de Mandin Maxime, en recherche d'alternance"
    >
      <h1 className="sr-only">
        {name} – {status || "Étudiant"} en Alternance
      </h1>

      <div className="mx-auto max-w-6xl px-4 py-6 md:py-12 overflow-hidden">
        {/* SECTION 1: Mini-header avec status */}
        <MenuWindow />

        <div className="mb-12">
          {/* Desktop: Side-by-side layout */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-6 md:mb-12 md:items-start">
            {/* Portrait - Desktop */}
            <div className="md:col-span-3 animate-stagger-fade-in md:animate-float-up" style={{ animationDelay: "0ms" }}>
              <Window
                title="photo.webp"
                titleClassName=""
                tailleTitle="text-sm"
                className="h-fit"
              >
                <img
                  src={portrait}
                  alt={`Portrait de ${name}`}
                  className="w-full object-cover shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-image-fade-in"
                  loading="lazy"
                />
              </Window>
            </div>

            {/* Name, tagline, status, badges - Desktop */}
            <div className="md:col-span-9 animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {name}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
                {tagline}
              </p>

              {/* Status Badge */}
              {status && (
                <div className="mb-4 inline-block">
                  <span className="px-4 py-2 bg-red-600 text-white font-bold text-sm md:text-base shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-pulse-glow">
                    ● {status}
                  </span>
                </div>
              )}

              {location && (
                <p className="text-xs md:text-sm text-gray-700 mb-4">
                  {location}
                </p>
              )}

              {/* Badges */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-200 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-xs md:text-sm font-semibold text-gray-900 animate-stagger-fade-in"
                      style={{ animationDelay: `${150 + idx * 50}ms` }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="md:hidden">
            <div className="animate-stagger-fade-in mb-4" style={{ animationDelay: "0ms" }}>
              <Window
                title="photo.webp"
                titleClassName=""
                tailleTitle="text-sm"
                className="h-fit"
              >
                <img
                  src={portrait}
                  alt={`Portrait de ${name}`}
                  className="w-full object-cover shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-image-fade-in"
                  loading="lazy"
                />
              </Window>
            </div>

            <div className="animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-gray-800 mb-3">
                {tagline}
              </p>

              {status && (
                <div className="mb-4 inline-block">
                  <span className="px-3 py-1 bg-red-600 text-white font-bold text-xs sm:text-sm shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-pulse-glow">
                    ● {status}
                  </span>
                </div>
              )}

              {location && (
                <p className="text-xs text-gray-700 mb-3">
                  {location}
                </p>
              )}

              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-200 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] text-xs font-semibold text-gray-900 animate-stagger-fade-in"
                      style={{ animationDelay: `${150 + idx * 50}ms` }}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* SECTION 2: Featured Projects */}
        {featuredProjects && featuredProjects.length > 0 && (
          <div className="mb-12 animate-stagger-fade-in" style={{ animationDelay: "300ms" }}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Réalisations Clés
            </h3>
            <FeaturedProjects projectIds={featuredProjects} />
          </div>
        )}

        {/* SECTION 3: Value Propositions */}
        {valueProps && valueProps.length > 0 && (
          <div className="mb-12 animate-stagger-fade-in" style={{ animationDelay: "400ms" }}>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
              Pourquoi moi ?
            </h3>
            <ValuePropositions items={valueProps} />
          </div>
        )}

        {/* SECTION 4: Call-to-Actions */}
        {ctas && ctas.length > 0 && (
          <div className="animate-stagger-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {ctas.map((cta, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (cta.href.startsWith("#")) {
                      goTo(cta.href.substring(1) as any)
                    }
                  }}
                  className="w-full hover:-translate-y-1 hover:shadow-md transition-all duration-250 ease-out active:scale-95"
                  style={{ animationDelay: `${550 + idx * 50}ms` }}
                >
                  <Window
                    className="h-auto animate-stagger-fade-in"
                    title={cta.label}
                    tailleTitle="text-base md:text-lg"
                    titleClassName="bg-blue-900 hover:bg-blue-800"
                    fleche
                  >
                    <></>
                  </Window>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

