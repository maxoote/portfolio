export type Badge = { label: string; color?: string }
export type Cta = { label: string; href: string; variant?: "solid" | "ghost" }

export interface ValueProp {
  title: string
  description: string
}

export interface HeroData {
  name: string
  tagline: string
  intro: string
  status?: string
  location?: string
  badges?: Badge[]
  featuredProjects?: string[]
  valueProps?: ValueProp[]
  ctas?: Cta[]
}
