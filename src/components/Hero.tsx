import type { HeroData } from "../types/hero"
import Window from "./ui/Window"
import portrait from "../assets/photoprofil.png"
import MenuWindow from "./MenuWindow"
import RolesWindow from "./ui/RoleWindow"
import { useNav } from "../navigation"
import LogoSpin from "./ui/LogoWindow"
import DraggableWindow from "./DraggableWindow"

type Props = { data: HeroData }

export default function Hero({ data }: Props) {
  const { name, tagline, intro } = data
  const { goTo } = useNav()

  return (

    <section
      className="py-4 min-h-dvh bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-center bg-cover"
      aria-label="Section de présentation de Mandin Maxime, étudiant BUT MMI et graphiste freelance"
    >
      {/* H1 SEO clair et visible */}
      <h1 className="sr-only">
        {name} – Étudiant BUT MMI, graphiste, web-designer et vidéaste en Vendée et Pays de la Loire
      </h1>

      

      <div className="mx-auto max-w-6xl px-4 pt-8 md:py-16 overflow-hidden md:max-h-screen md:pt-0 md:max-w-screen lg:max-h-screen lg:pt-0 lg:max-w-screen">
        {/* Mobile / small screen */}
        <div className="grid grid-cols-1 grid-rows-8 gap-3 md:hidden">
          <MenuWindow />

          {/* Bloc 1 → titre+intro */}
          <div className="row-span-3">
            <Window
              className="w-full h-fit"
              title={name}
              tailleTitle="text-lg sm:text-xl md:text-2xl"
              titleClassName=""
            >
              <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-white border-2 p-2 md:p-3 h-full">
                {/* Tagline en H2 (sous-titre) */}
                <h2 className="text-base sm:text-lg md:text-2xl text-black font-semibold leading-tight">
                  {tagline}
                </h2>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-neutral-800 leading-relaxed">
                  {intro}
                </p>
              </div>
            </Window>
          </div>

          {/* Bloc 2 → portrait + logo */}
          <div className="row-span-2">
            <div className="grid grid-cols-2 gap-3 h-full">
              <Window
                title="photo.webp"
                titleClassName=""
                tailleTitle="text-sm sm:text-base"
                className="h-fit"
              >
                <img
                  src={portrait}
                  alt="Portrait de Mandin Maxime, étudiant en BUT MMI et graphiste freelance"
                  className="object-cover shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
                  loading="lazy"
                />
              </Window>
              <LogoSpin />
            </div>
          </div>

          {/* Bloc 3 → rôles */}
          <div className="row-span-3 flex flex-col gap-9">
            <RolesWindow memphis={true} />
            <button className="w-full" onClick={() => goTo("main")}>
              <Window
                className="h-auto"
                title="Découvrir mes projets"
                tailleTitle="text-base sm:text-lg md:text-xl"
                titleClassName=""
                fleche
              >
                <></>
              </Window>
            </button>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden md:block relative min-h-screen">
          {/* Menu window */}
          <DraggableWindow defaultPosition={{ x: 20, y: 20 }} className="z-50">
            <MenuWindow />
          </DraggableWindow>

          {/* Titre + intro window */}
          <DraggableWindow defaultPosition={{ x: "7%", y: "20%" }} className="z-40">
            <Window
              className="w-fit max-w-6xl h-fit md:w-[60vw] lg:w-[60vw]"
              title={name}
              tailleTitle="text-6xl"
              titleClassName=""
            >
              <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-white border-2 p-2 md:p-3 h-full">
                <h2 className="text-base sm:text-lg md:text-2xl text-black font-semibold leading-tight">
                  {tagline}
                </h2>
                <p className="mt-2 md:mt-4 text-sm md:text-base text-neutral-800 leading-relaxed">
                  {intro}
                </p>
              </div>
            </Window>
          </DraggableWindow>

          {/* Portrait window */}
          <DraggableWindow defaultPosition={{ x: "75%", y: "20%" }} className="z-40">
            <Window
              title="photo.webp"
              titleClassName=""
              tailleTitle="text-sm sm:text-base"
              className="max-w-sm md:w-[20vw] lg:w-[20vw]"
            >
              <img
                src={portrait}
                alt="Portrait de Mandin Maxime, étudiant en BUT MMI et graphiste freelance"
                className="object-cover shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] no-select"
                loading="lazy"
              />
            </Window>
          </DraggableWindow>

          {/* Logo window */}
          <DraggableWindow defaultPosition={{ x: "65%", y: "55%" }} className="z-40">
            <LogoSpin />
          </DraggableWindow>

          {/* Roles window */}
          <DraggableWindow defaultPosition={{ x: "10%", y: "70%" }} className="z-40">
            <RolesWindow memphis={true} />
          </DraggableWindow>

          {/* Call-to-action window */}
          <button className="w-full" onClick={() => goTo("main")}>
            <Window
              className="h-auto absolute bottom-4 left-2/5 right-2/5"
              title="Découvrir mes projets"
              tailleTitle="text-base sm:text-lg md:text-xl"
              titleClassName="hover:bg-red-500"
              fleche
            >
              <></>
            </Window>
          </button>
        </div>
      </div>
    </section>
  )
}
