type Project = {
    id: string | number
    title: string
    image: string
    href?: string
    onClick?: () => void
  }
  
  function ProjectCard({ title, image, href, onClick }: Project) {
    const inner = (
      <>
        <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
        <p className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-center py-2">{title}</p>
      </>
    )
  
    if (href) {
      return (
        <a href={href} className="relative aspect-square w-full overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
          {inner}
        </a>
      )
    }
  
    return (
      <button type="button" onClick={onClick} className="relative aspect-square w-full overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
        {inner}
      </button>
    )
  }
  
  export default function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
      <div className="h-full overflow-y-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full p-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </div>
    )
  }
  