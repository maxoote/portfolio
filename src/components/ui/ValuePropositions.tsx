import Window from "./Window"
import type { ValueProp } from "../../types/hero"

type Props = {
  items: ValueProp[]
}

export default function ValuePropositions({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="animate-stagger-fade-in hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all duration-250"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          <Window
            title={item.title}
            titleClassName="bg-blue-900"
            tailleTitle="text-base md:text-lg"
            className="h-full"
          >
            <div className="p-4 bg-white text-sm md:text-base text-gray-800 leading-relaxed">
              {item.description}
            </div>
          </Window>
        </div>
      ))}
    </div>
  )
}
