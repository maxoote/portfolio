import Window from './ui/Window'
import MenuWindow from "./MenuWindow"
import ListeProjet from "./ui/ListeProjet"
import { useNav } from "../navigation"
import CategoryCarousel from "./ui/CategoryCarousel"
import imgA from "../assets/carousel/audiovisuel.gif"
import imgB from "../assets/carousel/branding.webp"
import imgC from "../assets/carousel/concept.webp"
import imgP from "../assets/carousel/print.webp"
import imgDev from "../assets/carousel/dev.webp"
import imgWeb from "../assets/carousel/webdesign.webp"

export default function Main() {
  const { goTo } = useNav()
  return (
    <section className="py-7 min-h-dvh bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-center bg-cover">
  <div className="mx-auto max-w-7xl lg:max-w-screen px-4 flex flex-col items-center gap-2">
    
    {/* Menu en haut */}
    <MenuWindow />
    
    {/* Container principal avec positionnement relatif pour le bouton absolu */}
    <div className="relative w-full lg:w-3/5 flex flex-col gap-6">
      
      {/* Mon travail */}
      <Window 
        className="mx-0" 
        title="Mon travail" 
        tailleTitle="text-4xl" 
        titleClassName="bg-blue-900"
      >
        <button onClick={() => goTo("catalogue")} className="w-full">
          <CategoryCarousel
            slides={[
              { cat: "Audiovisuel",   cover: imgA },
              { cat: "Branding",      cover: imgB },
              { cat: "Photographie",  cover: imgC },
              { cat: "Print",         cover: imgP },
              { cat: "Programmation", cover: imgDev },
              { cat: "Web-design",    cover: imgWeb },
            ]}
            interval={4500}
            aspectClassName="aspect-[16/9] lg:aspect-[16/4]"
          />
        </button>
      </Window>
      
      {/* Mes Derniers Projets */}
      <div>
        <Window 
          className="mt-0" 
          title="Mes Derniers Projets" 
          tailleTitle="text-2xl" 
          titleClassName="bg-blue-900"
        >
          <></>
        </Window>
        <ListeProjet ids={["anna-partout", "mdn-maxime", "sth"]} />
      </div>
      
      {/* Bouton "Découvrir mes Outils" - positionné en absolu */}
      <button 
        className="lg:absolute lg:bottom-4 lg:right-4 w-full lg:w-auto"
        onClick={() => goTo("outils")}
      >
        <Window
          className="h-auto"
          title="Découvrir mes Outils"
          tailleTitle="text-base sm:text-lg md:text-xl"
          titleClassName="bg-red-400 hover:bg-red-500"
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