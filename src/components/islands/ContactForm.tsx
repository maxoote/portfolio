import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "VOTRE_CLE_WEB3FORMS", // ← remplace par ta clé
          ...formData,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white text-sm px-2 py-1 shadow-[inset_2px_2px_0_0_#808080,inset_-2px_-2px_0_0_#fff] focus:outline-none";

  const labelClass = "text-xs font-semibold text-gray-800 mb-0.5 block";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 h-full">

      <div className="flex gap-3">
        <div className="flex-1 flex flex-col">
          <label className={labelClass}>Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Votre nom"
            className={inputClass}
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="votre@email.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <label className={labelClass}>Sujet</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Projet, alternance, question..."
          className={inputClass}
        />
      </div>

      <div className="flex flex-col flex-1 min-h-0">
        <label className={labelClass}>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Décrivez votre projet ou votre demande..."
          className={`${inputClass} flex-1 min-h-0 resize-none`}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        {/* Status bar */}
        <span className="flex-1 text-xs px-2 py-1 shadow-[inset_1px_1px_0_0_#808080,inset_-1px_-1px_0_0_#fff] bg-gray-300 no-select">
          {status === "idle" && "Prêt"}
          {status === "sending" && "Envoi en cours..."}
          {status === "success" && "✓ Message envoyé !"}
          {status === "error" && "✗ Erreur — réessayez"}
        </span>

        {/* Submit button */}
        <button
          type="submit"
          disabled={status === "sending"}
          className="px-5 py-1.5 text-sm font-semibold bg-gray-300 shadow-[inset_2px_2px_0_0_#fff,inset_-2px_-2px_0_0_#000] active:shadow-[inset_2px_2px_0_0_#000,inset_-2px_-2px_0_0_#fff] hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-none"
        >
          Envoyer
        </button>
      </div>

    </form>
  );
}
