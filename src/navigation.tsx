import { createContext, useContext, useState, type ReactNode } from "react"

export type Section = "hero" | "main" | "catalogue" | "contact" | "outils"

type NavContextValue = {
  section: Section
  goTo: (s: Section) => void
}

const NavContext = createContext<NavContextValue | null>(null)

export function NavProvider({ children }: { children: ReactNode }) {
  const [section, setSection] = useState<Section>("hero")
  return <NavContext.Provider value={{ section, goTo: setSection }}>{children}</NavContext.Provider>
}

export function useNav() {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error("useNav must be used inside <NavProvider>")
  return ctx
}
