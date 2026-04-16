"use client";

import { useState } from "react";

const eventTypes = [
    "Gala / Soirée de prestige",
    "Concert / Spectacle",
    "Festival",
    "Événement corporate",
    "Lancement de produit",
    "Cérémonie / Remise de prix",
    "Autre",
];

export default function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", eventType: "", date: "", guests: "", budget: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        await new Promise(r => setTimeout(r, 1000));
        setStatus("sent");
    };

    if (status === "sent") {
        return (
            <div className="py-16">
                <div className="g-line mb-6" />
                <h3 className="font-serif text-3xl mb-4" style={{ fontWeight: 300 }}>Message envoyé</h3>
                <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                    Merci. Notre équipe vous répondra dans les 48 heures.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                {[
                    { name: "name", label: "Nom & Prénom *", placeholder: "Sophie Martin", required: true, type: "text" },
                    { name: "email", label: "Email *", placeholder: "sophie@exemple.fr", required: true, type: "email" },
                    { name: "phone", label: "Téléphone", placeholder: "+33 6 00 00 00 00", required: false, type: "tel" },
                    { name: "company", label: "Entreprise / Organisation", placeholder: "Nom de votre structure", required: false, type: "text" },
                ].map(f => (
                    <div key={f.name}>
                        <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                            {f.label}
                        </label>
                        <input
                            name={f.name}
                            type={f.type}
                            value={(form as Record<string,string>)[f.name]}
                            onChange={set}
                            required={f.required}
                            placeholder={f.placeholder}
                            className="input-line"
                        />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div>
                    <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                        Type d&apos;événement *
                    </label>
                    <select name="eventType" value={form.eventType} onChange={set} required className="input-line" style={{ cursor: "pointer" }}>
                        <option value="">Sélectionner...</option>
                        {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
                <div>
                    <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                        Date envisagée
                    </label>
                    <input name="date" type="date" value={form.date} onChange={set} className="input-line" />
                </div>
                <div>
                    <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                        Nombre d&apos;invités
                    </label>
                    <input name="guests" value={form.guests} onChange={set} placeholder="Ex : 200 personnes" className="input-line" />
                </div>
                <div>
                    <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                        Budget indicatif
                    </label>
                    <select name="budget" value={form.budget} onChange={set} className="input-line" style={{ cursor: "pointer" }}>
                        <option value="">Non défini</option>
                        <option>Moins de 10 000 €</option>
                        <option>10 000 – 30 000 €</option>
                        <option>30 000 – 80 000 €</option>
                        <option>80 000 – 200 000 €</option>
                        <option>Plus de 200 000 €</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block text-xs tracking-[0.18em] uppercase mb-2" style={{ color: "var(--fg-muted)" }}>
                    Décrivez votre projet *
                </label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={set}
                    required
                    rows={4}
                    placeholder="Lieu souhaité, ambiance, contraintes, vos attentes..."
                    className="input-line"
                    style={{ resize: "none" }}
                />
            </div>

            <div className="flex items-center justify-between pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                <p className="text-xs" style={{ color: "var(--fg-subtle)" }}>* Champs obligatoires</p>
                <button type="submit" disabled={status === "sending"} className="btn-gold">
                    {status === "sending" ? "Envoi..." : "Envoyer →"}
                </button>
            </div>
        </form>
    );
}
