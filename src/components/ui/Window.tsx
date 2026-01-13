import flechePng from "../../assets/fleche.png"
type WindowProps = {
  title?: string
  children: React.ReactNode
  className?: string
  titleClassName?: string
  tailleClassName?: string
  tailleTitle?:string
  fleche?:boolean
  
}
  
  export default function Window({ title, children, className, titleClassName, tailleClassName,tailleTitle,fleche }: WindowProps) {
    return (
      <div className={[[" shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2", className ].join(" "), tailleClassName].join("")}>
        {title ? (
          <div className={["mb-2  flex items-center justify-between text-white px-3 py-2 bg-blue-900 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]", titleClassName].join(" ")} >
            <span aria-hidden="true" className={["font-semibold no-select ", tailleTitle].join("")}>{title}</span>
            {fleche ? (
            <img
              src={flechePng}
              alt="Flèche"
              className="h-6 w-6 select-none no-select"
              draggable={false}
            />
          ) : (
            <span className="p-1 px-2 text-mg bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] no-select">
              ✕
            </span>
          )}
          </div>
        ) : null}
        {children}
      </div>
    )
  }
  