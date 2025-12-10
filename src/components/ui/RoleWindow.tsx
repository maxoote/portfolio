import { useEffect, useState } from "react"
import Window from "../ui/Window"

const roles = [
  "Web-designer",
  "Développeur Front",
  "Vidéaste",
  "Graphiste",
  "UI/UX Designer",
  "Monteur vidéo",
]

type Props = { memphis?: boolean }

export default function RolesWindow({ memphis = false }: Props) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setIndex(i => (i + 1) % roles.length)
    }, 1800)
    return () => clearInterval(t)
  }, [])

  return (
    <Window
      title="étudiant.exe"
      titleClassName="bg-blue-500"
      tailleTitle="text-xl"
      className="relative w-full h-fit md:w-[28rem] overflow-hidden"
    >
      {/* Décor Neo-Memphis optionnel */}
      {memphis && (
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-4 -left-4 w-16 h-16 rotate-12 bg-yellow-300" />
          <div className="absolute top-6 right-6 w-8 h-8 -rotate-6 bg-pink-400" />
          <div className="absolute bottom-3 left-10 w-20 h-3 bg-cyan-400" />
        </div>
      )}

      <div className="flex items-center justify-center w-full gap-4 border-blue-700 bg-white rounded-full px-1 pb-1 border-4 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
        {/* Etiquette fixe (Win95 vibe) */}
        <span className="select-none text-center bg-blue-700 text-white font-black rounded-full w-1/3  md:-w-fit lg:w-fit px-3 py-2 text-lg md:text-2xl shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
          Étudiant
        </span>

        {/* Mot qui change */}
        <div className="relative min-w-[10ch] w-2/3  text-center">
          <span
            key={index} /* remonte le span pour relancer l'animation à chaque changement */
            className="inline-flex  items-center justify-center   text-lg md:text-2xl  animate-[win95-slide_320ms_steps(4,end)_both]"
            style={{ willChange: "transform, opacity" }}
          >
            {roles[index]}
            <span className="ml-1 w-[6px] h-[1.2em] bg-black/70 animate-[blink_1s_steps(2,start)_infinite]" />
          </span>
        </div>
      </div>
    </Window>
  )
}
