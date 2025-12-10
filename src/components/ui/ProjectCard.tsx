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
  const base = "relative w-full overflow-hidden shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
  if (href) return <a href={href} className={[base, className].join(" ")}>{inner}</a>
  return <button type="button" onClick={onClick} className={[base, className].join(" ")}>{inner}</button>
}
