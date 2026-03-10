type Props = { title: string; image: string | { src: string } }
export default function ProjectInner({ title, image }: Props) {
  return (
    <>
      <img
        src={(image as any)?.src ?? image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover animate-image-fade-in"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-3 pt-8 pb-3">
        <p className="text-white text-xs font-semibold leading-tight line-clamp-2">{title}</p>
      </div>
    </>
  )
}
