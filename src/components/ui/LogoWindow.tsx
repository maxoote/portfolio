import { useState } from "react"
import Window from "../ui/Window"
import logo from "../../assets/logoMaximeMandin.png"

export default function LogoSpin() {
  const [spinning, setSpinning] = useState(false)

  return (
    <Window
      title="Logo.webp"
      titleClassName=""
      tailleTitle="text-mg"
      className="w-fit h-fit md:w-[15vw] lg:w-[15vw]"
    >
      <img
        src={logo}
        alt="Logo de Mandin Maxime"
        loading="lazy"
        onClick={() => setSpinning(prev => !prev)} // mobile : toggle au clic
        className={[
          "w-3/4 md:w-3/4 lg:w-3/4 justify-self-center object-cover rounded-full no-select",
          "hover:animate-[spin_0.5s_linear_infinite]", // PC : spin rapide au hover
          spinning ? "animate-[spin_0.5s_linear_infinite]" : "" // Mobile : spin si state actif
        ].join(" ")}
      />
    </Window>
  )
}
