// src/components/Outils.tsx
import Window from "./ui/Window"
import MenuWindow from "./MenuWindow"
import { useNav } from "../navigation"

// Imports des icônes (dans src/assets/outils/)
import icHtml from "../assets/outils/html.png"
import icTail from "../assets/outils/tail.png"
import icCss from "../assets/outils/css.png"
import icDv from "../assets/outils/dv.png"
import icJs from "../assets/outils/js.png"
import ic365 from "../assets/outils/365.png"
import icPhp from "../assets/outils/php.png"
import icFigma from "../assets/outils/figma.png"
import icPub from "../assets/outils/afpu.png"
import icPhoto from "../assets/outils/afp.png"
import icDesigner from "../assets/outils/afd.png"
import icReact from "../assets/outils/react.png"
import icTs from "../assets/outils/ts.png"
import icSql from "../assets/outils/sql.png"

type Skill = {
  id: string
  label: string
  score: number
  scale?: number
  note?: string
  img: string
}

const skills: Skill[] = [
  { id: "html", label: "HTML", score: 4, note: "Structure des pages, SEO sémantique", img: icHtml },
  { id: "tailwind", label: "Tailwind", score: 2.5, note: "Mise en page utilitaire, responsive", img: icTail },
  { id: "css", label: "CSS", score: 3.5, note: "Layouts, animations simples", img: icCss },
  { id: "davinci", label: "DaVinci Resolve", score: 3, note: "Montage, étalonnage basique, motion design", img: icDv },
  { id: "js", label: "JavaScript", score: 3, note: "DOM, fetch, petites apps", img: icJs },
  { id: "o365", label: "Office 365", score: 4, note: "Docs, slides, tableaux", img: ic365 },
  { id: "php", label: "PHP", score: 2, note: "Pages dynamiques simples", img: icPhp },
  { id: "figma", label: "Figma", score: 3.5, note: "Maquettes UI, prototypage", img: icFigma },
  { id: "pub", label: "Affinity Publisher", score: 4, note: "Mise en page print", img: icPub },
  { id: "photo", label: "Affinity Photo", score: 4.5, note: "Retouche et compositing", img: icPhoto },
  { id: "designer", label: "Affinity Designer", score: 4, note: "Vectoriel, logos", img: icDesigner },
  { id: "react", label: "React", score: 2, note: "Composants, hooks de base", img: icReact },
  { id: "ts", label: "TypeScript", score: 1, note: "Types de base", img: icTs },
  { id: "sql", label: "SQL", score: 1.5, note: "CRUD simple", img: icSql },
]

export default function Outils() {
  const { goTo } = useNav()
  return (
    <div className="min-h-dvh bg-[url('./assets/fondprojet.png')] bg-cover bg-no-repeat py-6">
  <div className="mx-auto max-w-7xl px-4">
    <MenuWindow />
    <Window
      title="Mes outils"
      titleClassName="bg-blue-900"
      tailleTitle="text-xl"
      className="mt-4 flex flex-col overflow-hidden h-[85vh]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto">
          {skills.map(s => {
            const scale = s.scale ?? 5
            const pct = Math.max(0, Math.min(100, (s.score / scale) * 100))
            return (
              <div key={s.id} className="bg-gray-200 p-3 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
                <div className="flex items-center gap-3">
                  <img src={s.img} alt="" className="w-10 h-10 object-contain" />
                  <div className="flex-1 flex items-baseline justify-between">
                    <h4 className="font-semibold">{s.label}</h4>
                    <span className="text-sm">{s.score}/{scale}</span>
                  </div>
                </div>

                <div
                  className="mt-2 h-5 bg-gray-300 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={scale}
                  aria-valuenow={s.score}
                >
                  <div className="h-full bg-gray-500 transition-[width]" style={{ width: `${pct}%` }} />
                </div>

                {s.note ? <p className="mt-2 text-sm leading-snug">{s.note}</p> : null}
              </div>
            )
          })}
        </div>
      </Window>

      <button className="w-full" onClick={() => goTo("main")}>
      <Window className="mt-4" title="Projet" tailleTitle="text-xl" titleClassName="bg-red-900" fleche>
        <></>
      </Window>
    </button>
  </div>
</div>
  )
}
