import Window from "./Window"
import { useNav } from "../../navigation"
import { projects } from "../../data/projects"

type Props = {
  ids: string[]  // liste des projets que tu veux afficher
}

export default function ListeProjet({ ids }: Props) {
  const { goTo } = useNav()

  // transforme le tableau de projets en objet { id: projet }
  const byId = Object.fromEntries(projects.map(p => [p.id, p]))

  // récupère uniquement les projets correspondant aux ids donnés
  const items = ids.map(id => byId[id]).filter(Boolean)

  const open = (id: string) => {
    window.location.hash = id
    goTo("catalogue")
  }

  return (
    <div className="overflow-x-auto  overflow-y-hidden pl-8 lg:pl-0 w-full ">
      <ul className="flex w-auto lg:w-full gap-4 mt-3 pr-8 ">
        {items.map(p => (
          <li key={p.id} className="shrink-0 lg:shrink-1 lg:w-full">
            <Window
              className="w-58 aspect:[1/1]"
              title={p.title}
              tailleTitle="text-lg"
              titleClassName="bg-blue-900 h-20"
            >
              <button onClick={() => open(p.id)} className="relative block w-full">
                <img
                  className="w-full h-48 object-cover"
                  src={p.image}
                  alt={p.title}
                />
                <div className="bg-black/50 absolute bottom-0 left-0 right-0 text-white top-2/3 p-2 backdrop-blur-xs">
                  <h3 className="text-sm font-semibold line-clamp-2">{p.title}</h3>
                </div>
              </button>
            </Window>
          </li>
        ))}
      </ul>
    </div>
  )
}
