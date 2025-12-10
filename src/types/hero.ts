export type Badge = { label: string; color?: string }
export type Cta = { label: string; href: string; variant?: "solid" | "ghost" }

export interface HeroData {
  name: string
  tagline: string
  intro: string
  badges?: Badge[]
  ctas?: Cta[]
}
