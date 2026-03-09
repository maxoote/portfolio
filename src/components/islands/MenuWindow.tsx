import { useState } from "react"

const links = [
  { label: "Accueil",     href: "/" },
  { label: "Mon travail", href: "/main" },
  { label: "Projets",     href: "/catalogue" },
  { label: "Outils",      href: "/outils" },
  { label: "Contact",     href: "/contact" },
]

function isActive(href: string, pathname: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(href + "/")
}

export default function MenuWindow({ pathname = "" }: { pathname?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* ── Taskbar ── */}
      <div className="fixed top-0 left-0 right-0 z-50 h-9 bg-gray-300 flex items-center px-1 gap-1 shadow-[inset_0_-1px_0_0_#808080,0_1px_0_0_#000]">

        {/* Brand / Start */}
        <a
          href="/"
          className="h-7 px-3 flex items-center gap-1.5 font-bold text-xs whitespace-nowrap no-select bg-gray-300 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] hover:bg-gray-200 active:shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff]"
        >
          ★ Maxime Mandin
        </a>

        {/* Séparateur */}
        <div className="h-5 w-px mx-0.5 bg-[#808080] shadow-[1px_0_0_#fff] flex-shrink-0" />

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-0.5 flex-1">
          {links.map(({ label, href }) => {
            const active = isActive(href, pathname)
            return (
              <a
                key={href}
                href={href}
                className={[
                  "h-7 px-3 flex items-center text-xs font-semibold whitespace-nowrap no-select transition-colors",
                  active
                    ? "bg-gray-400 shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff]"
                    : "bg-gray-300 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#808080] hover:bg-gray-200 active:shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff]",
                ].join(" ")}
              >
                {label}
              </a>
            )
          })}
        </nav>

        {/* Hamburger mobile */}
        <button
          className="md:hidden ml-auto h-7 px-2.5 flex items-center font-bold text-sm no-select bg-gray-300 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] active:shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff]"
          onClick={() => setOpen(v => !v)}
          aria-label="Navigation"
        >
          {open ? "✕" : "≡"}
        </button>
      </div>

      {/* Dropdown mobile */}
      {open && (
        <div className="md:hidden fixed top-9 left-0 right-0 z-50 bg-gray-300 shadow-[0_4px_0_0_#000] animate-menu-slide-down">
          {links.map(({ label, href }) => {
            const active = isActive(href, pathname)
            return (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className={[
                  "flex items-center px-4 py-2.5 text-sm font-semibold border-b border-[#808080] last:border-0 no-select",
                  active ? "bg-blue-900 text-white" : "hover:bg-blue-900 hover:text-white",
                ].join(" ")}
              >
                {label}
              </a>
            )
          })}
        </div>
      )}
    </>
  )
}
