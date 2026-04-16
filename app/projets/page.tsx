import type { Metadata } from "next";
import Link from "next/link";
import Anim from "../components/AnimateOnScroll";

export const metadata: Metadata = {
    title: "Projets",
    description: "Galas, concerts, festivals, spectacles et événements corporate produits par Fenixa Production.",
};

const projects = [
    { title: "Gala de l'Excellence", type: "Gala", year: "2024", desc: "Soirée de prestige réunissant 600 invités au Grand Palais Éphémère. Scénographie immersive, artistes live et dîner gastronomique." },
    { title: "Festival Lumières", type: "Festival", year: "2024", desc: "Trois jours de programmation artistique au cœur de Paris, rassemblant 4 000 festivaliers." },
    { title: "Concert Symphonique", type: "Concert", year: "2023", desc: "Production intégrale à la Salle Pleyel, avec un orchestre de 80 musiciens et une mise en scène lumière originale." },
    { title: "Conférence TechVision", type: "Corporate", year: "2023", desc: "Événement corporate de 1 200 participants sur deux jours, incluant keynotes, ateliers et soirée de gala." },
    { title: "Spectacle Les Saisons", type: "Spectacle", year: "2023", desc: "Création originale mêlant danse contemporaine, musique live et projections vidéo — tournée de 8 représentations." },
    { title: "Lancement Maison Aurel", type: "Lancement", year: "2022", desc: "Événement de lancement d'une maison de couture parisienne avec défilé et cocktail pour 250 invités." },
    { title: "Cérémonie des Trophées", type: "Cérémonie", year: "2022", desc: "Production d'une cérémonie de remise de prix rassemblant les acteurs clés de l'industrie, diffusée en direct." },
    { title: "Festival Jazz en Scène", type: "Festival", year: "2022", desc: "Festival de jazz de trois jours dans un domaine historique, avec 12 artistes nationaux et internationaux." },
    { title: "Gala Lumière d'Espoir", type: "Gala", year: "2021", desc: "Soirée caritative pour 400 personnes, levant 180 000 € pour des associations partenaires." },
];

const types = ["Tous", "Gala", "Festival", "Concert", "Corporate", "Spectacle", "Lancement", "Cérémonie"];

export default function ProjetsPage() {
    return (
        <>
            {/* Header */}
            <section className="pt-36 pb-16 px-8 md:px-16" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div>
                        <Anim><p className="label mb-4">Portfolio</p></Anim>
                        <Anim delay={1}>
                            <h1 className="text-5xl md:text-7xl" style={{ fontWeight: 300, color: "var(--fg)" }}>
                                Nos Projets
                            </h1>
                        </Anim>
                    </div>
                    <Anim delay={2}>
                        <div className="g-line mb-4" />
                        <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                            150 événements produits depuis 2012. Voici quelques-uns des projets
                            qui nous ont le plus marqués.
                        </p>
                    </Anim>
                </div>
            </section>

            {/* Filters */}
            <section className="px-8 md:px-16 py-6" style={{ borderBottom: "1px solid var(--border)" }}>
                <div className="max-w-[1400px] mx-auto flex flex-wrap gap-2">
                    {types.map((t) => (
                        <button
                            key={t}
                            className="px-4 py-1.5 text-xs tracking-[0.12em] uppercase transition-all duration-200"
                            style={t === "Tous"
                                ? { background: "var(--gold)", color: "var(--bg)", border: "1px solid var(--gold)" }
                                : { border: "1px solid var(--border)", color: "var(--fg-muted)" }
                            }
                        >
                            {t}
                        </button>
                    ))}
                </div>
            </section>

            {/* Grid */}
            <section className="py-16 px-8 md:px-16">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                        {projects.map((p, i) => (
                            <Anim key={p.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                                <div className="group py-8" style={{ borderBottom: "1px solid var(--border)", cursor: "pointer" }}>
                                    <div className="pcard-img aspect-[16/9] mb-5">
                                        <div className="ph ph-dark w-full h-full">
                                            <span className="font-serif text-5xl">{p.title[0]}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="label">{p.type}</span>
                                        <span style={{ color: "var(--border-strong)" }}>·</span>
                                        <span className="text-xs tracking-widest" style={{ color: "var(--fg-muted)" }}>{p.year}</span>
                                    </div>
                                    <h3 className="text-xl mb-2 group-hover:opacity-50 transition-opacity" style={{ fontWeight: 300, color: "var(--fg)" }}>
                                        {p.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>{p.desc}</p>
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
                            Votre événement,<br />notre prochain projet.
                        </h2>
                    </Anim>
                    <Anim delay={1}>
                        <Link href="/contact" className="btn-gold">Nous contacter</Link>
                    </Anim>
                </div>
            </section>
        </>
    );
}
