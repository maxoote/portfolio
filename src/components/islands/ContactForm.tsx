import { useState, type FormEvent } from "react"

interface FormStatus {
  state: "idle" | "loading" | "success" | "error"
  message: string
}

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>({ state: "idle", message: "" })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {}
    if (!String(data.get("name") ?? "").trim()) errs.name = "Le nom est requis"
    if (!String(data.get("email") ?? "").includes("@")) errs.email = "Email invalide"
    if (!String(data.get("message") ?? "").trim()) errs.message = "Le message est requis"
    return errs
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const errs = validate(formData)
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus({ state: "loading", message: "Envoi en cours..." })

    // Clé Web3Forms — à remplacer par la vraie clé depuis https://web3forms.com
    formData.append("access_key", import.meta.env.PUBLIC_WEB3FORMS_KEY ?? "86f8000d-8539-4404-808f-81750437f5e7")
    formData.append("subject", "Nouveau message depuis le portfolio")

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      const result = await res.json()

      if (result.success) {
        setStatus({ state: "success", message: "✓ Message envoyé ! Je vous réponds sous 48h." })
        ;(e.target as HTMLFormElement).reset()
        setErrors({})
        setTimeout(() => setStatus({ state: "idle", message: "" }), 5000)
      } else {
        setStatus({ state: "error", message: "Erreur lors de l'envoi. Veuillez réessayer." })
      }
    } catch {
      setStatus({ state: "error", message: "Erreur réseau. Utilisez l'email direct ci-dessous." })
    }
  }

  const inputClass = (field: string) =>
    `mt-1 p-2 border-2 border-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-300 focus:shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,0_0_0_3px_rgba(59,130,246,0.1)] focus-visible:outline-none w-full ${
      errors[field] ? "border-red-500 bg-red-50" : "focus:border-blue-500"
    }`

  return (
    <div className="shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000,8px_8px_0_0_rgba(0,0,0,0.5)] bg-gray-300 p-2 animate-fade-in h-full flex flex-col">
      <div className="mb-2 flex items-center justify-between text-white px-3 py-2 bg-blue-700 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000]">
        <span className="font-semibold text-2xl no-select">Contactez-moi</span>
        <span className="p-1 px-2 bg-gray-400 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] no-select">✕</span>
      </div>

      {status.state !== "idle" && (
        <div className={`mx-2 mb-2 p-3 border-2 animate-fade-in ${
          status.state === "success" ? "bg-green-200 border-green-600" :
          status.state === "error" ? "bg-red-100 border-red-500" :
          "bg-gray-200 border-gray-400"
        }`}>
          <p className="font-semibold text-sm">{status.message}</p>
        </div>
      )}

      <form className="flex flex-col gap-4 p-4 flex-1 overflow-y-auto" onSubmit={handleSubmit}>
        <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "0ms" }}>
          Nom
          <input
            type="text"
            name="name"
            disabled={status.state === "loading"}
            onChange={() => setErrors(e => ({ ...e, name: "" }))}
            className={`${inputClass("name")} disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          {errors.name && <span className="text-red-600 text-sm mt-1">{errors.name}</span>}
        </label>

        <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "100ms" }}>
          Email
          <input
            type="email"
            name="email"
            disabled={status.state === "loading"}
            onChange={() => setErrors(e => ({ ...e, email: "" }))}
            className={`${inputClass("email")} disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          {errors.email && <span className="text-red-600 text-sm mt-1">{errors.email}</span>}
        </label>

        <label className="flex flex-col font-semibold animate-stagger-fade-in" style={{ animationDelay: "200ms" }}>
          Message
          <textarea
            name="message"
            rows={4}
            disabled={status.state === "loading"}
            onChange={() => setErrors(e => ({ ...e, message: "" }))}
            className={`${inputClass("message")} disabled:opacity-50 disabled:cursor-not-allowed`}
          />
          {errors.message && <span className="text-red-600 text-sm mt-1">{errors.message}</span>}
        </label>

        <div className="animate-stagger-fade-in" style={{ animationDelay: "300ms" }}>
          <button
            type="submit"
            disabled={status.state === "loading"}
            className="px-6 py-2 font-bold text-white bg-blue-600 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] transition-all duration-200 hover:bg-blue-700 hover:scale-105 active:scale-95 active:shadow-[inset_-2px_-2px_0_0_#fff,inset_2px_2px_0_0_#000] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status.state === "loading" ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                </svg>
                Envoi en cours...
              </span>
            ) : "Envoyer"}
          </button>

          {/* Fallback email direct */}
          <p className="mt-3 text-sm text-gray-700">
            Ou directement :{" "}
            <a
              href="mailto:maxime.mandin@icloud.com"
              className="underline font-semibold hover:text-blue-700"
            >
              maxime.mandin@icloud.com
            </a>
          </p>
        </div>
      </form>
    </div>
  )
}
