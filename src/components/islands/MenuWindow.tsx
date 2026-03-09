import { useState } from "react"

export default function MenuWindow() {
  const [open, setOpen] = useState(false)
  const panelId = "menu-panel"

  const navigate = (href: string) => {
    setOpen(false)
    window.location.href = href
  }

  return (
    <div className="w-auto md:w-64 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 fixed top-0 right-0 z-50 lg:top-3 lg:right-3">
      <div className="flex items-center justify-between px-3 py-2 gap-2 text-white shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] bg-yellow-500">
        <span className="font-semibold text-lg">Menu</span>
        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className="p-1 px-2.5 text-xl bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-250 ease-out hover:bg-gray-500 active:shadow-[inset_-2px_-2px_0_0_#fff,inset_2px_2px_0_0_#000] active:scale-95"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      <nav
        id={panelId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-[500px] mt-3" : "max-h-0"} lg:mt-3`}
      >
        <ul className="flex flex-col items-center font-black gap-1">
          {[
            { label: "Accueil", href: "/" },
            { label: "Mon travail", href: "/main" },
            { label: "Projets", href: "/catalogue" },
            { label: "Outils", href: "/outils" },
            { label: "Contact", href: "/contact" },
          ].map(({ label, href }, idx) => (
            <li
              key={href}
              className="w-full animate-menu-slide-down"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); navigate(href) }}
                className="flex items-center justify-between text-white px-3 py-2 bg-red-600 hover:bg-red-800 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
