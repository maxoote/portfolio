import { useState } from "react"
import { useNav } from "../navigation"

export default function MenuWindow() {
  const [open, setOpen] = useState(false)
  const { goTo } = useNav()
  const panelId = "menu-panel"

  return (
    <div className="w-auto md:w-64 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 fixed top-0 right-0 z-50 lg:top-3 lg:right-3">
      <div className="flex items-center justify-between px-3 py-2 gap-2 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-yellow-500">
        <span className="font-semibold text-lg">Menu</span>
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="p-1 px-2.5 text-xl bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      <nav id={panelId} className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[500px] mt-3" : "max-h-0"} lg:mt-3`}>
        <ul className="flex flex-col items-center font-black">
          <li className="w-full flex items-center justify-between text-white px-3 py-2 bg-red-500 hover:bg-orange-500 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"><button onClick={() => { goTo("hero"); setOpen(false) }}>Accueil</button></li>
          <li  className="w-full flex items-center justify-between text-white px-3 py-2 bg-red-500 hover:bg-orange-500 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"><button onClick={() => { goTo("main"); setOpen(false) }}>Mon travail</button></li>
          <li  className="w-full flex items-center justify-between text-white px-3 py-2 bg-red-500 hover:bg-orange-500 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"><button onClick={() => { goTo("catalogue"); setOpen(false) }}>Projets</button></li>
          <li  className="w-full flex items-center justify-between text-white px-3 py-2 bg-red-500 hover:bg-orange-500 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"><button onClick={() => { goTo("contact"); setOpen(false) }}>Contact</button></li>
        </ul>
      </nav>
    </div>
  )
}
