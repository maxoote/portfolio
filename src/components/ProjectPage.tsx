import { useParams, useNavigate } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { projects } from "../data/projects"
import ProjectDetail from "./ui/Projetdetail"
import MenuWindow from "./MenuWindow"

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Projet non trouvé</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-blue-600 text-white font-bold hover:bg-blue-700"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{project.title} | Maxime Mandin - Graphiste Freelance</title>
        <meta name="description" content={project.detailedDescription?.context?.content || project.tags?.join(", ") || project.title} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${project.title} | Maxime Mandin - Graphiste Freelance`} />
        <meta property="og:description" content={project.detailedDescription?.context?.content || project.tags?.join(", ") || project.title} />
        <meta property="og:url" content={`https://mandinmaxime.vercel.app/projects/${project.id}`} />
        <meta property="og:image" content={project.image} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mdn_maxime" />
        <meta name="twitter:creator" content="@mdn_maxime" />
        <meta name="twitter:title" content={`${project.title} | Maxime Mandin`} />
        <meta name="twitter:description" content={project.detailedDescription?.context?.content || project.tags?.join(", ") || project.title} />
        <meta name="twitter:image" content={project.image} />

        {/* Canonical */}
        <link rel="canonical" href={`https://mandinmaxime.vercel.app/projects/${project.id}`} />

        {/* Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": project.title,
            "description": project.detailedDescription?.context?.content || project.tags?.join(", "),
            "image": project.image,
            "url": `https://mandinmaxime.vercel.app/projects/${project.id}`,
            "creator": {
              "@type": "Person",
              "name": "Maxime Mandin"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-dvh bg-[url('./assets/fondprojet.png')] bg-cover bg-no-repeat py-6">
        <div className="mx-auto max-w-7xl px-4">
          <MenuWindow />
          <ProjectDetail
            project={project}
            onClose={() => navigate("/catalogue")}
          />
        </div>
      </div>
    </>
  )
}
