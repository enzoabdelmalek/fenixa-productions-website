import type { Metadata } from "next";
import Link from "next/link";
import Anim from "../components/AnimateOnScroll";

export const metadata: Metadata = {
    title: "À propos",
    description: "L'histoire, l'équipe et les valeurs de Fenixa Production.",
};

const values = [
    { title: "Excellence", desc: "Chaque événement, quelle que soit son échelle, reçoit le même niveau d'exigence. Nous ne transigeons pas sur la qualité." },
    { title: "Créativité", desc: "Nous repoussons les frontières du possible pour imaginer des expériences qui sortent de l'ordinaire." },
    { title: "Fiabilité", desc: "Nos clients nous font confiance parce que nous tenons nos engagements. Budget, planning, qualité — sans compromis." },
    { title: "Engagement", desc: "Chaque projet est traité comme s'il était le nôtre. Nous nous impliquons à 100% jusqu'au dernier moment." },
];

const team = [
    { name: "Sophie Laurent", role: "Directrice Générale & Fondatrice", initials: "SL" },
    { name: "Marc Delacroix", role: "Directeur Technique", initials: "MD" },
    { name: "Camille Rousseau", role: "Responsable Projets Corporate", initials: "CR" },
];

export default function AProposPage() {
    return (
        <>
            {/* Dark header section */}
            <section className="pt-36 pb-24 px-8 md:px-16" style={{ background: "var(--bg)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <Anim><p className="label mb-4">Notre histoire</p></Anim>
                    <Anim delay={1}>
                        <h1
                            className="text-5xl md:text-7xl lg:text-8xl mb-12"
                            style={{ fontWeight: 300, color: "var(--fg)", maxWidth: "800px", lineHeight: 1 }}
                        >
                            Passionnés par
                            <br />
                            <em style={{ color: "var(--gold)", fontStyle: "italic" }}>l&apos;exceptionnel</em>
                        </h1>
                    </Anim>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12" style={{ borderTop: "1px solid var(--border)" }}>
                        {[
                            { n: "2012", l: "Fondée à Paris" },
                            { n: "15", l: "Permanents" },
                            { n: "30+", l: "Événements / an" },
                        ].map((s, i) => (
                            <Anim key={s.l} delay={(i + 1) as 1 | 2 | 3}>
                                <p className="font-serif text-4xl mb-1" style={{ color: "var(--gold)", fontWeight: 300 }}>{s.n}</p>
                                <p className="text-xs tracking-[0.18em] uppercase" style={{ color: "var(--fg-muted)" }}>{s.l}</p>
                            </Anim>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-24 md:py-32 px-8 md:px-16" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <Anim>
                        <div className="ph-dark aspect-[4/5] w-full" style={{ background: "var(--bg-3)" }}>
                            <span className="font-serif text-9xl" style={{ color: "rgba(201,165,90,0.05)" }}>FP</span>
                        </div>
                    </Anim>
                    <div className="flex flex-col gap-6">
                        <Anim delay={1}><p className="label">2012 — Aujourd&apos;hui</p></Anim>
                        <Anim delay={2}>
                            <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 300 }}>
                                Nés d&apos;une passion,
                                <br />portés par l&apos;ambition
                            </h2>
                        </Anim>
                        <Anim delay={3}>
                            <div className="g-line" />
                            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                                Fenixa Production a été fondée en 2012 par Sophie Laurent avec une conviction simple :
                                les événements ont le pouvoir de créer des liens, d&apos;inspirer et de transformer.
                                Ce qui a débuté comme une petite structure spécialisée dans les galas est devenu
                                une agence de référence dans la production événementielle parisienne.
                            </p>
                        </Anim>
                        <Anim delay={4}>
                            <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                                Aujourd&apos;hui, notre équipe produit plus de 30 événements par an,
                                des galas intimistes aux festivals de plusieurs milliers de personnes,
                                avec la même exigence et la même passion.
                            </p>
                        </Anim>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-8 md:px-16" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <Anim><p className="label mb-4">Ce qui nous anime</p></Anim>
                    <Anim delay={1}>
                        <h2 className="text-4xl md:text-5xl mb-16" style={{ fontWeight: 300 }}>Nos valeurs</h2>
                    </Anim>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {values.map((v, i) => (
                            <Anim key={v.title} delay={((i % 2) + 1) as 1 | 2}>
                                <div className="py-8 px-6" style={{
                                    borderBottom: "1px solid var(--border)",
                                    borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none"
                                }}>
                                    <div className="g-line mb-4" />
                                    <h3 className="text-xl mb-3" style={{ fontWeight: 300 }}>{v.title}</h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{v.desc}</p>
                                </div>
                            </Anim>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 md:py-32 px-8 md:px-16" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto">
                    <Anim><p className="label mb-4">Les visages de Fenixa</p></Anim>
                    <Anim delay={1}>
                        <h2 className="text-4xl md:text-5xl mb-16" style={{ fontWeight: 300 }}>L&apos;équipe</h2>
                    </Anim>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {team.map((m, i) => (
                            <Anim key={m.name} delay={(i + 1) as 1 | 2 | 3}>
                                <div>
                                    <div className="ph-dark aspect-square w-full mb-5" style={{ background: "var(--bg-3)" }}>
                                        <span className="font-serif text-5xl" style={{ color: "rgba(201,165,90,0.15)" }}>{m.initials}</span>
                                    </div>
                                    <h3 className="text-lg mb-1" style={{ fontWeight: 300 }}>{m.name}</h3>
                                    <p className="label">{m.role}</p>
                                </div>
                            </Anim>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-8 md:px-16 py-20" style={{ borderTop: "1px solid var(--border)", background: "var(--bg-2)" }}>
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    <Anim>
                        <h2 className="text-3xl md:text-4xl" style={{ fontWeight: 300 }}>
                            Créons quelque chose ensemble.
                        </h2>
                    </Anim>
                    <Anim delay={1}>
                        <Link href="/contact" className="btn-gold">Démarrer un projet</Link>
                    </Anim>
                </div>
            </section>
        </>
    );
}
