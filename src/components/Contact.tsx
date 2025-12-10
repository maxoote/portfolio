import Window from './ui/Window'
import MenuWindow from "./MenuWindow"

export default function Contact() {

  return (
    <section className="py-7 min-h-screen bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-cover">
      <div className="mx-auto max-w-7xl px-4">
        <MenuWindow />
        <Window className="max-w-2xl mx-auto mt-0" title="Contactez - moi" titleClassName="bg-blue-700" tailleTitle="text-2xl">

          <form className="flex flex-col gap-4 p-4">
            <label className="flex flex-col font-semibold">
              Nom
              <input
                type="text"
                name="name"
                className="mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
                required
              />
            </label>
            <label className="flex flex-col font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
                required
              />
            </label>
            <label className="flex flex-col font-semibold">
              Message
              <textarea
                name="message"
                rows={4}
                className="mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
                required
              />
            </label>
            <button
              type="submit"
              className="self-center px-6 py-2 font-bold bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
            >
              Envoyer
            </button>
          </form>
        </Window>

        {/* Réseaux sociaux */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">        <a
          href="https://www.instagram.com/mdn.maxime/"
          target="_blank"
          rel="noreferrer"
        >
          <Window
            title="Instagram"
            titleClassName="bg-pink-600"
            tailleTitle="text-lg"
            className="text-center h-full"
          >
            <p className="inline-block px-6 py-2 font-bold bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">Compte perso</p>
          </Window>
        </a>

          <a
            href="https://www.linkedin.com/in/maxime-mandin"
            target="_blank"
            rel="noreferrer"
          >
            <Window
              title="LinkedIn"
              titleClassName="bg-blue-600"
              tailleTitle="text-lg"
              className="text-center h-full"
            >
              <p className="inline-block px-6 py-2 font-bold bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">Profil professionnel</p>
            </Window>
          </a>

          {/* Prévu pour Behance plus tard */}
          {/* <a
          href="https://www.behance.net/tonprofil"
          target="_blank"
          rel="noreferrer"
        >
          <Window
            title="Behance"
            titleClassName="bg-indigo-600"
            tailleTitle="text-lg"
            className="text-center h-full"
          >
            <p className="p-4">Portfolio créatif</p>
          </Window>
        </a> */}
        </div>

        {/* Bouton vers "Mon bureau" */}
        <div className="max-w-5xl mx-auto mt-8">
          <Window
            title="Mon bureau"
            titleClassName="bg-gray-700"
            tailleTitle="text-lg"
            className="text-center"
          >

            <a
              href="https://perso.univ-lemans.fr/~i2400571/portfolio2/bureau.php"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2 font-bold bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]"
            >
              Découvrir mon bureau
            </a>

          </Window>
        </div>
      </div>
    </section>
  )
}
