import type { Metadata } from "next";
import Anim from "../components/AnimateOnScroll";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Fenixa Production pour votre projet événementiel.",
};

export default function ContactPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-36 pb-16 px-8 md:px-16" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <Anim><p className="label mb-4">Parlons-en</p></Anim>
                        <Anim delay={1}>
                            <h1 className="text-5xl md:text-7xl" style={{ fontWeight: 300, color: "var(--fg)" }}>
                                Contact
                            </h1>
                        </Anim>
                    </div>
                    <Anim delay={2}>
                        <div className="g-line mb-4" />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            Un projet, une question, une idée ? Décrivez-nous votre événement.
                            Notre équipe vous répond sous 48 heures.
                        </p>
                    </Anim>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 px-8 md:px-16">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Infos */}
                    <div className="lg:col-span-3">
                        <Anim>
                            <div className="flex flex-col gap-10">
                                {[
                                    { label: "Email", value: "contact@fenixaproduction.fr", href: "mailto:contact@fenixaproduction.fr" },
                                    { label: "Téléphone", value: "+33 6 00 00 00 00", href: "tel:+33600000000" },
                                    { label: "Adresse", value: "Paris, France", href: undefined },
                                    { label: "Horaires", value: "Lun – Ven, 9h – 18h", href: undefined },
                                ].map(item => (
                                    <div key={item.label}>
                                        <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: "var(--fg-subtle)" }}>
                                            {item.label}
                                        </p>
                                        {item.href ? (
                                            <a href={item.href} className="text-sm contact-link" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="text-sm" style={{ color: "var(--fg-muted)" }}>{item.value}</p>
                                        )}
                                    </div>
                                ))}

                                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "2rem" }}>
                                    <p className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: "var(--fg-subtle)" }}>Réseaux</p>
                                    <div className="flex flex-col gap-2">
                                        {["Instagram", "LinkedIn"].map(s => (
                                            <a key={s} href="#" className="text-sm contact-link" style={{ color: "var(--fg-muted)", textDecoration: "none" }}>
                                                {s}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Anim>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-9">
                        <Anim delay={1}>
                            <ContactForm />
                        </Anim>
                    </div>
                </div>
            </section>
        </>
    );
}
