import type { HeroData } from "../types/hero"
import Window from "./ui/Window"
import MenuWindow from "./MenuWindow"
import { useNavigate } from "react-router-dom"
import portrait from "../assets/photoprofil.png"

type Props = { data: HeroData }

export default function Hero({ data }: Props) {
  const navigate = useNavigate()
  const { name, tagline, status, location, badges } = data

  return (
    <section
      className="min-h-dvh bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-center bg-cover flex flex-col"
      aria-label="Section de présentation de Mandin Maxime, en recherche d'alternance"
    >
      <h1 className="sr-only">
        {name} – {status || "Étudiant"} en Alternance
      </h1>

      <MenuWindow />

      <div className="flex-1 flex items-center justify-center px-4 py-6 md:py-0">
        <div className="mx-auto max-w-6xl w-full">
          {/* Desktop: Side-by-side layout */}
          <div className="hidden md:grid md:grid-cols-12 md:gap-8 md:items-center">
            {/* Portrait - Desktop */}
            <div className="md:col-span-4 animate-stagger-fade-in md:animate-float-up" style={{ animationDelay: "0ms" }}>
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
            <div className="md:col-span-8 animate-stagger-fade-in space-y-4" style={{ animationDelay: "100ms" }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {name}
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-800">
                {tagline}
              </p>

              {/* Status Badge */}
              {status && (
                <div>
                  <span className="inline-block px-4 py-2 bg-red-600 text-white font-bold text-sm md:text-base shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-pulse-glow">
                    ● {status}
                  </span>
                </div>
              )}

              {location && (
                <p className="text-xs md:text-sm text-gray-700">
                  {location}
                </p>
              )}

              {/* Badges */}
              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
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

              {/* CTA Button */}
              <div className="pt-4">
                <button
                  onClick={() => navigate("/main")}
                  className="w-full md:w-auto hover:-translate-y-1 hover:shadow-md transition-all duration-250 ease-out active:scale-95"
                  style={{ animationDelay: "300ms" }}
                >
                  <Window
                    className="h-auto animate-stagger-fade-in"
                    title="Découvrir mes projets"
                    tailleTitle="text-base md:text-lg"
                    titleClassName="bg-red-600 hover:bg-red-800"
                    fleche
                  >
                    <></>
                  </Window>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile: Stacked layout */}
          <div className="md:hidden">
            <div className="animate-stagger-fade-in mb-6" style={{ animationDelay: "0ms" }}>
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

            <div className="animate-stagger-fade-in space-y-3" style={{ animationDelay: "100ms" }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {name}
              </h2>
              <p className="text-base sm:text-lg font-semibold text-gray-800">
                {tagline}
              </p>

              {status && (
                <div>
                  <span className="inline-block px-3 py-1 bg-red-600 text-white font-bold text-xs sm:text-sm shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-pulse-glow">
                    ● {status}
                  </span>
                </div>
              )}

              {location && (
                <p className="text-xs text-gray-700">
                  {location}
                </p>
              )}

              {badges && badges.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
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

              {/* CTA Button */}
              <div className="pt-3">
                <button
                  onClick={() => navigate("/main")}
                  className="w-full hover:-translate-y-1 hover:shadow-md transition-all duration-250 ease-out active:scale-95"
                  style={{ animationDelay: "300ms" }}
                >
                  <Window
                    className="h-auto animate-stagger-fade-in"
                    title="Découvrir mes projets"
                    tailleTitle="text-base sm:text-lg"
                    titleClassName="bg-red-600 hover:bg-red-800"
                    fleche
                  >
                    <></>
                  </Window>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

