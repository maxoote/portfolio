import Hero from "./components/Hero"
import Main from "./components/Main"
import Catalogue from "./components/Catalogue"
import Contact from "./components/Contact"
import Outils from "./components/Outils"
import { Analytics } from "@vercel/analytics/react"
import { NavProvider, useNav } from "./navigation"
import type { HeroData } from "./types/hero"

const heroData: HeroData = {
  name: "Mandin Maxime",
  tagline: "étudiant BUT MMI Recherche Stage",
  intro:
    "Étudiant en deuxième année de BUT Métiers du Multimédia et de l'Internet à Laval, je développe des projets alliant design graphique, développement web et communication digitale.  Passion[...]",
  badges: [
    { label: "Étudiant MMI" },
    { label: "Web-designer" },
    { label: "Développeur front" },
    { label: "Graphiste" },
    { label: "Vidéaste" },
  ],
  ctas: [
    { label: "Découvrir mes projets", href: "#projects", variant: "solid" },
    { label: "Me contacter", href: "#contact", variant: "ghost" },
  ],
}

function SectionView() {
  const { section } = useNav()
  if (section === "hero") return <Hero data={heroData} />
  if (section === "main") return <Main />
  if (section === "catalogue") return <Catalogue />
  if (section === "contact") return <Contact />
  if (section === "outils") return <Outils />
  return null
}

export default function App() {
  return (
    <NavProvider>
      <div className=" h-screen overflow-hidden">
        <SectionView />
        <Analytics />
      </div>
    </NavProvider>
  )
}