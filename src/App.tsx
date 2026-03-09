import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Catalogue from "./components/Catalogue"
import Contact from "./components/Contact"
import Outils from "./components/Outils"
import ProjectPage from "./components/ProjectPage"
import { Analytics } from "@vercel/analytics/react"
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
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="h-screen overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage heroData={heroData} />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/outils" element={<OutilsPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
        <footer className="sr-only">
          <p>
            Portfolio de Mandin Maxime, étudiant en BUT MMI à Laval,
            spécialisé en graphisme, web design, print et vidéo pour les
            petites entreprises et associations en Vendée, Laval et Pays de la Loire.
          </p>
        </footer>
        <Analytics />
      </div>
    </BrowserRouter>
  )
}

function HomePage({ heroData }: { heroData: HeroData }) {
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

function MainPage() {
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

function CataloguePage() {
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

function ContactPage() {
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

function OutilsPage() {
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
}
