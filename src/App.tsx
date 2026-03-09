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
  tagline: "Je conçois des expériences visuelles du concept à la production",
  intro:
    "Étudiant en deuxième année de BUT Métiers du Multimédia et de l'Internet à Laval, je conçois des projets alliant design graphique, développement web et communication digitale pour les petites entreprises et associations en Vendée et Pays de la Loire.",
  status: "EN RECHERCHE D'ALTERNANCE",
  location: "2ème année BUT MMI, Laval",
  badges: [
    { label: "Design Graphique" },
    { label: "Développement Web" },
    { label: "Audiovisuel & Branding" },
  ],
  featuredProjects: ["sth", "mdn-maxime", "maron-bouillie"],
  valueProps: [
    {
      title: "Pluridisciplinaire",
      description: "Design + Dev + Vidéo = Une vision globale et cohérente du projet"
    },
    {
      title: "Autonome & Proactif",
      description: "STH piloté en autonomie depuis 3 ans. Gestion complète de la conception à l'exécution"
    },
    {
      title: "Résultats Mesurables",
      description: "5k+ followers sur mdn.maxime. Preuve de consistance, engagement et évolution constante"
    }
  ],
  ctas: [
    { label: "Voir mes meilleurs projets", href: "#catalogue", variant: "solid" },
    { label: "Télécharger mon CV", href: "#contact", variant: "ghost" },
    { label: "M'envoyer une offre", href: "#contact", variant: "ghost" },
  ],
}

function SectionView() {
  const { section } = useNav()

  if (section === "hero") {
    return (
      <section
        id="hero"
        aria-label="Présentation de Mandin Maxime, étudiant BUT MMI et graphiste freelance en Vendée"
        className="animate-fade-in"
      >
        <Hero data={heroData} />
      </section>
    )
  }
if (section === "main") {
  return (
    <main>
      <section
        id="services"
        aria-labelledby="services-title"
        className="animate-fade-in"
      >
        <h2 id="services-title" className="sr-only">
          Services en design graphique, web et communication digitale
        </h2>
        <Main />
      </section>
    </main>
  )
}

if (section === "catalogue") {
  return (
    <main>
      <section
        id="catalogue"
        aria-labelledby="catalogue-title"
        className="animate-fade-in"
      >
        <h2 id="catalogue-title" className="sr-only">
          Projets print et supports de communication
        </h2>
        <Catalogue />
      </section>
    </main>
  )
}

if (section === "contact") {
  return (
    <main>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="animate-fade-in"
      >
        <h2 id="contact-title" className="sr-only">
          Me contacter pour un projet en Vendée ou Pays de la Loire
        </h2>
        <Contact />
      </section>
    </main>
  )
}

if (section === "outils") {
  return (
    <main>
      <section
        id="outils"
        aria-labelledby="outils-title"
        className="animate-fade-in"
      >
        <h2 id="outils-title" className="sr-only">
          Outils et compétences utilisées sur mes projets
        </h2>
        <Outils />
      </section>
    </main>
  )
}}


export default function App() {
  return (
    <NavProvider>
      <div className="h-screen overflow-hidden">
        <SectionView />
        <footer className="sr-only">
          {/* Footer invisible visuellement mais lisible par Google / lecteurs d'écran */}
          <p>
            Portfolio de Mandin Maxime, étudiant en BUT MMI à Laval,
            spécialisé en graphisme, web design, print et vidéo pour les
            petites entreprises et associations en Vendée, Laval et Pays de la Loire.
          </p>
        </footer>
        <Analytics />
      </div>
    </NavProvider>
  )
}
