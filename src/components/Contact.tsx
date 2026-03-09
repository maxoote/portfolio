import Window from './ui/Window'
import MenuWindow from "./MenuWindow"
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = "Le nom est requis"
    if (!formData.email.includes('@')) newErrors.email = "Email invalide"
    if (!formData.message.trim()) newErrors.message = "Le message est requis"
    return newErrors
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="py-7 min-h-screen bg-[url('./assets/fondprojet.png')] bg-no-repeat bg-cover">
      <div className="mx-auto max-w-7xl px-4">
        <MenuWindow />
        <Window className="max-w-2xl mx-auto mt-0 animate-fade-in" title="Contactez - moi" titleClassName="bg-blue-700" tailleTitle="text-2xl">

          {submitted && (
            <div className="mb-4 p-4 bg-green-400 border-2 border-green-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] animate-fade-in">
              <p className="font-bold text-green-900">✓ Message envoyé avec succès !</p>
            </div>
          )}

          <form className="flex flex-col gap-4 p-4" onSubmit={handleSubmit}>
            <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "0ms" }}>
              Nom
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => { setFormData({...formData, name: e.target.value}); setErrors({...errors, name: ''}) }}
                className={`mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 ${errors.name ? 'border-red-500 bg-red-50' : 'focus:border-blue-500'}`}
              />
              {errors.name && <span className="text-red-600 text-sm mt-1 animate-fade-in">{errors.name}</span>}
            </label>
            <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => { setFormData({...formData, email: e.target.value}); setErrors({...errors, email: ''}) }}
                className={`mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 ${errors.email ? 'border-red-500 bg-red-50' : 'focus:border-blue-500'}`}
              />
              {errors.email && <span className="text-red-600 text-sm mt-1 animate-fade-in">{errors.email}</span>}
            </label>
            <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "200ms" }}>
              Message
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => { setFormData({...formData, message: e.target.value}); setErrors({...errors, message: ''}) }}
                className={`mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 ${errors.message ? 'border-red-500 bg-red-50' : 'focus:border-blue-500'}`}
              />
              {errors.message && <span className="text-red-600 text-sm mt-1 animate-fade-in">{errors.message}</span>}
            </label>
            <button
              type="submit"
              className="self-center px-6 py-2 font-bold text-white bg-blue-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 ease-out hover:bg-blue-700 hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_4px_8px_rgba(0,0,0,0.2)] hover:scale-105 animate-stagger-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              Envoyer
            </button>
          </form>
        </Window>

        {/* Réseaux sociaux */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://www.instagram.com/mdn.maxime/"
            target="_blank"
            rel="noreferrer"
            className="animate-stagger-fade-in transition-all duration-250 hover:scale-105 hover:-translate-y-1"
            style={{ animationDelay: "400ms" }}
          >
            <Window
              title="Instagram"
              titleClassName="bg-pink-600"
              tailleTitle="text-lg"
              className="text-center h-full"
            >
              <p className="inline-block px-6 py-2 font-bold text-white bg-blue-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">Compte perso</p>
            </Window>
          </a>

          <a
            href="https://www.linkedin.com/in/maxime-mandin"
            target="_blank"
            rel="noreferrer"
            className="animate-stagger-fade-in transition-all duration-250 hover:scale-105 hover:-translate-y-1"
            style={{ animationDelay: "450ms" }}
          >
            <Window
              title="LinkedIn"
              titleClassName="bg-blue-600"
              tailleTitle="text-lg"
              className="text-center h-full"
            >
              <p className="inline-block px-6 py-2 font-bold text-white bg-blue-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">Profil professionnel</p>
            </Window>
          </a>
        </div>

        {/* Bouton vers "Mon bureau" */}
        <div className="max-w-5xl mx-auto mt-8 animate-stagger-fade-in" style={{ animationDelay: "500ms" }}>
          <Window
            title="Mon bureau"
            titleClassName="bg-gray-700"
            tailleTitle="text-lg"
            className="text-center transition-all duration-250 hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_8px_16px_rgba(0,0,0,0.3)]"
          >

            <a
              href="https://perso.univ-lemans.fr/~i2400571/portfolio2/bureau.php"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-6 py-2 font-bold text-white bg-blue-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 hover:bg-blue-700 hover:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_4px_8px_rgba(0,0,0,0.2)]"
            >
              Découvrir mon bureau
            </a>

          </Window>
        </div>
      </div>
    </section>
  )
}
