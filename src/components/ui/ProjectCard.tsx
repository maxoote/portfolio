import ProjectInner from "./ProjectInner"

type Props = {
  title: string
  image: string
  href?: string
  onClick?: () => void
  className?: string
}
export default function ProjectCard({ title, image, href, onClick, className }: Props) {
  const inner = <ProjectInner title={title} image={image} />
  const base = "relative w-full overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-250 ease-out hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_8px_16px_rgba(0,0,0,0.3)] hover:scale-103 hover:-translate-y-1"
  if (href) return <a href={href} className={[base, className].join(" ")}>{inner}</a>
  return <button type="button" onClick={onClick} className={[base, className].join(" ")}>{inner}</button>
}
