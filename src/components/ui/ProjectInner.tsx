type Props = { title: string; image: string }
export default function ProjectInner({ title, image }: Props) {
  return (
    <>
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <p className="absolute inset-x-0 bottom-0 bg-black/50 text-white text-center py-2">{title}</p>
    </>
  )
}
